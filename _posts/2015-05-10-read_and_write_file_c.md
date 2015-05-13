---
layout: post
title: C读写文件方式
comments: true
---

## open与fopen

int open(const char *path, int access,int mode)

path 要打开的文件路径和名称

access 访问模式，宏定义和含义如下：

O_RDONLY         1    只读打开

O_WRONLY         2    只写打开

O_RDWR           4    读写打开

还可选择以下模式与以上3种基本模式相与：

O_CREAT     0x0100   创建一个文件并打开

O_TRUNC     0x0200   打开一个已存在的文件并将文件长度设置为0，其他属性保持

O_EXCL      0x0400   未使用

O_APPEND    0x0800   追加打开文件

O_TEXT      0x4000   打开文本文件翻译CR-LF控制字符

O_BINARY    0x8000   打开二进制字符，不作CR-LF翻译

mode 该参数仅在access=O_CREAT方式下使用，其取值如下：

S_IFMT      0xF000   文件类型掩码

S_IFDIR     0x4000   目录

S_IFIFO     0x1000   FIFO 专用

S_IFCHR     0x2000   字符专用

S_IFBLK     0x3000   块专用

S_IFREG     0x8000   只为0x0000

S_IREAD     0x0100   可读

S_IWRITE    0x0080   可写

S_IEXEC     0x0040   可执行

FILE *fopen(char *filename, char *mode)

filename 文件名称

mode 打开模式：

r   只读方式打开一个文本文件

rb  只读方式打开一个二进制文件

w   只写方式打开一个文本文件

wb  只写方式打开一个二进制文件

a   追加方式打开一个文本文件

ab  追加方式打开一个二进制文件

r+  可读可写方式打开一个文本文件

rb+ 可读可写方式打开一个二进制文件

w+  可读可写方式创建一个文本文件

wb+ 可读可写方式生成一个二进制文件

a+  可读可写追加方式打开一个文本文件

ab+ 可读可写方式追加一个二进制文件

open和fopen的区别：

前者属于低级IO，后者是高级IO。

前者返回一个文件描述符，后者返回一个文件指针。

前者无缓冲，后者有缓冲。

前者与 read, write 等配合使用， 后者与 fread, fwrite等配合使用。

后者是在前者的基础上扩充而来的，在大多数情况下，用后者

## fgetc和fputc

int fgetc(FILE *stream)

fgetc()函数从输入流的当前位置返回一个字符，并将文件指针指示器移到下一个字符处，如果已到文件尾，函数返回EOF，此时表示本次操作结束，若读写文件完成，则应关闭文件。

int fputc(int ch,FILE *stream)

fputc()函数完成将字符ch的值写入所指定的流文件的当前位置处，并将文件指针后移一位。fputc()函数的返回值是所写入字符的值，出错时返回EOF。

```C

#include <stdio.h>

int main(int argc, char* argv[]) {

    char ch;

    FILE *fp, *fp2;

    int i;
    
    if ((fp = fopen(argv[1], "r")) == NULL) {

        printf("not open!");

        return 0;
    
    }

    if ((fp2 = fopen(argv[2], "w")) == NULL) {

        printf("not open fp2!");

        return 0;
    
    }

    while((ch = fgetc(fp)) != EOF) {

        putchar(ch); 

        fputc(ch, fp2);
    
    }

    fclose(fp);

    fclose(fp2);

    printf("Hello World!\n");

    return 0;

}

```

## fscanf和fprintf

nt fscanf(FILE *stream,char *format,arg_list)

int fprintf(FILE *stream,char *format,arg_list)

对文件的格式化读写就是在上述函数的前面加一个字母f成为fscanf(  )和fprintf(  ) 

其中，stream为流文件指针，其余两个参数与scanf(  )和printf(  )用法完全相同。

``c

#include <stdio.h>

