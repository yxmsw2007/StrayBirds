---
layout: post
title: Emacs常用快捷键
comments: true
category: Tools
tags: [Emacs, 快捷键]
---

## 快捷键

M系列组合键：操作由语言定义的单位（如此、句子、段落等）

C系列组合键：操作与语言无关的基本单位（如字符、行等）

移动到下一屏：C-v

移动到上一屏：M-v

光标所在行移动到屏幕中间：C-l

上一行：C-p

下一行：C-n

向左移：C-b

向右移：C-f

向前移动一个词：M-f

向后移动一个词：M-b

移动到行首：C-a

移动到行位：C-e

移动到句首：M-a

移动到句尾：M-e

跳转到首行：M-<(<输入要加Shift)

跳转到尾行：M->(>输入要加Shift)

重复执行n次命令：C-u 数字 命令  或者M-数字 命令

取消命令(本层次命令)：C-g

取消递归编辑命令：ESC ESC ESC

合并窗口：C-x 1

最基本的帮助功能命令：C-h c 命令

查看命令文档：C-h k 命令

删除光标前一个字符：Del

删除光标后一个字符：C-d

删除光标前一个词：M-Del

删除光标后一个词：M-d

删除光标到行尾字符：C-k

删除光标到句尾字符：M-k

移除部分内容：光标  C-@或C-SPC 移动光标 C-w

移除内容召回（最近一次的内容）：C-y

移除内容召回（更早的内容）：M-y

撤销：C-x u 或C-_ 或C-/

列出缓冲区：C-x C-b

切换缓冲区：C-x b 缓冲区名称

创建文件或打开文件：C-x C-f 文件名

保存文件：C-x C-s

保存多个缓冲区：C-x s

关闭文件备份：M-x customize-variable <Return> make-backup-files <Return>

退出Emacs：C-x C-c

控制台下，暂离Emacs：C-z（回到shell或新建shell，但不退出，shell中输入fg或“”“%emacs”可以切回来）

替换：M-x repl s<Return>changed<Return>altered<Return>

恢复自动保存文件：M-x recover file<Return>   选择yes<Return>

主模式切换：M-x fundamental-mode<Return> 或 M-x text mode<Return>

查看当前主模式文档：C-h m

将本行移动到屏幕最上方：C-u C-v

启动/关闭辅模式（自动折行Auto File）：M-x auto fill mode<Return>

设置行边界：C-x f

手动折行：M-q

向前搜索：C-s

向后搜索：C-r

多窗口光标所在的另一个窗口向下翻页：C-M-v

多窗口光标所在的另一个窗口向上翻页：C-M-S-v

切换窗口：C-x o

剪切：C-w

复制：M-w

粘贴：C-y

全选（选中整个编辑窗口内容）：C-x h

选中模式：C-SPC

确认选中范围：C-x C-x

选中段落：M-h

选中整个页面：C-x C-p

查看配置文件
C-h v user-init-file

C-h v对应的命令叫：describe variable，也可以使用：M-x describe-variable 来启动这个命令，M-x 是启动命令的万能钥匙，以C-h v类似的按键来发送命令是一种快捷方式！

## 插件

swiper
https://github.com/abo-abo/swiper

smex
https://github.com/nonsequitur/smex

smartparens
https://github.com/Fuco1/smartparens

popup

monokai-theme

ivy(swiper的依赖)

hungry-delete

gnupg

dash

company
http://company-mode.github.io/

auto-complete

archives

## 参考资料



