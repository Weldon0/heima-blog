import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{e}from"./app.696268bf.js";const n={},p=e(`<h2 id="\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u9762\u8BD5\u9898</h2><h3 id="_1\u3001\u4EC0\u4E48\u662Fwebpack-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4EC0\u4E48\u662Fwebpack-\u5FC5\u4F1A" aria-hidden="true">#</a> 1\u3001\u4EC0\u4E48\u662Fwebpack\uFF08\u5FC5\u4F1A\uFF09</h3><p>webpack\u662F\u4E00\u4E2A\u6253\u5305\u6A21\u5757\u5316javascript\u7684\u5DE5\u5177\uFF0C\u5728webpack\u91CC\u4E00\u5207\u6587\u4EF6\u7686\u6A21\u5757\uFF0C\u901A\u8FC7loader\u8F6C\u6362\u6587\u4EF6\uFF0C\u901A\u8FC7plugin\u6CE8\u5165\u94A9\u5B50\uFF0C\u6700\u540E\u8F93\u51FA\u7531\u591A\u4E2A\u6A21\u5757\u7EC4\u5408\u6210\u7684\u6587\u4EF6\uFF0Cwebpack\u4E13\u6CE8\u6784\u5EFA\u6A21\u5757\u5316\u9879\u76EE</p><h3 id="_2\u3001webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_2\u3001webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48-\u5FC5\u4F1A" aria-hidden="true">#</a> 2\u3001Webpack\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F\uFF08\u5FC5\u4F1A\uFF09</h3><ol><li>\u4E13\u6CE8\u4E8E\u5904\u7406\u6A21\u5757\u5316\u7684\u9879\u76EE\uFF0C\u80FD\u505A\u5230\u5F00\u7BB1\u5373\u7528\uFF0C\u4E00\u6B65\u5230\u4F4D</li><li>\u901A\u8FC7plugin\u6269\u5C55\uFF0C\u5B8C\u6574\u597D\u7528\u53C8\u4E0D\u5931\u7075\u6D3B</li><li>\u901A\u8FC7loaders\u6269\u5C55, \u53EF\u4EE5\u8BA9webpack\u628A\u6240\u6709\u7C7B\u578B\u7684\u6587\u4EF6\u90FD\u89E3\u6790\u6253\u5305</li><li>\u533A\u5E9E\u5927\u6D3B\u8DC3\uFF0C\u7ECF\u5E38\u5F15\u5165\u7D27\u8DDF\u65F6\u4EE3\u53D1\u5C55\u7684\u65B0\u7279\u6027\uFF0C\u80FD\u4E3A\u5927\u591A\u6570\u573A\u666F\u627E\u5230\u5DF2\u6709\u7684\u5F00\u6E90\u6269\u5C55</li></ol><h3 id="_3\u3001webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48-\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_3\u3001webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48-\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168-\u5FC5\u4F1A" aria-hidden="true">#</a> 3\u3001webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48?\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168\uFF08\u5FC5\u4F1A\uFF09</h3><p>Webpack \u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u6D41\u7A0B\uFF1A</p><ol><li></li></ol><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> \u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570
<span class="token list punctuation">2.</span> \u5F00\u59CB\u7F16\u8BD1\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u5F00\u59CB\u6267\u884C\u7F16\u8BD1
<span class="token list punctuation">3.</span> \u786E\u5B9A\u5165\u53E3\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6
<span class="token list punctuation">4.</span> \u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406
<span class="token list punctuation">5.</span> \u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB
<span class="token list punctuation">6.</span> \u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A
<span class="token list punctuation">7.</span> \u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0CWebpack \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u51FA\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8 Webpack \u7684\u8FD0\u884C\u7ED3\u679C</p><h3 id="_4\u3001\u8BF4\u4E00\u4E0B-webpack-\u7684\u70ED\u66F4\u65B0\u539F\u7406-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u8BF4\u4E00\u4E0B-webpack-\u7684\u70ED\u66F4\u65B0\u539F\u7406-\u5FC5\u4F1A" aria-hidden="true">#</a> 4\u3001\u8BF4\u4E00\u4E0B Webpack \u7684\u70ED\u66F4\u65B0\u539F\u7406(\u5FC5\u4F1A)</h3><p>webpack \u7684\u70ED\u66F4\u65B0\u53C8\u79F0\u70ED\u66FF\u6362\uFF08Hot Module Replacement\uFF09\uFF0C\u7F29\u5199\u4E3A HMR\u3002\u8FD9\u4E2A\u673A\u5236\u53EF\u4EE5\u505A\u5230\u4E0D\u7528\u5237\u65B0\u6D4F\u89C8\u5668\u800C\u5C06\u65B0\u53D8\u66F4\u7684\u6A21\u5757\u66FF\u6362\u6389\u65E7\u7684\u6A21\u5757\u3002</p><p>HMR\u7684\u6838\u5FC3\u5C31\u662F\u5BA2\u6237\u7AEF\u4ECE\u670D\u52A1\u7AEF\u62C9\u53BB\u66F4\u65B0\u540E\u7684\u6587\u4EF6\uFF0C\u51C6\u786E\u7684\u8BF4\u662F chunk diff (chunk \u9700\u8981\u66F4\u65B0\u7684\u90E8\u5206)\uFF0C\u5B9E\u9645\u4E0A WDS \u4E0E\u6D4F\u89C8\u5668\u4E4B\u95F4\u7EF4\u62A4\u4E86\u4E00\u4E2A Websocket\uFF0C\u5F53\u672C\u5730\u8D44\u6E90\u53D1\u751F\u53D8\u5316\u65F6\uFF0CWDS \u4F1A\u5411\u6D4F\u89C8\u5668\u63A8\u9001\u66F4\u65B0\uFF0C\u5E76\u5E26\u4E0A\u6784\u5EFA\u65F6\u7684 hash\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u4E0E\u4E0A\u4E00\u6B21\u8D44\u6E90\u8FDB\u884C\u5BF9\u6BD4\u3002\u5BA2\u6237\u7AEF\u5BF9\u6BD4\u51FA\u5DEE\u5F02\u540E\u4F1A\u5411 WDS \u53D1\u8D77 Ajax \u8BF7\u6C42\u6765\u83B7\u53D6\u66F4\u6539\u5185\u5BB9(\u6587\u4EF6\u5217\u8868\u3001hash)\uFF0C\u8FD9\u6837\u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u518D\u501F\u52A9\u8FD9\u4E9B\u4FE1\u606F\u7EE7\u7EED\u5411 WDS \u53D1\u8D77 jsonp \u8BF7\u6C42\u83B7\u53D6\u8BE5chunk\u7684\u589E\u91CF\u66F4\u65B0\u3002</p><p>\u540E\u7EED\u7684\u90E8\u5206(\u62FF\u5230\u589E\u91CF\u66F4\u65B0\u4E4B\u540E\u5982\u4F55\u5904\u7406\uFF1F\u54EA\u4E9B\u72B6\u6001\u8BE5\u4FDD\u7559\uFF1F\u54EA\u4E9B\u53C8\u9700\u8981\u66F4\u65B0\uFF1F)\u7531 HotModulePlugin \u6765\u5B8C\u6210\uFF0C\u63D0\u4F9B\u4E86\u76F8\u5173 API \u4EE5\u4F9B\u5F00\u53D1\u8005\u9488\u5BF9\u81EA\u8EAB\u573A\u666F\u8FDB\u884C\u5904\u7406\uFF0C\u50CFreact-hot-loader \u548C vue-loader \u90FD\u662F\u501F\u52A9\u8FD9\u4E9B API \u5B9E\u73B0 HMR\u3002</p><h3 id="_5\u3001webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_5\u3001webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C-\u5FC5\u4F1A" aria-hidden="true">#</a> 5\u3001webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C\uFF1F\uFF08\u5FC5\u4F1A\uFF09</h3><p><strong>1)</strong> <strong>\u4E09\u8005\u4E4B\u95F4\u7684\u533A\u522B</strong></p><p>\u4E09\u8005\u90FD\u662F\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0Cgrunt\u548Cgulp\u5728\u65E9\u671F\u6BD4\u8F83\u6D41\u884C\uFF0C\u73B0\u5728webpack\u76F8\u5BF9\u6765\u8BF4\u6BD4\u8F83\u4E3B\u6D41\uFF0C\u4E0D\u8FC7\u4E00\u4E9B\u8F7B\u91CF\u5316\u7684\u4EFB\u52A1\u8FD8\u662F\u4F1A\u7528gulp\u6765\u5904\u7406\uFF0C\u6BD4\u5982\u5355\u72EC\u6253\u5305CSS\u6587\u4EF6\u7B49\u3002</p><p>grunt\u548Cgulp\u662F\u57FA\u4E8E\u4EFB\u52A1\u548C\u6D41\uFF08Task\u3001Stream\uFF09\u7684\u3002\u7C7B\u4F3CjQuery\uFF0C\u627E\u5230\u4E00\u4E2A\uFF08\u6216\u4E00\u7C7B\uFF09\u6587\u4EF6\uFF0C\u5BF9\u5176\u505A\u4E00\u7CFB\u5217\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u66F4\u65B0\u6D41\u4E0A\u7684\u6570\u636E\uFF0C \u6574\u6761\u94FE\u5F0F\u64CD\u4F5C\u6784\u6210\u4E86\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u591A\u4E2A\u4EFB\u52A1\u5C31\u6784\u6210\u4E86\u6574\u4E2Aweb\u7684\u6784\u5EFA\u6D41\u7A0B\u3002</p><p>webpack\u662F\u57FA\u4E8E\u5165\u53E3\u7684\u3002webpack\u4F1A\u81EA\u52A8\u5730\u9012\u5F52\u89E3\u6790\u5165\u53E3\u6240\u9700\u8981\u52A0\u8F7D\u7684\u6240\u6709\u8D44\u6E90\u6587\u4EF6\uFF0C\u7136\u540E\u7528\u4E0D\u540C\u7684Loader\u6765\u5904\u7406\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u7528Plugin\u6765\u6269\u5C55webpack\u529F\u80FD\u3002</p><p><strong>2)</strong> <strong>\u4ECE\u6784\u5EFA\u601D\u8DEF\u6765\u8BF4</strong></p><p>gulp\u548Cgrunt\u9700\u8981\u5F00\u53D1\u8005\u5C06\u6574\u4E2A\u524D\u7AEF\u6784\u5EFA\u8FC7\u7A0B\u62C6\u5206\u6210\u591A\u4E2A<code>Task</code>\uFF0C\u5E76\u5408\u7406\u63A7\u5236\u6240\u6709<code>Task</code>\u7684\u8C03\u7528\u5173\u7CFB webpack\u9700\u8981\u5F00\u53D1\u8005\u627E\u5230\u5165\u53E3\uFF0C\u5E76\u9700\u8981\u6E05\u695A\u5BF9\u4E8E\u4E0D\u540C\u7684\u8D44\u6E90\u5E94\u8BE5\u4F7F\u7528\u4EC0\u4E48Loader\u505A\u4F55\u79CD\u89E3\u6790\u548C\u52A0\u5DE5</p><p><strong>3)</strong> <strong>\u5BF9\u4E8E\u77E5\u8BC6\u80CC\u666F\u6765\u8BF4</strong></p><p>gulp\u66F4\u50CF\u540E\u7AEF\u5F00\u53D1\u8005\u7684\u601D\u8DEF\uFF0C\u9700\u8981\u5BF9\u4E8E\u6574\u4E2A\u6D41\u7A0B\u4E86\u5982\u6307\u638C webpack\u66F4\u503E\u5411\u4E8E\u524D\u7AEF\u5F00\u53D1\u8005\u7684\u601D\u8DEF</p><h3 id="_6\u3001\u6709\u54EA\u4E9B\u5E38\u89C1\u7684loader-\u4ED6\u4EEC\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u7684-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u6709\u54EA\u4E9B\u5E38\u89C1\u7684loader-\u4ED6\u4EEC\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u7684-\u5FC5\u4F1A" aria-hidden="true">#</a> 6\u3001\u6709\u54EA\u4E9B\u5E38\u89C1\u7684Loader\uFF1F\u4ED6\u4EEC\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u7684\uFF1F\uFF08\u5FC5\u4F1A\uFF09</h3><p>1\u3001 file-loader\uFF1A\u628A\u6587\u4EF6\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u5728\u4EE3\u7801\u4E2D\u901A\u8FC7\u76F8\u5BF9 URL \u53BB\u5F15\u7528\u8F93\u51FA\u7684\u6587\u4EF6</p><p>2\u3001 url-loader\uFF1A\u548C file-loader \u7C7B\u4F3C\uFF0C\u4F46\u662F\u80FD\u5728\u6587\u4EF6\u5F88\u5C0F\u7684\u60C5\u51B5\u4E0B\u4EE5 base64 \u7684\u65B9\u5F0F\u628A\u6587\u4EF6\u5185\u5BB9\u6CE8\u5165\u5230\u4EE3\u7801\u4E2D\u53BB</p><p>3\u3001 source-map-loader\uFF1A\u52A0\u8F7D\u989D\u5916\u7684 Source Map \u6587\u4EF6\uFF0C\u4EE5\u65B9\u4FBF\u65AD\u70B9\u8C03\u8BD5</p><p>4\u3001 image-loader\uFF1A\u52A0\u8F7D\u5E76\u4E14\u538B\u7F29\u56FE\u7247\u6587\u4EF6</p><p>5\u3001 babel-loader\uFF1A\u628A ES6 \u8F6C\u6362\u6210 ES5</p><p>6\u3001 css-loader\uFF1A\u52A0\u8F7D CSS\uFF0C\u652F\u6301\u6A21\u5757\u5316\u3001\u538B\u7F29\u3001\u6587\u4EF6\u5BFC\u5165\u7B49\u7279\u6027</p><p>7\u3001 style-loader\uFF1A\u628A CSS \u4EE3\u7801\u6CE8\u5165\u5230 JavaScript \u4E2D\uFF0C\u901A\u8FC7 DOM \u64CD\u4F5C\u53BB\u52A0\u8F7D CSS\u3002</p><p>8\u3001 eslint-loader\uFF1A\u901A\u8FC7 ESLint \u68C0\u67E5 JavaScript \u4EE3\u7801</p><h3 id="_7\u3001loader\u548Cplugin\u7684\u4E0D\u540C-\u5FC5\u4F1A" tabindex="-1"><a class="header-anchor" href="#_7\u3001loader\u548Cplugin\u7684\u4E0D\u540C-\u5FC5\u4F1A" aria-hidden="true">#</a> 7\u3001Loader\u548CPlugin\u7684\u4E0D\u540C\uFF1F\uFF08\u5FC5\u4F1A\uFF09</h3><p><strong>1)</strong> <strong>\u4E0D\u540C\u7684\u4F5C\u7528</strong></p><p>Loader\u76F4\u8BD1\u4E3A\u201C\u52A0\u8F7D\u5668\u201D\u3002Webpack\u5C06\u4E00\u5207\u6587\u4EF6\u89C6\u4E3A\u6A21\u5757\uFF0C\u4F46\u662Fwebpack\u539F\u751F\u662F\u53EA\u80FD\u89E3\u6790js\u6587\u4EF6\uFF0C\u5982\u679C\u60F3\u5C06\u5176\u4ED6\u6587\u4EF6\u4E5F\u6253\u5305\u7684\u8BDD\uFF0C\u5C31\u4F1A\u7528\u5230loader\u3002 \u6240\u4EE5Loader\u7684\u4F5C\u7528\u662F\u8BA9webpack\u62E5\u6709\u4E86\u52A0\u8F7D\u548C\u89E3\u6790\u975EJavaScript\u6587\u4EF6\u7684\u80FD\u529B\u3002</p><p>Plugin\u76F4\u8BD1\u4E3A\u201C\u63D2\u4EF6\u201D\u3002Plugin\u53EF\u4EE5\u6269\u5C55webpack\u7684\u529F\u80FD\uFF0C\u8BA9webpack\u5177\u6709\u66F4\u591A<code>\u7684\u7075\u6D3B\u6027</code>\u3002 \u5728 Webpack \u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002</p><p><strong>2)</strong> <strong>\u4E0D\u540C\u7684\u7528\u6CD5</strong></p><p>Loader\u5728module.rules\u4E2D\u914D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4ED6\u4F5C\u4E3A\u6A21\u5757\u7684\u89E3\u6790\u89C4\u5219\u800C\u5B58\u5728\u3002 \u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u90FD\u662F\u4E00\u4E2AObject\uFF0C\u91CC\u9762\u63CF\u8FF0\u4E86\u5BF9\u4E8E\u4EC0\u4E48\u7C7B\u578B\u7684\u6587\u4EF6\uFF08test\uFF09\uFF0C\u4F7F\u7528\u4EC0\u4E48\u52A0\u8F7D(loader)\u548C\u4F7F\u7528\u7684\u53C2\u6570\uFF08options\uFF09</p><p>Plugin\u5728plugins\u4E2D\u5355\u72EC\u914D\u7F6E\u3002 \u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u662F\u4E00\u4E2Aplugin\u7684\u5B9E\u4F8B\uFF0C\u53C2\u6570\u90FD\u901A\u8FC7\u6784\u9020\u51FD\u6570\u4F20\u5165\u3002</p><h2 id="_8-\u6253\u5305\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_8-\u6253\u5305\u4F18\u5316" aria-hidden="true">#</a> 8. \u6253\u5305\u4F18\u5316</h2>`,40);function r(s,i){return p}var l=a(n,[["render",r],["__file","webpack\u9762\u8BD5\u9898.html.vue"]]);export{l as default};
