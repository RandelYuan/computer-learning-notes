import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '开发工具',
      prefix: 'tools',
      icon: 'operate',
      collapsible: true,
      children: 'structure',
      // children: [
      //   {
      //     text: 'Git',
      //     prefix: 'git',
      //     collapsible: true,
      //     children: 'structure'
      //   }
      // ],
    },
    {
      text: 'test',
      prefix: 'demo/',
      link: 'demo/',
      collapsible: true,
      children: 'structure'
    },
  ],
});
