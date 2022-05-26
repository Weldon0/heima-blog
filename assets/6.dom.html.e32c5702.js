import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s}from"./app.2ab07d3f.js";const a={},t=s(`<h2 id="dom\u7684\u4E8B\u4EF6\u6A21\u578B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#dom\u7684\u4E8B\u4EF6\u6A21\u578B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> DOM\u7684\u4E8B\u4EF6\u6A21\u578B\u662F\u4EC0\u4E48\uFF1F</h2><p>DOM\u7684\u4E8B\u4EF6\u6A21\u578B(\u6CE8\u518C\u4E8B\u4EF6\u7684\u65B9\u5F0F)\u5206\u4E3A\uFF1A</p><ul><li>\u811A\u672C\u6A21\u578B</li><li>\u5185\u8054\u6A21\u578B\uFF08\u540C\u7C7B\u4E00\u4E2A\uFF0C\u540E\u8005\u8986\u76D6\u524D\u8005\uFF09</li><li>\u52A8\u6001\u7ED1\u5B9A\uFF08\u540C\u7C7B\u53EF\u591A\u4E2A\uFF09</li></ul><p><strong>\u811A\u672C\u6A21\u578B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u811A\u672C\u6A21\u578B\uFF1A\u2F8F\u5185\u7ED1\u5B9A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token literal-property property">javascrpt</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Hello1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5185\u8054\u6A21\u578B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5185\u8054\u6A21\u578B\uFF1A\u540C\u2F00\u4E2A\u5143\u7D20\u7684\u540C\u7C7B\u4E8B\u4EF6\u53EA\u80FD\u6DFB\u52A0\u2F00\u4E2A\uFF0C\u5982\u679C\u6DFB\u52A0\u591A\u4E2A\u5219\u540E\u6DFB\u52A0\u7684\u4F1A\u8986\u76D6\u4E4B\u524D\u6DFB\u52A0\u7684 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Hello2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u52A8\u6001\u7ED1\u5B9A</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u52A8\u6001\u7ED1\u5B9A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* 1. \u8FD9\u79CD\u65B9\u5F0F\u53EA\u80FD\u7ED9\u540C\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6 */</span>
  btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token comment">/* 2. \u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u7ED9\u540C\u2F00\u4E2A\u5143\u7D20\u6DFB\u52A0\u591A\u4E2A\u540C\u7C7B\u4E8B\u4EF6 */</span>
  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom\u7684\u4E8B\u4EF6\u6D41\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#dom\u7684\u4E8B\u4EF6\u6D41\u662F\u4EC0\u4E48" aria-hidden="true">#</a> DOM\u7684\u4E8B\u4EF6\u6D41\u662F\u4EC0\u4E48\uFF1F</h2><p><strong>\u4E8B\u4EF6</strong></p><p>\u4E8B\u4EF6\u662FHTML\u2F42\u6863\u6216\u6D4F\u89C8\u5668\u7A97\u2F1D\u4E2D\u53D1\u2F63\u7684\u2F00\u4E9B\u7279\u5B9A\u7684\u4EA4\u4E92\u77AC\u95F4\u3002</p><p><strong>\u4E8B\u4EF6\u6D41</strong></p><p>\u2F1C\u79F0\u4E3A\u4E8B\u4EF6\u4F20\u64AD\uFF0C\u662F\u2EDA\u2FAF\u4E2D\u63A5\u6536\u4E8B\u4EF6\u7684\u987A\u5E8F\u3002DOM2\u7EA7\u4E8B\u4EF6\u89C4\u5B9A\u7684\u4E8B\u4EF6\u6D41\u5305\u62EC\u4E863\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\uFF08capture phase\uFF09</li><li>\u5904\u4E8E\u2F6C\u6807\u9636\u6BB5\uFF08target phase\uFF09</li><li>\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5\uFF08bubbling phase\uFF09</li></ul><p><img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/20210527235530.png" alt="" loading="lazy"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u4E8B\u4EF6\u6D41\u7684\u89E6\u53D1\u987A\u5E8F\u662F\uFF1A</p><ol><li>\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\uFF0C\u4E3A\u622A\u83B7\u4E8B\u4EF6\u63D0\u4F9B\u4E86\u673A\u4F1A</li><li>\u5B9E\u9645\u7684\u2F6C\u6807\u5143\u7D20\u63A5\u6536\u5230\u4E8B\u4EF6</li><li>\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5\uFF0C\u53EF\u5728\u8FD9\u4E2A\u9636\u6BB5\u5BF9\u4E8B\u4EF6\u505A\u51FA\u54CD\u5E94</li></ol><p><strong>\u4E8B\u4EF6\u5192\u6CE1\uFF08Event Bubbling\uFF09</strong></p><p>\u4E8B\u4EF6\u5F00\u59CB\u7531\u6700\u5177\u4F53\u7684\u5143\u7D20\uFF08\u2F42\u6863\u4E2D\u5D4C\u5957\u5C42\u6B21\u6700\u6DF1\u7684\u90A3\u4E2A\u8282\u70B9\uFF09\u63A5\u6536\u5230\u540E\uFF0C\u5F00\u59CB\u9010\u7EA7\u5411\u4E0A\u4F20\u64AD\u5230\u8F83\u4E3A\u4E0D\u5177\u4F53\u7684\u8282\u70B9\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u70B9\u51FB\u4E86\u4E0A\u9762\u9875\u9762\u4EE3\u7801\u4E2D\u7684 <code>&lt;button&gt;</code> \u6309\u94AE\uFF0C\u90A3\u4E48\u8BE5 <code>click</code> \u70B9\u51FB\u4E8B\u4EF6\u4F1A\u6CBF\u7740 DOM \u6811\u5411\u4E0A\u9010\u7EA7\u4F20\u64AD\uFF0C\u5728\u9014\u7ECF\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u90FD\u4F1A\u53D1\u751F\uFF0C\u5177\u4F53\u987A\u5E8F\u5982\u4E0B\uFF1A</p><ol><li>button \u5143\u7D20</li><li>body \u5143\u7D20</li><li>html \u5143\u7D20</li><li>document \u5BF9\u8C61</li></ol><p><strong>\u4E8B\u4EF6\u6355\u83B7\uFF08Event Capturing\uFF09</strong></p><p>\u4E8B\u4EF6\u5F00\u59CB\u7531\u8F83\u4E3A\u4E0D\u5177\u4F53\u7684\u8282\u70B9\u63A5\u6536\u540E\uFF0C\u7136\u540E\u5F00\u59CB\u9010\u7EA7\u5411\u4E0B\u4F20\u64AD\u5230\u6700\u5177\u4F53\u7684\u5143\u7D20\u4E0A\u3002</p><p>\u4E8B\u4EF6\u6355\u83B7\u7684\u6700\u5927\u4F5C\u7528\u5728\u4E8E\uFF1A\u4E8B\u4EF6\u5728\u5230\u8FBE\u9884\u5B9A\u2F6C\u6807\u4E4B\u524D\u5C31\u53EF\u4EE5\u6355\u83B7\u5230\u5B83\u3002</p><p>\u5982\u679C\u4ECD\u4EE5\u4E0A\u9762\u90A3\u6BB5 HTML \u4EE3\u7801\u4E3A\u4F8B\uFF0C\u5F53\u70B9\u51FB\u6309\u94AE\u540E\uFF0C\u5728\u4E8B\u4EF6\u6355\u83B7\u7684\u8FC7\u7A0B\u4E2D\uFF0Cdocument \u5BF9\u8C61\u4F1A\u9996\u5148\u63A5\u6536\u5230\u8FD9\u4E2A <code>click</code> \u4E8B\u4EF6\uFF0C\u7136\u540E\u518D\u6CBF\u7740 DOM \u6811\u4F9D\u6B21\u5411\u4E0B\uFF0C\u76F4\u5230 <code>&lt;button&gt;</code>\u3002\u5177\u4F53\u987A\u5E8F\u5982\u4E0B\uFF1A</p><ol><li>document \u5BF9\u8C61</li><li>html \u5143\u7D20</li><li>body \u5143\u7D20</li><li>button \u5143\u7D20</li></ol><h2 id="\u8BF4\u8BF4\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258" aria-hidden="true">#</a> \u8BF4\u8BF4\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258\uFF1F</h2><p>\u4E8B\u4EF6\u59D4\u6258\uFF0C\u5C31\u662F\u5229\u7528\u4E86\u4E8B\u4EF6\u5192\u6CE1\u7684\u673A\u5236\uFF0C\u5728\u8F83\u4E0A\u5C42\u4F4D\u7F6E\u7684\u5143\u7D20\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u6765\u7BA1\u7406\u8BE5\u5143\u7D20\u53CA\u5176\u6240\u6709\u5B50\u5B59\u5143\u7D20\u4E0A\u7684\u67D0\u4E00\u7C7B\u7684\u6240\u6709\u4E8B\u4EF6\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>333<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u2F57\u5143\u7D20 </span>
    <span class="token keyword">var</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4E3A\u2F57\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u59D4\u6258\u7BA1\u7406\u5B83\u7684\u6240\u6709\u2F26\u5143\u7D20\u7684\u70B9\u51FB\u4E8B\u4EF6 </span>
    list<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> currentTarget <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span>currentTarget<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9002\u7528\u573A\u666F\uFF1A\u5728\u7ED1\u5B9A\u5927\u91CF\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u9009\u62E9\u4E8B\u4EF6\u59D4\u6258</p></blockquote><p><strong>\u4F18\u70B9</strong></p><ul><li>\u4E8B\u4EF6\u59D4\u6258\u53EF\u4EE5\u51CF\u5C11\u4E8B\u4EF6\u6CE8\u518C\u6570\u91CF\uFF0C\u8282\u7701\u5185\u5B58\u5360\u2F64!</li><li>\u5F53\u65B0\u589E\u2F26\u5143\u7D20\u65F6\uFF0C\u2F46\u9700\u518D\u6B21\u505A\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u56E0\u6B64\u975E\u5E38\u9002\u5408\u52A8\u6001\u6DFB\u52A0\u5143\u7D20</li></ul>`,35);function p(e,o){return t}var i=n(a,[["render",p],["__file","6.dom.html.vue"]]);export{i as default};
