import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: '项目资源',
    icon: 'repo',
    link: '/项目资源'
  },
  {
    text: "react课程",
    icon: "react",
    prefix: "react课程",
    collapsable: true,
    children: [
      {
        text: "一、react基础",
        prefix: "01-react基础",
        collapsable: true,
        children: [
          "01-React基础",
          "02-组件基础",
          "03-组件通讯",
          "04-组件生命周期",
          "05-react原理揭秘",
          "06-react路由",
          "fiber",
        ],
      },
      {
        text: "二、react-极客园【PC】",
        prefix: "02-react-极客园pc",
        collapsable: true,
        children: ["01-项目搭建", "02-登录功能", "03-首页", "04-文章列表"],
      },
      {
        text: "三、react-hooks",
        prefix: "/03-react-hooks",
        collapsable: true,
        children: [
          "01-react-组件复用",
          "02-hooks基本使用",
          "03-hooks进阶&redux学习",
          "扩展-useCallback和useMemo",
          "扩展-useImperativeHandle的使用",
          "拓展-redux-createStore实现",
          "拓展-useEffect和useLayoutEffect",
        ],
      },
      {
        text: "四、react-redux",
        prefix: "/04-react-redux",
        collapsable: true,
        children: [
          "redux课程",
          "redux中间件",
          "redux-acions用法",
          "applymiddleWare原理",
          "todolist",
        ],
      },
      {
        text: "五、react-typescript",
        prefix: "/06-react-TS",
        collapsable: true,
        children: [
          "01-TypeScript 介绍",
          "02-TypeScript 常用类型",
          "03-TypeScript 高级类型",
          "04-在 React 项目中使用 TS",
          "05-使用Typescript改造项目",
        ],
      },
      {
        text: "六、react-极客园移动端",
        prefix: "/05-react-极客园移动端",
        collapsable: true,
        children: [
          "📚极客园M-1【项目搭建】",
          "📚极客园M-2【登录模块】",
          "📚极客园M-3【布局页面】",
          "📚极客园M-4【个人中心】",
          "📚极客园M-5【首页】",
          "📚极客园M-6【搜索】",
          "📚极客园M-7【文章详情】",
          "📚极客园M-8【小智同学】",
          "面试题",
          "react面试题",
          "webpack面试题",
        ],
      },
    ],
  },
  {
    text: "vue人力资源项目",
    icon: "vue",
    prefix: "/人资",
    collapsable: true,
    children: [
      "01-vuex基础",
      "02-基础环境搭建",
      "03-登录模块",
      "04-主页模块",
      "05-路由和页面",
      "06-组织架构",
      "07-公司和角色",
      "08-员工管理",
      "09-权限设计和管理",
      "10-其他模块集成",
      "11-主页审批-图表",
      "12-多语言tab页全屏主题",
      "13-打包上线",
      "人资第二天-Element表单校验补充",
      "人资项目问题",
    ],
  },
  {
    text: 'vue黑马头条项目',
    icon: 'vue',
    prefix: '/头条',
    collapsable: true,
    children: [
      '01-项目初始化',
      '02-登录注册',
      '03-个人中心',
      '04-首页-文章列表',
      '05-首页-频道编辑',
      '06-文章搜索',
      '07-文章详情',
      '08-文章评论',
      '09-编辑用户资料',
      '10-编辑用户头像'
    ]
  },
  {
    text: "react进阶笔记",
    collapsable: true,
    prefix: '/react-note',
    icon: 'react',
    children: [
      "1.基础篇-认识jsx",
      "2.基础篇-起源Component",
      "3.基础篇-玄学state",
      "4.基础篇-深入props",
      "5.基础篇-理解lifeCycle",
      "6.基础篇-多功能Ref",
      "7.基础篇-提供者context",
      "8.基础篇-模块化css",
      "9.基础篇-高阶组件",
      "10.优化篇-渲染控制",
      "11.优化篇-渲染调优",
      "12.优化篇-处理海量数据",
      "13.优化篇-细节处理（持续）",
      "14.原理篇-事件原理",
      "15.原理篇-调度与时间片",
      "16.原理篇-调和fiber",
      "17.原理篇-Hooks原理",
      "18.生态篇-React-router",
      "19.生态篇-React-redux",
      "20.生态篇-React-mobx",
      "21.实践篇-实现mini-Router",
      "22.实践篇-表单验证上",
      "23.实践篇-表单验证下",
      "24.实践篇-自定义弹窗",
      "25.实践篇-自定义Hooks设计（持续）",
      "26.实践篇-自定义Hooks实践（持续）",
      "27.原理篇-Context原理",
      "28.原理篇-beginWork和render全流程",
      "29.V18特性篇-useMutableSource外部数据源",
      "30.V18特性篇-transition",
      "31.原理篇-更新流程：进入调度任务",
    ],
  },
  {
    text: '缓存相关',
    prefix: '/缓存相关',
    icon: 'cache',
    collapsable: true,
    children: [
      "1.HTTP 缓存1：开门见山——请求响应头中关于缓存的奥秘",
      "2.HTTP 缓存2：卧虎藏龙——网页由慢到快背后的强缓存",
      "3.HTTP 缓存3：刨根问底——缓存新鲜度与使用期算法",
      "4. HTTP 缓存4：相辅相成——从协商缓存到启发式缓存",
      "5.应用篇：从理论到实际——HTTP 缓存方案解析",
      "6.福利篇：换一种角度——用户操作与 HTTP 缓存",
      "拓展-https"
    ]

  }
]);
