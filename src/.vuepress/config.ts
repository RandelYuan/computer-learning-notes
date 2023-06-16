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
      // @ts-ignore
      containerPlugin(  {
        type: 'center',
        after: () => '</div>\n',
        before: (info: string) => `<div class="customer-container-center">`,
      })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
