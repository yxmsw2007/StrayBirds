---
layout: post
title: Sublime Text 3常用的快捷键
comments: true
category: Tools
tags: [Sublime3]
---

## 自带快捷键

| 快捷键                    			| 功能         																										|

| :---------------          		| :---------- 																										|
| Alt+O                  			| 可以实现头文件和源文件之间的快速切换         																			|
| Ctrl+Shift+T						| 可以打开之前关闭的tab页																								|
| Ctrl+D 							| 选词 （反复按快捷键，即可继续向下同时选中下一个相同的文本<br>进行同时编辑）														|
| Ctrl+G 							| 跳转到相应的行																										|
| Ctrl+J 							| 合并行（已选择需要合并的多行时）																						|
| Ctrl+L 							| 选择整行（按住-继续选择下行）																							|
| Ctrl+M 							| 光标移动至括号内开始或结束的位置																						|
| Ctrl+T 							| 词互换																												|
| Ctrl+U 							| 软撤销																												|
| Ctrl+P 							| 查找当前项目中的文件和快速搜索；输入 @ 查找文件主标题/函<br>数；或者输入 : 跳转到文件某行										|
| Ctrl+R 							| 快速列出/跳转到某个函数																								|
| Ctrl+K Backspace 					| 从光标处删除至行首																									|
| Ctrl+KB 							| 开启/关闭侧边栏																										|
| Ctrl+KK 							| 从光标处删除至行尾																									|
| Ctrl+KT 							| 折叠属性																											|
| Ctrl+KU 							| 改为大写																											|
| Ctrl+KL 							| 改为小写																											|
| Ctrl+K0 							| 展开所有																											|
| Ctrl+Enter   						| 插入行后（快速换行）																									|
| Ctrl+Tab 	   						| 当前窗口中的标签页切换																									|
| Ctrl+Shift+A 						| 选择光标位置父标签对儿																									|
| Ctrl+Shift+D 						| 复制光标所在整行，插入在该行之前																						|
| ctrl+shift+F 						| 在文件夹内查找，与普通编辑器不同的地方是sublime允许添加多<br>个文件夹进行查找													|
| Ctrl+Shift+K 						| 删除整行																											|
| Ctrl+Shift+L 						| 鼠标选中多行（按下快捷键），即可同时编辑这些行																				|
| Ctrl+Shift+M 						| 选择括号内的内容（按住-继续选择父括号）																					|
| Ctrl+Shift+P 						| 打开命令面板																											|
| Ctrl+Shift+/ 						| 注释已选择内容																										|
| Ctrl+Shift+↑ 						| 可以移动此行代码，与上行互换																							|
| Ctrl+Shift+↓ 						| 可以移动此行代码，与下行互换																							|
| Ctrl+Shift+[ 						| 折叠代码																												|
| Ctrl+Shift+] 						| 展开代码																												|
| Ctrl+Shift+Enter 					| 光标前插入行																											|
| Ctrl+PageDown和Ctrl+PageUp 		| 文件按开启的前后顺序切换																								|
| Ctrl+Z							| 撤销																													|
| Ctrl+Y							| 恢复撤销																												|
| Ctrl+F2 							| 设置/删除书签																											|
| Ctrl+/ 							| 注释整行（如已选择内容，同“Ctrl+Shift+/”效果）																		|
| Ctrl+鼠标左键 						| 可以同时选择要编辑的多处文本																							|
| Shift+鼠标右键（或鼠标中键）			| 可以用鼠标进行竖向多行选择																							|
| Shift+F2 							| 上一个书签																											|
| Shift+Tab 						| 去除缩进																												|
| Alt+Shift+1~9（非小键盘）			| 屏幕显示相等数字的小窗口																								|
| Alt+. 							| 闭合当前标签																											|
| Alt+F3 							| 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑															|
| Tab 								| 缩进 自动完成																											|
| F2 								| 下一个书签																											|
| F9 								| 行排序(按a-z)																											|
| F11 								| 全屏模式																												|
| Shift+F11 						| 全屏免打扰模式，只编辑当前文件																						|
| ctrl+[或] 							| 增加和减少缩进																										|
| ctrl+x 							| 剪切行或选中项																										|
| ctrl+shift+v 						| 粘贴并保持缩进																										|
| alt+shift+w 						| 用标签包裹行或选中项																									|
| ctrl+shift+; 						| 移除未闭合的容器元素（这会移除与你的光标相关的父标签）																|
| ctrl+shift+y 						| 计算数学表达式																										|
| alt+shift+↑ 或 ↓，ctrl+ ↑ 或 ↓  	| 递增和递减（按住shift将以10的步长改变数字, 不按住以1为步长. <br>同时注意到你不需要选择数字, 默认更新本行最近的数字）	|
| Alt+数字 							| 切换打开第N个文件																										|
| Shift+右键拖动 						| 多光标，用来更改或插入列内容																							|