/*

将一些格式化的数据写入文本文件，再从该文件中医格式化方法读出显示在屏幕上，

其格式化数据是两个学生记录，包括姓名、学号、两科成绩。

 * */ 

 int main(int argc, char* argv[]) {

     struct stu { /* 定义结构体类型 */ 

        char name[15];

        char num[6];

        float score[2];

     } student; /* 说明结构体变量 */ 

     FILE *fp;

     if ((fp = fopen(argv[1], "w")) == NULL) {

        printf("not open %s!", argv[1]);

        return 0;

     }

     int i; /* 在循环条件中声明变量的话，只在C99标准中支持，C90标准不支持 */ 

     for (i = 0; i < 2; i++) {

        scanf("%s %s %f %f", student.name, student.num,
                &student.score[0], &student.score[1]); /* 从键盘键入 */ 

        fprintf(fp, "%s %s %7.2f %7.2f\n", student.name, 
                student.num, student.score[0], student.score[1]); /* 写入文件 */ 

     }

     while(fscanf(fp, "%s %s %f %f\n", student.name, student.num, 
                    &student.score[0], &student.score[1]) != EOF) {

        printf("%s %s %7.2f %7.2f\n", student.name, student.num, 
                    student.score[0], student.score[1]); /* 显示到屏幕 */ 

     }

     fclose(fp);

     return 0;

 }

```

## fgets和fputs

char *fgets(char *str,int num,FILE *stream) // 感觉是在读一行数据

int fputs(char *str,FILE *stream)

fgets() 函数从流文件stream中读取至多num-1个字符，并把它们放入str指向的字符数组中。读取字符直到遇见回车符或EOF（文件结束符）为止，或读入了所限定的字符数。

fputs(  )函数将str指向的字符串写入流文件。操作成功时，函数返回0值，失败返回非零值。 

```c

#include <stdio.h>

#include <string.h>

int main(int argc, char* argv[]) {

    char str[128];
    
    FILE *fp1, *fp2;
    
    if ((fp1 = fopen(argv[1], "r")) == NULL) {

        printf("not open %s!", argv[1]);

        return 0;
        
    }

    if ((fp2 = fopen(argv[2], "w")) == NULL) {

        printf("not open %s!", argv[2]);

        return 0;
    
    }

    while(fgets(str,128,fp1) != NULL) {

        fputs(str, fp2);    //从文件1读字符串并写入文件2

        printf("%d, %s", (int) strlen(str), str);
    
    }

    fclose(fp1);

    fclose(fp2);

    return 0;

}

```

## fread和fwrite

int fread(void *buf,int size,int count,FILE *stream)

int fwrite(void *buf,int size,int count,FILE *stream)

fread（）函数从stream 指向的流文件读取count （字段数）个字段，每个字段为size(字段长度)个字符长，并把它们放到b u f（缓冲区）指向的字符数组中。

fread（）函数返回实际已读取的字段数。若函数调用时要求读取的字段数超过文件存放的字段数，则出错或已到文件尾，实际在操作时应注意检测。

fwrite(  )函数从buf(缓冲区)指向的字符数组中，把count(字段数)个字段写到stream所指向的流中，每个字段为size个字符长，函数操作成功时返回所写字段数。

```c

#include <stdio.h>

int main(int argc, char* argv[]) {

    struct stu { /* 定义结构体类型 */ 

        char name[15];

        char num[6];

        float score[2];

    } student; /* 说明结构体变量 */ 
    
    FILE *fp;
    
    if ((fp = fopen(argv[1], "wb+")) == NULL) { /* 以二进制读写方式打开文件 */ 

        printf("not open %s!", argv[1]);

        return 0;
    }

    int i; /* 在循环条件中声明变量的话，只在C99标准中支持，C90标准不支持 */ 

    for (i = 0; i < 2; i++) {

        scanf("%s %s %f %f", student.name, student.num,
                    &student.score[0], &student.score[1]); /* 从键盘键入 */ 

        fwrite(&student, sizeof(student), 1, fp);
    
    }

    for (i = 0; i < 2; i++) {

        fread(&student, sizeof(student), 1, fp);

        printf("%s %s %7.2f %7.2f\n", student.name, student.num, 
                    student.score[0], student.score[1]); /* 显示到屏幕 */ 
    
    }

    fclose(fp);

    return 0;

}

```

## atoi、stof和atol

关于成块的文件读写，在创建文件时只能以二进制文件格式创建。

通常，对于输入数据的格式较为复杂的话，我们可采取将各种格式的数据当做字符串输入，然后将字符串转换为所需的格式。C提供函数:

int atoi(char *ptr)

float atof(char *ptr)

long int atol(char *ptr)

它们分别将字符串转换为整型、实型和长整型。使用时请将其包含的头文件math.h或stdlib.h写在程序的前面。

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[open和fopen区别](http://blog.chinaunix.net/uid-25749806-id-461233.html)

[几个能用的C语言IO读写数据的例子](http://www.cnblogs.com/findumars/archive/2012/04/01/2429435.html)

