import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as i,c as u,b as r,w as a,a as n,d as s}from"./app.e3686eef.js";const k={},d=n("h3",{id:"todolist\u6A21\u677F\u4EE3\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#todolist\u6A21\u677F\u4EE3\u7801","aria-hidden":"true"},"#"),s(" todolist\u6A21\u677F\u4EE3\u7801")],-1),m=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("useState"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'./css/index.css'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'./css/app.css'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Header "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./components/Header"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Main "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./components/Main"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Footer "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./components/Footer"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" statusMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ALL'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u6240\u6709'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ACTIVE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u672A\u5B8C\u6210'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'COMPLETE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u5DF2\u5B8C\u6210'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"isDone"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B66\u4E60react'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"isDone"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B66\u4E60vue'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"Index"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("list"),n("span",{class:"token punctuation"},","),s(" setList"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("section className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"todoapp"'),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Header"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Main list"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("list"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s(`Footer
        list`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("list"),n("span",{class:"token punctuation"},"}"),s(`
        statusMap`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("statusMap"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("section"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" Index"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ClassNames "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'classnames'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("list"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("section className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"main"'),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("input id"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toggle-all"'),s(" className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toggle-all"'),s(" type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"checkbox"'),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("label htmlFor"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toggle-all"'),n("span",{class:"token operator"},">"),s("Mark all "),n("span",{class:"token keyword"},"as"),s(" complete"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("label"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("ul className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"todo-list"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token operator"},"<"),s(`li
              key`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"}"),s(`
              className`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"ClassNames"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"completed"),n("span",{class:"token operator"},":"),s(" item"),n("span",{class:"token punctuation"},"."),s("isDone"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("div className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"view"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s(`input
                  className`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toggle"'),s(`
                  type`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"checkbox"'),s(`
                  checked`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("isDone"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("label"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("label"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("button className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"destroy"'),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s(`input
                onChange`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},"}"),s(`
                className`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"edit"'),s(`
                value`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"Create a TodoMVC template"'),s(`
              `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/*<li>*/"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},'/*  <div className="view">*/'),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},'/*    <input className="toggle" type="checkbox" />*/'),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/*    <label>Buy a unicorn</label>*/"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},'/*    <button className="destroy"/>*/'),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/*  </div>*/"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},'/*  <input className="edit" value="Rule the web" />*/'),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/*</li>*/"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ul"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("section"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" Main"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("header className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"header"'),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("h1"),n("span",{class:"token operator"},">"),s("todos"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("h1"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("input className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"new-todo"'),s(" placeholder"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"What needs to be done?"'),s(" autoFocus"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("header"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" Header"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Footer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("statusMap"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("footer className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"footer"'),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("span className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"todo-count"'),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),s("strong"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"100"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("strong"),n("span",{class:"token operator"},">"),s(" item left"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("span"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("ul className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"filters"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          statusMap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token operator"},"<"),s("li key"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("a className"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'selected'"),n("span",{class:"token punctuation"},"}"),s(`
                 href`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ul"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("button className"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"clear-completed"'),n("span",{class:"token operator"},">"),s("Clear completed"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("footer"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" Footer"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},`html,
body`),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100% "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"button"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" baseline"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-appearance"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"appearance"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" antialiased"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-moz-osx-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" grayscale"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"body"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"font"),n("span",{class:"token punctuation"},":"),s(" 14px "),n("span",{class:"token string"},"'Helvetica Neue'"),n("span",{class:"token punctuation"},","),s(" Helvetica"),n("span",{class:"token punctuation"},","),s(" Arial"),n("span",{class:"token punctuation"},","),s(" sans-serif"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1.4em"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #f5f5f5"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #111111"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"/*min-width: 230px;*/"),s(`
	`),n("span",{class:"token comment"},"/*max-width: 550px;*/"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" antialiased"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-moz-osx-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" grayscale"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 300"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".hidden"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todoapp"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 130px auto"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 2px 4px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	            0 25px 50px 0 `),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 500px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todoapp input::-webkit-input-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todoapp input::-moz-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todoapp input::input-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todoapp h1"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" -140px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 80px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 200"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #b83f45"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-text-rendering"),n("span",{class:"token punctuation"},":"),s(" optimizeLegibility"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-moz-text-rendering"),n("span",{class:"token punctuation"},":"),s(" optimizeLegibility"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-rendering"),n("span",{class:"token punctuation"},":"),s(" optimizeLegibility"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},`.new-todo,
.edit`),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 24px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1.4em"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 6px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #999"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" inset 0 -1px 5px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" border-box"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" antialiased"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-moz-osx-font-smoothing"),n("span",{class:"token punctuation"},":"),s(" grayscale"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".new-todo"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 16px 16px 16px 60px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 65px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.003"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" inset 0 -2px 1px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s("0"),n("span",{class:"token punctuation"},","),s("0"),n("span",{class:"token punctuation"},","),s("0.03"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".main"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),s(" 2"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),s(" 1px solid #e6e6e6"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".toggle-all"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 1px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 1px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* Mobile Safari */"),s(`
	`),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".toggle-all + label"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 45px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 65px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" -65px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" -0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".toggle-all + label:before"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'\u276F'"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline-block"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 22px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #949494"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px 27px 10px 27px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"-webkit-transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),s("90deg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),s("90deg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".toggle-all:checked + label:before"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #484848"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"list-style"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 24px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 1px solid #ededed"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li:last-child"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li.editing"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li.editing .edit"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),s("100% - 43px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 12px 16px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 0 0 43px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li.editing .view"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .toggle"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"/* auto, since non-WebKit browsers doesn't support input styling */"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" auto 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* Mobile Safari */"),s(`
	`),n("span",{class:"token property"},"-webkit-appearance"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"appearance"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .toggle"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .toggle + label"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"/*\n		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n	*/"),s(`
	`),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},"'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" no-repeat"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background-position"),n("span",{class:"token punctuation"},":"),s(" center left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .toggle:checked + label"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},"'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E'"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li label"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"word-break"),n("span",{class:"token punctuation"},":"),s(" break-all"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 15px 15px 15px 60px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1.2"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" color 0.4s"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #484848"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li.completed label"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #949494"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" line-through"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .destroy"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" auto 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #949494"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" color 0.2s ease-out"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},`.todo-list li .destroy:hover,
.todo-list li .destroy:focus`),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #C18585"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .destroy:after"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'\xD7'"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1.1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li:hover .destroy"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li .edit"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-list li.editing:last-child"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" -1px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".footer"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px 15px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 15px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),s(" 1px solid #e6e6e6"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".footer:before"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" hidden"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 1px 1px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	            0 8px 0 -3px #f6f6f6`),n("span",{class:"token punctuation"},","),s(`
	            0 9px 1px -3px `),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	            0 16px 0 -6px #f6f6f6`),n("span",{class:"token punctuation"},","),s(`
	            0 17px 2px -6px `),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-count"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".todo-count strong"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 300"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".filters"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"list-style"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".filters li"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".filters li a"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 3px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 3px 7px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid transparent"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 3px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".filters li a:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" #DB7676"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".filters li a.selected"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" #CE4646"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},`.clear-completed,