## CoolFormat

| 快捷键                    			| 功能         																											|
| :---------------          		| :---------- |
| Ctrl+Shift+Alt+Q              	| Quick Format         																									|
| Ctrl+Shift+Alt+S                  | Selected Format         																								|

## Ctags

| 快捷键              	|  Alt绑定     	| 鼠标绑定					| 功能         													|
| :---------------    | :----------: 	| :----------:				| :---------- 													|
| ctrl+t, ctrl+r      |        			| 							| rebuild_ctags         										|
| ctrl+t, ctrl+t      | ctrl+>          | ctrl+shift+left_click		| navigate_to_definition         								|
| ctrl+t, ctrl+b      | ctrl+<          | ctrl+shift+right_click	| jump_prev         											|
| alt+s      		  | 	            | ctrl+shift+left_click		| show_symbols         											|
| alt+shift+s         | 	            | ctrl+shift+left_click		| show_symbols (all files)         								|
| ctrl+alt+shift+s    | 	            | ctrl+shift+left_click		| show_symbols (suffix)         								|

## SublimeClang

| 快捷键                    | 功能         																																|
| :---------------          | :---------- 																																|
| alt+d,alt+d 				|Go to the parent reference of whatever is under the current cursor position																|
| alt+d,alt+i 				|Go to the implementation																													|
| alt+d,alt+b 				|Go back to where you were before hitting alt+d,alt+d or alt+d,alt+i 																		|
| alt+d,alt+c 				|Clear the cache. Will force all files to be reparsed when needed 																			|
| alt+d,alt+w 				|Manually warm up the cache																													|
| alt+d,alt+r 				|Manually reparse the current file																											|
| alt+d,alt+t 				|Toggle whether Clang completion is enabled or not. Useful if the complete <br>operation is slow and you only want to use it selectively 	|
| alt+d,alt+p 				|Toggle the Clang output panel 																												|
| alt+d,alt+e 				|Go to next error or warning in the file																									|
| alt+shift+d,alt+shift+e 	|Go to the previous error or warning in the file																							|
| alt+d,alt+s 				|Run the Clang static analyzer on the current file																							|
| alt+d,alt+o 				|Run the Clang static analyzer on the current project																						|
| alt+d,alt+f 				|Toggle whether fast (but possibly inaccurate) completions are used or not 																	|
	
## SublimeCodeIntel

| 快捷键                    			| 功能         																											|
| :---------------          		| :---------- 																											|
| Alt+Click              			| Jump to definition         																							|
| Control+Windows+Alt+Up            | Jump to definition         																							|
| Control+Windows+Alt+Left          | Go back         																										|
| Control+Shift+space            	| Manual Code Intelligence         																						|

## cscope

	cscope -R -b	//生成cscope.out命令：

| 快捷键                    			| 功能         																											|
| :---------------          		| :---------- 																											|
| Ctrl/Super + \              		| Show Cscope options         																							|
| Ctrl/Super + LCtrl/Super + S      | Look up symbol under cursor         																					|
| Ctrl/Super + LCtrl/Super + D      | Look up definition under cursor    																					|
| Ctrl/Super + LCtrl/Super + E      | Look up functions called by the function under the cursor         													|
| Ctrl/Super + LCtrl/Super + R      | Look up functions calling the function under the cursor         														|
| Ctrl/Super + Shift + [ 	        | Jump back        																										|
| Ctrl/Super + Shift + ]      		| Jump forward        																									|

