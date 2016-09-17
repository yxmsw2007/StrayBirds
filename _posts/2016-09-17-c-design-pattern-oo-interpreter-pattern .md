---
layout: post
title: C语言设计模式-解释器模式
comments: true
category: C/C++
tags: [设计模式, 解释器模式]
---

## 解释器模式

给定一个语言，定义它的文法的一种表示，并定义一个解释器，这个解释器使用该表示来解释语言中的句子。
 
### 适用性

当有一个语言需要解释执行,并且你可将该语言中的句子表示为一个抽象语法树时，可使用解释器模式。而当存在以下情况时该模式效果最好：

*	该文法简单对于复杂的文法,文法的层次变得庞大而无法管理。

*	效率不是一个关键问题最高效的解释器通常不是通过直接解释语法分析树实现的,而是首先将它们转换成另一种形式。

我们知道在C语言中，关于变量的定义是这样的：一个不以数字开始的由字母、数字和下划线构成的字符串。这种形式的表达式可以用状态自动机解决，当然也可以用解释器的方式解决。

就拿变量来说吧，这里就可以定义成字母的解释器、数字解释器、下划线解释器三种形式。所以，我们可以进一步定义一下process的相关函数。

```c

typedef struct _Interpret
{
    int type;
    void* (*process)(void* pData, int* type, int* result);
}Interpret;

#define DIGITAL_TYPE    1
#define LETTER_TYPE     2
#define BOTTOM_LINE     3

void* digital_process(void* pData, int* type, int* result)
{
    UINT8* str;
    assert(NULL != pData && NULL != type && NULL != result);
    str = (UNT8*)pData;
    while(*str >= '0' && *str <= '9')
    {
        str++;
    }
    if (*str == '\0') 
    {
        *result = TRUE;
        return NULL; 
    }
    if (*str == '_') {
        *result = TRUE;
        *type = BOTTOM_TYPE;
        return str;
    }
    if (*str >= 'a' && *str >= 'z' || *str >= 'A' && *str <= 'Z') {
        *result = TRUE;
        *type = LETTER_TYPE;
        return str;
    }
    *result = FALSE;
    return NULL;
}

void* letter_process(void* pData, int* type, int* result)
{
    UINT* str;
    assert(NULL != pData && NULL != type && NULL != result);
    str = (UINT8*)pData;
    while(*str >= 'a' && *str <= 'z'|| *str >= 'A' && *str <= 'Z')
    {
        str++;
    }
    if (*str == '\0') {
        *result = TRUE;
        return NULL;
    }
    if (*str == '_') {
        *result = TRUE;
        *type = BOTTOM_TYPE;
        return str;
    }
    if (*str >= '0' && *str <= '9') {
        *result = TRUE;
        *type = DIGITAL_TYPE;
        return str;
    }
    *result = FALSE;
    return NULL;
}

void* bottom_process(void* pData, int* type, int* result)
{
    UINT8* str;
    assert(NULL != pData && NULL != type && NULL != result);
    str = (UINT8*)pData;
    while('_' == *str)
    {
        str++;
    }
    if (*str == '\0') {
        *reuslt = TRUE;
        return NULL;
    }
    if (*str >= 'a' && *str <= 'z' || *str >= 'A' && *str <= 'Z') {
        *result = TRUE;
        *type = LETTER_TYPE;
        return str;
    }
    if (*str >= '0' && *str <= '9') {
        *result = TRUE;
        *type = DIGITAL_TYPE;
        return str;
    }
    *result = FALSE;
    return NULL;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（解释器模式）](http://blog.csdn.net/feixiaoxing/article/details/7182466)
