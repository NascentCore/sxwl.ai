---
sidebar_position: 4
---

# llama-2-7b微调推理示例

## 概述

本文介绍使用如何使用llama-2-7b模型进行微调训练，并部署推理服务

1. 查看llama-2-7b基础模型

```bash
$ kubectl -n cpod get modelstorage
NAME        MODELTYPE     MODELNAME   PHASE
llama2-7b   huggingface   llama2-7b   done
```


2. 提交微调训练任务cpodjob

```yaml
apiVersion: cpod.sxwl.ai/v1beta1
kind: CPodJob
metadata:
  labels:
    app.kubernetes.io/created-by: cpodjob
  name: llama-2-7b
  namespace: cpod
spec:
  image: sxwl-registry.cn-beijing.cr.aliyuncs.com/sxwl-ai/mohe:v1
  command:
    - "torchrun"
    - "--nproc_per_node=8"
    - "/workspace/FastChat/fastchat/train/train_mem.py"
    - "--model_name_or_path=/workspace/models"
    - "--data_path=/workspace/FastChat/data/dummy_conversation.json"
    - "--eval_data_path=/workspace/FastChat/data/dummy_conversation.json"
    - "--lazy_preprocess=True"
    - "--bf16=True"
    - "--output_dir=/workspace/modelsaved"
    - "--num_train_epochs=10"
    - "--per_device_train_batch_size=2"
    - "--per_device_eval_batch_size=16"
    - "--gradient_accumulation_steps=4"
    - "--evaluation_strategy=epoch"
    - "--save_strategy=no"
    - "--save_total_limit=10"
    - "--learning_rate=2e-5"
    - "--weight_decay=0.1"
    - "--warmup_ratio=0.04"
    - "--lr_scheduler_type=cosine"
    - "--logging_steps=1"
    - "--fsdp=full_shard auto_wrap"
    - "--fsdp_transformer_layer_cls_to_wrap=LlamaDecoderLayer"
    - "--tf32=True"
    - "--model_max_length=2048"
    - "--gradient_checkpointing=True"
  env:
    - name: WANDB_MODE
      value: "disabled"
  jobType: pytorch
  gpuRequiredPerReplica: 8
  gpuType: NVIDIA-A100-SXM4-40GB
  workerReplicas: 1
  pretrainModelName: llama2-7b
  pretrainModelPath: /workspace/models
  uploadModel: true
  modelSaveVolumeSize: 30720
  modelSavePath: /workspace/modelsaved

```

```bash
$ kubectl -n cpod create -f cpodjob.yaml
```

等待训练任务完成

```bash
# kubectl -n cpod get pytorchjob
NAME         STATE       AGE
llama-2-7b   Succeeded   42m

# kubectl -n cpod get cpodjob  llama-2-7b -oyaml | less
```

3. 基于微调训练模型部署推理API服务

```yaml
apiVersion: serving.kserve.io/v1beta1
kind: InferenceService
metadata:
  name: llama-2-7b
  namespace: cpod
spec:
  predictor:
    containers:
      - name: kserve-container
        args:
          - --port
          - "8080"
          - --model
          - /mnt/models
        command:
          - python3
          - -m
          - vllm.entrypoints.api_server
        env:
          - name: STORAGE_URI
            value: pvc://modesaved/
        image: m.daocloud.io/ghcr.io/substratusai/vllm:latest
        resources:
          limits:
            cpu: "4"
            memory: 50Gi
            nvidia.com/gpu: "1"
          requests:
            cpu: "1"
            memory: 50Gi
            nvidia.com/gpu: "1"
```

```bash
$ kubectl create -f inferenceservice.yaml
```

4. 验证,获取推理服务ClusterIP并调用

```bash
$ kubectl -n cpod get service

$ curl http://10.233.24.14/generate     -d '{
        "prompt": "Beijing is a",
        "use_beam_search": true,
        "n": 4,
        "temperature": 0
    }'
{"text":["Beijing is a language model developed by Large Model Systems Organization (LMSYS).","Beijing is a language model trained by researchers from Large Model Systems Organization (LMS","Beijing is a language model created by researchers from Large Model Systems Organization (LMS","Beijing is a language model meticulously developed by Large Model Systems Organization (LMS"]}
```