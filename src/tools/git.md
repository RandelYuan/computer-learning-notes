---
title: Git 的原理及使用
shortTitle: Git
author: Randel Yuan
order: 1
tag:
  - 版本控制
---

 ## Git 简介

 ### Git 是什么？

 - Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
 - Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
 - Git 与常用的版本控制工具 CVS, Subversion 等不同，Git 是分布式版本控制系统，不必服务器端软件支持。

 ### 集中式 vs 分布式

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


 ## Git 的安装及配置

 ### Git 的安装

 #### Linux(以 CentOS 为例)

 1. 安装所需软件包

 ```terminal
 yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
 yum install gcc perl-ExtUtils-MakeMaker
  ```

 2. 下载 & 安装

 ```terminal
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

 #### macOS
 ::: tip
 macOS 系统下，推荐使用 HomeBrew 进行安装
 ::: 

 1. 通过 brew 查看可安装的 Git 程序包

 ```terminal:no-line-numbers 
 brew search git
 ```

 2. 安装 Git

 ```terminal:no-line-numbers 
 brew install git
 ```

 #### Windows

 1. 进入 [Git 官网下载](https://git-scm.com/download/win)
 2. 运行下载好的exe文件
 3. 选择安装位置
 4. 使用默认配置完成安装
 
 ### Git 的配置

 #### 设置用户名和邮箱

 ::: tip
 由于 Git 是分布式版本控制系统，远程仓库需要根据用户名和邮箱跟踪提交者的身份。通过设置用户名和密码可以在提交代码时方便地查看代码贡献者的身份，这有助于提高代码质量和代码管理的可读性。在开源项目中，通过提交者的用户名，我们可以更好地跟踪和管理代码库。
 :::

 ```terminal
 git config --global user.name "用户名"
 git config --global user.email "电子邮箱地址"
 ```

 此外，还可以在项目中的 .git 文件中找到 config 文件修改用户名和邮箱。注意，此时设置用户名和邮箱只在该项目中生效，不是全局生效。

 #### 配置密钥

 ::: tip
 当使用 Git 时，配置密钥是为了确保你的身份可以被验证和授权，以便进行安全的代码交互和版本控制。想象一下，你想在 GitHub 上上传你的代码并与团队成员协作，但在每次操作时都需要输入用户名和密码。这种方式既繁琐又不安全，因为密码可能会被截获或泄漏。
 :::

 1. 生成密钥

 ```terminal
 ssh-keygen -t rsa -C " 电子邮箱地址" 
 ```

 2. 添加公钥到托管服务(以 GitHub 为例)
 - 复制生成的密钥

 ::: tip
 在不同的操作系统上，生成的公钥位置会有所不同。
 - Linux: 生成的公钥一般位于 ~/.ssh/id_rsa.pub
 - macOS: 生成的公钥一般位于 /Users/YourUsername/.ssh/id_rsa.pub
 - Windows: 生成的公钥一般位于 C:\Users\YourUsername\.ssh\id_rsa.pub
 :::

 - 登录 GitHub 账户后，点击右上角的头像，选择"Settings"
 - 在左侧菜单中，选择 "SSH and GPG keys"
 - 点击 "New SSH key"
 - 在 "Title" 字段中，为你的密钥起一个描述性的名称
 - 在 "Key" 字段中，粘贴你之前复制的公钥内容
 - 点击 "Add SSH key" 按钮
   
::: tip Windows中配置多个SSH key
 1. 在 `.ssh` 目录下生成多个SSH key 
```terminal
ssh-keygen -t rsa -b 4096 -C "youremail@example.com" -f ./github
ssh-keygen -t rsa -b 4096 -C "youremail@example.com" -f ./gitlab
```
 2. 创建 `config` 文件
 在 `.ssh` 目录下创建一个名为 `config` 的文件。在这个文件中，可以配置多个SSH key。文件示例如下:

```text
# Default GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa

# Second GitHub account
Host github.com-newkey
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_newkey
  
# IP + Port
Host gitee.com
  HostName 127.0.0.1
  Port 8080
  User username
  IdentityFile ~/.ssh/gitlab
