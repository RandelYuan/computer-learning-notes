import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as n,a as i,b as e,d as h,f as a}from"./app-ada95f80.js";const s="/computer-learning-notes/assets/git_centralized-909db6d0.png",c="/computer-learning-notes/assets/git_distributed-5986b697.png",o={},u=a('<h2 id="git-简介" tabindex="-1"><a class="header-anchor" href="#git-简介" aria-hidden="true">#</a> Git 简介</h2><h3 id="git-是什么" tabindex="-1"><a class="header-anchor" href="#git-是什么" aria-hidden="true">#</a> Git 是什么？</h3><ul><li>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</li><li>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</li><li>Git 与常用的版本控制工具 CVS, Subversion 等不同，Git 是分布式版本控制系统，不必服务器端软件支持。</li></ul><h3 id="集中式-vs-分布式" tabindex="-1"><a class="header-anchor" href="#集中式-vs-分布式" aria-hidden="true">#</a> 集中式 vs 分布式</h3><h4 id="集中式" tabindex="-1"><a class="header-anchor" href="#集中式" aria-hidden="true">#</a> 集中式</h4><ul><li>在集中式版本控制系统中，代码库存储在中央服务器上，开发人员需要从该服务器中获取最新的代码，并在本地进行修改。开发人员提交的更改需要上传到服务器才能与其他人共享。这种情况下，如果服务器出现故障或网络中断，开发人员将无法执行版本控制操作。</li><li>集中式版本控制系统的主要缺点在于其依赖于网络连接才能正常工作。尤其是在互联网环境下，当遇到网络速度较慢的情况时，开发人员提交较大文件的操作可能会变得异常缓慢。举例来说，即使是一个大小为10M的文件，在面临网络速度缓慢的情况下，提交所需的时间可能长达5分钟，这种情况可能会给开发人员带来不便和压力。</li><li>在集中式版本控制系统中，分支和合并操作较为复杂，需要通过服务器进行协调。</li></ul><div class="customer-container-center"><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h4 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h4><ul><li>分布式版本控制系统会将完整的代码仓库克隆到每个开发人员的本地机器上。每个开发人员都拥有完整的历史记录和版本库，可以在本地进行修改和提交，而无需依赖中央服务器。</li><li>开发人员可以在没有网络连接的情况下继续工作，并且可以在完成开发后将更改推送到远程存储库进行共享。这种分布式的特性使得团队成员可以并行工作，而不会互相干扰。</li><li>分支和合并更加简单和快速，因为每个开发人员都有自己的本地分支，可以自由地进行合并操作。</li></ul><div class="customer-container-center"><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h2 id="git-的安装及配置" tabindex="-1"><a class="header-anchor" href="#git-的安装及配置" aria-hidden="true">#</a> Git 的安装及配置</h2><h3 id="git-的安装" tabindex="-1"><a class="header-anchor" href="#git-的安装" aria-hidden="true">#</a> Git 的安装</h3><h4 id="linux-以-centos-为例" tabindex="-1"><a class="header-anchor" href="#linux-以-centos-为例" aria-hidden="true">#</a> Linux(以 CentOS 为例)</h4><ol><li>安装所需软件包</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
yum install gcc perl-ExtUtils-MakeMaker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>下载 &amp; 安装</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 进入安装目录
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>macOS 系统下，推荐使用 HomeBrew 进行安装</p></div><ol><li>通过 brew 查看可安装的 Git 程序包</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>brew search git
</code></pre></div><ol start="2"><li>安装 Git</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>brew install git
</code></pre></div><h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4>`,24),g={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},x=i("li",null,"运行下载好的exe文件",-1),b=i("li",null,"选择安装位置",-1),v=i("li",null,"使用默认配置完成安装",-1),p=a(`<h3 id="git-的配置" tabindex="-1"><a class="header-anchor" href="#git-的配置" aria-hidden="true">#</a> Git 的配置</h3><h4 id="设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#设置用户名和邮箱" aria-hidden="true">#</a> 设置用户名和邮箱</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Git 是分布式版本控制系统，远程仓库需要根据用户名和邮箱跟踪提交者的身份。通过设置用户名和密码可以在提交代码时方便地查看代码贡献者的身份，这有助于提高代码质量和代码管理的可读性。在开源项目中，通过提交者的用户名，我们可以更好地跟踪和管理代码库。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;用户名&quot;
git config --global user.email &quot;电子邮箱地址&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还可以在项目中的 .git 文件中找到 config 文件修改用户名和邮箱。注意，此时设置用户名和邮箱只在该项目中生效，不是全局生效。</p><h4 id="配置密钥" tabindex="-1"><a class="header-anchor" href="#配置密钥" aria-hidden="true">#</a> 配置密钥</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当使用 Git 时，配置密钥是为了确保你的身份可以被验证和授权，以便进行安全的代码交互和版本控制。想象一下，你想在 GitHub 上上传你的代码并与团队成员协作，但在每次操作时都需要输入用户名和密码。这种方式既繁琐又不安全，因为密码可能会被截获或泄漏。</p></div><ol><li>生成密钥</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot; 电子邮箱地址&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>添加公钥到托管服务(以 GitHub 为例)</li></ol><ul><li>复制生成的密钥</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在不同的操作系统上，生成的公钥位置会有所不同。</p><ul><li>Linux: 生成的公钥一般位于 ~/.ssh/id_rsa.pub</li><li>macOS: 生成的公钥一般位于 /Users/YourUsername/.ssh/id_rsa.pub</li><li>Windows: 生成的公钥一般位于 C:\\Users\\YourUsername.ssh\\id_rsa.pub</li></ul></div><ul><li>登录 GitHub 账户后，点击右上角的头像，选择&quot;Settings&quot;</li><li>在左侧菜单中，选择 &quot;SSH and GPG keys&quot;</li><li>点击 &quot;New SSH key&quot;</li><li>在 &quot;Title&quot; 字段中，为你的密钥起一个描述性的名称</li><li>在 &quot;Key&quot; 字段中，粘贴你之前复制的公钥内容</li><li>点击 &quot;Add SSH key&quot; 按钮</li></ul><h2 id="git-的工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#git-的工作区、暂存区和版本库" aria-hidden="true">#</a> Git 的工作区、暂存区和版本库</h2><h3 id="工作区" tabindex="-1"><a class="header-anchor" href="#工作区" aria-hidden="true">#</a> 工作区</h3><h3 id="暂存区" tabindex="-1"><a class="header-anchor" href="#暂存区" aria-hidden="true">#</a> 暂存区</h3><h3 id="版本库" tabindex="-1"><a class="header-anchor" href="#版本库" aria-hidden="true">#</a> 版本库</h3><h2 id="git-基础操作" tabindex="-1"><a class="header-anchor" href="#git-基础操作" aria-hidden="true">#</a> Git 基础操作</h2><h3 id="初始化仓库" tabindex="-1"><a class="header-anchor" href="#初始化仓库" aria-hidden="true">#</a> 初始化仓库</h3><p>在开始使用 Git 之前，需要对本地项目进行初始化，以便将其转换为 Git 可识别的仓库。这个仓库里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。初始化仓库非常简单，只需在项目的根目录下执行以下命令:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>git init
</code></pre></div><p>此命令会在当前目录下创建一个名为 .git 的隐藏文件夹，用户存储 Git 相关的数据和配置信息。这个隐藏文件夹包含了项目中的所有版本控制信息，不需要直接操作这个目录，Git 会自动处理。</p><p>也可以在一个空目录下初始化 Git 仓库。这是从零开始创建一个项目的好方法。首先，需要创建一个新的空目录，然后进入该目录并执行 <code>git init</code> 命令:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>mkdir new_project
cd new_project
git init
</code></pre></div><p>在初始化仓库后，可以通过以下命令查看项目的状态:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>git init
</code></pre></div><p>此时，可能会看到项目中的文件处于未跟踪 (Untracked) 状态，表示这些文件尚未添加到 Git 的版本控制中。后续将了解如何将文件添加到版本控制。</p><p>现在，已经成功初始化了 Git 仓库并做好了相应配置，可以开始使用 Git 进行版本控制了。</p><h3 id="添加文件到暂存区" tabindex="-1"><a class="header-anchor" href="#添加文件到暂存区" aria-hidden="true">#</a> 添加文件到暂存区</h3><h3 id="提交更改到本地仓库" tabindex="-1"><a class="header-anchor" href="#提交更改到本地仓库" aria-hidden="true">#</a> 提交更改到本地仓库</h3><h3 id="查看仓库状态" tabindex="-1"><a class="header-anchor" href="#查看仓库状态" aria-hidden="true">#</a> 查看仓库状态</h3><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3><h3 id="撤销更改" tabindex="-1"><a class="header-anchor" href="#撤销更改" aria-hidden="true">#</a> 撤销更改</h3><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> Git 分支管理</h2><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3><h3 id="解决分支冲突" tabindex="-1"><a class="header-anchor" href="#解决分支冲突" aria-hidden="true">#</a> 解决分支冲突</h3><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><h3 id="什么是远程仓库" tabindex="-1"><a class="header-anchor" href="#什么是远程仓库" aria-hidden="true">#</a> 什么是远程仓库？</h3><h3 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h3><h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3><h3 id="推送本地仓库到远程" tabindex="-1"><a class="header-anchor" href="#推送本地仓库到远程" aria-hidden="true">#</a> 推送本地仓库到远程</h3><h3 id="从远程仓库拉取更新" tabindex="-1"><a class="header-anchor" href="#从远程仓库拉取更新" aria-hidden="true">#</a> 从远程仓库拉取更新</h3><h3 id="远程仓库分支管理" tabindex="-1"><a class="header-anchor" href="#远程仓库分支管理" aria-hidden="true">#</a> 远程仓库分支管理</h3><h2 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签" aria-hidden="true">#</a> Git 标签</h2><h1 id="git-学习笔记大纲" tabindex="-1"><a class="header-anchor" href="#git-学习笔记大纲" aria-hidden="true">#</a> Git 学习笔记大纲</h1><h2 id="_1-git-简介" tabindex="-1"><a class="header-anchor" href="#_1-git-简介" aria-hidden="true">#</a> 1. Git 简介</h2><ul><li>1.1 Git 的起源与发展</li><li>1.2 版本控制系统的类型</li><li>1.3 Git 的特点与优势</li></ul><h2 id="_2-git-安装与配置" tabindex="-1"><a class="header-anchor" href="#_2-git-安装与配置" aria-hidden="true">#</a> 2. Git 安装与配置</h2><ul><li>2.1 安装 Git</li><li>2.2 配置 Git</li></ul><h2 id="_3-git-基础操作" tabindex="-1"><a class="header-anchor" href="#_3-git-基础操作" aria-hidden="true">#</a> 3. Git 基础操作</h2><ul><li>3.1 初始化仓库 <ul><li><code>git init</code></li></ul></li><li>3.2 添加文件到暂存区 <ul><li><code>git add</code></li></ul></li><li>3.3 提交更改到本地仓库 <ul><li><code>git commit</code></li></ul></li><li>3.4 查看仓库状态 <ul><li><code>git status</code></li></ul></li><li>3.5 查看提交历史 <ul><li><code>git log</code></li></ul></li><li>3.6 撤销更改 <ul><li><code>git checkout</code></li><li><code>git reset</code></li></ul></li><li>3.7 删除文件 <ul><li><code>git rm</code></li></ul></li></ul><h2 id="_4-git-分支管理" tabindex="-1"><a class="header-anchor" href="#_4-git-分支管理" aria-hidden="true">#</a> 4. Git 分支管理</h2><ul><li>4.1 创建分支 <ul><li><code>git branch</code></li></ul></li><li>4.2 切换分支 <ul><li><code>git checkout</code></li></ul></li><li>4.3 合并分支 <ul><li><code>git merge</code></li></ul></li><li>4.4 删除分支 <ul><li><code>git branch -d</code></li></ul></li><li>4.5 分支冲突解决</li></ul><h2 id="_5-远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-远程仓库" aria-hidden="true">#</a> 5. 远程仓库</h2><ul><li>5.1 什么是远程仓库</li><li>5.2 添加远程仓库 <ul><li><code>git remote add</code></li></ul></li><li>5.3 克隆远程仓库 <ul><li><code>git clone</code></li></ul></li><li>5.4 推送本地仓库到远程 <ul><li><code>git push</code></li></ul></li><li>5.5 从远程仓库拉取更新 <ul><li><code>git pull</code></li></ul></li><li>5.6 远程仓库分支管理</li></ul><h2 id="_6-git-工作流" tabindex="-1"><a class="header-anchor" href="#_6-git-工作流" aria-hidden="true">#</a> 6. Git 工作流</h2><ul><li>6.1 Git 工作流类型 <ul><li>集中式工作流</li><li>功能分支工作流</li><li>Gitflow 工作流</li><li>分叉式工作流</li></ul></li><li>6.2 选择合适的工作流</li></ul><h2 id="_7-git-实用技巧" tabindex="-1"><a class="header-anchor" href="#_7-git-实用技巧" aria-hidden="true">#</a> 7. Git 实用技巧</h2><ul><li>7.1 使用 <code>.gitignore</code> 忽略指定文件</li><li>7.2 使用别名简化命令</li><li>7.3 使用 <code>git stash</code> 暂存当前工作</li><li>7.4 使用 <code>git cherry-pick</code> 拣选提交</li><li>7.5 使用 <code>git rebase</code> 变基</li></ul><h2 id="_8-参考资料与学习资源" tabindex="-1"><a class="header-anchor" href="#_8-参考资料与学习资源" aria-hidden="true">#</a> 8. 参考资料与学习资源</h2><ul><li>8.1 官方文档</li><li>8.2 教程与书籍</li><li>8.3 在线学习平台</li><li>8.4 社区与论坛</li></ul>`,65);function m(f,_){const l=t("ExternalLinkIcon");return r(),n("div",null,[u,i("ol",null,[i("li",null,[e("进入 "),i("a",g,[e("Git 官网下载"),h(l)])]),x,b,v]),p])}const k=d(o,[["render",m],["__file","git.html.vue"]]);export{k as default};
