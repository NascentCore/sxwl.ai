# nascentcore.ai

基于 React 前端框架，采用了 Next.js 作为服务器端渲染框架进行开发。
通过 TypeScript 对代码进行类型约束。配合 Material-UI 组件库和 Emotion CSS-in-JS 库实现界面开发。
Eslint 和 prettier 等工具来保证代码风格的一致性，请在提交代码前运行 `npm run lint` 和 `npm run format`。
使用了 husky 和 lint-staged 工具，在提交代码时会自动格式化代码，并且只检查本次提交的文件。

## 技术栈

- [React](https://reactjs.org/)：一款流行的 JavaScript 库，用于开发用户界面。React 将应用程序拆分成小组件，使其易于构建、测试和维护。在本项目中，React 负责管理页面的状态和 UI 渲染。
- [Next.js](https://nextjs.org/)：一个 React 应用程序的服务器端渲染框架，提供更好的性能和 SEO。它还支持静态生成和动态导出等功能，使得开发者能够轻松地为网站创建静态页面，并在需要时使用数据进行预渲染。在本项目中，Next.js 实现了服务器端渲染和路由控制。
- [TypeScript](https://www.typescriptlang.org/)：一种类型安全的 JavaScript 超集语言，可编译为普通 JavaScript 代码。TypeScript 添加了类型注释、类、接口等特性，使得代码更容易理解、调试和维护。在本项目中，TypeScript 提高了代码的可读性和可维护性。
- [Ant Design](https://ant.design/)：一个企业级 UI 设计语言和 React UI 库，提供丰富、美观、易用的组件。在本项目中，Ant Design 提供了大量 UI 组件和样式。
- [Axios](https://axios-http.com/)：一个基于 promise 的 HTTP 客户端，可用于浏览器和 Node.js。Axios 提供了易用的 API，支持请求和响应拦截器、数据转换、cookie 管理等功能。在本项目中，Axios 负责发送 HTTP 请求。
- [Markdown](https://daringfireball.net/projects/markdown/)：一种轻量级标记语言，用于编写格式简单的文档。在本项目中，Markdown 用于编写博客文章的内容。
- [Moment](https://momentjs.com/)：一个 JavaScript 日期处理库，提供易用的 API，支持日期格式化、解析、比较等操作。在本项目中，Moment 用于处理日期和时间相关的数据。
- [ua-device](https://github.com/3846masa/ua-device)：一个 JavaScript 库，用于检测设备类型和浏览器信息。在本项目中，ua-device 用于检测用户设备类型。

## 安装和使用

```bash
git clone https://github.com/nascentcore/nascentcore.ai.git
cd nascentcore.ai/
npm install
npm run dev # 启动开发服务器
npm run build # 打包
npm start # 以生产模式启动
npm run lint # 运行 eslint 检查代码规范
npm run format # 格式化代码
```

## 博客使用方式

在项目根目录 `_post` 文件夹里，编写 `.md` 格式的 文档，符合如下格式：
```
---
title: 这里是标题
date: 2023-05-01 15:30:10
author: 作者
tags: 标签1 标签2
poster: 缩略图片url
---
这里是内容...

```
需要注意的是，新建 md 文档的时候，时间`date`不能重复。

## 部署

```
# Login GCP machine, and switch to root user
sudo su

# If the code has not been cloned:
git clone https://github.com/nascentcore/nascentcore.ai.git

# If the repo was already cloned:
git pull --rebase

cd nascentcore.ai
devops/redeploy.sh
```
