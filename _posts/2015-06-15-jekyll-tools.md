---
layout: post
title: 给你的博客添加一些实用工具
comments: true
category: Internet
tags: [Jekyll, 流量统计, 分页, 插件, 工具]
---

现在网上有很多博客主题，很多都已内置了部分工具，也许内置的因为某些特定的原因你用不了，又或者缺少你要的，那么你可以参考下我这篇文章

>	注：以下所有代码均以本人博客为例

##	百度统计

每个写文章的人都会很关心到底有多少人看的自己的文章，看文章的的用户都集中在哪些地区，每天都有多少人来光顾站点等等；

这里我们就不得不对网站进行流量统计了，Jekyll搭建的博客平台已经内置了Google统计，但由于GFW的原因，国内用户使用很不方便，所以我们选择了百度统计，下面就来总结下百度统计的添加步骤。

*	注册登录

不用多说，第一步肯定是注册登录了，[http://tongji.baidu.com/web/welcome/login](http://tongji.baidu.com/web/welcome/login)

*	添加网址并获取js代码

进入后选择网站中心将你的网址添加进去，成功后将鼠标移到新增的网址那一栏上会显示出“获取代码”选项，点进去就可以看到js代码了，复制一下

*	添加js代码

将上面复制的代码添加到你的主题模板中，本人是添加在_layouts/default.html中。

网上有不少人是将这部分代码放到了一个js脚本中，然后再导入这个脚本，这样也是可以的，不过这种方式在你验证代码是否成功的时候会检测失败。

*	检测代码安装是否成功

回到百度统计，“首页代码状态”栏有个刷新按钮，点击检测下，正常就会返回成功。检测成功后可能无法立即查看数据需要等一会。

##	首页分页显示

Jekyll官方介绍[Pagination](http://jekyllrb.com/docs/pagination/)

*	在_config.yml中添加如下代码

```js

paginate: 5
paginate_path: "page:num"

```

*	index.html换成如下内容

```js

{% for post in paginator.posts %}
<div>
    <h2 class="h2 entry-title"><a href="http://{{site.username}}.github.io{{ post.url }}" target="_blank">{{ post.title }}</a> </h2>
    <div class="entry-meta">
        更新: <span>{{ post.date | date:"%Y-%m-%d" }}</span>
        |
        <span>作者:<a href="http://{{site.username}}.github.io/">{{site.username}}</a></span>
    </div>
    {{ post.content  | strip_html | truncate: 200 }}
    <p> <a href="{{ post.url }}#more" class="more-link" target="_blank"><span class="readmore">阅读全文 &raquo; </span></a></p>
</div>
{% endfor %}

<!-- Pagination links -->
<div id="pagination">
    <div class="pagenavi">
        <span class="page_number">第{{paginator.page}}页/共{{paginator.total_pages}}页</span>
        <a href="/">首页</a>
        {% if paginator.previous_page %}
        {% if paginator.previous_page == 1 %}
        <a href="/" class="current"><<前页</a>
        {% else %}
        <a href="/page{{paginator.previous_page}}/"><<前页</a>
        {% endif %}
        {% else %}
        <span><<前页</span>
        {% endif %}
        {% for count in (2..paginator.total_pages) limit:6 %}
        {% if count == paginator.page %}
        <span class="current-page">{{count}}</span>
        {% else %}
        <a href="/page{{count}}/">{{count}}</a>
        {% endif %}
        {% endfor %}
        {% if paginator.next_page %}
        <a href="/page{{paginator.next_page}}/">后页>></a>
        {% else %}
        <span>后页>></span>
        {% endif %}
        <a href="/page{{paginator.total_pages}}/">末页</a>
    </div>
</div>

```

##	网站搜索-Swiftype

[https://swiftype.com/](https://swiftype.com/)

Swiftype的基本使用很简单，注册，添加你的网站，它会自动搜索你 Sitemap 或者 RSS 等功能来索引你的网站。

添加Swiftype最关键的是要找到安装的js代码，入口可能稍微不好找，添加网站后会出现Dashboard界面然后按以下顺序操作：

Search engines(你的网址engine)->INTEGRATE->INSTALL SEARCH->CHANGE CONFIGURATION->INSTALL CODE

至此就可以看到安装代码了

```js

<script type="text/javascript">
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

  _st('install','LtBVtsvGBRmsjyzj2xwx','2.0.0');
</script>

```

设置好Search engine后别忘了activate，点击ACTIVATE(在INSTALL CODE下方)然后拉到底部就能看到“ACTIVATE SWIFTYPE”按钮了。

安装只需要将上面的代码放到博客模板中就行了

本人放在_layouts\default.html内

##	RSS订阅

RSS订阅是站点用来和其他站点之间共享内容的一种简易方式,即Really Simple Syndication(简易信息聚合)。Jekyll添加RSS订阅步骤如下：

*	在_config.yml文件 添加下列属性

```js

username: yxmsw2007
description: yxmsw2007's blog
baseurl: /yxmsw2007.github.io

```

>	注：如果你的配置文件中已有类似的属性，如name或url等则无需按我这个添加，不过对应的feed.xml要做相应的修改

*	在网站根目录下添加 feed.xml

我的feed.xml代码如下：

```js

---
layout: none
---
<?xml version="1.0" encoding="UTF-8"?> 
<?xml-stylesheet type="text/css" href="book.css"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"> 
	<channel> 
		<title>{{ site.username }}</title> 
		<description>{{ site.description }}</description> 
		<link>{{ site.baseurl}}</link> 
		<atom:link href="{{site.baseurl}}/feed.xml" rel="self" type="application/rss+xml" /> 
		{% for post in site.posts limit:10 %} 
		<item> 
			<title>{{ post.title }}</title> 
			<description>{{ post.content | xml_escape }}</description> 
			<pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate> 
			<link>{{ site.baseurl}}{{ post.url }}</link> 
			<guid isPermaLink="true">{{ site.baseurl}}{{ post.url }}</guid> 
		</item> 
		{% endfor %}
	</channel> 
</rss>

```

>	注：如果你用jekyll进行本地调试，启动服务的时候可能会报找不到layout：none的情况，不需要管他。

*	发布

在你网站的合适地方添加如下代码：

<a href="{{ site.url }}/feed.xml" target="_blank">RSS订阅</a>

##	网址收录

*	网站提交

将网站提交给百度： [http://www.baidu.com/search/url_submit.html](http://www.baidu.com/search/url_submit.html)

将网站提交给谷歌： [http://www.google.com/addurl/](http://www.google.com/addurl/)

将网站提交给必应： [http://cn.bing.com/webmaster/SubmitSitePage.aspx?mkt=zh-CN](http://cn.bing.com/webmaster/SubmitSitePage.aspx?mkt=zh-CN)

将网站提交给搜狗： [http://www.sogou.com/feedback/urlfeedback.php](http://www.sogou.com/feedback/urlfeedback.php)

将网站提交给搜搜： [http://www.soso.com/help/usb/urlsubmit.shtml](http://www.soso.com/help/usb/urlsubmit.shtml)

将网站提交给酷帝： [http://www.coodir.com/accounts/addsite.asp](http://www.coodir.com/accounts/addsite.asp)

将网站提交给114啦： [http://url.114la.com/](http://url.114la.com/)

freewebsubmission网站批量提交：[http://www.freewebsubmission.com/](http://www.freewebsubmission.com/)

*	博客提交

将博客提交给百度博客搜索： [http://utility.baidu.com/blogsearch/submit.php](http://utility.baidu.com/blogsearch/submit.php)

将博客提交给百度博客搜索(RSS): [http://ping.baidu.com/ping.html](http://ping.baidu.com/ping.html)

将博客提交给谷歌博客搜索： [http://blogsearch.google.com/ping?hl=zh-CN](http://blogsearch.google.com/ping?hl=zh-CN)

将博客提交给搜搜：[http://blog.soso.com/join.html](http://blog.soso.com/join.html)

将博客提交给中国人博客搜索引擎： [http://so.blogchinese.com/search/url_submit.php](http://so.blogchinese.com/search/url_submit.php)

将博客提交给IceRocket： [http://www.icerocket.com/c?p=ping](http://www.icerocket.com/c?p=ping)

*	收录查询

网站、博客收录情况查询： [http://indexed.webmasterhome.cn/](http://indexed.webmasterhome.cn/)

##	jekyll Sitemap

[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)

*	在Gemfile中添加如下代码

如果你的根目录下没有Gemfile文件，新建一个并添加如下代码

```js

# source "https://rubygems.org" //官方镜像地址，国内用户可能访问不了
source 'https://ruby.taobao.org/'
gem 'jekyll-sitemap'

```

*	在_config.yml中添加如下代码

```js

gems:
- jekyll-sitemap

```

>	注：如果你在本地用jekyll调试可能会报找不到jekyll-sitemap的错，需要在本地安装才行，另外window上发现装了也不行，可能环境配错了，总之不管你做不做本地调试，上传到github后就可以用了

*	验证

如果你能在_site目录下看到sitemap.xml文件就说明配置成功了。

##	Table of Content

我看大多数认得table content都是放在文章的开头，从本人浏览网页的习惯来看尤其是浏览篇幅比较长的文章时经常需要跳到特定的某一章节去，所以本人对table content进行些许的修改，让他悬浮在右下角处，这样就可以随时随地的跳转。

本人使用的Table of Content原型来源于[markdown_toc](https://github.com/i5ting/markdown_toc)，有兴趣的可以下下来研究研究。

*	修改default.html

在head部分添加如下代码

```html

<!-- ztree css -->
<link rel="stylesheet" href="/stylesheets/zTreeStyle.css" type="text/css">

<!-- ztree js -->
<script src="/javascripts/jquery-1.4.4.min.js"> </script>
<script src="/javascripts/jquery.ztree.core-3.5.js"></script>
<script src="/javascripts/ztree_toc.js"></script>

```

*	添加js代码

```html

$(document).ready(function () {
	$('#tree').ztree_toc({
		//is_posion_top:true
		//is_auto_number: true,
		//documment_selector: '.first_part'
	});
});

```

>	注：markdown_toc项目的Usages是让添加到html中，不过本人不想那么麻烦就直接放在了ztree_toc.js的最前面

*	修改Table content容器控件ID和class

```html

<section id="tree" class="ztree"></section>

```

>	注：建议不要放到default中，如果ztree容器在网页内容之前被加载会闪现一下混乱样式，所以建议放到post.html并且放在content后面

*	修改ztree_toc.js

另外我还对ztree的样式进行了如下修改

```js

ztreeStyle : {
	//background:'#333',
	width : '23%',
	overflow : 'auto',
	position : 'fixed',
	'z-index' : 2147483647,
	border : '0px none',
	top : '50%',
	right : '1%',
	//bottom:'10px',
	color : '#ffffff',
	height : '50%',
	//visibility:'visible',
	//visibility:'hidden',
	display : 'none',
	//display : 'block',
	//vertical-align:'middle'
},
		
```

##	网址二维码

推荐几个在线生成二维码网址

[草料二维码](http://cli.im/)

[创意二维码](http://www.wwei.cn/)

生成的二维码保存图片然后放到你网站合适的地方就可以了。

##	Related Posts

_layouts/post.html

```js

<section>
<h1>Related Posts</h1>
<table>
{% for post in site.related_posts limit:3 %}
  <tr>
	<th><a href="{{ post.url }}">{{ post.title }}</a></th>
	<td>{{ post.date | date: "%F" }}</td>
	<td><a href="{{ post.url }}#disqus_thread">Comments</a></td>
  </tr>
{% endfor %}
</table>
</section>

```

## 参考资料

[markdown_toc](https://github.com/i5ting/markdown_toc)

