import { defineConfig } from "vitepress";
import AutoSidebarPlugin from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "护理学笔记",
  description: "系统整理护理学各学科内容",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "学科笔记",
        items: [
          { text: "内科护理学", link: "/内科护理学/" },
          // 可继续添加其它书籍入口
        ],
      },
      { text: "关于本站", link: "/about" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/fire-disposal" }],
    outline: [2, 4], // 启用右侧标题定位栏，显示 h2-h4
    outlineTitle: "本页目录",
  },
  vite: {
    plugins: [AutoSidebarPlugin()],
  },
  // 引入自定义 CSS 扩宽 outline 区域
  markdown: {
    theme: {
      customCss: "./custom.css",
    },
  },
});
