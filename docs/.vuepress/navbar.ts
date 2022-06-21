import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/项目资源",
  { text: "课程笔记", icon: "book-font", link: "/react课程/" },
  {
    text: '项目问题', icon: 'book-font', link: '/项目问题'
  }
]);
