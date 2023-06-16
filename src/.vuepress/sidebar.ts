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
      text: '遇到的问题',
      prefix: 'problems',
      icon: 'shell',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '其他',
      prefix: 'others',
      icon: 'community',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '主要功能与配置演示',
      prefix: 'demo/',
      link: 'demo/',
      collapsible: true,
      children: 'structure'
    },
  ],
});
