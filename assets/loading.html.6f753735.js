import{_ as n,o as s,c as a,b as e}from"./app.ca1f7dd6.js";const i={},t=e(`<h2 id="\u8DEF\u7531\u61F6\u52A0\u8F09" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u61F6\u52A0\u8F09" aria-hidden="true">#</a> \u8DEF\u7531\u61F6\u52A0\u8F09</h2><p>\u7576\u6253\u5305\u61C9\u7528\u6642\uFF0CJavaScript \u6703\u975E\u5E38\u5927\uFF0C\u5F71\u97FF\u9801\u9762\u52A0\u8F09\u3002\u5982\u679C\u5C07\u4E0D\u540C\u8DEF\u5F91\u7684\u7D44\u4EF6\u5206\u5272\u6210\u4E0D\u540C\u7684\u4EE3\u78BC\u584A\uFF0C\u7136\u5F8C\u7576\u8DEF\u7531\u88AB\u8A2A\u554F\u7684\u6642\u5019\u624D\u52A0\u8F09\u7D44\u4EF6\uFF0C\u5C31\u6703\u9019\u6A23\u9AD8\u6548\u3002</p><p>Vue Router \u652F\u6301\u958B\u7BB1\u5373\u7528\u7684\u52D5\u614B\u5C0E\u5165\uFF0C\u9019\u610F\u5473\u8457\u4F60\u53EF\u4EE5\u7528\u52D5\u614B\u5C0E\u5165\u800C\u4E0D\u662F\u975C\u614B\u5C0E\u5165\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5C07
// import UserDetails from &#39;./views/UserDetails&#39;
// \u66FF\u63DB\u6210
const User = () =&gt; import(&#39;./views/User&#39;)

const router = createRouter({
  // ...
  routes: [{ path: &#39;/users/:id&#39;, component: User }],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u628A\u5076\u50CF\u6253\u6210\u584A" tabindex="-1"><a class="header-anchor" href="#\u628A\u5076\u50CF\u6253\u6210\u584A" aria-hidden="true">#</a> \u628A\u5076\u50CF\u6253\u6210\u584A</h3><h4 id="\u4F7F\u7528-webpack" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-webpack" aria-hidden="true">#</a> \u4F7F\u7528 webpack</h4><p>\u6240\u6709\u7684\u6240\u6709\u584A\u90FD\u9700\u8981\u6211\u5011\u60F3\u628A\u6BCF\u500B\u7D44\u584A\u90FD\u5728\u540C\u4E00\u500B\u76F8\u4F3C\uFF08chunk\uFF09\u4E2D\u3002\u4F7F\u7528\u4E00\u500B\u7279\u6B8A\u7684\u8A3B\u91CB\u8A9E\u6CD5\u4F86\u584A\u540D\u7A31\uFF08Webpack &gt; 2.4\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">UserDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;group-user&quot; */</span> <span class="token string">&#39;./UserDetails.vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserDashboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;group-user&quot; */</span> <span class="token string">&#39;./UserDashboard.vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserProfileEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;group-user&quot; */</span> <span class="token string">&#39;./UserProfileEdit.vue&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack \u5C07\u4E00\u500B\u4EFB\u610F\u6A21\u584A\u8207\u4E0D\u540C\u7684\u540D\u7A31\u7D44\u5408\u5230\u76F8\u540C\u7684\u7570\u6B65\u584A\u4E2D\u3002</p><h4 id="\u4F7F\u7528-vite" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vite" aria-hidden="true">#</a> \u4F7F\u7528 Vite</h4><p>\u5728Vite\u4E2D\uFF0C\u4F60\u53EF\u4EE5rollupOptions\u5728\u4E0B\u5B9A\u7FA9\u5206\u584A\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          &#39;group-user&#39;: [
            &#39;./src/UserDetails&#39;,
            &#39;./src/UserDashboard&#39;,
            &#39;./src/UserProfileEdit&#39;,
          ],
        },
    },
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[t];function c(l,o){return s(),a("div",null,r)}var d=n(i,[["render",c],["__file","loading.html.vue"]]);export{d as default};
