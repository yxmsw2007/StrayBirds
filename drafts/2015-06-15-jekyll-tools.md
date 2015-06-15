---
layout: post
title: 给你的博客添加一些实用工具
comments: true
---

现在网上有很多博客主题，很多都已内置了部分工具，也许内置的因为某些特定的原因你用不了，又或者缺少你要的，那么你可以参考下我这篇文章

>	注：以下所有代码均以本人博客为例

##	百度统计

每个写文章的人都会很关心到底有多少人看的自己的文章，看文章的的用户都集中在哪些地区，每天都有多少人来光顾站点等等；

这里我们就不得不对网站进行流量统计了，Jekyll搭建的博客平台已经内置了Google统计，但由于GFW的原因，国内用户使用很不方便，所以我们选择了百度统计，下面就来总结下百度统计的添加步骤。

1.	注册登录

不用多说，第一步肯定是注册登录了，[http://tongji.baidu.com/web/welcome/login](http://tongji.baidu.com/web/welcome/login)

2.	添加网址并获取js代码

进入后选择网站中心将你的网址添加进去，成功后将鼠标移到新增的网址那一栏上会显示出“获取代码”选项，点进去就可以看到js代码了，复制一下

3.	添加js代码

将上面复制的代码添加到你的主题模板中，本人是添加在_layouts/default.html中。

网上有不少人是将这部分代码放到了一个js脚本中，然后再导入这个脚本，这样也是可以的，不过这种方式在你验证代码是否成功的时候会检测失败。

4.	检测代码安装是否成功

回到百度统计，“首页代码状态”栏有个刷新按钮，点击检测下，正常就会返回成功。检测成功后可能无法立即查看数据需要等一会。

##	首页分页显示

Jekyll官方介绍[Pagination](http://jekyllrb.com/docs/pagination/)

在_config.yml中添加如下代码

```js

paginate: 5
paginate_path: "page:num"

```

index.html换成如下内容

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

##	RSS订阅

##	网址收录

##	jekyll Sitemap

##	Table of Content

##	网址二维码

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



