const e={key:"v-3c2a9a0a",path:"/react%E8%AF%BE%E7%A8%8B/05-react-%E6%9E%81%E5%AE%A2%E5%9B%AD%E7%A7%BB%E5%8A%A8%E7%AB%AF/webpack%E9%9D%A2%E8%AF%95%E9%A2%98.html",title:"\u{1F339} webpack\u9762\u8BD5\u9898",lang:"zh-CN",frontmatter:{title:"\u{1F339} webpack\u9762\u8BD5\u9898",summary:"\u9762\u8BD5\u9898 1\u3001\u4EC0\u4E48\u662Fwebpack\uFF08\u5FC5\u4F1A\uFF09 webpack\u662F\u4E00\u4E2A\u6253\u5305\u6A21\u5757\u5316javascript\u7684\u5DE5\u5177\uFF0C\u5728webpack\u91CC\u4E00\u5207\u6587\u4EF6\u7686\u6A21\u5757\uFF0C\u901A\u8FC7loader\u8F6C\u6362\u6587\u4EF6\uFF0C\u901A\u8FC7plugin\u6CE8\u5165\u94A9\u5B50\uFF0C\u6700\u540E\u8F93\u51FA\u7531\u591A\u4E2A\u6A21\u5757\u7EC4\u5408\u6210\u7684\u6587\u4EF6\uFF0Cwebpack\u4E13\u6CE8\u6784\u5EFA\u6A21\u5757\u5316\u9879\u76EE 2\u3001Webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F\uFF08\u5FC5\u4F1A\uFF09 1. \u4E13\u6CE8\u4E8E\u5904\u7406\u6A21\u5757\u5316\u7684\u9879\u76EE\uFF0C\u80FD\u505A\u5230\u5F00\u7BB1\u5373\u7528\uFF0C\u4E00\u6B65\u5230\u4F4D 2. \u901A\u8FC7",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/react%E8%AF%BE%E7%A8%8B/05-react-%E6%9E%81%E5%AE%A2%E5%9B%AD%E7%A7%BB%E5%8A%A8%E7%AB%AF/webpack%E9%9D%A2%E8%AF%95%E9%A2%98.html"}],["meta",{property:"og:site_name",content:"\u8BFE\u7A0B\u7B14\u8BB0"}],["meta",{property:"og:title",content:"\u{1F339} webpack\u9762\u8BD5\u9898"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-22T10:16:09.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-05-22T10:16:09.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u9762\u8BD5\u9898",slug:"\u9762\u8BD5\u9898",children:[{level:3,title:"1\u3001\u4EC0\u4E48\u662Fwebpack\uFF08\u5FC5\u4F1A\uFF09",slug:"_1\u3001\u4EC0\u4E48\u662Fwebpack-\u5FC5\u4F1A",children:[]},{level:3,title:"2\u3001Webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F\uFF08\u5FC5\u4F1A\uFF09",slug:"_2\u3001webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48-\u5FC5\u4F1A",children:[]},{level:3,title:"3\u3001webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48?\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168\uFF08\u5FC5\u4F1A\uFF09",slug:"_3\u3001webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48-\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168-\u5FC5\u4F1A",children:[]},{level:3,title:"4\u3001\u8BF4\u4E00\u4E0B Webpack \u7684\u70ED\u66F4\u65B0\u539F\u7406(\u5FC5\u4F1A)",slug:"_4\u3001\u8BF4\u4E00\u4E0B-webpack-\u7684\u70ED\u66F4\u65B0\u539F\u7406-\u5FC5\u4F1A",children:[]},{level:3,title:"5\u3001webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C\uFF1F\uFF08\u5FC5\u4F1A\uFF09",slug:"_5\u3001webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C-\u5FC5\u4F1A",children:[]},{level:3,title:"6\u3001\u6709\u54EA\u4E9B\u5E38\u89C1\u7684Loader\uFF1F\u4ED6\u4EEC\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u7684\uFF1F\uFF08\u5FC5\u4F1A\uFF09",slug:"_6\u3001\u6709\u54EA\u4E9B\u5E38\u89C1\u7684loader-\u4ED6\u4EEC\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u7684-\u5FC5\u4F1A",children:[]},{level:3,title:"7\u3001Loader\u548CPlugin\u7684\u4E0D\u540C\uFF1F\uFF08\u5FC5\u4F1A\uFF09",slug:"_7\u3001loader\u548Cplugin\u7684\u4E0D\u540C-\u5FC5\u4F1A",children:[]}]},{level:2,title:"8. \u6253\u5305\u4F18\u5316",slug:"_8-\u6253\u5305\u4F18\u5316",children:[]}],git:{createdTime:1653214569e3,updatedTime:1653214569e3,contributors:[{name:"\u6B66\u6653\u6167",email:"wxh199311@outlook.com",commits:1}]},readingTime:{minutes:5.61,words:1683},filePathRelative:"react\u8BFE\u7A0B/05-react-\u6781\u5BA2\u56ED\u79FB\u52A8\u7AEF/webpack\u9762\u8BD5\u9898.md"};export{e as data};
