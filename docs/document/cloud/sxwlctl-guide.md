---
sidebar_position: 6
---

# sxwlctl使用手册
## 简介
sxwlctl是算想云提供的命令行工具，支持用户的资源管理操作。

## 安装或更新
```bash
wget -qO- https://sxwl-ai.oss-cn-beijing.aliyuncs.com/artifacts/tools/install.sh | bash
```

<img src={require('./images/sxwlctl-install.png').default} style={{width: 800}} />

## 配置文件
安装成功后，根据提示修改配置文件~/.sxwlctl.yaml中的token为注册邮件中的access token

<img src={require('./images/sxwlctl-register.png').default} style={{width: 800}} />

替换token
```yaml
token: "eyJhb..."
```

## 上传
upload子命令支持上传私有的模型、数据集、适配器到算想云

```bash
$ sxwlctl upload -h
上传本地模型、数据集、适配器

Usage:
  sxwlctl upload [flags]

Flags:
  -r, --resource string   [model|dataset|adapter] (default "model")
  -d, --dir string        上传的本地文件夹路径
  -t, --template string   模型推理使用的template
      --public            上传至公共空间
      --owner string      公共资源的所有者，仅在--public时需要
  -v, --verbose           show verbose logs
  -h, --help              help for upload

Global Flags:
      --config string   config file (default is $HOME/.sxwlctl.yaml)
```

### 示例
用户上传私有模型

```bash
# 本地模型文件保存在~/work/models/llama2-7b-edu
# 模型的推理模版格式为llama
sxwlctl upload -r model -d /home/kelvin/work/models/llama2-7b-edu -t llama
```

管理员上传公共适配器

```bash
# 上传一个lora适配器gemma-2b-adapter-20240704至公共空间
# 名字为 sxwl/gemma-2b-adapter-20240704
sxwlctl upload -r adapter -d /Users/kelvin/work/tmp/gemma-2b-adapter-20240704 --public --owner sxwl
```

## 下载
download子命令用于下载私有的模型、数据集、适配器

```bash
$ sxwlctl download -h
下载模型、数据集、适配器

Usage:
  sxwlctl download [flags]

Flags:
  -r, --resource string   [model|dataset|adapter] (default "model")
  -n, --name string       资源名称，可从页面上复制
  -o, --out_dir string    输出目录 (default "./")
  -v, --verbose           show verbose logs[true|false]
  -h, --help              help for download

Global Flags:
      --config string   config file (default is $HOME/.sxwlctl.yaml)
```

### 示例
用户下载私有模型

<img src={require('./images/sxwlctl-model.png').default} style={{width: 800}} />

```bash
sxwlctl download -r model -n gemma-2b-it-20240702-115011 -o ~/work/
```
