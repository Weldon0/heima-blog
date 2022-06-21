import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "课程笔记",
  description: "课程笔记博客系统",
  head: [['script', { type: 'text/javascript', src: 'https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/grow.js' }]],
  base: "/",
  theme,
});
