import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s}from"./app.696268bf.js";const a={},t=s(`<h2 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h2><h2 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h2><ul><li>setState() \u662F\u5F02\u6B65\u66F4\u65B0\u6570\u636E\u7684</li><li>\u6CE8\u610F\uFF1A\u4F7F\u7528\u8BE5\u8BED\u6CD5\u65F6\uFF0C\u540E\u9762\u7684 setState() \u4E0D\u8981\u4F9D\u8D56\u4E8E\u524D\u9762\u7684 setState()</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> \u5F53\u4F60\u8C03\u7528 setState \u7684\u65F6\u5019\uFF0CReact<span class="token punctuation">.</span>js \u5E76\u4E0D\u4F1A\u9A6C\u4E0A\u4FEE\u6539 state \uFF08\u4E3A\u4EC0\u4E48\uFF09
<span class="token number">2.</span> \u800C\u662F\u628A\u8FD9\u4E2A\u5BF9\u8C61\u653E\u5230\u4E00\u4E2A\u66F4\u65B0\u961F\u5217\u91CC\u9762
<span class="token number">3.</span> \u7A0D\u540E\u624D\u4F1A\u4ECE\u961F\u5217\u5F53\u4E2D\u628A\u65B0\u7684\u72B6\u6001\u63D0\u53D6\u51FA\u6765\u5408\u5E76\u5230 state \u5F53\u4E2D\uFF0C\u7136\u540E\u518D\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u4EE5\u591A\u6B21\u8C03\u7528 setState() \uFF0C\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\u91CD\u65B0\u6E32\u67D3</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F7F\u7528 React.js \u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u9700\u8981\u62C5\u5FC3\u591A\u6B21\u8FDB\u884C <code>setState</code> \u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898\u3002</p><h2 id="\u63A8\u8350\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u8BED\u6CD5" aria-hidden="true">#</a> \u63A8\u8350\u8BED\u6CD5</h2><ul><li><p>\u63A8\u8350\uFF1A\u4F7F\u7528 <code>setState((preState) =&gt; {})</code> \u8BED\u6CD5</p></li><li><p>\u53C2\u6570preState: React.js \u4F1A\u628A\u4E0A\u4E00\u4E2A <code>setState</code> \u7684\u7ED3\u679C\u4F20\u5165\u8FD9\u4E2A\u51FD\u6570</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">count</span><span class="token operator">:</span> preState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD9\u79CD\u8BED\u6CD5\u4F9D\u65E7\u662F\u5F02\u6B65\u7684\uFF0C\u4F46\u662Fstate\u53EF\u4EE5\u83B7\u53D6\u5230\u6700\u65B0\u7684\u72B6\u6001\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u8C03\u7528\u591A\u6B21setState</strong></p><h2 id="\u7B2C\u4E8C\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u4E2A\u53C2\u6570" aria-hidden="true">#</a> \u7B2C\u4E8C\u4E2A\u53C2\u6570</h2><ul><li>\u573A\u666F\uFF1A\u5728\u72B6\u6001\u66F4\u65B0\uFF08\u9875\u9762\u5B8C\u6210\u91CD\u65B0\u6E32\u67D3\uFF09\u540E\u7ACB\u5373\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C</li><li>\u8BED\u6CD5\uFF1A<code>setState(updater[, callback])</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u72B6\u6001\u66F4\u65B0\u540E\u7ACB\u5373\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;\u66F4\u65B0state\u540E\u7684\u6807\u9898\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7EC4\u4EF6\u66F4\u65B0\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u66F4\u65B0\u673A\u5236" aria-hidden="true">#</a> \u7EC4\u4EF6\u66F4\u65B0\u673A\u5236</h1><ul><li>setState() \u7684\u4E24\u4E2A\u4F5C\u7528\uFF1A 1. \u4FEE\u6539 state 2. \u66F4\u65B0\u7EC4\u4EF6\uFF08UI\uFF09</li><li>\u8FC7\u7A0B\uFF1A\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u4E5F\u4F1A\u91CD\u65B0\u6E32\u67D3\u5B50\u7EC4\u4EF6\u3002\u4F46\u53EA\u4F1A\u6E32\u67D3\u5F53\u524D\u7EC4\u4EF6\u5B50\u6811\uFF08\u5F53\u524D\u7EC4\u4EF6\u53CA\u5176\u6240\u6709\u5B50\u7EC4\u4EF6\uFF09</li></ul><p><img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/01/23/zu-jian-geng-xin.png" alt="" loading="lazy"></p><h1 id="\u7EC4\u4EF6\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u7EC4\u4EF6\u6027\u80FD\u4F18\u5316</h1><ol><li>\u529F\u80FD\u7B2C\u4E00</li><li>\u6027\u80FD\u4F18\u5316</li></ol><h2 id="\u51CF\u8F7Bstate" tabindex="-1"><a class="header-anchor" href="#\u51CF\u8F7Bstate" aria-hidden="true">#</a> \u51CF\u8F7Bstate</h2><ul><li>\u51CF\u8F7B state\uFF1A\u53EA\u5B58\u50A8\u8DDF\u7EC4\u4EF6\u6E32\u67D3\u76F8\u5173\u7684\u6570\u636E\uFF08\u6BD4\u5982\uFF1Acount / \u5217\u8868\u6570\u636E / loading \u7B49\uFF09</li><li>\u6CE8\u610F\uFF1A\u4E0D\u7528\u505A\u6E32\u67D3\u7684\u6570\u636E\u4E0D\u8981\u653E\u5728 state \u4E2D\uFF0C\u6BD4\u5982\u5B9A\u65F6\u5668 id\u7B49</li><li>\u5BF9\u4E8E\u8FD9\u79CD\u9700\u8981\u5728\u591A\u4E2A\u65B9\u6CD5\u4E2D\u7528\u5230\u7684\u6570\u636E\uFF0C\u5E94\u8BE5\u76F4\u63A5\u653E\u5728 this \u4E2D <ul><li>this.xxx = &#39;bbb&#39;</li><li>this.xxx</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// timerId\u5B58\u50A8\u5230this\u4E2D\uFF0C\u800C\u4E0D\u662Fstate\u4E2D</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timerId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \u2026 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue\u4E2D\u4E0D\u8981\u628A\u548C\u6E32\u67D3\u65E0\u5173\u7684\u6570\u636E\u653E\u5230data\u4E2D</p><h2 id="\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3" aria-hidden="true">#</a> \u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3</h2><ul><li><p>\u7EC4\u4EF6\u66F4\u65B0\u673A\u5236\uFF1A\u7236\u7EC4\u4EF6\u66F4\u65B0\u4F1A\u5F15\u8D77\u5B50\u7EC4\u4EF6\u4E5F\u88AB\u66F4\u65B0\uFF0C\u8FD9\u79CD\u601D\u8DEF\u5F88\u6E05\u6670</p></li><li><p>\u95EE\u9898\uFF1A\u5B50\u7EC4\u4EF6\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\u65F6\u4E5F\u4F1A\u91CD\u65B0\u6E32\u67D3 \uFF08\u63A5\u6536\u5230\u7684props\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u7684\u6539\u53D8\uFF09</p></li><li><p>\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u5462\uFF1F</p></li><li><p>\u89E3\u51B3\u65B9\u5F0F\uFF1A\u4F7F\u7528\u94A9\u5B50\u51FD\u6570 <code>shouldComponentUpdate(nextProps, nextState)</code></p></li><li><p>\u4F5C\u7528\uFF1A\u901A\u8FC7\u8FD4\u56DE\u503C\u51B3\u5B9A\u8BE5\u7EC4\u4EF6\u662F\u5426\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD4\u56DE true \u8868\u793A\u91CD\u65B0\u6E32\u67D3\uFF0Cfalse \u8868\u793A\u4E0D\u91CD\u65B0\u6E32\u67D3</p></li><li><p>\u89E6\u53D1\u65F6\u673A\uFF1A\u66F4\u65B0\u9636\u6BB5\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u524D\u6267\u884C \uFF08shouldComponentUpdate =&gt; render\uFF09</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6839\u636E\u6761\u4EF6\uFF0C\u51B3\u5B9A\u662F\u5426\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\u2026<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6848\u4F8B\uFF1A\u968F\u673A\u6570</p><h2 id="\u7EAF\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EAF\u7EC4\u4EF6</h2><ul><li>\u7EAF\u7EC4\u4EF6\uFF1A<code>React.PureComponent</code> \u4E0E <code>React.Component </code>\u529F\u80FD\u76F8\u4F3C</li><li>\u533A\u522B\uFF1APureComponent \u5185\u90E8\u81EA\u52A8\u5B9E\u73B0\u4E86 shouldComponentUpdate \u94A9\u5B50\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u6BD4\u8F83</li><li>\u539F\u7406\uFF1A\u7EAF\u7EC4\u4EF6\u5185\u90E8\u901A\u8FC7\u5206\u522B \u5BF9\u6BD4 \u524D\u540E\u4E24\u6B21 props \u548C state \u7684\u503C\uFF0C\u6765\u51B3\u5B9A\u662F\u5426\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
        	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u7EAF\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53EA\u6709\u5728\u6027\u80FD\u4F18\u5316\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u7528\u5230\u7EAF\u7EC4\u4EF6\uFF0C\u4E0D\u8981\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u4F7F\u7528\u7EAF\u7EC4\u4EF6\uFF0C\u56E0\u4E3A\u7EAF\u7EC4\u4EF6\u9700\u8981\u6D88\u8017\u6027\u80FD\u8FDB\u884C\u5BF9\u6BD4</strong></p><h2 id="\u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u503C\u7C7B\u578B</h2><ul><li><p>\u8BF4\u660E\uFF1A\u7EAF\u7EC4\u4EF6\u5185\u90E8\u7684\u5BF9\u6BD4\u662F shallow compare\uFF08\u6D45\u5C42\u5BF9\u6BD4\uFF09</p></li><li><p>\u5BF9\u4E8E\u503C\u7C7B\u578B\u6765\u8BF4\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u540C\uFF08\u76F4\u63A5\u8D4B\u503C\u5373\u53EF\uFF0C\u6CA1\u6709\u5751\uFF09</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> newNumber <span class="token operator">=</span> number
newNumber <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number <span class="token operator">===</span> newNumber<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// PureComponent\u5185\u90E8\u5BF9\u6BD4\uFF1A</span>
\u6700\u65B0\u7684state<span class="token punctuation">.</span>number <span class="token operator">===</span> \u4E0A\u4E00\u6B21\u7684state<span class="token punctuation">.</span>number <span class="token comment">// false\uFF0C\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u7EAF\u7EC4\u4EF6\u6BD4\u8F83-\u5F15\u7528\u7C7B\u578B</h2><ul><li>\u8BF4\u660E\uFF1A\u7EAF\u7EC4\u4EF6\u5185\u90E8\u7684\u5BF9\u6BD4\u662F shallow compare\uFF08\u6D45\u5C42\u5BF9\u6BD4\uFF09</li><li>\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u6765\u8BF4\uFF1A\u53EA\u6BD4\u8F83\u5BF9\u8C61\u7684\u5F15\u7528\uFF08\u5730\u5740\uFF09\u662F\u5426\u76F8\u540C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> obj
newObj<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj <span class="token operator">===</span> obj<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token comment">// \u9519\u8BEF\u505A\u6CD5</span>
state<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">2</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> state<span class="token punctuation">.</span>obj <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// PureComponent\u5185\u90E8\u6BD4\u8F83\uFF1A</span>
\u6700\u65B0\u7684state<span class="token punctuation">.</span>obj <span class="token operator">===</span> \u4E0A\u4E00\u6B21\u7684state<span class="token punctuation">.</span>obj <span class="token comment">// true\uFF0C\u4E0D\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EAF\u7EC4\u4EF6\u7684\u6700\u4F73\u5B9E\u8DF5\uFF1A</p><p>\u6CE8\u610F\uFF1Astate \u6216 props \u4E2D\u5C5E\u6027\u503C\u4E3A\u5F15\u7528\u7C7B\u578B\u65F6\uFF0C\u5E94\u8BE5\u521B\u5EFA\u65B0\u6570\u636E\uFF0C\u4E0D\u8981\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u636E\uFF01</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6B63\u786E\uFF01\u521B\u5EFA\u65B0\u6570\u636E</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> newObj <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6B63\u786E\uFF01\u521B\u5EFA\u65B0\u6570\u636E</span>
<span class="token comment">// \u4E0D\u8981\u7528\u6570\u7EC4\u7684push / unshift \u7B49\u76F4\u63A5\u4FEE\u6539\u5F53\u524D\u6570\u7EC4\u7684\u7684\u65B9\u6CD5</span>
<span class="token comment">// \u800C\u5E94\u8BE5\u7528 concat \u6216 slice \u7B49\u8FD9\u4E9B\u8FD4\u56DE\u65B0\u6570\u7EC4\u7684\u65B9\u6CD5</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>\u65B0\u6570\u636E<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function e(p,o){return t}var i=n(a,[["render",e],["__file","05-react\u539F\u7406\u63ED\u79D8.html.vue"]]);export{i as default};
