---
layout: post
title: C语言设计模式-策略模式
comments: true
category: C/C++
tags: [设计模式, 策略模式]
---

## 策略模式

定义一系列的算法,把它们一个个封装起来,并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。

### 适用性

*	许多相关的类仅仅是行为有异。“策略”提供了一种用多个行为中的一个行为来配置一个类的方法。

*	需要使用一个算法的不同变体。

*	算法使用客户不应该知道的数据。可使用策略模式以避免暴露复杂的、与算法相关的数据结构。

*	一个类定义了多种行为,并且这些行为在这个类的操作中以多个条件语句的形式出现。

策略模式就是用统一的方法接口分别对不同类型的数据进行访问。比如说，现在我们想用pc看一部电影，

此时应该怎么做呢？看电影嘛，当然需要各种播放电影的方法。rmvb要rmvb格式的方法，avi要avi的方法,

mpeg要mpeg的方法。可是事实上，我们完全可以不去管是什么文件格式。因为播放器对所有的操作进行了抽象，

不同的文件会自动调用相应的访问方法。

```c

typedef struct _MoviePlay
{
    struct _CommMoviePlay* pCommMoviePlay;
}MoviePlay;

typedef struct _CommMoviePlay
{
    HANDLE hFile;
    void (*play)(HANDLE hFile);
}CommMoviePlay;

void play_movie_file(struct MoviePlay* pMoviePlay)
{
    CommMoviePlay* pCommMoviePlay;
    assert(NULL != pMoviePlay);
    pCommMoviePlay = pMoviePlay->pCommMoviePlay;
    pCommMoviePLay->play(pCommMoviePlay->hFile);
}

void play_avi_file(HANDLE hFile)
{
    printf("play avi file!\n");
}

void play_rmvb_file(HANDLE hFile)
{
    printf("play rmvb file!\n");
}

void play_mpeg_file(HANDLE hFile)
{
    printf("play mpeg file!\n");
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（策略模式）](http://blog.csdn.net/feixiaoxing/article/details/7166055)
