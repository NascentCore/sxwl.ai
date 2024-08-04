---
sidebar_position: 8
---

# 开发实验室使用示例
## 场景
- 使用私有适配器微调开源模型
- 使用公开或私有数据集对开源大模型进行微调
- 使用 JupyterLab 调试代码

以上是常见的使用场景，在算想云通过『开发实验室』功能，可以快速实现以上场景。

覆盖：
- 数据集上传
- 适配器上传
- 创建『开发实验室』实例
- 使用 JupyterLab 环境调试代码
- 使用 LlamaFactory 进行模型微调
- 『开发实验室』实例暂停、启动
- 镜像管理

### 上传数据
#### 安装 sxwlctl
sxwlctl（文档 [https://sxwl.ai/docs/cloud/sxwlctl-guide](https://sxwl.ai/docs/cloud/sxwlctl-guide)）是算想云命令行工具，用于模型、数据集、适配器的上传、下载管理。

安装sxwlctl。
```bash
wget -qO- https://sxwl-ai.oss-cn-beijing.aliyuncs.com/artifacts/tools/install.sh | bash
```

配置sxwlctl，把自己的AccessToken写入配置文件~/.sxwlctl.yaml
```bash
token: "eyJhb..."
```

#### 上传数据集
使用sxwlctl，上传私有数据集，假设数据集文件夹是 /home/work/datasets/my-dataset
```bash
sxwlctl upload -r dataset -d /home/work/datasets/my-dataset
```

#### 上传适配器
上传适配器同样使用 sxwlctl 工具，使用如下参数上传，假设适配文件夹为 /home/work/adapters/my-adapter
```bash
sxwlctl upload -r adapter -d /home/work/adapters/my-adapter
```

#### 检查上传结果
检查一下是否上传成功
<img src={require('./images/private-dataset.png').default} style={{width: 800}} />

<img src={require('./images/private-adapter.png').default} style={{width: 800}} />

### 创建『开发实验室』实例
登录算想云，左侧菜单选择『开发实验室』，点击右上角的“创建实例”按钮。
<img src={require('./images/cloud-pod.png').default} style={{width: 800}} />

选择需要的配置，并选择所需用到的模型以及上面上传的数据集和适配器，点击『确定』按钮。
<img src={require('./images/create-pod.png').default} style={{width: 800}} />

等待实例创建完成.
<img src={require('./images/pod-instance.png').default} style={{width: 800}} />

### 使用 JupyterLab 环境调试代码
点击列表中实例右侧的『JupyterLab』按钮，进入 JupyterLab 环境。

在 JupyterLab 环境中，可以进行代码编写、调试、运行，还可以安装第三方库，进行模型微调。
<img src={require('./images/jupyterlab.png').default} style={{width: 800}} />

开启一个『笔记本』，编写代码，点击左上角的运行按钮，即可运行代码。
<img src={require('./images/jupyterlab-notebook.png').default} style={{width: 800}} />

开启『终端』，可以进入命令行环境进行操作。
<img src={require('./images/jupyterlab-terminal.png').default} style={{width: 800}} />

### 使用 LlamaFactory 进行模型微调
『开发实验室』实例中已经预装了 LlamaFactory，点击实例右侧的『LlamaFactory』按钮，进入 LlamaFactory 页面。

在 LlamaFactory 页面，可以进行模型微调，包括数据集、模型、超参数等的调整。
<img src={require('./images/llamafactory.png').default} style={{width: 800}} />

创建实例时选择的模型、数据集，都可以在 LlamaFactory 页面中相应的下拉列表中进行选择。
<img src={require('./images/llamafactory-select.png').default} style={{width: 800}} />

上传的适配器暂时只能在模型选择『Custom』时使用。
<img src={require('./images/llamafactory-custom.png').default} style={{width: 800}} />

选择相应的模型、数据集、超参数，点击『开始』按钮，即可开始模型微调。
<img src={require('./images/llamafactory-train.png').default} style={{width: 800}} />

### 实例暂停、启动
点击实例右侧的『暂停』按钮，可以暂停实例，暂停实例后，实例状态会变成『已暂停』，此时实例将释放资源，停止计费，但安装的环境、数据将被保留。
<img src={require('./images/pause-pod.png').default} style={{width: 800}} />

当实例处于『已暂停』状态时，通过右侧的『修改配置』按钮，可以修改实例配置，包括CPU、内存、GPU数量、GPU类型等。
点击实例右侧的『启动』按钮，可以启动实例，启动实例后，实例状态会变成『运行中』，此时实例将重新启动，恢复计费，并恢复环境、数据、模型等。
<img src={require('./images/start-pod.png').default} style={{width: 800}} />

### 镜像管理
当通过 JupyterLab 环境调试代码完成后，可以点击实例右侧的『构建镜像』按钮，将环境镜像保存为私有镜像。
<img src={require('./images/build-image.png').default} style={{width: 800}} />
<img src={require('./images/build-image2.png').default} style={{width: 800}} />

点击实例右侧的『镜像管理』按钮，可以查看、删除私有镜像。
<img src={require('./images/image-management.png').default} style={{width: 800}} />
<img src={require('./images/image-management2.png').default} style={{width: 800}} />

私有镜像可以在『任务提交』时使用，用于提交需要长时间运行的任务。
<img src={require('./images/submit-task.png').default} style={{width: 800}} />