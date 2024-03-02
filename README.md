# sxwl.ai

算想未来主页

## 技术栈

- Docusaurus: 一个基于 React 的静态网站生成器，用于构建文档网站和博客。
- React: 用于构建用户界面的 JavaScript 库。
- TypeScript: 一种静态类型检查的 JavaScript 超集。

## 项目结构概述

```
/blog: 存放Blog的markdown文件。
/docs: 存放文档的markdown文件。
/i18n: 存放国际化配置文件。
/src: 存放自定义页面和样式的目录。
/static: 存放静态文件，如图片、CSS、JavaScript文件。
docusaurus.config.js: 项目的配置文件。
sidebar.js: 侧边栏配置文件。


// 国际化配置方式
修改项目文案: i18n/zh/code.json i18n/en/code.json
修改价格页面: src/pages/pricing/index.tsx
```

## 安装和使用

node 版本 >= 18

```bash
yarn install # 安装依赖包
```

## 本地预览

在项目根目录下运行以下命令以启动本地开发服务器：

```
yarn start
```

访问 http://localhost:3000 来预览网站。支持热重载，即你对文档或代码所做的更改将实时反映在浏览器中。

## 使用方式

修改项目文案: i18n/zh/code.json i18n/en/code.json
修改价格页面: src/pages/pricing/index.tsx

## doc 使用方式

创建文档：

1. 选择文档目录： 文档存储在 docs 目录下。可以选择在此目录下创建一个新的子目录来组织文档内容。

2. 创建文档文件： 在选定的文档目录下，可以使用 .md 扩展名，例如 my-document.md。

3. 添加文档内容： 打开 Markdown 文件，并开始编写文档内容。可以使用标准的 Markdown 语法来添加标题、段落、列表、链接、代码块等。

4. 添加 YAML 头信息（可选）： 在 Markdown 文件的开头，可以添加 YAML 头信息，用于定义文档的元数据。例如：

```
---
id: doc-with-tags
title: 一篇包含标签的文档
tags:
  - 演示
  - 开始上手
---

```

YAML 头信息中的 title 用于指定文档的标题。

## blog 使用方式

1：进入博客目录

首先，进入项目中用于存放博客文章的目录。这个目录名为 blog，可以使用终端进入该目录：

```
cd blog
```

2：创建博客文章文件

在博客目录中，需要为每篇博客文章创建一个单独的 Markdown 文件。文件名通常包括日期和标题，以确保博客文章可以按时间顺序排列。可以使用文本编辑器创建一个新文件，或者使用命令行创建。以下是一个示例命令：

```
touch 2023-11-08-my-blog-post.md
```

这将创建一个名为 2023-11-08-my-blog-post.md 的新博客文章文件。

3：编辑博客文章内容

打开博客文章文件，使用 Markdown 编写博客文章的内容。在文件的开头，可以使用 YAML 头信息来指定文章的元数据，例如标题、作者和日期。示例：

```
---

title: My Blog Post
author: John Doe
date: 2023-11-08

---

# 博客文章标题

这里是博客文章的内容。可以在这里使用标准的 Markdown 语法编写文章，包括标题、段落、列表、链接、代码块等。

博客文章内容可以是要分享的任何信息，包括技术教程、新闻、个人见解等。
```

确保在 YAML 头信息的分隔符 (---) 之后添加一个空行，然后开始编写文章的正文内容。

## 部署流程

运行以下命令来构建项目：

```
yarn build
```

此命令将生成静态内容到 /build 目录，这些内容准备好被部署到任何静态文件托管服务。