html .clear-completed:active`),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 19px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".clear-completed:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" underline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".info"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 65px auto 0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #4d4d4d"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 11px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 1px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".info p"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".info a"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" inherit"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".info a:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" underline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/`),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(" screen "),n("span",{class:"token keyword"},"and"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"-webkit-min-device-pixel-ratio"),n("span",{class:"token punctuation"},":"),s("0"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token selector"},`.toggle-all,
	.todo-list li .toggle`),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token selector"},".todo-list li .toggle"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 430px"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token selector"},".footer"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token selector"},".filters"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},`:focus,
.toggle:focus + label,
.toggle-all:focus + label`),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 0 2px 2px #CF7D7D"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"outline"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,x){const c=l("CodeTabs");return i(),u("div",null,[d,r(c,{data:[{title:"Todo/index.jsx"},{title:"Todo/components/Main.jsx"},{title:"Todo/components/Header.jsx"},{title:"Todo/Footer.jsx"},{title:"Todo/css/index.css"}],"tab-id":"todo"},{tab0:a(({title:t,value:e,isActive:o})=>[m]),tab1:a(({title:t,value:e,isActive:o})=>[b]),tab2:a(({title:t,value:e,isActive:o})=>[v]),tab3:a(({title:t,value:e,isActive:o})=>[y]),tab4:a(({title:t,value:e,isActive:o})=>[g]),_:1},8,["data"])])}var _=p(k,[["render",f],["__file","todolist.html.vue"]]);export{_ as default};
