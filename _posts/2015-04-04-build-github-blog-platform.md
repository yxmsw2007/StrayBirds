---
layout: post
title: Github搭建博客平台
comments: true
category: Internet
tags: [Github Pages, GitHub博客, Jekyll, Markdown]
---

其实有关在Github平台上搭建博客的文章其实网上有很多，而且都写得很好相对也比较全面。不过每个人都有自己的思维方式，也许他觉得按这个步骤来最简单，但不一定适合你。下面就让我来给大家介绍下我觉得最好理解的方式来搭建这个平台，也许会适合你哟。

## GitHub Pages

[GitHub Pages](https://pages.github.com/)点开就是官方文档，没什么可说的，照这做就行（如果想早点看看效果选择“Project site”）。当然有时候网络会犯抽又或者懒得看英文，那咱就继续往下看。

### 创建资源库

资源库创建按钮在你的账户名右边，创建资源库的时候，如果你想把你的博客放到master上，资源库名称一定要是username.github.io（username就是你的用户名），如果不按这个规则取名则你的博客在“gh-pages”分支上，这两种方式有什么不同呢，那就是我们的访问地址不一样，具体有什么不一样后面我们会提到。

### 创建页面

选择资源库“Settings”

![20150404164012](/images/2015-04-04-build-github-blog-platform/20150404164012.png)

点击“Automatic Page Generator”

![20150404164712](/images/2015-04-04-build-github-blog-platform/20150404164712.png)

这里默认即可

![20150404164712](/images/2015-04-04-build-github-blog-platform/20150404164812.png)

选择主题

![20150404164712](/images/2015-04-04-build-github-blog-platform/20150404164912.png)

完成以上步骤后“Settings”中的“GitHub Pages”栏内就会出来一个网址，这个网址就是你博客的地址。如果你的资源库是按username.github.io命名的那么你的地址为：http://username.github.io否则就是这个地址：http://username.github.io/repository。赶紧打开你的博客看看吧！（如果你想重命名或者删除资源库请到设置页面操作）

到这里也许你会觉得原来这么简单，我要告诉你的是别着急，因为通过这种方式创建的页面只有一个，那么我们要如何创建多个页面呢，请继续往下看。

## 安装Git

Git的安装就不多说了，这里提供下windows的下载地址：[http://msysgit.github.io/](http://msysgit.github.io/)


## 下载


进入Git命令窗口，切换到你想保存项目的路劲，执行如下操作：

### 下载模板（本人当前使用的模板）

	$git clone https://github.com/minixalpha/StrayBirds.git
	
### 下载博客

	$git clone https://github.com/username/username.github.io.git 
	
如果博客实在pg-pages分支上则还需执行以下命令

	$cd username.github.io
	$git git checkout -b gh-pages
	$git pull origin gh-pages

## 套用模板

删除博客项目下除.git外的所有文件，将StrayBirds项目下除.git外全部复制到博客中，之后到git窗口执行如下命令：

	$git add --all
	$git commit -m "first blog"
	$git push origin master（or gh-pages）
	
>	注：push时可能要输入github账号密码，ssl证书也可能有问题，具体解决办法百度。

此时再打开博客地址就能看到上传的内容。

![20150404201315](/images/2015-04-04-build-github-blog-platform/20150404201315.png)

我们打开模板网站[http://minixalpha.github.io/StrayBirds/](http://minixalpha.github.io/StrayBirds/)对比下

![20150404201849](/images/2015-04-04-build-github-blog-platform/20150404201849.png)

咦！为什么一样的代码我们的博客却是这鸟样呢，难道此处要省略一万字？先省点气力，继续往下看。

>	注：最近回去看了下StrayBirds的博客主题，似乎已经换了一个，不过没关系，喜欢这个主题的可以到我这里[下载](https://github.com/yxmsw2007/yxmsw2007.github.io)

## 修改模版

打开我们的博客github库username.github.io，你可以看到有个“README.md”介绍，好好看看，找他说的把该修改的都修改了（你可以在本地修改然后再上传，也可以在线直接修改）。

修改_config.yml 中的 username 

![20150404204342](/images/2015-04-04-build-github-blog-platform/20150404204342.png)
	
图中1为编辑按钮，2为需要修改的字段。

修改_includes/comments.ext 下，将 disqus_shortname 修改为你在 disqus 注册的站点短名字（这一步用于支持评论系统，disqus还需设置，稍后再来处理）
	
![20150404204453](/images/2015-04-04-build-github-blog-platform/20150404204453.png)

此时如果你的博客是在gh-pages分支上，刷新下你的博客就可以正常显示了。
但是我们的项目是master上，不管怎么刷新始终都是一个鸟样，是的，这里还需要修改下，通过对比我们发现跟官方的相比我们这里就是少了点CSS样式，而且我们的代码是Copy过来的内容是不可能少的，既然这样肯定就是CSS的路径不错了，我们用浏览器查看下网站源码

![20150404211557](/images/2015-04-04-build-github-blog-platform/20150404211557.png)

可以看到页面加载了2个css和一个js脚本，任意选一个点进去看看（测试发现IE没点不了，chrome是可以的），结果如下

![20150404211634](/images/2015-04-04-build-github-blog-platform/20150404211634.png)

404！，没错找不到页面，由此可以肯定我们判断是对的，再看看我们访问的路径“username.github.io/username.github.io/...”，我们访问主页的时候是“username.github.io”其实质也就是“username.github.io/index.html”，既然这样是不是我们的路劲重复了，删掉一个试试。

编辑layouts/default.html，将三个脚本路径器的“{{site.baseurl}}”删除，保存；

再刷新下博客看看，哈哈，一切正常了，NICE！

>	注意：样式正常并不代表这就改完了，还有相关超链接一定要注意路劲。

## 加载评论

打开博文《Java 中的并发》，如果底部的评论栏可以正常加载而且是你的disqus用户名则可忽略此节。如果无法正常加载，请打开[disqus官网](https://disqus.com/)，登陆你的账号（如果没有请先注册并验证邮箱），点击右上角的设置

![20150404214750](/images/2015-04-04-build-github-blog-platform/20150404214750.png)

![20150404215309](/images/2015-04-04-build-github-blog-platform/20150404215309.png)

1中输入你的博客地址“username.github.io”，2输入disqus用户名（这个名字会在评论栏显示），3选择“Auto”，最后“Finish registration”，后面的步骤可以不设置，点击设置选择“Admin”，这时候你就可以看到你刚才设置的东西了。

确保_includes/comments.ext内disqus_shortname与你的disqus用户名一致，再刷新一下博客，你会看到评论栏也出来。

![20150404220238](/images/2015-04-04-build-github-blog-platform/20150404220238.png)

至此博客平台就算是搭建成功，下面就是要写博客了。

## 写博客

关于相关的一些基本知识虽然马上就介绍但我还是强烈推荐这篇文章[一步步在GitHub上创建博客主页(5)](http://www.pchou.info/web-build/2013/01/07/build-github-blog-page-05.html)，他这里用了一个简单的例子来介绍，很容易理解。

先我们来了解下博客的目录结构（查看文件目录结构命令：tree/f（windows）或tree（linux））

	│  index.html
	│  params.json
	│  README.md
	│  _config.yml	#主题配置文件 {{<font color="red">adfasd</font>}}
	│
	├─images	#图片文件夹
	│      change_project_name.gif
	│      checker.png
	│      create_post.gif
	│      create_project.gif
	│      invoke_stack.png
	│      thread.png
	│      ui_demo.png
	│
	├─javascripts	#js文件夹
	│      scale.fix.js
	│
	├─stylesheets	#css文件夹
	│      pygment_trac.css
	│      styles.css
	│
	├─_includes		#保存配置，该配置将影响jekyll构造网站的各种行为。关于配置的详细文档在这里
	│      comments.ext
	│
	├─_layouts		#该目录下的文件作为主要的模板文件
	│      default.html
	│
	├─_posts		#文章或网页应当放在这个目录中，但需要注意的是，文章的文件名必须是YYYY-MM-DD-title
	│      2014-09-20-java-concurrency.md
	│
	└─_site			#静态网页默认的转化结果存放的目录
	    │  index.html
	    │  params.json
	    │  README.md
	    │
	    ├─2014
	    │  └─09
	    │      └─20
	    │              java-concurrency.html
	    │
	    ├─images
	    │      change_project_name.gif
	    │      checker.png
	    │      create_post.gif
	    │      create_project.gif
	    │      invoke_stack.png
	    │      thread.png
	    │      ui_demo.png
	    │
	    ├─javascripts
	    │      scale.fix.js
	    │
	    └─stylesheets
	            pygment_trac.css
	            styles.css

了解它的目录结构后，我们还需要了解这三个文件：

*	模板类（_layouts/default.html）
	
    如果想改模板的可以去看看，这里不多做说明，给各位一个模板传送门[http://jekyllthemes.org/](http://jekyllthemes.org/)。

*	首页（index.html）

```html
	---
	layout: default		#当前页面使用的父模板
	title: 文章目录		#页面标题
	---
	<ul class="post-list">
		<!--下面这个循环就是遍历“_posts”文件夹内所有的博客文章-->
		{% raw %}{% for post in site.posts %}
	        <a href="{{site.baseurl}}{{post.url}}"> {{ post.title }}</a>{{ post.date | date: "%F" }} <br>
	    {% endfor %}{% endraw %}
	</ul>
```

*	博客页面（_posts/2014-09-20-java-concurrency.md）

	这个页面与首页类似

了解以上信息后我们就是可以写自己的博客，只需复制一份《2014-09-20-java-concurrency.md》并将文件名和文章标题作相应的修改，然后将原有的内容换成新内容。

我们打开原有的《Java 中的并发》这篇博客会发现，它的内容有很多漂亮的格式，这个是怎么做到的呢？当然你可以看他的源代码，但是如果我们要用一个他这里没有的格式怎么办呢？别担心，请看下一节。

## Markdown语法

没错，我们前面提到的那些格式就是用Markdown编辑的。

###	编辑工具

正所谓“工欲善其事必先利其器”，这里就推荐几个Markdown的编辑工具，这些工具可以编写博客边看效果相当好用

*	Windows：[MarkdownPad](http://markdownpad.com/)
*	Linux：[ReText](http://sourceforge.net/p/retext/home/ReText/)

### 基本语法

参考[markdown官网](http://daringfireball.net/projects/markdown/syntax)

不喜欢看英文的可以进这个门[Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/)

![markdown_syntax](/images/2015-04-04-build-github-blog-platform/markdown_syntax.png)

### 代码块Liquid命令文本显示

```vim

{ % raw %}			#{ %中间的空格删除

{ % endraw %}		#{ %中间的空格删除

```

## Jekyll本地调试

安装就不多介绍了，请参考[Jekyll Installation](http://jekyllrb.com/docs/installation/)或者[http://www.pchou.info/web-build/2013/01/05/build-github-blog-page-04.html](http://www.pchou.info/web-build/2013/01/05/build-github-blog-page-04.html)

安装完后，进入项目根目录执行”jekyll serve”即可启动本地服务。服务启动后在浏览器中输入“http://localhost:4000/”，有时候可能还需带上项目名（“http://localhost:4000/projectname/”），正常情况下就可以看到你的博客（注意：本地博客与github上的访问可能存在差异，当两者样式不一致或者图片找不到时可以修改下样式和图片访问路径）。

启用jekyll服务的好处就是修改博客后直接刷新博客即可看到效果，无需重新启动也无需提交到服务器；如果博文的样式已修改但刷新后却又看不到效果，这时你可以看看控制台，如下图

![20150406201935](/images/2015-04-04-build-github-blog-platform/20150406201935.png)

1表示新修改的样式不对，你需要认真检查；2是正常情况，刷新即可看到效果。

### 异常1

```sh

Configuration file: D:/4364/StrayBirds/_config.yml
       Deprecation: The 'pygments' configuration option has been renamed to 'hig
hlighter'. Please update your config file accordingly. The allowed values are 'r
ouge', 'pygments' or null.

```

解决方法

将_config.yml中的pygments: true修改为highlighter: pygments即可

### 异常2

```sh

D:/Ruby22-x64/lib/ruby/2.2.0/rubygems/core_ext/kernel_require.rb:54:in `require'
: cannot load such file -- nokogiri (LoadError)

```

>	注：在windows上尽管已安装但还是报错，ubuntu上正常

解决方法

安装bundler

	gem install nokogiri

### 异常3

```sh

ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)
    Errno::ECONNRESET: An existing connection was forcibly closed by the remote
host. - SSL_connect (https://api.rubygems.org/quick/Marshal.4.8/nokogiri-1.4.3.1.gemspec.rz)

```

解决方法

原因：是GFW的原因，他们提供了一个gem server。

	$ gem sources --remove https://rubygems.org/
	$ gem sources -a https://ruby.taobao.org/
	$ gem sources -l
	
请确保只有 ruby.taobao.org

### 异常4

```sh

D:/Ruby22-x64/lib/ruby/site_ruby/2.2.0/rubygems/core_ext/kernel_require.rb:54:in
 `require': cannot load such file -- iconv (LoadError)

```

	gem install iconv
	
>	注：在windows上尽管已安装但还是报错，ubuntu上正常

## 绑定域名

本人暂时还未绑定域名，无从谈起，请参考[一步步在GitHub上创建博客主页(3)](http://www.pchou.info/web-build/2013/01/05/build-github-blog-page-03.html)。

## 参考资料

[一个兼容Liquid语法的模板引擎](http://www.open-open.com/lib/view/open1361323129134.html#_label9)

[搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)

[一步步在GitHub上创建博客主页](http://www.pchou.info/web-build/2013/01/03/build-github-blog-page-01.html)

[我的日常使用之Markdown](http://www.cnblogs.com/gotaly/articles/2433085.html)

[http://jekyllbootstrap.com/](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
