import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "博客",
  description: "课程博客系统",
  base: "/",
  theme,
});
