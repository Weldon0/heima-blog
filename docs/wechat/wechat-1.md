---
title: 🌹1、微信小程序第一天
---



# day01学习

## [#](https://weldon0.github.io/wxxcx-docs/day01/#_1、学习目标)1、学习目标

| 知识点名称           | 知识点内容                                                   | 难度系数 | 要求程度 |
| -------------------- | ------------------------------------------------------------ | -------- | -------- |
| 小程序介绍和开发环境 | 微信小程序概述、开发流程、账号注册和设置、开发工具的使用     | 3星      | 掌握     |
| 代码组成             | 目录和页面组成、配置文件学习、了解WXML/WXSS的概念、JS的分类  | 2星      | 掌握     |
| 小程序宿主环境       | 宿主环境概念、小程序宿主环境、小程序常用组件、小程序API 的3大分类 | 3星      | 掌握     |
| 协同开发与发布       | 了解协同开发流程、发布小程序                                 | 2星      | 掌握     |



## [#](https://weldon0.github.io/wxxcx-docs/day01/#_2、介绍和开发环境)2、介绍和开发环境

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_2-1、微信小程序概述)2.1、微信小程序概述

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#什么是小程序)什么是小程序

> 小程序是一种不需要下载、安装即可使用的应用，它实现了应用触手可及的梦想，用户扫一扫或者搜一下就能打开应用，也 实现了用完即走的理念，用户不用安装太多应用，应用随处可用，但又无须安装卸载 ---------微信之父、Foxmail 之父 – 张小龙

![image-20210728104553673](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728104553673.986c22d8.png)

- 小程序的**特点**：体积小、方便获取和传播
- 小程序的**理念**：用完即走

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序出现的目的)小程序出现的目的

**拦截用户流量入口**，今后，用户每天的大多数应用需求，都可以从微信小程序中获得

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#与普通网页开发的区别)与普通网页开发的区别

- 运行环境不同： 网页运行在**浏览器环境**中, 小程序运行在**微信环境**中
- 提供的API不同： 由于运行环境的不同，所以小程序中，**无法调用 DOM 和 BOM 的 API**， 但在小程序中可以调用微信环境提供的各种组件、API，例如：**微信支付、微信扫码**等
- 开发模式不同： 网页的开发模式：**浏览器 + 编辑器** 小程序拥有自己的一套标准开发模式：**账号申请 + 开发工具 + 创建配置项目 + ……**

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#体验小程序)体验小程序

开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序。

![image-20210728104847140](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728104847140.d4dba9b5.png)

总结概况

❓ 什么小程序？>> 方便

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">小程序是一种<strong style="font-weight: 600;">不需要下载、安装即可使用</strong>的应用，<strong style="font-weight: 600;">用户扫一扫或者搜一下</strong>就能打开应用，也实 现了<strong style="font-weight: 600;">用完即走</strong>的理念，用户不用安装太多应用，应用随处可用，但又无须安装卸载</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_2-2、小程序开发流程)2.2、小程序开发流程

- **①、注册小程序** 在微信公众平台注册小程序，完成注册后可以同步进行信息完善和开发。
- **②、小程序信息完善** 填写小程序基本信息，包括名称、头像、介绍及服务范围等。
- **③、开发小程序** 绑定小程序开发者、开发信息配置、下载开发者工具、参考开发文档进行小程序的开发和调试
- **④、提交审核和发布** 完成小程序开发后，提交代码至微信团队审核，审核通过后即可发布（公测期间不能发布）

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_2-3、账号注册和设置)2.3、账号注册和设置

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#注册小程序账号)注册小程序账号

- **①、点击注册按钮** 使用浏览器打开 [微信公众平台 (opens new window)](https://mp.weixin.qq.com/)，点击右上角的 "立即注册" 即可进入到小程序开发账号的注册流程

![image-20210728111413831](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111413831.162e975b.png)

- **②、选择注册的帐号类型**

![image-20210728111351362](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111351362.c6709df8.png)

- **③、填写账号信息**

![image-20210728111322708](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111322708.3af9e0c1.png)

- **④、 邮箱激活**

  ![image-20210728111252657](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111252657.a9663afe.png)

**⑤、 点击链接激活账号**

![image-20210728111122558](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111122558.82221432.png)

- **⑥、选择主体类型**

  ![image-20210728111059438](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111059438.94ec599b.png)

注意：如果在企业中实际开发，这里应该选择器主体未 企业，然后提交相关材料

- **⑦、主体信息登记**

  

- **⑧、 注册完成**

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序基本信息)小程序基本信息

