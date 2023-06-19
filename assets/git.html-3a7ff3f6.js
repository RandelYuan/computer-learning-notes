import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as s,a as i,b as e,d as r,f as a}from"./app-8385579c.js";const c="/computer-learning-notes/assets/git_centralized-909db6d0.png",o="/computer-learning-notes/assets/git_distributed-5986b697.png",h={},u=a('<h2 id="git-简介" tabindex="-1"><a class="header-anchor" href="#git-简介" aria-hidden="true">#</a> Git 简介</h2><h3 id="git-是什么" tabindex="-1"><a class="header-anchor" href="#git-是什么" aria-hidden="true">#</a> Git 是什么？</h3><ul><li>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</li><li>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</li><li>Git 与常用的版本控制工具 CVS, Subversion 等不同，Git 是分布式版本控制系统，不必服务器端软件支持。</li></ul><h3 id="集中式-vs-分布式" tabindex="-1"><a class="header-anchor" href="#集中式-vs-分布式" aria-hidden="true">#</a> 集中式 vs 分布式</h3><h4 id="集中式" tabindex="-1"><a class="header-anchor" href="#集中式" aria-hidden="true">#</a> 集中式</h4><ul><li>在集中式版本控制系统中，代码库存储在中央服务器上，开发人员需要从该服务器中获取最新的代码，并在本地进行修改。开发人员提交的更改需要上传到服务器才能与其他人共享。这种情况下，如果服务器出现故障或网络中断，开发人员将无法执行版本控制操作。</li><li>集中式版本控制系统的主要缺点在于其依赖于网络连接才能正常工作。尤其是在互联网环境下，当遇到网络速度较慢的情况时，开发人员提交较大文件的操作可能会变得异常缓慢。举例来说，即使是一个大小为10M的文件，在面临网络速度缓慢的情况下，提交所需的时间可能长达5分钟，这种情况可能会给开发人员带来不便和压力。</li><li>在集中式版本控制系统中，分支和合并操作较为复杂，需要通过服务器进行协调。</li></ul><div class="customer-container-center"><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h4 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h4><ul><li>分布式版本控制系统会将完整的代码仓库克隆到每个开发人员的本地机器上。每个开发人员都拥有完整的历史记录和版本库，可以在本地进行修改和提交，而无需依赖中央服务器。</li><li>开发人员可以在没有网络连接的情况下继续工作，并且可以在完成开发后将更改推送到远程存储库进行共享。这种分布式的特性使得团队成员可以并行工作，而不会互相干扰。</li><li>分支和合并更加简单和快速，因为每个开发人员都有自己的本地分支，可以自由地进行合并操作。</li></ul><div class="customer-container-center"><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h2 id="git-的安装" tabindex="-1"><a class="header-anchor" href="#git-的安装" aria-hidden="true">#</a> Git 的安装</h2><h3 id="linux-以-centos-为例" tabindex="-1"><a class="header-anchor" href="#linux-以-centos-为例" aria-hidden="true">#</a> Linux(以 CentOS 为例)</h3><ol><li>安装所需软件包</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>macOS 系统下，推荐使用 HomeBrew 进行安装</p></div><ol><li>通过 brew 查看可安装的 Git 程序包</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>brew search git
</code></pre></div><ol start="2"><li>安装 Git</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>brew install git
</code></pre></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>`,23),g={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},v=i("li",null,"运行下载好的exe文件",-1),p=i("li",null,"选择安装位置",-1),b=i("li",null,"使用默认配置完成安装",-1),m=a(`<h2 id="git-的配置" tabindex="-1"><a class="header-anchor" href="#git-的配置" aria-hidden="true">#</a> Git 的配置</h2><h3 id="设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#设置用户名和邮箱" aria-hidden="true">#</a> 设置用户名和邮箱</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Git 是分布式版本控制系统，远程仓库需要根据用户名和邮箱跟踪提交者的身份。通过设置用户名和密码可以在提交代码时方便地查看代码贡献者的身份，这有助于提高代码质量和代码管理的可读性。在开源项目中，通过提交者的用户名，我们可以更好地跟踪和管理代码库。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;用户名&quot;
git config --global user.email &quot;电子邮箱地址&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还可以在项目中的 .git 文件中找到 config 文件修改用户名和邮箱。注意，此时设置用户名和邮箱只在该项目中生效，不是全局生效。</p><h3 id="配置密钥" tabindex="-1"><a class="header-anchor" href="#配置密钥" aria-hidden="true">#</a> 配置密钥</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当使用 Git 时，配置密钥是为了确保你的身份可以被验证和授权，以便进行安全的代码交互和版本控制。想象一下，你想在 GitHub 上上传你的代码并与团队成员协作，但在每次操作时都需要输入用户名和密码。这种方式既繁琐又不安全，因为密码可能会被截获或泄漏。</p></div><ol><li>生成密钥</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot; 电子邮箱地址&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>添加公钥到托管服务(以 GitHub 为例)</li></ol><ul><li>复制生成的密钥</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在不同的操作系统上，生成的公钥位置会有所不同。</p><ul><li>Linux: 生成的公钥一般位于 ~/.ssh/id_rsa.pub</li><li>macOS: 生成的公钥一般位于 /Users/YourUsername/.ssh/id_rsa.pub</li><li>Windows: 生成的公钥一般位于 C:\\Users\\YourUsername.ssh\\id_rsa.pub</li></ul></div><ul><li>登录 GitHub 账户后，点击右上角的头像，选择&quot;Settings&quot;</li><li>在左侧菜单中，选择 &quot;SSH and GPG keys&quot;</li><li>点击 &quot;New SSH key&quot;</li><li>在 &quot;Title&quot; 字段中，为你的密钥起一个描述性的名称</li><li>在 &quot;Key&quot; 字段中，粘贴你之前复制的公钥内容</li><li>点击 &quot;Add SSH key&quot; 按钮</li></ul><h2 id="git-工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#git-工作区、暂存区和版本库" aria-hidden="true">#</a> Git 工作区、暂存区和版本库</h2><h3 id="工作区" tabindex="-1"><a class="header-anchor" href="#工作区" aria-hidden="true">#</a> 工作区</h3><h3 id="暂存区" tabindex="-1"><a class="header-anchor" href="#暂存区" aria-hidden="true">#</a> 暂存区</h3><h3 id="版本库" tabindex="-1"><a class="header-anchor" href="#版本库" aria-hidden="true">#</a> 版本库</h3><h2 id="git-创建仓库" tabindex="-1"><a class="header-anchor" href="#git-创建仓库" aria-hidden="true">#</a> Git 创建仓库</h2><p>仓库又名版本库，英文名 Repository，可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。创建 Git 仓库的步骤如下:</p><ol><li>新建目录</li><li>在新建的目录下运行以下命令，将该目录变为Git可以管理的仓库</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>git init
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行完该命令后会在当前目录下生成 .git 目录，通常情况下该目录默认是被隐藏的</p></div><p>不一定在空白目录下创建 Git 仓库，选择一个非空的目录来创建 Git 仓库也是可以的</p><h2 id="git-基本操作" tabindex="-1"><a class="header-anchor" href="#git-基本操作" aria-hidden="true">#</a> Git 基本操作</h2><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> Git 分支管理</h2><h2 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签" aria-hidden="true">#</a> Git 标签</h2>`,26);function x(f,_){const t=l("ExternalLinkIcon");return d(),s("div",null,[u,i("ol",null,[i("li",null,[e("进入 "),i("a",g,[e("Git 官网下载"),r(t)])]),v,p,b]),m])}const w=n(h,[["render",x],["__file","git.html.vue"]]);export{w as default};
