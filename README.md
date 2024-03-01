# sxwl.ai

算想未来主页

## 技术栈

- Docusaurus: 一个基于 React 的静态网站生成器，用于构建文档网站和博客。
- React: 用于构建用户界面的 JavaScript 库。
- TypeScript: 一种静态类型检查的 JavaScript 超集。

## 安装和使用

node 版本 >= 18

```bash
yarn install # 安装依赖包
yarn start # 启动开发服务器
yarn build # 打包
```

## 使用方式

修改项目文案: i18n/zh/code.json  i18n/en/code.json
修改价格页面: src/pages/pricing/index.tsx

## 部署

生成的静态文件将存储在 build 文件夹中。可以将这些文件部署到静态文件托管服务上，在互联网上分享。

```
# Login GCP machine, and switch to root user
sudo su -

# If the code has not been cloned:
git clone https://github.com/nascentcore/nascentcore.ai.git

cd nascentcore.ai

# If the repo was already cloned:
git pull --rebase

devops/redeploy.sh
```