在小程序开发完成以后，要对项目进行推广和运营，因此需要对小程序进行基本信息的设置，通常需要对以 下内容进行设置： ![image-20210728110546125](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728110546125.1955ce07.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#获取小程序的-appid)获取小程序的 AppID

1. 开发小程序的第一步，需要拥有一个小程序AppID，后续的所有开发流程会基于这个AppID 来完成
2. AppID：相当于小程序在微信中的“身份证”，有了 AppID ，微信客户端才能确定小程序“身份”，并使 用微信提供的高级接口
3. 从微信公众平台后台中找到开发管理，获取到 AppID

![image-20210728110928076](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728110928076.0d74867d.png)

思考

❓ 什 么 是 AppId？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">小程序的 “身份证”，用于微信辨识和验证小程序以提供高级的 API 和接口</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_2-4、开发者工具使用)**2**.4、开发者工具使用

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#了解微信开发者工具)了解微信开发者工具

**微信开发者工具**是官方推荐使用的小程序开发工具，它提供的主要功能如下：

- 快速创建小程序项目
- 代码的查看和编辑
- 对小程序功能进行调试
- 小程序的预览和发布

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#工具的下载)工具的下载

1. 打开小程序官方文档 → 点击 **工具** 菜单 → 点击**左侧分 栏下载**
2. 荐下载和安装最新的**稳定版 Stable Build** 的微信开发者工具

![image-20210728111715657](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111715657.bebcfc49.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#工具的安装)工具的安装

安装方式：**双击安装包 → 下一步 → 接受协议 → 安装 → 完成** ， 即可完成安装

![image-20210728111853983](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728111853983.bbbc64a6.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#登录、创建项目)登录、创建项目

1. 运行开发者工具，使用手机微信进行扫码，同时点击确认登录

![image-20210728112106375](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728112106375.37586abf.png)

1. 登录以后，会进入新的界面，此时便可以创建、编辑、调试小程序项目

![image-20210728112445599](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728112445599.b716c8b3.png)

1. 输入小程序相关信息内容

![image-20210728112956179](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728112956179.851ef567.png)

1. 小程序项目创建成功

   ![image-20210728113223862](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728113223862.f2694c52.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#开发者工具的使用)开发者工具的使用

**编译预览小程序的两个方式**

1. 编辑代码后保存或点击编译，即可在开发者工具的模拟器中查看到编辑后的效果
2. 编辑代码保存后点击预览，使用微信扫一扫弹出的二维码，即可预览最新的效果

![image-20210728114011846](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728114011846.d5f8edf2.png)

![image-20210728114203660](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728114203660.4f68d8fc.png)

**开发者工具的 5 个组成部分**

![image-20210728114715844](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728114715844.e8cf31b8.png)

## [#](https://weldon0.github.io/wxxcx-docs/day01/#_3、代码组成)3、代码组成

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-1、程序目录和页面构成)3.1、程序目录和页面构成

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#目录构成)目录构成

![image-20210728140452657](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728140452657.80e2f7f0.png)

思考

❓ Vue 页面的由几部分组成？ 怎么组成的 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">分为 3 部分，template、script、style 一个页面，一个单文件，一个单文件由 这 3 部分组成</p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序页面的构成)小程序页面的构成

小程序官方建议把**所有的小程序页面，都存放在 pages 目录中**，**每个页面以单独的文件夹**存在

![image-20210728140753465](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728140753465.b79e8a1a.png)

每个页面由 4 个基本文件组成，分别是:

**.js 文件** - 页面的**脚本**文件，存放页面的数据、事件处理函数、生命周期等

**.json 文件** - 当前页面的**配置**文件，配置页面的外观、表现等

**.wxml 文件** - 页面的模板**结构**文件

**.wxss 文件** - 当前页面的**样式**表文件

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-2、小程序的配置文件)3.2、小程序的配置文件

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#_4-种-json-配置文件)4 种 json 配置文件

JSON 是一种数据格式，在实际开发中，JSON 总是以配置文件的形式出现。小程序项目也不例外，通过不同 的 .json 配置文件，可以对小程序项目进行不同级别的配置。

小程序项目中有 4 种 json 文件，分别是：

- ① 项目根目录中的 **app.json** 配置文件
- ② 项目根目录中的 project.config.json 配置文件
- ③ 项目根目录中的 **sitemap.json** 配置文件
- ④ 每个页面文件夹中的 **.json** 配置文件

![image-20210728141133233](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728141133233.32454b5a.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#全局配置文件-app-json)全局配置文件 app.json

app.json 是当前小程序的**全局配置**，包括了小程序的**所有页面路径、窗口外观、界面表现、底部 tab** 等， 初始化项目 里面的 app.json 配置内容如下：

![image-20210728141337506](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728141337506.fce30e3d.png)

- ① pages：用来记录当前小程序所有页面的路径
- ② window：全局定义小程序所有页面的背景色、文件颜色等
- ③ style：全局定义小程序组件所使用的样式版本
- ④ sitemapLocation：用来指明 sitemap.json 的位置

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#project-config-json)project.config.json

**project.config.json 是项目配置文件**，用来记录我们对小程序开发工具所做的个性化配置，例如：

![image-20210728141548595](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728141548595.852722a3.png)

- ① appid 中保存的是小程序的账号 ID
- ② projectname 中保存的是项目名称
- ③ setting 中保存了编译相关的配置

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#sitemap-json-文-件)sitemap.json 文 件

微信现已开放**小程序内搜索**，效果类似于 PC 网页的 SEO （搜索引擎优化），sitemap.json 用来配置小程序页面是否 允许微信搜索。 当开发者允许微信搜索时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引 匹配成功的时候，小程序的页面将可能展示在搜索结果中。

![image-20210728141738120](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728141738120.5c84a927.png)

在 stiremap.json 文件中，通过**配置 rules 字段指定了索引规则**，每项规则为一个 JSON 对象, 默认情况下所有页面 都允许被索引

![image-20210728141918820](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728141918820.f2dfa2e7.png)

**注意：sitemap 的索引提示是默认开启的**，如果需要关闭 sitemap 的索引提示，可在小程序项目配置文件， project.config.json 的 setting 中配置字段 **checkSiteMap 为 false**

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#页面-json-配置文件)页面 .json 配置文件

小程序中的每一个页面，可以使用 .json 文件来对**本页面的窗口外观进行配置**，页面中配置项**会覆盖 app.json 中的 window 中的配置项**

![image-20210728143434487](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728143434487.f4e774e8.png)

总结概况

❓ 小程序的 4 种配置文件分别是什么？各自的作用是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li>app.json 小程序的全局配置</li><li>project.config.json 项目配置文件</li><li>sitemap.json 搜索引擎配置文件</li><li>页面 .json 配置文件 页面的配置文件</li></ol></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-3、新建页面)3.3、新建页面

- 方式1：创建文件夹方式

  **在 pages 文件夹上，右键新建文件夹**，创建 home文件夹 ，在 home 文件夹**右键新建 page 选项**，输入 home

  - 官方推荐文件夹名称和页面的名称一致，方便后期的维护
  - 新建页面组件的时候，不需要输入后缀名

- 方式2：配置 pages 字段方式

  - 在 app.json --> pages 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件
  - 对 pages 目录下页面的删除或者新增都需要在 app.json 文件的 pages 数组中进行新增或删除（特别注意，如果删除了一个页面，一定要去app.json中pages数组里面手动删除该页面配置项）

  ![image-20210728144143390](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728144143390.01502ed4.png)

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-4、设置首页)3.4、设置首页

- 方式1：调整 pages 字段

  调整 app.json → pages 数组中页面路径的前后顺序，即可修改项目的首页，**小程序会把排在数组第一位的页面，当作项目首页进行渲染**

![image-20210728144312513](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728144312513.c0aa99c3.png)

- 方式2：增加entryPagePath 节点

  在 app.json 中 pages 同级，配置一个新的节点 entryPagePath 节点，传入需要设置为首页的路径即可

![image-20210728144506646](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728144506646.046bb096.png)

**注意：最终小程序项目的首页，以 entryPagePath 节点设置的为准**

思考

❓ 小程序的 设置首页的两个方式是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li>将首页的路由放到 app.json → pages 数组第一 项</li><li>配置一个新的节点 entryPagePath 节点</li></ol></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-5、wxml和wxss)3.5、WXML和WXSS

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#什么是-wxml)什么是 WXML

