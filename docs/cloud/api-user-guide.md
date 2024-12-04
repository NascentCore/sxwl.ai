---
sidebar_position: 7
---

# API使用指南

> 本指南是用于算力用户（模型训练、微调用户）接入算想云的说明文档。
> 算想云持续迭代，本文档也将随时更新（2023-12-22）
>

## 接入流程

### 创建用户

访问算想云首页 [https://llm.sxwl.ai](https://llm.sxwl.ai)，完成注册并登录。

<img src={require('../images/api-login.png').default} style={{width: 800}} />

### 获取API Token

注册登录成功后，用户邮箱会收到Access Key（即为API Token）邮件（如下图），所有算想云API请求需在header中携带token。

<img src={require('../images/api-token.jpg').default} style={{width: 800}} />


API请求Header示例：

| Header Key    | Header Value                                                                                                                                                                                                                        |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization | Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmZDQ2ZDBiMjFiMGE0Zm6Q2ODQ5YWZmNWQ3ZWYyMjdkOSIsInVzZXIiOiJlbmdAc3h3bC5haSIslInN1YiI6ImVuZ0BzeHdsLmFpIn0.Y55g0189h96oTgCt_qrihKcXV1oWeGBzhpPqqy35TgWmfCl0KC6rk9DRvGrvNFt-1XjGtLOwNCSzCGvsa_pJA |

### 任务管理

目前任务管理API支持任务的创建、查询和终止。并且可以通过设置回调函数的方式来及时获取任务状态的变更。

流程图：

<img src={require('../images/api-flow.png').default} style={{width: 800}} />

## API文档

API Base URL：[https://llm.sxwl.ai/api/](https://llm.sxwl.ai/api/)

### 创建任务

| 接口   | /userJob |
|------|----------|
| 方法   | POST     |
| body | JSON     |

body示例：

```json
{
  "gpuNumber": 1,
  "gpuType": "NVIDIA-GeForce-RTX-3090",
  "ckptPath": "/data",
  "ckptVol": "10000",
  "modelPath": "/data2",
  "modelVol": "10000",
  "imagePath": "dockerhub.kubekey.local/kubesphereio/train:test",
  "jobType": "GeneralJob",
  "stopType": "1",
  "stopTime": 5,
  "pretrainedModelName": "chatglm3-6b",
  "pretrainedModelPath": "/sixpen_models/chatlm3",
  "datasetName": "train-dataset",
  "datasetPath": "/sixpen_models/train_outputs/test_10059997",
  "runCommand": "python run.py",
  "callbackUrl": "https://llm.nascentcore.cn/api/test/callback",
  "env": {
    "OPEN_NODE_TOKEN": "xxxxx"
  }
}
```

必选参数：

| 参数        | 类型     | 是否必选 | 描述                | 举例                                              | 备注                                             |
|-----------|--------|------|-------------------|-------------------------------------------------|------------------------------------------------|
| gpuNumber | int    | 必选   | GPU数量             | 1                                               |                                                |
| gpuType   | String | 必选   | GPU型号             | NVIDIA-GeForce-RTX-3090                         |                                                |
| ckptPath  | String | 必选   | cktp路径            | /data                                           | 训练过程中产生的数据存放路径，对应用户训练程序中设置的路径                  |
| ckptVol   | String | 必选   | cktp容量单位M         | 10000                                           | CKPT 路径将挂载对应的 PV ，容量是需要申请的 PV 大小，根据训练预估数据量大小填写 |
| modelPath | String | 必选   | 挂载路径              | /data2                                          | 训练完成后的模型保存路径，对应用户训练程序中设置的保存路径                  |
| modelVol  | String | 必选   | model容量单位M        | 10000                                           | 模型保存路径将挂载对应的 PV ，容量是需要申请的 PV 大小，根据训练预估数据量大小填写  |
| imagePath | String | 必选   | 镜像路径              | dockerhub.kubekey.local/kubesphereio/train:test | 用户需要将训练程序、训练数据以及所需环境打包成镜像，并将镜像上传到公网可访问的镜像仓库    |
| jobType   | String | 必选   | 任务类型              | GeneralJob                                      | 目前支持MPI、pytorch tensorflow的任务                  |
| stopType  | int    | 必选   | 终止类型：0 自然终止 1设定时长 | 0                                               |                                                |

可选参数：

| 参数                  | 类型     | 是否必选 | 描述          | 举例                                                 | 备注                          |
|---------------------|--------|------|-------------|----------------------------------------------------|-----------------------------|
| stopTime            | String | 可选   | 设定时常以分钟为单位  | 5                                                  |                             |
| datasetName         | String | 可选   | 挂载路径名称      | train-dataset                                      | 预缓存的开源数据集名字                 |
| datasetPath         | String | 可选   | dataset挂载路径 | /sixpen_models/train_outputs/test_10059997         | 预缓存的开源数据集路径                 |
| pretrainedModelName | String | 可选   | 预训练基底模型     | chatglm3-6b                                        | 预缓存的开源模型名字                  |
| pretrainedModelPath | String | 可选   | 预训练基底模型对应路径 | /sixpen_models/chatlm3                             | 预缓存的开源模型路径                  |
| runCommand          | String | 可选   | 训练启动命令      | python run.py                                      |                             |
| callbackUrl         | String | 可选   | 回调接口url     | [https://domain/callback](https://domain/callback) | 任务完成或失败时算想云会调用回调接口来通知用户     |
| env                 | Json   | 可选   | 环境变量参数      | `{\"OPEN_NODE_TOKEN\": \"xxxxx\"}`                 | 环境变量会作用于训练任务pod中，由用户自行设置和使用 |

http状态返回代码

| 代码  | 说明               |
|-----|------------------|
| 200 | （成功） 服务器已成功处理了请求 |
| 401 | 无权限访问            |
| 501 | 服务器内部错误          |

返回参数格式：json

```json
{
  "job_id": "aia1905cd8-650a-4cd9-b005-677ec3376db0"
}
```

| 参数     | 类型     | 描述        |
|--------|--------|-----------|
| job_id | String | 任务ID，唯一标识 |

#### 示例请求

```bash
curl --location 'https://llm.sxwl.ai/api/userJob' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmZDQ2ZDBiMjFiMGE0Zm6Q2ODQ5YWZmNWQ3ZWYyMjdkOSIsInVzZXIiOiJlbmdAc3h3bC5haSIslInN1YiI6ImVuZ0BzeHdsLmFpIn0.Y55g0189h96oTgCt_qrihKcXV1oWeGBzhpPqqy35TgWmfCl0KC6rk9DRvGrvNFt-1XjGtLOwNCSzCGvsa_pJA' \
--data '{
    "gpuNumber": 1,
    "gpuType": "NVIDIA-GeForce-RTX-3090",
    "ckptPath": "/data",
    "ckptVol": "10000",
    "modelPath": "/data2",
    "modelVol": "10000",
    "imagePath": "dockerhub.kubekey.local/kubesphereio/train:test",
    "jobType": "GeneralJob",
    "stopType": "1",
    "stopTime": 5,
    "pretrainedModelName": "chatglm3-6b",
    "pretrainedModelPath": "/sixpen_models/chatlm3",
    "datasetName": "train-dataset",
    "datasetPath": "/sixpen_models/train_outputs/test_10059997",
    "runCommand": "sleep 600",
    "callbackUrl": "https://llm.nascentcore.cn/api/test/callback",
     "env": {"OPEN_NODE_TOKEN": "9999"}
}'

```

### 查询任务

| 接口   | /userJob/job_status |
|------|---------------------|
| 方法   | POST                |
| body | JSON                |

body示例：

```json
{
  "job_id": "ai81e6f92e-f1dd-4033-910e-ceafbf7991db"
}
```

对应json里的参数定义如下：

| 参数     | 类型     | 是否必选 | 描述      |
|--------|--------|------|---------|
| job_id | String | 必选   | 任务的唯一标识 |

http状态返回代码

| 代码  | 说明               |
|-----|------------------|
| 200 | （成功） 服务器已成功处理了请求 |
| 401 | 无权限访问            |
| 501 | 服务器内部错误          |

返回参数格式：json

```json
{
  "url": "https://sxwl-ai-test.oss-cn-beijing.aliyuncs.com/aid828f15e-60a3-43d9-9fc5-03910b989c5a%2Fds_model.bin?Expires=1702269241&OSSAccessKeyId=LTAI5t9sFbN2QcksHK1LVgRW&Signature=bFuarx6Yo4AAZNEWWWCSBMMT5SA%3D",
  "status": "success"
}

```

| 参数     | 类型     | 描述                                   |
|--------|--------|--------------------------------------|
| status | String | 任务状态：成功：success ，失败：fail，运行中：working |
| url    | String | 任务状态成功时，返回的任务对应的下载模型路径               |

#### 示例请求

```bash
curl --location 'https://llm.sxwl.ai/api/userJob/job_status' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmZDQ2ZDBiMjFiMGE0Zm6Q2ODQ5YWZmNWQ3ZWYyMjdkOSIsInVzZXIiOiJlbmdAc3h3bC5haSIslInN1YiI6ImVuZ0BzeHdsLmFpIn0.Y55g0189h96oTgCt_qrihKcXV1oWeGBzhpPqqy35TgWmfCl0KC6rk9DRvGrvNFt-1XjGtLOwNCSzCGvsa_pJA' \
--data '{"job_id":"ai07746341-aa8d-4d7d-96b3-986d2ab8b61f"}'

```

### 终止任务

| 接口   | /userJob/job_del |
|------|------------------|
| 方法   | POST             |
| body | JSON             |

json实例如下：

```json
{
  "job_id": "ai81e6f92e-f1dd-4033-910e-ceafbf7991db"
}
```

对应json里的参数定义如下：

| 参数     | 类型     | 是否必选 | 描述      |
|--------|--------|------|---------|
| job_id | String | 必选   | 任务的唯一标识 |

| 代码  | 说明               |
|-----|------------------|
| 200 | （成功） 服务器已成功处理了请求 |
| 401 | 无权限访问            |
| 501 | 服务器内部错误          |

#### 示例请求

```bash
curl --location 'https://llm.sxwl.ai/api/userJob/job_del' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmZDQ2ZDBiMjFiMGE0Zm6Q2ODQ5YWZmNWQ3ZWYyMjdkOSIsInVzZXIiOiJlbmdAc3h3bC5haSIslInN1YiI6ImVuZ0BzeHdsLmFpIn0.Y55g0189h96oTgCt_qrihKcXV1oWeGBzhpPqqy35TgWmfCl0KC6rk9DRvGrvNFt-1XjGtLOwNCSzCGvsa_pJA' \
--data '{"job_id":"ai07746341-aa8d-4d7d-96b3-986d2ab8b61f"}'

```

### callback回调函数参数定义

方法：post

请求参数格式：json

```json
{
  "status": "success",
  "job_id": "aia1905cd8-650a-4cd9-b005-677ec3376db0",
  "url": "https://xxxxx"
}
```

| 参数     | 类型     | 描述                             |
|--------|--------|--------------------------------|
| status | String | 任务执行后的返回结果，success为成功 和fail为失败 |
| job_id | String | 任务ID，唯一标识                      |
| url    | String | status为成功时，模型存储对应的路径           |