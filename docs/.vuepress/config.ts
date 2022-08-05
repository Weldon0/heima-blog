import { defineUserConfig } from "vuepress";
import theme from "./theme";
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')

export default defineUserConfig({
  lang: "zh-CN",
  title: "课程笔记",
  description: "课程笔记博客系统",
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  base: "/",
  theme,
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
    pwaPopupPlugin({})
  ]
});
