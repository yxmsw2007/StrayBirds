---
layout: post
title: 用VIM写博客
comments: true
category: Internet
tags: [vim, blog, 博客]
---

>   系统：Ubuntu（部分内容不局限于Ubuntu）

既然讲的就是vim写博客，那么首要的就是要了解vim是什么，要怎么使用，然后才是怎么用vim写出一片格式整洁的博客来，

下面我们先来看看vim部分

## vim是什么

vim就是一个编辑器，就跟windows下的txt文本编辑器一样就是编辑文本用的，但它与文本编辑器不一样的地方是vim提供了

大量的快捷键，使得我们在编辑文件的时候大大的提高效率，再加上支持插件更使得我们编辑文件事半功倍。

## vim安装

    $sudo apt-get install vim-gtk

## vim入门

个人觉得入门最好的学习资料就是vimtutor，每天照着tutor练习一遍，当七章vim的tutor能在20分钟内完成基本就可以了，启动命令

    $vimtutor

## vim进阶

当你对vim掌握到一定程度后，就可以慢慢的在日常生活中应用了。在实际应用中为了提高工作效率有两项内容是一定要学会的，

一个是.vimrc文件配置另一个是插件安装。

这里我先说下插件安装，本人的插件都是用的Vundle，我也强烈建议你也用它来管理插件，真的方便又简单

### Vundle

安装

    $ git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim

添加以下信息到.vimrc（～/.vimrc，没有就手动创建）文件中

```vim
   set nocompatible              " be iMproved, required
   filetype off                  " required

   " set the runtime path to include Vundle and initialize
   set rtp+=~/.vim/bundle/Vundle.vim
   call vundle#begin()

   " 这里配置需要安装的插件，插件的是否启动也是通过这里是否配置决定的，另外在vim中安装的插件也一定要在这里配置，
   " 因为在执行PluginClean命令时所有未在这里配置的插件都会被清除，插件配置如下

   Plugin 'a.vim'

   call vundle#end()            " required
   filetype plugin indent on    " required
   " To ignore plugin indent changes, instead use:
   "filetype plugin on
   "
   " Brief help
   " :PluginList       - lists configured plugins
   " :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
   " :PluginSearch foo - searches for foo; append `!` to refresh local cache
   " :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
   "
   " see :h vundle for more details or wiki for FAQ
   " Put your non-Plugin stuff after this line
```

更详细的配置请参考这里[gmarik/Vundle.vim](https://github.com/gmarik/Vundle.vim)

### .vimrc

.vimrc文件的配置内容有点多，大伙有什么不明白的可以参考下我的，有需要的朋友下载[yxmsw2007/dotvim](https://github.com/yxmsw2007/dotvim)

其中README.MD罗列了一些常用的自定义快捷键，可以参考下。

## 博客

博客平台的搭建可以参考下[Github搭建博客平台](http://yxmblog.com/internet/2015/04/04/build-github-blog-platform.html)

博客排版主要是依赖Markdown语法，语法规则可以看这里[Markdown语法](http://yxmblog.com/internet/2015/04/04/build-github-blog-platform.html#40802)

其实只要对VIM和Markdown比较熟了，写个博客还不是分分钟的事。

好了就到这了，3Q!

## 参考资料

[简明 Vim 练级攻略](http://coolshell.cn/articles/5426.html)

[VIM（Unix及类Unix系统文本编辑器)](http://baike.baidu.com/link?url=yvwNM1yWXr1BIEiV5LgOY9_WT5EUL995wJrybJbksyrDI0KPVOkmGk96cISHsMFnhwuuewhHgMt7YrnQap3PlyW2trxbIchJ6n7CkBjPxX3#1)
