const e=JSON.parse('{"key":"v-855ef322","path":"/react%E8%AF%BE%E7%A8%8B/06-react-TS/05-%E4%BD%BF%E7%94%A8Typescript%E6%94%B9%E9%80%A0%E9%A1%B9%E7%9B%AE.html","title":"\u{1F4DA} 05-\u4F7F\u7528Typescript\u6539\u9020\u9879\u76EE","lang":"zh-CN","frontmatter":{"title":"\u{1F4DA} 05-\u4F7F\u7528Typescript\u6539\u9020\u9879\u76EE","summary":"\u9879\u76EE\u6539\u9020 \u6539\u9020\u5EFA\u8BAE 1. \u9879\u76EE\u4E2D\u4F7F\u7528 TS \u65F6\uFF0C\u65E2\u53EF\u4EE5\u5305\u542B js \u6587\u4EF6\uFF0C\u53C8\u53EF\u4EE5\u5305\u542B ts \u6587\u4EF6\\r.js\u3001.jsx\uFF08\u4F7F\u7528 JS \u65F6\uFF0CReact \u7EC4\u4EF6\u5BF9\u5E94\u7684\u6587\u4EF6\u540E\u7F00\uFF09; \\r.ts\u3001.tsx\uFF08\u4F7F\u7528 TS \u65F6\uFF0CReact \u7EC4\u4EF6\u5BF9\u5E94\u7684\u6587\u4EF6\u540E\u7F00\uFF09\u3001.d.ts; 2. \u5728\u5DF2\u6709\u9879\u76EE\u4E2D\uFF0C\u6DFB\u52A0 TS \u65F6\u7684\u63A8\u8350\u6A21\u5F0F\\r\u65B0\u7684\u529F\u80FD\u7528 TS; \\r\u5DF2\u5B9E\u73B0\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4FDD\u6301 JS \u6587\u4EF6\uFF0C\u6162","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/react%E8%AF%BE%E7%A8%8B/06-react-TS/05-%E4%BD%BF%E7%94%A8Typescript%E6%94%B9%E9%80%A0%E9%A1%B9%E7%9B%AE.html"}],["meta",{"property":"og:site_name","content":"\u8BFE\u7A0B\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u{1F4DA} 05-\u4F7F\u7528Typescript\u6539\u9020\u9879\u76EE"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-22T10:16:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-22T10:16:09.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u9879\u76EE\u6539\u9020","slug":"\u9879\u76EE\u6539\u9020","children":[]},{"level":2,"title":"\u6539\u9020\u5EFA\u8BAE","slug":"\u6539\u9020\u5EFA\u8BAE","children":[]},{"level":2,"title":"\u4FEE\u6539\u5165\u53E3\u6587\u4EF6","slug":"\u4FEE\u6539\u5165\u53E3\u6587\u4EF6","children":[{"level":3,"title":"index.ts","slug":"index-ts","children":[]}]},{"level":2,"title":"\u4FEE\u6539App.js","slug":"\u4FEE\u6539app-js","children":[]},{"level":2,"title":"history.js","slug":"history-js","children":[]},{"level":2,"title":"storage.js","slug":"storage-js","children":[{"level":3,"title":"\u975E\u7A7A\u65AD\u8A00","slug":"\u975E\u7A7A\u65AD\u8A00","children":[]},{"level":3,"title":"\u6574\u4F53\u4FEE\u6539","slug":"\u6574\u4F53\u4FEE\u6539","children":[]}]},{"level":2,"title":"request.js\u6539\u9020","slug":"request-js\u6539\u9020","children":[]},{"level":2,"title":"Icon\u7EC4\u4EF6\u4FEE\u6539","slug":"icon\u7EC4\u4EF6\u4FEE\u6539","children":[]},{"level":2,"title":"typescript\u4E2Dref\u7684\u4F7F\u7528","slug":"typescript\u4E2Dref\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"Img\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u4FEE\u6539","slug":"img\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u4FEE\u6539","children":[]},{"level":2,"title":"Input\u7EC4\u4EF6\u4FEE\u6539","slug":"input\u7EC4\u4EF6\u4FEE\u6539","children":[]},{"level":2,"title":"Textarea\u7EC4\u4EF6\u6539\u9020","slug":"textarea\u7EC4\u4EF6\u6539\u9020","children":[]},{"level":2,"title":"NavBar\u7EC4\u4EF6\u6539\u9020","slug":"navbar\u7EC4\u4EF6\u6539\u9020","children":[]},{"level":2,"title":"AuthRoute\u7EC4\u4EF6\u6539\u9020","slug":"authroute\u7EC4\u4EF6\u6539\u9020","children":[]},{"level":2,"title":"Layout\u7EC4\u4EF6","slug":"layout\u7EC4\u4EF6","children":[{"level":3,"title":"location\u7684\u5904\u7406","slug":"location\u7684\u5904\u7406","children":[]},{"level":3,"title":"redux-action\u4FEE\u6539","slug":"redux-action\u4FEE\u6539","children":[]},{"level":3,"title":"redux-reducer\u4FEE\u6539","slug":"redux-reducer\u4FEE\u6539","children":[]},{"level":3,"title":"\u7C7B\u578B\u63D0\u53D6","slug":"\u7C7B\u578B\u63D0\u53D6","children":[]}]},{"level":2,"title":"\u4FEE\u6539redux","slug":"\u4FEE\u6539redux","children":[]},{"level":2,"title":"\u6CDB\u578B\u5DE5\u5177\u7C7B\u578B - ReturnType","slug":"\u6CDB\u578B\u5DE5\u5177\u7C7B\u578B-returntype","children":[]},{"level":2,"title":"\u83B7\u53D6redux\u72B6\u6001\u7684\u7C7B\u578B","slug":"\u83B7\u53D6redux\u72B6\u6001\u7684\u7C7B\u578B","children":[]},{"level":2,"title":"useSelector \u7684\u7C7B\u578B","slug":"useselector-\u7684\u7C7B\u578B","children":[]},{"level":2,"title":"TS \u4E2D\u7684\u7D22\u5F15\u67E5\u8BE2\u7C7B\u578B","slug":"ts-\u4E2D\u7684\u7D22\u5F15\u67E5\u8BE2\u7C7B\u578B","children":[]},{"level":2,"title":"\u4FEE\u6539aciton","slug":"\u4FEE\u6539aciton","children":[]}],"git":{"createdTime":1653214569000,"updatedTime":1653214569000,"contributors":[{"name":"\u6B66\u6653\u6167","email":"wxh199311@outlook.com","commits":1}]},"readingTime":{"minutes":7.96,"words":2387},"filePathRelative":"react\u8BFE\u7A0B/06-react-TS/05-\u4F7F\u7528Typescript\u6539\u9020\u9879\u76EE.md","localizedDate":"2022\u5E745\u670822\u65E5"}');export{e as data};
