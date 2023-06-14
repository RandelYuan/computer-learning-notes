import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '开发工具',
      icon: '/assets/icon/tools-hardware.png',
      prefix: 'tools/',
      collapsible: true,
      children: [
        {
          text: 'Git',
          icon: '/assets/icon/git.png',
          prefix: 'git',
          collapsible: true,
          children: 'structure'
        }
      ],
    },
    {
      text: 'test',
      icon: 'home',
      prefix: 'demo/',
      link: 'demo/',
      collapsible: true,
      children: 'structure'
    },
  ],
});
