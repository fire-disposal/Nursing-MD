# Nursing-MD

本项目基于 VitePress，自动部署到 GitHub Pages。

## 自动部署

推送到 master 分支后，GitHub Actions 会自动构建并发布到 gh-pages 分支，无需手动操作。

- 部署配置文件：[.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- 访问地址：https://fire-disposal.github.io/Nursing-MD/

## 本地开发

```bash
pnpm install
pnpm run docs:dev
```

## 手动构建

```bash
pnpm run docs:build
```

构建产物位于 `docs/.vitepress/dist`。