WXML（WeiXin Markup Language）是框架设计的一套标签语言（组件），**用来构建小程序页面的结构**， 其作用**类似于网页开发中的 HTML**

**WXML 和 HTML 的区别**

- 标签名称不同
- 属性节点不同
- 提供了类似于 Vue 中的模板语法
  - 数据绑定
  - 列表渲染
  - 条件渲染

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#什么是-wxss)什么是 WXSS

WXSS (WeiXin Style Sheets)是**一套样式语言**，用于描述 WXML 的组件样式，**类似于网页开发中的 CSS**

**WXSS 和 CSS 之间的区别**

- ①、新增了 rpx 自适应尺寸单位
  - CSS 中需要手动进行像素单位换算，例如 rem
  - WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算
- ②、提供了全局的样式和局部样式
  - 项目根目录中的 app.wxss 会作用于所有小程序页面
  - 局部页面的 .wxss 样式仅对当前页面生效
- ③、 WXSS 仅支持部分 CSS 选择器
  - class 和 #id
  - element
  - 并集选择器和后代选择器
  - ::after 和 ::before 等伪类选择器

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_3-6、小程序中的-js)3.6、小程序中的 js

一个项目仅仅提供页面的展示是不够的，在小程序中，我们通过 .js 文件来**处理用户的操作、同时进行开发业务逻辑以及 调用小程序的API 来完成业务**，需求例如：响应用户的点击、获取用户的位置、微信登录、微信支付等等

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序中的js-文件分类三大类)小程序中的JS 文件分类三大类

