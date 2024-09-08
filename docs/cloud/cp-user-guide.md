---
sidebar_position: 2
---

# 使用指南

## 名词解释
- `算想云`：llm.sxwl.ai，Serverless（无服务器）大模型训练云服务
- `算力用户`：寻求强大计算能力以满足高级数据科学和算法工程需求的专业用户

## 注册、登录
在算想云上，有算力需求的用户可以通过 Serverless（无服务器）云服务的方式以及比公有云低 60% 的价格使用算力服务。

### 注册
- 登录 https://llm.sxwl.ai ，选择`注册`
![注册算想云](../images/login.png)

- 选择`算力用户注册`并填写注册相关信息，点击`注册`完成用户注册
![注册算力用户](../images/cp-user-register.png)

### 登录
- 打开算想云登录页面 [https://llm.sxwl.ai/login](https://llm.sxwl.ai/login)，输入注册邮箱和密码，点击登陆
- 登陆成功后，自动进入`任务提交`页面
![任务提交](../images/task_submit.png)

## 提交训练任务
任务提交页面是算力用户提交训练任务的入口，通过提交训练任务，用户可以直接使用算想云提供的算力进行任务训练，不用操心基础设施以及基础服务的搭建；
提交训练任务需提供以下信息：
- `CKPT 路径`：训练过程中产生的数据存放路径，对应用户训练程序中设置的路径
- `模型保存路径`：训练完成后的模型保存路径，对应用户训练程序中设置的保存路径
- `容量`：CKPT 路径及模型保存路径将挂载对应的 PV ，容量是需要申请的 PV 大小，根据训练预估数据量大小填写
- `GPU`：训练所需的 gpu 资源数量以及类型
- `容器镜像`：用户需要将训练程序、训练数据以及所需环境打包成镜像，并将镜像上传到公网可访问的镜像仓库，镜像打包过程可参考附录一
- `任务类型`：目前支持的任务类型为MPI
- `终止条件`：可选择自然终止或手动设定运行时长，在设置运行时长到期后如任务未完成，该训练任务将被终止
![任务提交参数](../images/task_submit2.png)

以下是一个bert训练任务提交的参数示例，可用于体验任务提交流程：
- `CKPT路径`: /workspace/ds-experiments `容量`：1024
- `模型保存路径`：/workspace/saved-model `容量`：1024
- `GPU`：NVIDIA-A100-SXM4-80GB
- `容器镜像`：registry.cn-beijing.aliyuncs.com/sxwl-ai/bert:2023-11-11
- `任务类型`：MPI

## 任务详情
- 训练任务提交后自动进入`任务详情`页面，此时任务进入`运行`状态，点击详情可查看该任务的运行详情（待上线）：
![任务详情](../images/task_list.png)

- 任务运行完成后，可以看到操作中出现`下载模型`操作，点击`下载模型`弹出模型文件列表，点击链接可进行模型下载
![任务完成](../images/task_done.png)
![下载模型](../images/download_model.png)

## 附录一
> 构建能够运行在算想云上的训练镜像

以编写一个用来训练 Bert 的最基本的 Dockerfile 作为示例：
```dockerfile
FROM registry.ap-southeast-1.aliyuncs.com/sxwl-ai/cuda_base:2023-10-23
WORKDIR /workspace
RUN wget --progress=dot:giga https://sxwl-ai.oss-cn-beijing.aliyuncs.com/hf-datasets/hf_wikitext.tar.gz && \
    mkdir dataset && tar zxvf hf_wikitext.tar.gz --directory dataset && \
    rm hf_wikitext.tar.gz

# Allow editing source file when exec inside the container
RUN apt-get update --fix-missing && apt-get install -y vim --fix-missing
COPY *.py ./
COPY model_roberta_base ./model_roberta_base

CMD mpirun -np "1" --allow-run-as-root -bind-to none -map-by slot -x NCCL_DEBUG=INFO -x NCCL_P2P_DISABLE=1 -x LD_LIBRARY_PATH -x PATH -mca mpi_warn_on_fork "0" python3 train_bert_ds.py --checkpoint_dir ds-experiments --dataset_dir dataset/wikitext --num_iterations=1000
```

- `FROM` 引入了一个基础环境镜像，里边包含 bert 训练所需的运行环境
- `RUN` 中将训练所需的数据放到了 dataset 目录下，将数据一起打包到镜像里
- `CMD` 中指定了镜像拉起后执行的训练程序，并指定了训练数据所在的目录，以及 CKPT 所在的路径
> CMD 中 mpirun 指定的 -np 参数需与申请的 gpu 资源数量一致，目前暂时只能设置为 1

