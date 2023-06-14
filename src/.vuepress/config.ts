import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { containerPlugin } from '@vuepress/plugin-container'

export default defineUserConfig({
  base: "/computer-learning-notes/",

  lang: "zh-CN",
  title: "Randel's Computer Learning Notes",
  description: "Randel's Computer Learning Notes",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
      containerPlugin(  {
        type: 'center',
        // before: info => `<div class="customer-container-center">`,
        // after: '</div>',
        before: (info: string) => `<div class="customer-container-center">`,
        after: () => '</div>\n'
      })

  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
