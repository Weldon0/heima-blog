import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "课程笔记",
  description: "课程笔记博客系统",
  base: "/",
  theme,
});