- **app.js** 是整个小程序项目的入口文件，通过调用**App()** 函数来启动整个小程序
- **页面的 .js 文件** 是页面的入口文件，通过调用**Page()** 函数来创建小程序页面，并运行小程序页面
- **普通的 .js 文件** 是普通的功能模块文件，用来封装公共的函数或属性供页面使用

## [#](https://weldon0.github.io/wxxcx-docs/day01/#_4、小程序宿主环境)4、小程序宿主环境

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_4-1、宿主环境的概念)4.1、宿主环境的概念

思考

❓ 在前面我们介绍了小程序文件的构成，那么这些文件在小程序中是如何协同工作的呢 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">依赖于微信客户端给小程序所提供的<span>&nbsp;</span><strong style="font-weight: 600;">宿主环境</strong><span>&nbsp;</span>！小程序可以调用宿主环境提供的微信客户端 的能力，这就使得小程序比普通网页拥有更多的能力</p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#什么是宿主概念)什么是宿主概念

**宿主环境**指的是程序运行所必须的 依赖环境，例如： **Android 系统和 IOS 系统是两个不同的宿主环境**，安卓版的微信 App 是不能在 IOS 环境下运行的。所以 Android 是安卓软件的宿主环境，**脱离了宿主环境的软件是没有任何意义的**

![image-20210728151755502](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728151755502.1b327d43.png)

总结概况

❓ 宿主环境是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">所谓的宿主环境，就是程序在运行所必须 依赖环境</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_4-2、小程序的宿主环境)4.2、小程序的宿主环境

思考

❓ 安卓版本的微信在 Android 系统下运行，所以 Android 系统是 安卓版本微信的宿主环境 IOS 版本的微信在 IOS 系统下运行，所以 IOS 系统是 IOS 版本微信的宿主环境 那么小程序的宿主环境是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">微信小程序是依赖于微信运行的，脱离了微信运行不了，所以小程序的宿主环境是微信</p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序的宿主环境是什么)小程序的宿主环境是什么

**微信是小程序的宿主环境**，脱离了微信，小程序是运行不成功的

![image-20210728152045198](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728152045198.7b568119.png)

小程序**借助宿主环境提供的能力**，可以完成许多普通网页无法完成的功能，例如：微信扫码、微信支付、微信登 录、地理定位 等等功能

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#小程序宿主环境提供的内容)小程序宿主环境提供的内容