```

 3. 在 Git 中使用特定的 SSH key。
 根据在 `config` 文件中设置的Host，可以在Git中使用特定的 SSH key。例如:
```terminal:no-line-numbers
git clone git@github.com-newkey:username/repo.git
```
:::

 ## Git 的工作区、暂存区和版本库

::: center
![](img/git-working_staging.jpg)
:::

 ### 工作区

 工作区 (Working Directory) 是指在计算机上能看到的目录，也就是项目所在的文件夹。它包括了项目中的所有文件和子目录。在工作区中，可以编辑、添加和删除文件。

 ### 暂存区

 暂存区 (Staging Area) 是一个中间区域，用于临时存储已修改但尚未提交到版本库的文件。通过使用 `git add` 命令，可以将工作区中修改的文件添加到暂存区。这样做的好处是: 可以选择性地提交一部分修改，而不是一次性提交所有修改。
 
 ### 版本库

 版本库 (Repository) 是 Git 管理的一个数据库，用于保存已提交的文件和文件夹的历史版本。当执行 `git commit` 命令时，暂存区中的文件会被永久性地保存到版本库中。版本库中包含了提交历史、分支信息以及其他元数据。

 ## Git 基础操作

 ### 初始化仓库

 要使用 Git 对本地项目进行版本控制，首先需要对项目进行初始化。这将把本地项目转换为 Git 可识别和管理的仓库。在这个仓库中，Git 能够跟踪每个文件的修改和删除，使得历史记录可追溯，或者在未来某个时刻恢复到某个版本。初始化仓库的命令如下:

 ```terminal:no-line-numbers
 git init
 ```

 执行此命令会在当前目录下创建一个名为 .git 的隐藏文件夹，用于存储所有的 Git 数据和配置信息。这个隐藏文件夹包含了项目中的所有版本控制信息，但不需要直接操作这个目录，因为 Git 会自动处理。

 如果需要从零开始创建一个新项目，也可以在一个空目录下初始化Git仓库。首先创建一个新的目录，然后在该目录中执行 `git init` 命令:

 ```terminal
 mkdir new_project
 cd new_project
 git init
 ```

 初始化仓库后，可以通过 `git status` 命令查看项目的状态:

 ```terminal:no-line-numbers
