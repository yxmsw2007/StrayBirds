---
layout: post
title: C语言设计模式-享元模式
comments: true
category: C/C++
tags: [设计模式, 享元模式]
---

## 享元模式

运用共享技术有效地支持大量细粒度的对象

### 适用性

*	一个应用程序使用了大量的对象。

*	完全由于使用大量的对象，造成很大的存储开销。

*	对象的大多数状态都可变为外部状态。

*	如果删除对象的外部状态，那么可以用相对较少的共享对象取代很多组对象。

*	应用程序不依赖于对象标识。由于Flyweight对象可以被共享，对于概念上明显有别的对象，标识测试将返回真值。

大家在使用电脑的使用应该少不了使用WORD软件。使用WORD呢， 那就少不了设置模板。什么模板呢，比如说标题的模板，

正文的模板等等。这些模板呢，又包括很多的内容。哪些方面呢，比如说字体、标号、字距、行距、大小等等。

```c

typedef struct _Font
{
    int type;
    int sequence;
    int gap;
    int lineDistance;
    void (*operate)(struct _Font* pFont);
}Font;

typedef struct _FontFactory
{
    Font** ppFont;
    int number;
    int size;
    Font* GetFont(struct _FontFactory* pFontFactory, int type, int sequence, int gap, int lineDistance);
}FontFactory;

Font* GetFont(struct _FontFactory* pFontFactory, int type, int sequence, int gap, int lineDistance)
{
    int index;
    Font* pFont;
    Font* ppFont;
    if (NULL != pFontFactory) {
        return NULL;
    }
    for (index = 0; index < pFontFactory->number; index++) {
        if (type != pFontFactory->ppFont[index]->type) {
            continue;
        }
        if (sequence != pFontFactory->ppFont[index]->sequence) {
            continue;
        }
        if (gap != pFontFactory->ppFont[index]->gap) {
            continue;
        }
        if (lineDistance != pFontFactory->ppFont[index]->lineDistance) {
            continue;
        }
        return pFontFactory->ppFont[index];
    }
    pFont = (Font*)malloc(sizeof(Font));
    assert(NULL != pFont);
    pFont->type = type;
    pFont->sequence = sequence;
    pFont->gap = gap;
    pFont->lineDistance = lineDistance;
    if (pFontFactory->number < pFontFactory->size) {
        pFontFactory->ppFont[index] = pFont;
        pFontFactory->number++;
        return pFont;
    }
    ppFont = (Font**)malloc(sizeof(Font*) * pFontFactory->size * 2);
    assert(NULL != ppFont);
    memmove(ppFont, pFontFactory->ppFont, pFontFactory->size);
    free(pFontFactory->ppFont);
    pFontFactory->size *= 2;
    pFontFactory->number++;
    ppFontFactory->ppFont = ppFont;
    return pFont;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（享元模式）](http://blog.csdn.net/feixiaoxing/article/details/7104338)
