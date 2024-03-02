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

## 部署流程

运行以下命令来构建项目：

```
yarn build
```

此命令将生成静态内容到 /build 目录，这些内容准备好被部署到任何静态文件托管服务。
