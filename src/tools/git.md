---
title: Git
author: Randel Yuan
order: 1
tag:
  - 版本控制
---

 ## Git简介

 ### Git是什么？

 - Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
 - Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
 - Git 与常用的版本控制工具 CVS, Subversion 等不同，Git是分布式版本控制系统，不必服务器端软件支持。

 ### 集中式vs分布式

 #### 集中式
 - 在集中式版本控制系统中，代码库存储在中央服务器上，开发人员需要从该服务器中获取最新的代码，并在本地进行修改。开发人员提交的更改需要上传到服务器才能与其他人共享。这种情况下，如果服务器出现故障或网络中断，开发人员将无法执行版本控制操作。
 - 集中式版本控制系统的主要缺点在于其依赖于网络连接才能正常工作。尤其是在互联网环境下，当遇到网络速度较慢的情况时，开发人员提交较大文件的操作可能会变得异常缓慢。举例来说，即使是一个大小为10M的文件，在面临网络速度缓慢的情况下，提交所需的时间可能长达5分钟，这种情况可能会给开发人员带来不便和压力。
 - 在集中式版本控制系统中，分支和合并操作较为复杂，需要通过服务器进行协调。
::: center
![](img/git_centralized.png)
:::

 #### 分布式
 - 分布式版本控制系统会将完整的代码仓库克隆到每个开发人员的本地机器上。每个开发人员都拥有完整的历史记录和版本库，可以在本地进行修改和提交，而无需依赖中央服务器。
 - 开发人员可以在没有网络连接的情况下继续工作，并且可以在完成开发后将更改推送到远程存储库进行共享。这种分布式的特性使得团队成员可以并行工作，而不会互相干扰。
 - 分支和合并更加简单和快速，因为每个开发人员都有自己的本地分支，可以自由地进行合并操作。
::: center
![](img/git_distributed.png)
:::


 ## Git的安装

 ### Linux(以CentOS为例)

 1. 安装所需软件包
```
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
yum install gcc perl-ExtUtils-MakeMaker
```
 2. 下载 & 安装
```
# 进入安装目录
cd /安装目录

# 执行下载命令
wget https://www.kernel.org/pub/software/scm/git/git-2.15.1.tar.gz

# 解压
tar -zxzf git-2.15.1.tar.gz -C /安装目录

# 进入解压目录
cd /安装目录/git-2.15.1

# 编译 /usr/local/git为编译安装目录
make prefix=/usr/local/git all 

# 安装
make prefix=/usr/local/git install
```
 ### macOS
 ::: tip
 macOS系统下，推荐使用HomeBrew进行安装
 ::: 

 1. 通过brew查看可安装的Git程序包

``` :no-line-numbers 
brew search git
```

 2. 安装Git

 ``` :no-line-numbers 
brew install git
 ```

 ### Windows

 1. 进入Git官网下载 https://git-scm.com/download/win
 2. 运行下载好的exe文件
 3. 选择安装位置
 4. 使用默认配置完成安装

 ## Git的配置

 ### 设置用户名和邮箱

::: tip
由于Git是分布式版本控制系统，远程仓库需要根据用户名和邮箱跟踪提交者的身份。通过设置用户名和密码可以在提交代码时方便地查看代码贡献者的身份，这有助于提高代码质量和代码管理的可读性。在开源项目中，通过提交者的用户名，我们可以更好地跟踪和管理代码库。
:::

 ```
git config --global user.name "用户名"
git config --global user.email "电子邮箱地址"
 ```

 ### 配置密钥

::: tip
当使用Git时，配置密钥是为了确保你的身份可以被验证和授权，以便进行安全的代码交互和版本控制。想象一下，你想在GitHub上上传你的代码并与团队成员协作，但在每次操作时都需要输入用户名和密码。这种方式既繁琐又不安全，因为密码可能会被截获或泄漏。
:::

 1. 生成密钥
 ```
ssh-keygen -t rsa -C " 电子邮箱地址" 
 ```
 2. 添加公钥到托管服务(以GitHub为例)
 - 复制生成的密钥

::: tip
在不同的操作系统上，生成的公钥位置会有所不同。
 - Linux: 生成的公钥一般位于~/.ssh/id_rsa.pub
 - macOS: 生成的公钥一般位于/Users/YourUsername/.ssh/id_rsa.pub
 - Windows: 生成的公钥一般位于C:\Users\YourUsername\.ssh\id_rsa.pub
:::

 - 登录GitHUb账户后，点击右上角的头像，选择"Settings"。
 - 在左侧菜单中，选择"SSH and GPG keys"。
 - 点击"New SSH key"。
 - 在"Title"字段中，为你的密钥起一个描述性的名称。
 - 在"Key"字段中，粘贴你之前复制的公钥内容。
 - 点击"Add SSH key"按钮。

 ## Git工作区、暂存区和版本库

 ### 工作区



 ### 暂存区

 
 
 ### 版本库


 ## Git基本操作


 ## Git分支管理
 
 ## Git标签

