---
title: HTML入门笔记1
date: 2021-06-30
categories:
  - 前端
tags:
  - HTML
  - 笔记
sticky: 1
---

# HTML 入门笔记 1

目录：

1. HTML 是谁发明的？
2. HTML 起手应该写什么？
3. 常用的章节标签有哪些？它们又分别是什么意思？用法是什么？
4. HTML 的全局属性有哪些？
5. 默认样式是什么？以及如何去修改默认样式？
6. 常用的内容标签有哪些？它们有什么意思？

## HTML 是谁发明的？

HTML 全程为：Hyper Text Marked Language，中文译为超文本标记语言，它是在 1990 年由蒂姆·伯纳斯·李爵士在一个 HTML Tags 的文件中被提及，当时只有 18 元素。现在已经有 114 个被标准化的标签了。

## HTML 起手应该写什么？

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

`<!DOCTYPE html>`——表示文档类型

`<html lang="en">`——这个是一个 html 标签，可以把 lang 里面的 en 改成 zh-CN

`<head>`——head 标签里面主要放“看不见的东西”

`<meta charset="UTF-8">`——确认编码，一般都是使用 UTF-8，因为这是全人类都通用的编码

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`——这是防止页面缩放，并兼容手机页面。

`<meta http-equiv="X-UA-Compatible" content="IE=edge">`——这个表示告诉 IE 使用最新的内核。

`<title>Document</title>`——title 标签是标题，表示网页的主题

`<body>`——body 标签是主体，接下来的 html 标签都是写在 body 里面。

使用 VScode 的 emmet 功能可以使用！+tab 键自动写出起手式。

## 常用的章节标签有哪些？它们又分别是什么意思？用法是什么？

### 常用的章节标签有哪些？

- h1~h6：标题
- section：章节
- p：段落
- header：头部
- footer：脚步
- main：主要部分
- aside：旁支部分
- div：划分不同部分

### 常用章节标签的用法

- h1~h6
  `<h1>标题1</h1>`
- section
  `<section></section>`
- p
  `<p></p>`
- header
  `<header></header>`
- footer
  `<footer></footer>`
- main
  `<main></main>`
- aside
  `<aside></aside>`
- div
  `<div></div>`

例如：

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML章节标签的用法</title>
</head>
<body>
    <header>HTML章节标签</header>
    <div>
        <main>
            <h1>章节标签的用法</h1>
            <section>
                <h2>第一章节</h2>
                <p>章节标签有哪些？</p>
            </section>
            <section>
                <h2>第二章节</h2>
                <p>章节标签的用法</p>
            </section>
        </main>
        <aside>此文章参考了XXX</aside>
    </div>
    <footer>HTML章节标签</footer>
</body>
</html>
```

## HTML 的全局属性有哪些？

1. class 类
2. contenteditable 任意元素可编辑
3. style 样式 这个元素一般是放在 head 标签里面的，所以无法显示。如何显示“style”：将其放到 body 标签中，再加上 display:block 和 contenteditable 即可显示并可编辑。
4. hidden 隐藏
5. id id 属性具有全局唯一性，但是其唯一性不可靠。不到万不得已不要使用 id 属性。
6. tadindex 控制 tab 的顺序。tabindex=1>tabindex=2>tabindex=100 ；tabindex=0——表示最后一个 tab；tabindex=-1 表示不 tab
7. title 显示完整内容

## 默认样式

### 为什么会出现默认样式？

因为在 HTML 被发明之前，CSS 还没有被发明。如果没有默认样式，那 HTML 的字体和格式就会变成一样的，非常的不美观，所以就出现了默认样式。

### 默认样式如何查看和修改？

首先打开页面的开发者工具，在 Elements 这一栏中找到 Styles，在找到 user agent stylesheet 这个里面的 CSS 就是默认样式了。user agent 就是浏览器。
由于默认样式一般都是不太美观，所以我们做前端开发的时候都是需要改掉这个默认样式，也就是 CSSreset。一般我们使用两种方式设置 CSSreset，一种是老师自己使用的；一种是大厂使用的，比如淘宝页面之类的。例如：

```<style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        *::after, *::before{
            box-sizing: border-box;
        }
        h1,h2,h3,h4,h5,h6{
            font-weight: normal;
        }
        a{
            color: inherit;
            text-decoration: none;
        }
        ul,ol{
            list-style: none;
        }
        table{
            border-collapse: collapse;
            border-spacing: 0;
        }
    </style>
```

做这么一个 CSSreset.css 的文件作为你的 CSSreset 的配置。

## 常用的内容标签有哪些？它们有什么意思？

- ol+li——有序列表

```
<ol>
    <li>有序列表</li>
</ol>
```

- ul+li——无序列表

```
<ul>
    <li>无序列表</li>
</ul>
```

- dl+dt+dd——描述列表

```
<dl>
    <dt>北京</dt>
    <dd>首都</dd>
</dl>
```

- pre——保留空格和回车，使用方法为包裹住目标标签。
- code——包裹住代码，使其等宽。
- hr——分割线 `<hr>`自闭合
- br——回车 `<br>`自闭合
- em——强调，注重语气的强调，strong 标签是注重内容的重要强调
- quote——引用（内联）
- blockquote——块级引用（换行）
