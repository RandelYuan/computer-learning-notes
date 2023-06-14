import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { containerPlugin } from '@vuepress/plugin-container'
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/computer-learning-notes/",
  lang: "zh-CN",
  title: "Randel's Computer Learning Notes",
  description: "Randel's Computer Learning Notes",
  theme: hopeTheme({
    repo: 'https://github.com/RandelYuan/computer-learning-notes/',
  }),
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
      containerPlugin(  {
        type: 'center',
        before: (info: string) => `<div class="customer-container-center">`,
        after: () => '</div>\n'
      })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
