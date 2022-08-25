import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.88f692a7.js";const p={},i=e(`<h1 id="vuepress-plugin-bubble" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-bubble" aria-hidden="true">#</a> vuepress-plugin-bubble</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u662Fvuepress\u7684\u4E00\u4E2A\u6D6A\u6F2B\u6C14\u6CE1\u7279\u6548\u63D2\u4EF6</p></div><ul><li>\u4F7F\u7528\u6548\u679C</li></ul><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211122002556797.png?x-oss-process=style/pictureProcess1" alt="image-20211122002556797" loading="lazy"></p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-bubble
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5728\u8FD9\u91CC\u914D\u7F6E\u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;bubble&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//\u6C14\u6CE1\u6570\u91CF \u63A8\u83500(\u4E0D\u5305\u62EC)\u52301\u4E4B\u524D\u7684\u5C0F\u6570\uFF0C</span>
                <span class="token literal-property property">bubbleNumber</span><span class="token operator">:</span> <span class="token number">0.14</span><span class="token punctuation">,</span>

                <span class="token comment">//\u6C14\u6CE1\u900F\u660E\u5EA6 0\u52301\u4E4B\u95F4\u7684\u5C0F\u6570</span>
                <span class="token literal-property property">bubbleAlpha</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>

                <span class="token comment">//\u900F\u660E\u5EA6\u53D8\u5316\u901F\u5EA6\uFF0C\u8D8A\u63A5\u8FD1\u4E8E0\u8D8A\u597D</span>
                <span class="token literal-property property">alphaChangeSpeed</span><span class="token operator">:</span> <span class="token number">0.00001</span><span class="token punctuation">,</span>

                <span class="token comment">//\u6C14\u6CE1\u5927\u5C0F\uFF0C\u63A8\u83500\u52301\u4E4B\u95F4\u7684\u503C</span>
                <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>

                <span class="token comment">//\u6C14\u6CE1\u5927\u5C0F\u53D8\u5316\u901F\u5EA6 \u8D8A\u5C0F\u8D8A\u597D</span>
                <span class="token literal-property property">sizeChangeSpeed</span><span class="token operator">:</span> <span class="token number">0.0002</span><span class="token punctuation">,</span>

                <span class="token comment">//\u6C14\u6CE1\u4E0A\u5347\u901F\u5EA6</span>
                <span class="token literal-property property">riseSpeed</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>

                <span class="token comment">//\u6C14\u6CE1\u989C\u8272\uFF0C\u767D\u8272rgb(255,255,255) \u8BF7\u4F20\u5165255,255,255</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;255,255,255&#39;</span><span class="token punctuation">,</span>

                <span class="token comment">//\u8BE5\u6C14\u6CE1\u76D2\u5B50\u7684z-index\u503C\uFF0C\u8BF7\u6839\u636E\u4F60\u81EA\u5DF1\u4E3B\u9898\uFF0C\u4F20\u5165\u9002\u5F53\u7684\u503C\uFF0C\u5426\u5219\u53EF\u80FD\u4E0D\u4F1A\u663E\u793A</span>
                <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u5728<code>config.js</code>\u6587\u4EF6\u4E2D\uFF0C\u4F7F\u7528\u8BE5\u63D2\u4EF6\u540E\uFF0C\u8BE5\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u4FBF\u4F1A\u81EA\u52A8\u663E\u793A</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211122003330518.png?x-oss-process=style/pictureProcess1" alt="image-20211122003330518" loading="lazy"></p><p>\u56FE\u4E2D\u7EA2\u6846\u5185\u7684dom\u8282\u70B9\uFF0C\u4FBF\u662F\u8BE5\u63D2\u4EF6\u81EA\u52A8\u6DFB\u52A0\u7684\uFF0C\u5982\u679C\u4F60\u786E\u5B9E\u914D\u7F6E\u4E86\u8BE5\u63D2\u4EF6\uFF0C\u4F46\u662F\u5728\u9996\u9875\u4E2D\uFF0C\u5E76\u6CA1\u6709\u663E\u793A\u7684\u8BDD\uFF0C\u90A3\u4E48\u8BF7f12\u770B\u4E00\u4E0B\u4F60\u7F51\u7AD9\u7684css\u6837\u5F0F\uFF0C\u5E76\u4E14\u4F20\u5165\u6B63\u786E\uFF0C\u5408\u9002\u7684<code>zIndex</code>\u503C</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8BE5\u63D2\u4EF6\u6240\u5728\u8282\u70B9\u7684<code>z-index</code>\u662F\u901A\u8FC7\u63D2\u4EF6\u914D\u7F6E\u9879\u4E2D\u7684<code>zIndex</code>\u8FDB\u884C\u914D\u7F6E\u7684</p></div>`,11),t=[i];function l(o,c){return s(),a("div",null,t)}var d=n(p,[["render",l],["__file","index.html.vue"]]);export{d as default};
