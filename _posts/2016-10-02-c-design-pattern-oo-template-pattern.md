---
layout: post
title: C语言设计模式-模板模式
comments: true
category: C/C++
tags: [设计模式, 模板模式]
---

## 模板模式

定义一个操作中的算法的骨架，并将一些步骤延迟到子类中。TemplateMethod使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

### 适用性

*	一次性实现一个算法的不变的部分，并将可变的部分留给子类来实现。

*	各子类中公共的行为应被提取出来并集中到一个公共父类中以避免代码重复。首先识别现有代码中的不同之处，并且将不同之处分离为新的操作。最后，用一个调用这些新的操作的模板方法来替换这些不同的代码。

*	控制子类扩展。

template主要是一种流程上的统一，细节实现上的分离。

```c

typedef struct _Basic
{
    void* pData;
    void (*step1)(struct _Basic* pBasic);
    void (*step2)(struct _Basic* pBasic);
    void (*process)(struct _Basic* pBasic);
}Basic;

void process(struct _Basic* pBasic)
{
    pBasic->step1(pBasic);
    pBasic->step2(pBasic);
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（之模板模式）](http://blog.csdn.net/feixiaoxing/article/details/7079326)
