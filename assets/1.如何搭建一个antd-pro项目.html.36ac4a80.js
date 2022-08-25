import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.88f692a7.js";const p={},t=e(`<h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u6211\u4EEC\u63D0\u4F9B\u4E86 create umi \u6765\u5FEB\u901F\u7684\u521D\u59CB\u5316\u811A\u624B\u67B6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 npm</span>
npx create-umi myapp
<span class="token comment"># \u4F7F\u7528 yarn</span>
<span class="token function">yarn</span> create umi myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309\u7167 umi \u811A\u624B\u67B6\u7684\u5F15\u5BFC\uFF0C\u7B2C\u4E00\u6B65\u5148\u9009\u62E9 ant-design-pro\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>? Select the boilerplate <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F ant-design-pro  - Create project with a layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a easy boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9009\u62E9 antd \u7684\u8BED\u8A00\u7248\u672C\uFF0CTypeScript \u6216 JavaScript</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>? \u{1F913} Which language <span class="token keyword">do</span> you want to use? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F TypeScript
  JavaScript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9009\u62E9 antd \u7684\u6A21\u677F\uFF0Csimple \u662F\u57FA\u7840\u6A21\u677F\uFF0C\u53EA\u63D0\u4F9B\u4E86\u6846\u67B6\u8FD0\u884C\u7684\u57FA\u672C\u5185\u5BB9\uFF0Ccomplete \u5305\u542B antd \u7684\u96C6\u6210\u65B9\u6848\uFF0C\u4E0D\u592A\u9002\u5408\u5F53\u57FA\u7840\u6A21\u677F\u6765\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>? \u{1F680} Do you need all the blocks or a simple scaffold? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F simple
  complete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> myapp <span class="token operator">&amp;&amp;</span> tyarn
// \u6216
$ <span class="token builtin class-name">cd</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u59CB\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> \u5F00\u59CB\u914D\u7F6E\u9879\u76EE</h2><ol><li><p>\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883\u4EE3\u7406</p><p>Config/proxy.ts</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u5728\u751F\u4EA7\u73AF\u5883 \u4EE3\u7406\u662F\u65E0\u6CD5\u751F\u6548\u7684\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6CA1\u6709\u751F\u4EA7\u73AF\u5883\u7684\u914D\u7F6E
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0D\u540C\u73AF\u5883\u4E0B\u9762\u62E6\u622A\u914D\u7F6E\u9879</span>
  <span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// localhost:8000/api/** -&gt; http://42.192.129.12:3001</span>
    <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8981\u4EE3\u7406\u7684\u5730\u5740</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://42.192.129.12:3001&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4F9D\u8D56 origin \u7684\u529F\u80FD\u53EF\u80FD\u9700\u8981\u8FD9\u4E2A\uFF0C\u6BD4\u5982 cookie</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://proapi.azurewebsites.net&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;your pre url&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,13),i=[t];function l(o,r){return s(),a("div",null,i)}var u=n(p,[["render",l],["__file","1.\u5982\u4F55\u642D\u5EFA\u4E00\u4E2Aantd-pro\u9879\u76EE.html.vue"]]);export{u as default};