git status
 ```

 此时，可能会看到项目中的文件处于未跟踪 (Untracked) 状态，这表示这些文件还未被 Git 管理。后续将介绍如何将文件添加到 Git 版本控制中。

 ### 添加文件到暂存区

 Git提供 `git add` 命令用于将文件添加到暂存区。可以一次性添加一个文件，也可以添加多个文件，甚至整个目录

 - 添加一个文件:

 ```terminal:no-line-numbers
 git add filename
 ```

 - 添加多个文件:

 ```terminal:no-line-numbers
 git add file1 file2 file3
 ```

 - 添加整个目录

 ```terminal:no-line-numbers
 git add .
 ```

 ### 提交更改到本地仓库

 在将文件添加到暂存区后，可以使用 `git commit` 命令将这些更改提交到本地仓库。为了便于追踪，建议在每次提交时附上一个简洁而有意义的提交信息:

 ```terminal:no-line-numbers
 git commit -m "提交信息"
 ```

:::tip Git 提交规范
 格式: `<type>(scope): subject`
 - type (必填) : commit 的类别，只允许使用下列标识: 
   - feat: 新功能 
   - fix: 修复bug 
   - docs: 文档改变 
   - style: 代码格式改变 
   - refactor: 某个已有功能重构 
   - perf: 性能优化 
   - test: 增加测试 
   - build: 改变了build工具 如 grunt换成了 npm 
   - revert: 撤销上一次的 commit 
   - chore: 构建过程或辅助工具的变动
 - scope (可选): 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
 - subject(必填): commit 的简短描述，不超过50个字符。
:::

 ### 查看仓库状态

 查看当前仓库的状态，可以使用 `git status` 命令。此命令会显示当前分支、有哪些文件被修改且未提交，以及哪些文件已添加到暂存区但尚未提交:

 ```terminal:no-line-numbers
 git status
 ```

 ### 查看提交历史

 要查看仓库的提交历史，可以使用 `git log` 命令。可以通过不同选项来定制输出的格式和内容。

 - 查看简洁的提交历史:

 ```terminal:no-line-numbers
 git log --online
 ```

 - 查看带图形化分支结构的提交历史:

 ```terminal:no-line-numbers
 git log --graph --online
 ```

 ### 撤销更改
 
 Git 提供了多种命令来撤销更改:

 - 撤销工作区中的更改:

 ```terminal:no-line-numbers
 git checkout --filename
 ```

 - 撤销暂存区中的更改:
 
 ```terminal:no-line-numbers
 git reset HEAD filename
 ```

 - 撤销上一次提交:

 ```terminal:no-line-numbers
 git revert HEAD
 ```

 - 回滚到指定的提交:

 ```terminal:no-line-numbers
 git reset commit_hash
 ```

 ### 删除文件

 要在 Git 中删除一个文件，可以使用 `git rm` 命令。此命令将同时从工作区和暂存区中删除文件。然后，需要执行一次提交操作以将删除更新到本地仓库。

 ```terminal
 git rm filename
 git commit -m "Removed filename"
 ```

 ## Git 分支管理

 在 Git 中，通过使用不同的分支，我们可以在同一代码库中并行进行多个不同的开发任务。这使得功能开发、错误修复和测试更为简单，不必担心会影响到主分支的代码。

 ### 创建分支

 要创建一个新的分支，可以使用 `git branch` 命令，后面加上想要的新分支的名称:

```terminal:no-line-numbers
git branch new_branch_name
```

 这将创建一个名为 `new_branch_name` 的新分支。值得注意的是，这个命令只会创建新的分支，但不会自动切换到新创建的分支。这个新分支是当前所在分支 (执行`git branch`命令时) 的一个副本，包含了所有的提交历史。

 ### 切换分支

 如果想切换到其他分支进行工作，可以使用 `git checkout` 命令，后面加上想要切换到的分支的名称:

```terminal:no-line-numbers
git checkout -b new_branch
```

 这个命令会将当前工作目录切换到 `new_branch` 分支。此时，如果在工作目录中创建或修改文件，这些改动都会在 `new_branch` 分支中进行。

 如果想要创建新分支的同时切换到新创建的分支，可以使用 `-b` 参数:

```terminal:no-line-numbers
git checkout -b new_branch
```
 
 ### 合并分支

 当在分支上完成了工作并想要将这些更改合并到主分支 (或者其他分支) ，首先需要切换到想要合并进的分支，然后使用 `git merge` 命令:

```terminal
git checkout master
git merge new_branch
```

 这将把 `new_branch` 的所有新更改应用到 `master` 分支。如果 `master` 分支在 `new_branch` 创建后没有新的提交，Git会进行 `"fast-forward"` 操作，意味着 `master` 会直接移动到 `new_branch` 的最新提交。

 ### 删除分支

 当已经将分支的更改合并到 `master` 分支，或者不再需要某个分支，可以使用 `git branch -d` 命令来删除该分支:

```terminal:no-line-numbers
git branch -d new_branch
```

 这将删除名为`new_branch`的分支。

:::tip
注意，Git 默认不允许删除尚未合并的分支。如果确认要删除尚未合并的分支，可以使用 `-D` 参数强制删除。
:::

 ### 解决分支冲突

 在使用 Git 进行分支合并时，如果两个分支对同一文件的同一部分进行了不同的修改，Git 会产生冲突。在这种情况下，Git 无法确定应该保留哪个版本，因此需要手动解决冲突。

 当合并操作因为冲突而被中断时，Git 会在冲突的地方插入一些特殊的标记。这些标记看起来像这样:

```terminal
<<<<<<< HEAD
your changes
=======
changes on the branch you are merging
>>>>>>> branch_name
```

 `<<<<<<< HEAD` 和 `>>>>>>> branch_name` 之间的部分是在当前分支 (HEAD) 上做的更改，而 `=======` 和 `>>>>>>> branch_name` 之间的部分是在待合并分支上做的更改。

 要解决冲突，需要决定应该保留哪些更改，也可能需要将两个版本的更改合并在一起。完成后，需要删除 `<<<<<<< HEAD` 、 `=======` 和 `>>>>>>> branch_name` 这三个标记。然后，将解决冲突后的文件添加到暂存区，并进行提交:

```terminal
git add conflicted_file
git commit -m "Resolved merge conflict"
```

 这样，就成功解决了合并时出现的冲突，并将解决冲突后的文件提交到了版本库。

 ## 远程仓库

 远程仓库是 Git 的另一个重要概念。它们是存储在网络上的项目的版本库，可以让多个人共享和协作。下面将详细介绍远程仓库的相关操作。

 ### 什么是远程仓库？
 
 远程仓库通常是指托管在网络上的项目的 Git 仓库，常常用于多人协作项目。这些仓库可以在许多地方托管，比如 GitHub、GitLab 或 Bitbucket。

 ### 添加远程仓库

 要将项目与远程仓库关联，可以使用 `git remote add` 命令，后面加上远程仓库的名称 (通常为"origin") 和远程仓库的URL:

```terminal:no-line-numbers
git remote add origin https://example.git
```

 ### 克隆远程仓库

 要在本地创建一个远程仓库的副本，可以使用 `git clone` 命令，后面加上远程仓库的URL:

```terminal:no-line-numbers
git clone https://example.git
```

 这个命令会在当前目录下创建一个与远程仓库同名的新目录，并下载远程仓库的所有文件和历史记录。

 ### 推送本地仓库到远程

 在本地完成更改并提交后，可以将这些更改推送到远程仓库以分享工作。这可以通过 `git push` 命令实现，后面加上远程仓库的名称 (通常为 "origin") 和待推送的分支名称:

```terminal:no-line-numbers
git push origin master
```

 此命令会将 master 分支的更改推送到名为 origin 的远程仓库。

 ### 从远程仓库拉取更新

 如果远程仓库有新的更改，可以使用 `git pull` 命令获取这些更改，后面加上远程仓库的名称和待拉取的分支名称:

```terminal:no-line-numbers
git pull origin master
```

 ### 远程仓库分支管理

 在远程仓库中，可以管理分支，就如同在本地一样。例如，推送新分支到远程仓库:

```terminal:no-line-numbers
git push origin new_branch
```

 也可以从远程仓库拉取分支到本地:

```terminal:no-line-numbers
git checkout -b new_branch origin/new_branch
```

 如果需要删除远程仓库的某个分支，可以使用 `git push` 命令，后面加上分支名称:

```terminal:no-line-numbers
git push origin :old_branch
```

 ## Git 标签

 Git 标签是指向特定 `commit` 的引用，常用于标记项目的重要点，如版本迭代和版本发布。

 ### 创建标签

 在 Git 中，有两种类型的标签: 轻量标签 (lightweight) 和附注标签 (annotated)。

 轻量标签非常类似于一个不会改变的分支，因为它只是一个指向 `commit` 的引用。创建轻量标签，不需要使用任何选项:

```terminal:no-line-numbers
git tag v1.0
```

 附注标签是存储在 Git 数据库中的一个完整对象，它包含了标签制作者的名字、电子邮件地址、日期时间，还有一个可以解释标签背后意义的消息。创建附注标签，可以使用 `-a` 选项:

```terminal:no-line-numbers
git tag -a v1.0 -m "version 1.0"
```

 ### 查看标签
要查看所有的标签，可以使用 `git tag` 命令:

```terminal:no-line-numbers
git tag
```

 ### 检出标签
 在 Git 中，"检出" (checkout) 通常指的是切换到某个分支或者某个提交。然而，对于标签，Git 不允许直接检出，因为标签只是一个不可变的快照，不应该进行任何更改。

 不过，如果有需求需要基于某个标签进行工作，可以创建一个新的分支，该分支从标签所指向的 `commit` 开始。这可以通过如下命令完成：

```terminal:no-line-numbers
git checkout -b branchname tagname
```

 其中，`branchname` 是新分支的名字，`tagname` 是要基于的标签的名字。这个命令会创建一个新的分支并立即切换到新分支，新分支的起点是 `tagname` 标签所指向的 `commit`。在这个新分支上的任何更改都不会影响标签所指向的 `commit`。

 ### 删除标签
如果需要删除一个标签，可以使用 `git tag -d` 命令，后面加上标签名称:

```terminal:no-line-numbers
git tag -d v1.0
```

 ### 推送标签到远程仓库
 创建的标签默认不会被推送到远程仓库，需要显式地推送。推送一个标签到远程仓库，可以使用 `git push origin` 命令，后面加上标签名称:

```terminal:no-line-numbers
git push origin v1.0
```

 如果需要推送所有的标签到远程仓库，可以使用 `--tags` 选项:

```terminal:no-line-numbers
git push origin --tags
```