- 通信模型
- 运行机制
- 组件
- API

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#通讯主体)通讯主体

小程序中通信的主体是 **渲染层** 和 逻辑层，其中：

- WXML 模板和 WXSS 样式工作在渲染层
- JS 脚本工作在逻辑层

![image-20210728152218176](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728152218176.979ae95c.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#通讯模型)通讯模型

小程序中的通信模型分为两个部分：

- 渲染层 和 逻辑层 之间的通信
- 逻辑层 和 第三方服务器 之间的通信

![image-20210728152321095](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728152321095.3e22bd9e.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#运行机制)运行机制

1. **小程序启动的过程：** ①. 把小程序的代码包下载到本地 ②. 解析 app.json 全局配置文件 ③. 执行 app.js 小程序入口文件，调用 **App()** 创建小程序实例 ④. 渲染小程序首页 ⑤. 小程序启动完成

2. 页面渲染的过程：

   ①. 加载解析页面的.json 配置文件 ②. 加载页面的 .wxml 模板和 .wxss 样式 ③. 执行页面的 .js 文件，调用 **Page()** 创建页面实例 ④. 页面渲染完成

思考

❓小程序的宿主环境是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">小程序的宿主环境是微信</p></details>

思考

❓ 小程序的通讯主体什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">渲染成与逻辑层</p></details>

思考

❓ 小程序的通讯模型什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">渲染层和逻辑层的通讯，逻辑层与第三方服务器的通讯，都需要经由微信客户端转发</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_4-3、小程序常用组件)4.3、小程序常用组件

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#了解常用的视图容器组件)了解常用的视图容器组件

[组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/)

一个小程序页面可以分解成多个部分组成，**组件就是小程序页面的基本组成单元**。为了让开发者可以快速进行开 发，小程序的宿主环境提供了一系列基础组件，常用的组件包含以下几种：

1. **视图容器**
2. **基础内容**
3. **表单组件**
4. **导航组件**
5. **媒体组件**
6. 地图组件
7. canvas 画布组件
8. 开发能力
9. 无障碍访问

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#常用的视图容器类组件)常用的视图容器类组件

**①、view 组件**

- 普通视图区域
- 类似于 HTML 中的 div ，是一个块级元素
- 常用来实现页面的布局效果

**②、scroll-view 组件**

- 可滚动的视图区域
- 常用来实现滚动列表效果

**③、 swiper 和 swiper-item 组 件**

- 轮播图容器组件和轮播图 item 组件

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#view-组件的使用)view 组件的使用

View 组件类似与 HTML 中的 div 标签，一般主要用来布局

![image-20210728152949371](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728152949371.548e9199.png)

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#scroll-view-组件的基本使用)scroll-view 组件的基本使用

scroll-view 组件一般用来实现滚动区域的视图

![image-20210728153045734](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728153045734.d2832bac.png)

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#swiper-和-swiper-item-的使用)swiper 和 swiper-item 的使用

swiper 和 swiper-item，滑块视图容器 ，需组合使用，一般用来实现轮播图区域布局

![image-20210728153218792](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728153218792.3ac3bb01.png)

swiper 和 swiper-item 常用属性说明

| 属性                   | 类型    | 默认值            | 说明                                         |
| ---------------------- | ------- | ----------------- | -------------------------------------------- |
| indicator-dots         | boolean | false             | 是否显示面板指示点                           |
| indicator-color        | color   | rgba(0, 0, 0, .3) | 指示点颜色                                   |
| indicator-active-color | color   | #000000           | 当前选中的指示点颜色                         |
| autoplay               | boolean | false             | 是否自动切换                                 |
| interval               | number  | 5000              | 自动切换时间间隔                             |
| circular               | boolean | false             | 是否采用衔接滑动(最后一张的时候滑动到第一张) |

#### [#](https://weldon0.github.io/wxxcx-docs/day01/#常用的基础内容组件)常用的基础内容组件

①、text 组件

- 文本组件
- 类似于 HTML 中的 span 标签，是一个行内元素

②、rich-text 组件 （v-html）

- 富文本组件
- 支持把 HTML 字符串渲染为 WXML 结构

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#text-组件的基本使用)text 组件的基本使用

通过 text 组件的 **selectable** 属性，实现 **长按选中文本** 内容的效果

![image-20210728153532393](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728153532393.1699658e.png)

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#rich-text-组件的基本使用)**rich-text 组件的基本使用**

通过 rich-text 组件的 **nodes** 属性节点，**把 HTML 字符串渲染为对应的 UI 结构**

![image-20210728153805730](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728153805730.c6df0c34.png)

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#button-组件的基本使用)button 组件的基本使用

按钮组件，功能比 HTML 中的 button 按钮丰富，通过 **open-type** 属性可以调用微信提供的各种功能(**客服、转 发、获取用户授权、获取用户信息等**)

| 属性名   | 类型    | 默认值  | 说明                     |
| -------- | ------- | ------- | ------------------------ |
| size     | String  | default | 按钮的大小               |
| type     | String  | default | 按钮的样式类型           |
| plain    | Boolean | false   | 按钮是否镂空，背景色透明 |
| disabled | Boolean | false   | 是否禁用                 |
| loading  | Boolean | false   | 名称是否带 loading t图标 |

![image-20210728153947557](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728153947557.b4c08709.png)

##### [#](https://weldon0.github.io/wxxcx-docs/day01/#image-组件的基本使用)image 组件的基本使用

图片组件，渲染图片（注意：image 组件如果**不设置图片地址，也占据空间**，image组件默认宽度320px、高度240px）

![image-20210728154103488](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728154103488.6757ea7e.png)

image 组件的 mode 属性用来指定图片的裁剪和缩放模式。常用的 mode 属性值如下：

| mode 值     | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| scaleToFill | 默认值，缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit   | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来，可以将完整地将图片显示出来。 |
| aspectFill  | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完 整的，另一个方向将会发生截取。 |

思考

❓ 小程序常用的组件有哪些？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">view、scroll-view、text、swiper、image 等</p></details>

思考

❓ 小程序中如何渲染 HTML 字符串？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">通过 rich-text 组件的 nodes 属性节点，把 HTML 字符串渲染为对应的 UI 结构</p></details>

思考

❓ image 组件默认的宽高是多少？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">image组件默认宽度 320px、高度 240px</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_4-4、小程序-api)4.4、小程序 API

小程序中的 API 是宿主环境提供的，通过这些丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用 户信息，本地存储，支付功能等。小程序官方把 API 分为如下 **3 大类**：

**①、事件监听 API**

- 特点：以 on 开头的 API 用来监听某个事件是否触发
- 举例：wx.onWindowResize(function callback)

**②、同步 API**

- 特点1：以 Sync 结尾的 API 都是同步 API
- 特点2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常
- 举 例：wx.setStorageSync('key', value) 向本地存储中写入内容

**③、异步 API**

- 特点：类似于 jQuery 中的 $.ajax(options) 函数，需要通过 success、fail、complete 接收调用结果
- 举例：wx.request() 发起网络数据请求，通过 success 回调函数接收数据
- 小程序中，大多数的 API 都是异步 API

## [#](https://weldon0.github.io/wxxcx-docs/day01/#_5、协同开发流程)5、协同开发流程

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_5-1、小程序协同开发)5.1、小程序协同开发

**了解权限管理需求**

在中大型的公司中，人员的分工非常仔细：同一个小程序项目，一般会有不同的岗位、不同角色的员工同时参与 设计与开发

此时出于**管理需要**，我们迫切需要**对不同的岗位、不同的角色的员工的权限**进行边界的划分，使他们能够高效的 进行协同开发

**了解公司组织结构**

![image-20210728155512015](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728155512015.ac3cb86d.png)

**了解公司开发流程**

![image-20210728155636151](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728155636151.6a867830.png)

**了解小程序成员管理的两个方面**

小程序成员管理体现在 管理员 对小程序 项目成员 及 体验成员 的管理：

1. **项目成员** 表示参与小程序开发、运营的成员 可登陆小程序管理后台(微信公众平台) 管理员可以添加、删除项目成员，并设置项目成员的角色
2. **体验成员** 表示参与小程序内测体验的成员 可使用体验版小程序，但不属于项目成员 管理员及项目成员均可添加、删除体验成员

**开发者的权限说明**

不同项目成员对应的权限，项目成员分为三个角色： **运营者、开发者、数据分析者**

![image-20210728155818647](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728155818647.7d9b65d7.png)

**开发者的权限说明**

1. 登录权限：可登录小程序的后台管理，无需要管理员确认
2. 开发者权限：可使用小程序开发者工具及对小程序的功能进行代码管理
3. 管理体验者：添加或删除小程序体验者
4. 体验者权限：可使用体验版小程序

**如何添加项目成员和体验成员**

每个小程序帐号可添加一定数量的项目成员、体验成员，具体限制如下

![image-20210728155920298](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728155920298.95bcfdd8.png)

![image-20210728224702220](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728224702220.4fe0aaf0.png)

总结概况

❓ 项目成员分为几种角色？企业账号能够添加多少添加项目成员和体验成员

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li>分为 3 种：运营者、开发者、数据分析者</li><li>个人分别最多添加 15 个，企业分别最多添加 90 个</li></ol></details>

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_5-2、小程序发布流程)5.2、小程序发布流程

