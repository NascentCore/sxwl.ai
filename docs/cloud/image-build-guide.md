---
sidebar_position: 4
---

# 容器镜像构建指南
算想云提供常用的基础镜像，基础镜像包含常用的框架和工具，用户可以基于算想云基础镜像构建自己的训练镜像，构建出来的镜像可以上传到私有的镜像仓库或传到算想云的镜像仓库，从而让训练任务能够快速加载镜像并启动训练任务。

以下以 PyTorch 为例说明镜像构建流程：
- PyTorch 基础镜像：sxwl-registry.cn-beijing.cr.aliyuncs.com/sxwl-ai/torch-base:v2024-01-12-01
- 创建 Dockerfile

```Dockerfile
FROM sxwl-registry.cn-beijing.cr.aliyuncs.com/sxwl-ai/torch-base:v2024-01-12-01

# 设置工作目录
WORKDIR /workspace

# 复制训练程序到工作目录
COPY task.py ./

# 指定运行命令，也可通过算想云API提交训练任务时提交CMD
CMD torchrun task.py
```

- 构建镜像并上传到算想云镜像仓库

```bash
docker build -f ./Dockerfile -t sxwl-registry.cn-beijing.cr.aliyuncs.com/sxwl-ai/example:main .
docker push sxwl-registry.cn-beijing.cr.aliyuncs.com/sxwl-ai/example:main
```

镜像构建后即可通过算想云提交任务页面或API提交训练任务：

[提交训练任务向导](http://localhost:3000/docs/cloud/cp-user-guide#%E6%8F%90%E4%BA%A4%E8%AE%AD%E7%BB%83%E4%BB%BB%E5%8A%A1)