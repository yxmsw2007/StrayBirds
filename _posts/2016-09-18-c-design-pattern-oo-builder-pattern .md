---
layout: post
title: C语言设计模式-建造者模式
comments: true
category: C/C++
tags: [设计模式, 建造者模式]
---

## 建造者模式

将一个复杂对象的构造与它的表示分离，使得同样的构建过程可以创建不同的表示。

### 适用性

*	当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。

*	当构造过程必须允许被构造的对象有不同的表示时。

如果说前面的工厂模式是对接口进行抽象化处理，那么建造者模式更像是对流程本身的一种抽象化处理。

```c

typedef struct _AssemblePersonalComputer
{
    void (*assemble_cpu)();
    void (*assemble_memory)();
    void (*assemble_harddisk)();
}AssemblePersonalComputer;

void assemble_intel_cpu()
{
    printf("intel cpu!\n");
}

void assemble_samsung_memory()
{
    printf("samsung memory!\n");
}

void assemble_hitachi_harddisk()
{
    printf("hitachi harddisk!\n");
}

void assemble_amd_cpu()
{
    printf("amd cpu!\n");
}

void assemble_kingston_memory()
{
    printf("kingston memory!\n");
}

void assemble_western_digital_harddisk()
{
    printf("western digital harddisk!\n");
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（建造者模式）](http://blog.csdn.net/feixiaoxing/article/details/7169888)
