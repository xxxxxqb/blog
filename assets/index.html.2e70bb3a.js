import{_ as n,o as s,c as a,b as e}from"./app.ca1f7dd6.js";const p={},t=e(`<h1 id="\u5275\u5EFA\u4E00\u500B-vue-\u61C9\u7528" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFA\u4E00\u500B-vue-\u61C9\u7528" aria-hidden="true">#</a> \u5275\u5EFA\u4E00\u500B Vue \u61C9\u7528</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u500B Vue \u61C9\u7528\u90FD\u662F\u901A\u904E <strong>createApp</strong> \u51FD\u6578\u5275\u5EFA\u4E00\u500B\u65B0\u7684 <strong>\u61C9\u7528\u5BE6\u4F8B</strong>\u3002\u50B3\u5165 createApp \u7684\u5C0D\u8C61\u662F\u4E00\u500B\u7D44\u4EF6\uFF0C\u9019\u500B\u7D44\u4EF6\u88AB\u5B9A\u7FA9\u70BA\u6839\u7D44\u4EF6\uFF0C\u5176\u4ED6\u7D44\u4EF6\u5C07\u4F5C\u70BA\u5176\u5B50\u7D44\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>App (root component)
\u251C\u2500 TodoList
\u2502  \u2514\u2500 TodoItem
\u2502     \u251C\u2500 TodoDeleteButton
\u2502     \u2514\u2500 TodoEditButton
\u2514\u2500 TodoFooter
   \u251C\u2500 TodoClearButton
   \u2514\u2500 TodoStatistics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u5B9E\u4F8B\u5FC5\u987B\u5728\u8C03\u7528\u4E86 <code>.mount()</code> \u65B9\u6CD5\u540E\u624D\u4F1A\u6E32\u67D3\u51FA\u6765\u3002\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u201C\u5BB9\u5668\u201D\u53C2\u6570\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B9E\u9645\u7684 DOM \u5143\u7D20\u6216\u662F\u4E00\u4E2A CSS \u9009\u62E9\u5668\u5B57\u7B26\u4E32\u3002</p><p><code>createApp</code> API \u5141\u8BB8\u591A\u4E2A Vue \u5E94\u7528\u5171\u5B58\u4E8E\u540C\u4E00\u4E2A\u9875\u9762\u4E0A\uFF0C\u800C\u4E14\u6BCF\u4E2A\u5E94\u7528\u90FD\u62E5\u6709\u81EA\u5DF1\u7684\u7528\u4E8E\u914D\u7F6E\u548C\u5168\u5C40\u8D44\u6E90\u7684\u4F5C\u7528\u57DF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> AppTwo <span class="token keyword">from</span> <span class="token string">&#39;./AppTwo.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>AppTwo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function i(c,l){return s(),a("div",null,o)}var r=n(p,[["render",i],["__file","index.html.vue"]]);export{r as default};