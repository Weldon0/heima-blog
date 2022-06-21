import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as t,c as e,b as o,F as c,a as n,d as i}from"./app.5281c868.js";const l={},u=n("h3",{id:"todolist\u6A21\u677F\u4EE3\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#todolist\u6A21\u677F\u4EE3\u7801","aria-hidden":"true"},"#"),i(" todolist\u6A21\u677F\u4EE3\u7801")],-1);function r(k,d){const s=p("CodeTabs");return t(),e(c,null,[u,o(s,{data:[{title:"Todo/index.jsx",content:`<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./css/index.css'</span>
<span class="token keyword">import</span> <span class="token string">'./css/app.css'</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">"./components/Header"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Main <span class="token keyword">from</span> <span class="token string">"./components/Main"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">"./components/Footer"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> statusMap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'ALL'</span><span class="token punctuation">,</span> <span class="token string">'\u6240\u6709'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'ACTIVE'</span><span class="token punctuation">,</span> <span class="token string">'\u672A\u5B8C\u6210'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'COMPLETE'</span><span class="token punctuation">,</span> <span class="token string">'\u5DF2\u5B8C\u6210'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isDone</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5B66\u4E60react'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isDone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u5B66\u4E60vue'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">Index</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator"><</span>section className<span class="token operator">=</span><span class="token string">"todoapp"</span><span class="token operator">></span>
      <span class="token operator"><</span>Header<span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator"><</span>Main list<span class="token operator">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator"><</span>Footer
        list<span class="token operator">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span>
        statusMap<span class="token operator">=</span><span class="token punctuation">{</span>statusMap<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator"><</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{title:"Todo/components/Main.jsx",content:`<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ClassNames <span class="token keyword">from</span> <span class="token string">'classnames'</span>

<span class="token keyword">function</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator"><</span>section className<span class="token operator">=</span><span class="token string">"main"</span><span class="token operator">></span>
      <span class="token operator"><</span>input id<span class="token operator">=</span><span class="token string">"toggle-all"</span> className<span class="token operator">=</span><span class="token string">"toggle-all"</span> type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator"><</span>label htmlFor<span class="token operator">=</span><span class="token string">"toggle-all"</span><span class="token operator">></span>Mark all <span class="token keyword">as</span> complete<span class="token operator"><</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator"><</span>ul className<span class="token operator">=</span><span class="token string">"todo-list"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>
          list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator"><</span>li
              key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">ClassNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">completed</span><span class="token operator">:</span> item<span class="token punctuation">.</span>isDone<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              <span class="token operator"><</span>div className<span class="token operator">=</span><span class="token string">"view"</span><span class="token operator">></span>
                <span class="token operator"><</span>input
                  className<span class="token operator">=</span><span class="token string">"toggle"</span>
                  type<span class="token operator">=</span><span class="token string">"checkbox"</span>
                  checked<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>isDone<span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator"><</span>label<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator"><</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator"><</span>button className<span class="token operator">=</span><span class="token string">"destroy"</span><span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator"><</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator"><</span>input
                onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">null</span><span class="token punctuation">}</span>
                className<span class="token operator">=</span><span class="token string">"edit"</span>
                value<span class="token operator">=</span><span class="token string">"Create a TodoMVC template"</span>
              <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator"><</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token punctuation">{</span><span class="token comment">/*<li>*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*  <div className="view">*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*    <input className="toggle" type="checkbox" />*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*    <label>Buy a unicorn</label>*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*    <button className="destroy"/>*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*  </div>*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*  <input className="edit" value="Rule the web" />*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/*</li>*/</span><span class="token punctuation">}</span>
      <span class="token operator"><</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator"><</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Main<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{title:"Todo/components/Header.jsx",content:`<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator"><</span>header className<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>
      <span class="token operator"><</span>h1<span class="token operator">></span>todos<span class="token operator"><</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator"><</span>input className<span class="token operator">=</span><span class="token string">"new-todo"</span> placeholder<span class="token operator">=</span><span class="token string">"What needs to be done?"</span> autoFocus<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator"><</span><span class="token operator">/</span>header<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{title:"Todo/Footer.jsx",content:`<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Footer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>statusMap<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator"><</span>footer className<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span>
      <span class="token operator"><</span>span className<span class="token operator">=</span><span class="token string">"todo-count"</span><span class="token operator">></span><span class="token operator"><</span>strong<span class="token operator">></span><span class="token number">100</span><span class="token operator"><</span><span class="token operator">/</span>strong<span class="token operator">></span> item left<span class="token operator"><</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator"><</span>ul className<span class="token operator">=</span><span class="token string">"filters"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>
          statusMap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator"><</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator"><</span>a className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'selected'</span><span class="token punctuation">}</span>
                 href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator"><</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator"><</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator"><</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator"><</span>button className<span class="token operator">=</span><span class="token string">"clear-completed"</span><span class="token operator">></span>Clear completed<span class="token operator"><</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator"><</span><span class="token operator">/</span>footer<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Footer<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{title:"Todo/css/index.css",content:`<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html,
body</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
	<span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
	<span class="token property">font</span><span class="token punctuation">:</span> 14px <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #111111<span class="token punctuation">;</span>
	<span class="token comment">/*min-width: 230px;*/</span>
	<span class="token comment">/*max-width: 550px;*/</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
	<span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
	<span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hidden</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todoapp</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 130px auto<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 4px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">,</span>
	            0 25px 50px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todoapp input::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todoapp input::-moz-placeholder</span> <span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todoapp input::input-placeholder</span> <span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todoapp h1</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> -140px<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #b83f45<span class="token punctuation">;</span>
	<span class="token property">-webkit-text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>
	<span class="token property">-moz-text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>
	<span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.new-todo,
.edit</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #999<span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -1px 5px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
	<span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
	<span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.new-todo</span> <span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 16px 16px 16px 60px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.003<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.03<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #e6e6e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.toggle-all</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* Mobile Safari */</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.toggle-all + label</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> -65px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> -0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.toggle-all + label:before</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\u276F'</span><span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #949494<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 10px 27px 10px 27px<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.toggle-all:checked + label:before</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ededed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li:last-child</span> <span class="token punctuation">{</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li.editing</span> <span class="token punctuation">{</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li.editing .edit</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 43px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0 0 0 43px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li.editing .view</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .toggle</span> <span class="token punctuation">{</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token comment">/* auto, since non-WebKit browsers doesn't support input styling */</span>
	<span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto 0<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* Mobile Safari */</span>
	<span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .toggle</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .toggle + label</span> <span class="token punctuation">{</span>
	<span class="token comment">/*
		Firefox requires \`#\` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the \`#\` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
	<span class="token property">background-position</span><span class="token punctuation">:</span> center left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .toggle:checked + label</span> <span class="token punctuation">{</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li label</span> <span class="token punctuation">{</span>
	<span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 15px 15px 15px 60px<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> color 0.4s<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li.completed label</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #949494<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .destroy</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto 0<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #949494<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> color 0.2s ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .destroy:hover,
.todo-list li .destroy:focus</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #C18585<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .destroy:after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\xD7'</span><span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li:hover .destroy</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li .edit</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list li.editing:last-child</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #e6e6e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer:before</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">,</span>
	            0 8px 0 -3px #f6f6f6<span class="token punctuation">,</span>
	            0 9px 1px -3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">,</span>
	            0 16px 0 -6px #f6f6f6<span class="token punctuation">,</span>
	            0 17px 2px -6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-count</span> <span class="token punctuation">{</span>
	<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-count strong</span> <span class="token punctuation">{</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filters</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filters li</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filters li a</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 3px 7px<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filters li a:hover</span> <span class="token punctuation">{</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> #DB7676<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filters li a.selected</span> <span class="token punctuation">{</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> #CE4646<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear-completed,
html .clear-completed:active</span> <span class="token punctuation">{</span>
	<span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear-completed:hover</span> <span class="token punctuation">{</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 65px auto 0<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #4d4d4d<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
	<span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info p</span> <span class="token punctuation">{</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info a</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info a:hover</span> <span class="token punctuation">{</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span>0<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
	<span class="token selector">.toggle-all,
	.todo-list li .toggle</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.todo-list li .toggle</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 430px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
	<span class="token selector">.footer</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.filters</span> <span class="token punctuation">{</span>
		<span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">:focus,
.toggle:focus + label,
.toggle-all:focus + label</span> <span class="token punctuation">{</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 2px 2px #CF7D7D<span class="token punctuation">;</span>
	<span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`}],"tab-id":"todo"},null,8,["data"])],64)}var b=a(l,[["render",r],["__file","todolist.html.vue"]]);export{b as default};
