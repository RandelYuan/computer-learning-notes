---
title: Node.js
author: Randel Yuan
order: 1
tag:
  - 问题解决
---

## NVM

## NPM

- 运行npm install后报错

   ```
   npm ERR! cb() never called!
   npm ERR! This is an error with npm itself. Please report this error at:
   npm ERR!     <https://npm.community>
   ```

    1. 删除项目中的node_modules文件夹和package-lock.json文件，执行以下命令清除npm缓存
  
    ```
    npm cache clean -force
    ```
    2. 设置的npm镜像后重新运行npm install
    ```
    npm config rm registry
    npm install
    ```
