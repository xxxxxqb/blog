import{_ as s,o as a,c as n,b as t}from"./app.ca1f7dd6.js";const e={},p=t(`<h1 id="class-\u548C-style-\u7D81\u5B9A" tabindex="-1"><a class="header-anchor" href="#class-\u548C-style-\u7D81\u5B9A" aria-hidden="true">#</a> class \u548C style \u7D81\u5B9A</h1><p>\u56E0\u70BA class \u548C style \u90FD\u662F attribute\uFF0C\u6211\u5011\u53EF\u4EE5\u548C\u5176\u4ED6 attribute \u4E00\u6A23\u4F7F\u7528 v-bind \u628A\u4E00\u500B\u52D5\u614B\u7684\u5B57\u7B26\u4E32\u8CE6\u503C\u7D66\u5B83\u5011\u3002 \u7136\u800C\u901A\u904E\u5B57\u7B26\u4E32\u62FC\u63A5\u751F\u6210\u9019\u4E9B\u503C\u662F\u9EBB\u7169\u4E14\u6613\u51FA\u932F\u7684\u3002\u56E0\u6B64\uFF0CVue \u5C08\u9580\u70BA class \u548C style \u7684 v-bind \u7528\u6CD5\u63D0\u4F9B\u4E86\u7279\u6B8A\u7684\u529F\u80FD\u589E\u5F37\u3002 \u9664\u4E86\u5B57\u7B26\u4E32\u5916\uFF0C\u8868\u9054\u5F0F\u7684\u7D50\u679C\u9084\u53EF\u4EE5\u662F\u5C0D\u8C61\u6216\u6578\u7D44\u3002</p><h2 id="\u7D81\u5B9A-html-class" tabindex="-1"><a class="header-anchor" href="#\u7D81\u5B9A-html-class" aria-hidden="true">#</a> \u7D81\u5B9A HTML class</h2><h4 id="\u7D81\u5B9A\u5C0D\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7D81\u5B9A\u5C0D\u8C61" aria-hidden="true">#</a> \u7D81\u5B9A\u5C0D\u8C61</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ active: isActive }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u8A9E\u6CD5\u8868\u793A active \u662F\u5426\u5B58\u5728\u53D6\u6C7A\u65BC\u6578\u64DA\u5C6C\u6027 isActive \u7684\u771F\u5047\u503C\u3002</p><p>\u53EF\u4EE5\u5728\u5C0D\u8C61\u4E2D\u5BEB\u591A\u500B\u5B57\u6BB5\u4F86\u64CD\u4F5C\u591A\u500B class\u3002\u6B64\u5916\uFF0C:class \u6307\u4EE4\u4E5F\u53EF\u4EE5\u548C\u4E00\u822C\u7684 class attribute \u5171\u5B58:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>static<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ active: isActive, <span class="token punctuation">&#39;</span>text-danger<span class="token punctuation">&#39;</span>: hasError }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7D81\u5B9A\u7684\u5C0D\u8C61\u4E5F\u4E0D\u4E00\u5B9A\u5BEB\u6210\u5167\u806F\u7684\u5F62\u5F0F\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classObject<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">classObject</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;text-danger&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7D81\u5B9A\u4E00\u500B\u8FD4\u56DE\u5C0D\u8C61\u7684\u8A08\u7B97\u5C6C\u6027</p><h4 id="\u7ED1\u5B9A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u6570\u7EC4" aria-hidden="true">#</a> \u7ED1\u5B9A\u6570\u7EC4</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[activeClass, errorClass]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6578\u7D44\u4E2D\u6309\u689D\u4EF6\u89F8\u767C\u67D0\u500B class\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E09\u5143\u8868\u9054\u5F0F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[isActive ? activeClass : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>, errorClass]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7D81\u5B9A\u5167\u806F\u6A23\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7D81\u5B9A\u5167\u806F\u6A23\u5F0F" aria-hidden="true">#</a> \u7D81\u5B9A\u5167\u806F\u6A23\u5F0F</h2><h4 id="\u7D81\u5B9A\u5C0D\u8C61-1" tabindex="-1"><a class="header-anchor" href="#\u7D81\u5B9A\u5C0D\u8C61-1" aria-hidden="true">#</a> \u7D81\u5B9A\u5C0D\u8C61</h4><p><code>:style </code>\u652F\u6301\u7D81\u5B9A <code>JavaScript</code> \u5C0D\u8C61\u503C\uFF0C\u5C0D\u61C9\u7684\u662F<code>HTML</code>\u5143\u7D20\u7684 <code>style </code>\u5C6C\u6027\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styleObject<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">styleObject</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;13px&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6A23\u7684\uFF0C\u5982\u679C\u6A23\u5F0F\u5C0D\u8C61\u9700\u8981\u66F4\u5FA9\u96DC\u7684\u908F\u8F2F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD4\u56DE\u6A23\u5F0F\u5C0D\u8C61\u7684\u8A08\u7B97\u5C6C\u6027\u3002</p><h4 id="\u81EA\u52D5\u524D\u7DB4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52D5\u524D\u7DB4" aria-hidden="true">#</a> \u81EA\u52D5\u524D\u7DB4</h4><p>\u7576\u5728 <code>:style </code>\u4E2D\u4F7F\u7528\u4E86\u9700\u8981\u700F\u89BD\u5668<code>\u7279\u6B8A\u524D\u7DB4\u7684 CSS \u5C6C\u6027</code>\u6642\uFF0CVue \u6703\u81EA\u52D5\u70BA\u4ED6\u5011\u52A0\u4E0A\u76F8\u61C9\u7684\u524D\u7DB4\u3002 Vue \u662F\u5728\u904B\u884C\u6642\u6AA2\u67E5\u8A72\u5C6C\u6027\u662F\u5426\u652F\u6301\u5728\u7576\u524D\u700F\u89BD\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u700F\u89BD\u5668\u4E0D\u652F\u6301\u67D0\u500B\u5C6C\u6027\uFF0C\u90A3\u9EBD\u5C07\u6E2C\u8A66\u52A0\u4E0A\u5404\u500B\u700F\u89BD\u5668\u7279\u6B8A\u524D\u7DB4\uFF0C\u4EE5\u627E\u5230\u54EA\u4E00\u500B\u662F\u88AB\u652F\u6301\u7684\u3002</p>`,22),c=[p];function l(o,i){return a(),n("div",null,c)}var r=s(e,[["render",l],["__file","class&style.html.vue"]]);export{r as default};