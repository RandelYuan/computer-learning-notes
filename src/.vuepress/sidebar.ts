import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '计算机基础',
      prefix: 'basic',
      icon: 'workingDirectory',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '编程语言',
      prefix: 'program',
      icon: 'launch',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '前端开发',
      prefix: 'front-end',
      icon: 'window',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '后端开发',
      prefix: 'back-end',
      icon: 'frame',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '数据库',
      prefix: 'db',
      icon: 'storage',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '大数据技术',
      prefix: 'bigdata',
      icon: 'software',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '开发工具',
      prefix: 'tools',
      icon: 'tool',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '中间件',
      prefix: 'middleware',
      icon: 'asynchronous',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '遇到的问题',
      prefix: 'problems',
      icon: 'edit',
      collapsible: true,
      children: 'structure',
    },
    {
      text: '其他',
      prefix: 'others',
      icon: 'others',
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
