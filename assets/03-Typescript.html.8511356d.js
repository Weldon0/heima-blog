const e={key:"v-0fbb4f86",path:"/%E5%B0%8F%E5%85%94%E9%B2%9C/03-Typescript.html",title:"\u{1F4DA} 3. TypeScript\u57FA\u672C\u6982\u5FF5",lang:"zh-CN",frontmatter:{summary:"\u{1F4DA} 3. TypeScript\u57FA\u672C\u6982\u5FF5 TypeScript \u662F\u4EC0\u4E48\uFF1F \u76EE\u6807\uFF1A\u80FD\u591F\u8BF4\u51FA\u4EC0\u4E48\u662Ftypescript \u5185\u5BB9\uFF1A TS \u5B98\u65B9\u6587\u6863; TS \u4E2D\u6587\u53C2\u8003 - \u4E0D\u518D\u7EF4\u62A4; TypeScript \u7B80\u79F0\uFF1ATS\uFF0C\u662F JavaScript \u7684\u8D85\u96C6\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF1AJS \u6709\u7684 TS \u90FD\u6709; TypeScript = Type + JavaScript\uFF08\u5728 JS \u57FA\u7840\u4E4B",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/%E5%B0%8F%E5%85%94%E9%B2%9C/03-Typescript.html"}],["meta",{property:"og:site_name",content:"\u8BFE\u7A0B\u7B14\u8BB0"}],["meta",{property:"og:title",content:"\u{1F4DA} 3. TypeScript\u57FA\u672C\u6982\u5FF5"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-06-21T07:39:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-06-21T07:39:07.000Z"}]]},excerpt:"",headers:[{level:2,title:"TypeScript \u662F\u4EC0\u4E48\uFF1F",slug:"typescript-\u662F\u4EC0\u4E48",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8981\u6709typescript",slug:"\u4E3A\u4EC0\u4E48\u8981\u6709typescript",children:[]},{level:2,title:"\u5B89\u88C5\u7F16\u8BD1 TS \u7684\u5DE5\u5177\u5305",slug:"\u5B89\u88C5\u7F16\u8BD1-ts-\u7684\u5DE5\u5177\u5305",children:[]},{level:2,title:"\u7F16\u8BD1\u5E76\u8FD0\u884C TS \u4EE3\u7801",slug:"\u7F16\u8BD1\u5E76\u8FD0\u884C-ts-\u4EE3\u7801",children:[]},{level:2,title:"\u521B\u5EFA\u57FA\u4E8ETS\u7684vue\u9879\u76EE",slug:"\u521B\u5EFA\u57FA\u4E8Ets\u7684vue\u9879\u76EE",children:[]},{level:2,title:"\u7C7B\u578B\u6CE8\u89E3",slug:"\u7C7B\u578B\u6CE8\u89E3",children:[]},{level:2,title:"TypeScript\u7C7B\u578B\u6982\u8FF0",slug:"typescript\u7C7B\u578B\u6982\u8FF0",children:[]},{level:2,title:"TypeScript\u539F\u59CB\u6570\u636E\u7C7B\u578B",slug:"typescript\u539F\u59CB\u6570\u636E\u7C7B\u578B",children:[]},{level:2,title:"\u6570\u7EC4\u7C7B\u578B",slug:"\u6570\u7EC4\u7C7B\u578B",children:[]},{level:2,title:"\u8054\u5408\u7C7B\u578B",slug:"\u8054\u5408\u7C7B\u578B",children:[]},{level:2,title:"\u7C7B\u578B\u522B\u540D",slug:"\u7C7B\u578B\u522B\u540D",children:[]},{level:2,title:"\u51FD\u6570\u7C7B\u578B",slug:"\u51FD\u6570\u7C7B\u578B",children:[{level:3,title:"\u57FA\u672C\u4F7F\u7528",slug:"\u57FA\u672C\u4F7F\u7528",children:[]},{level:3,title:"void \u7C7B\u578B",slug:"void-\u7C7B\u578B",children:[]},{level:3,title:"\u53EF\u9009\u53C2\u6570",slug:"\u53EF\u9009\u53C2\u6570",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B",slug:"\u5BF9\u8C61\u7C7B\u578B",children:[{level:3,title:"\u57FA\u672C\u4F7F\u7528",slug:"\u57FA\u672C\u4F7F\u7528-1",children:[]},{level:3,title:"\u7BAD\u5934\u51FD\u6570\u5F62\u5F0F\u7684\u65B9\u6CD5\u7C7B\u578B",slug:"\u7BAD\u5934\u51FD\u6570\u5F62\u5F0F\u7684\u65B9\u6CD5\u7C7B\u578B",children:[]},{level:3,title:"\u5BF9\u8C61\u53EF\u9009\u5C5E\u6027",slug:"\u5BF9\u8C61\u53EF\u9009\u5C5E\u6027",children:[]},{level:3,title:"\u4F7F\u7528\u7C7B\u578B\u522B\u540D",slug:"\u4F7F\u7528\u7C7B\u578B\u522B\u540D",children:[]},{level:3,title:"\u7EC3\u4E60",slug:"\u7EC3\u4E60",children:[]}]},{level:2,title:"\u63A5\u53E3\u7C7B\u578B",slug:"\u63A5\u53E3\u7C7B\u578B",children:[{level:3,title:"\u57FA\u672C\u4F7F\u7528",slug:"\u57FA\u672C\u4F7F\u7528-2",children:[]},{level:3,title:"interface vs type",slug:"interface-vs-type",children:[]},{level:3,title:"\u63A5\u53E3\u7EE7\u627F",slug:"\u63A5\u53E3\u7EE7\u627F",children:[]}]},{level:2,title:"\u5143\u7EC4\u7C7B\u578B",slug:"\u5143\u7EC4\u7C7B\u578B",children:[]},{level:2,title:"\u7C7B\u578B\u63A8\u8BBA",slug:"\u7C7B\u578B\u63A8\u8BBA",children:[]},{level:2,title:"\u5B57\u9762\u91CF\u7C7B\u578B",slug:"\u5B57\u9762\u91CF\u7C7B\u578B",children:[{level:3,title:"\u57FA\u672C\u4F7F\u7528",slug:"\u57FA\u672C\u4F7F\u7528-3",children:[]},{level:3,title:"\u4F7F\u7528\u6A21\u5F0F\u548C\u573A\u666F",slug:"\u4F7F\u7528\u6A21\u5F0F\u548C\u573A\u666F",children:[]}]},{level:2,title:"\u679A\u4E3E\u7C7B\u578B",slug:"\u679A\u4E3E\u7C7B\u578B",children:[{level:3,title:"\u57FA\u672C\u4F7F\u7528",slug:"\u57FA\u672C\u4F7F\u7528-4",children:[]},{level:3,title:"\u6570\u5B57\u679A\u4E3E",slug:"\u6570\u5B57\u679A\u4E3E",children:[]},{level:3,title:"\u5B57\u7B26\u4E32\u679A\u4E3E",slug:"\u5B57\u7B26\u4E32\u679A\u4E3E",children:[]},{level:3,title:"\u679A\u4E3E\u5B9E\u73B0\u539F\u7406",slug:"\u679A\u4E3E\u5B9E\u73B0\u539F\u7406",children:[]}]},{level:2,title:"any \u7C7B\u578B",slug:"any-\u7C7B\u578B",children:[]},{level:2,title:"\u7C7B\u578B\u65AD\u8A00",slug:"\u7C7B\u578B\u65AD\u8A00",children:[]},{level:2,title:"\u6CDB\u578B-\u57FA\u672C\u4ECB\u7ECD",slug:"\u6CDB\u578B-\u57FA\u672C\u4ECB\u7ECD",children:[]},{level:2,title:"\u6CDB\u578B-\u6CDB\u578B\u51FD\u6570",slug:"\u6CDB\u578B-\u6CDB\u578B\u51FD\u6570",children:[]},{level:2,title:"\u7B80\u5316\u6CDB\u578B\u51FD\u6570\u8C03\u7528",slug:"\u7B80\u5316\u6CDB\u578B\u51FD\u6570\u8C03\u7528",children:[]},{level:2,title:"\u6CDB\u578B\u7EA6\u675F",slug:"\u6CDB\u578B\u7EA6\u675F",children:[]},{level:2,title:"\u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B",slug:"\u6307\u5B9A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B",children:[]},{level:2,title:"\u6DFB\u52A0\u7EA6\u675F",slug:"\u6DFB\u52A0\u7EA6\u675F",children:[]},{level:2,title:"\u591A\u4E2A\u7C7B\u578B\u53D8\u91CF",slug:"\u591A\u4E2A\u7C7B\u578B\u53D8\u91CF",children:[]},{level:2,title:"\u6CDB\u578B\u63A5\u53E3",slug:"\u6CDB\u578B\u63A5\u53E3",children:[]},{level:2,title:"JS \u4E2D\u7684\u6CDB\u578B\u63A5\u53E3",slug:"js-\u4E2D\u7684\u6CDB\u578B\u63A5\u53E3",children:[]},{level:2,title:"defineProps\u4E0ETypescript",slug:"defineprops\u4E0Etypescript",children:[]},{level:2,title:"defineEmits\u4E0ETypescript",slug:"defineemits\u4E0Etypescript",children:[]},{level:2,title:"ref\u4E0ETypescript",slug:"ref\u4E0Etypescript",children:[]},{level:2,title:"computed\u4E0ETypescript",slug:"computed\u4E0Etypescript",children:[]},{level:2,title:"\u4E8B\u4EF6\u5904\u7406\u4E0ETypescript",slug:"\u4E8B\u4EF6\u5904\u7406\u4E0Etypescript",children:[]},{level:2,title:"Template Ref\u4E0ETypescript",slug:"template-ref\u4E0Etypescript",children:[]},{level:2,title:"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26",slug:"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26",children:[]},{level:2,title:"\u975E\u7A7A\u65AD\u8A00",slug:"\u975E\u7A7A\u65AD\u8A00",children:[]},{level:2,title:"\u57FA\u672C\u4ECB\u7ECD",slug:"\u57FA\u672C\u4ECB\u7ECD",children:[]},{level:2,title:"\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6",slug:"\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6",children:[]},{level:2,title:"\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6",slug:"\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6",children:[]},{level:2,title:"\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6-\u5171\u4EAB\u6570\u636E",slug:"\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6-\u5171\u4EAB\u6570\u636E",children:[]},{level:2,title:"Axios\u4E0ETypescript",slug:"axios\u4E0Etypescript",children:[]},{level:2,title:"\u9879\u76EE\u642D\u5EFA",slug:"\u9879\u76EE\u642D\u5EFA",children:[]},{level:2,title:"\u63A5\u53E3\u8BF4\u660E",slug:"\u63A5\u53E3\u8BF4\u660E",children:[]},{level:2,title:"pinia\u73AF\u5883\u642D\u5EFA",slug:"pinia\u73AF\u5883\u642D\u5EFA",children:[]},{level:2,title:"\u83B7\u53D6\u9891\u9053\u6570\u636E",slug:"\u83B7\u53D6\u9891\u9053\u6570\u636E",children:[]},{level:2,title:"\u9891\u9053\u9AD8\u4EAE\u6548\u679C",slug:"\u9891\u9053\u9AD8\u4EAE\u6548\u679C",children:[]},{level:2,title:"\u6587\u7AE0\u5217\u8868\u6570\u636E\u83B7\u53D6",slug:"\u6587\u7AE0\u5217\u8868\u6570\u636E\u83B7\u53D6",children:[]}],git:{createdTime:1655797147e3,updatedTime:1655797147e3,contributors:[{name:"\u6B66\u6653\u6167",email:"wxh199311@outlook.com",commits:1}]},readingTime:{minutes:34.55,words:10365},filePathRelative:"\u5C0F\u5154\u9C9C/03-Typescript.md"};export{e as data};
