---
layout: post
title: 如何在已有的网页中添加盗链  
comments: true
category: Html
tags: [盗链, 浏览器插件]
---

## 起因

有个朋友让我帮他在网页上增加个超链接，之前不知道怎么做，网上查资料说是叫做添加盗链，后来才知道，其实只需要在浏览器端实现一个增加超链接的插件即可

## 环境

浏览器：Firefox

## 实现

1)  安装[greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)，关于Greasemonkey的用法可参考这篇文章[我的 Web 我做主: Greasemonkey 入门篇](https://www.ibm.com/developerworks/cn/opensource/os-cn-greasemonkey/)

2)    写js脚本，这里实现的是动态添加一个按钮脚本，超链接的也是一样的，至于脚本怎么应用也可以参考上面的教程

```js

$(function(){
     var btn=$("<input type='button' id='testBtn' value='Test'>");
     $("body").append(btn);
     addBtnEvent("testBtn");
 });

function addBtnEvent(id){
    $("#"+id).bind("click",function(){
        alert("Test");
    });
}

```

## 参考资料