**了解小程序的版本阶段**

1. 软件开发过程中，根据时间节点的不同，会产出不同的软件版本，例如：

- ① 开发版本：开发者编写代码的同时，对项目代码进行自测
- ② 体验版本：程序达到一个稳定可靠，可体验的状态时，开发者把体验版本给到产品经理和测试人员进行体验测试
- ③ 正式版本：最后修复完程序的 bug 后，发布正式版供外部用户使用

1. 小程序中的软件版本包含 4 个

| 版本阶段   | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 开发版本   | 使用开发者工具，可将代码上传到开发版本中。 开发版本只保留每人最新的一份上传的代码。 点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。 |
| 体验版本   | 可以选择某个开发版本，将其转为作为体验版                     |
| 审核中版本 | 只能有一份代码处于审核中。有审核结果后可以发布到线上，可直接重新提交审核，覆盖原审核版本。 |
| 线上版本   | 线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。 |

**了解小程序发布上线的主要步骤**

1. 小程序发布上线 的整体步骤： 一个小程序的发布上线，一般要经过 上传代码 → 提交审核 → 发布 这三 个步骤
2. 上传代码： 点击开发者工具顶部工具栏中的“上传”按钮 填写版本号以及项目备注

![image-20210728225413475](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728225413475.c77cef12.png)

1. 在后台查看上传之后的版本

   登录小程序**管理后台 --> 管理 --> 版本管理 --> 开发版本**，即可查看刚才提交上传的版本

![image-20210728160444414](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160444414.8da6b4ae.png)

1. 提交审核 为了保证小程序的质量，以及符合相关的规范，小程序的发布必须是需要经过腾讯官方审核的

![image-20210728160528157](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160528157.10ac056c.png)

![image-20210728160606388](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160606388.8686d93b.png)

1. 发布

   审核通过之后，管理员的微信中会收到小程序通过审核的通知，此时在审核版本的列表中，点击 **发布 按钮**之后， 即可把 审核通过 的版本发布为 线上版本，供所有小程序用户访问和使用

   ![image-20210728160701833](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160701833.bf380d5c.png)

### [#](https://weldon0.github.io/wxxcx-docs/day01/#_5-3、基于小程序码进行推广)5.3、基于小程序码进行推广

相对于普通二维码来说，小程序码的优势如下： ① 在样式上更具有辨识度和视觉冲击力 ② 能够更加清晰的树立小程序的品牌形象 ③ 可以帮助开发者、商家更好的推广小程序

![image-20210728160756941](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160756941.b4ddcb68.png)

**获取小程序码的步骤**

登录**小程序管理后台 → 设置 → 基本设置 → 基本信息 → 小程序码及 线下物料下载**

![image-20210728160905023](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728160905023.9554339b.png)

**查看小程序的运营数据**

- 在小程序后台查看 登录小程序管理后台==>点击侧边栏的 "统计"==>点击相应的 tab 可以看到相关的数据

![image-20210728161235981](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728161235981.6b729283.png)

- 使用小程序数据助手查看

  打开微信==>搜索 “小程序数据助手”==>查看已发布的小程序相关的数据

![image-20210728161122755](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728161122755.5dbe9511.png)

思考

❓小程序版本分为几个阶段？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">分为 4 个：开发版本、体验版本、审核中版本、线上版本</p></details>

