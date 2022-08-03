import{_ as n,o as s,c as a,b as t}from"./app.ca1f7dd6.js";const p={},e=t(`<h1 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> Computed</h1><p>\u6A21\u677F\u4E2D\u7684\u8868\u9054\u5F0F\u96D6\u7136\u65B9\u4FBF\uFF0C\u4F46\u4E5F\u53EA\u80FD\u7528\u4F86\u505A\u7C21\u55AE\u7684\u64CD\u4F5C\u3002</p><p>\u5982\u679C\u5728\u6A21\u677F\u4E2D\u5BEB\u592A\u591A\u908F\u8F2F\uFF0C\u6703\u8B93\u6A21\u677F\u8B8A\u5F97\u81C3\u816B\uFF0C\u96E3\u4EE5\u7DAD\u8B77\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in lists<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.age &gt; 18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ \`\${item.name} - \${item.age} - \${item.sex}\` }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lists</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u7D05&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u667A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u51AC&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u674E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u8A08\u7B97\u5C6C\u6027\u4F86\u63CF\u8FF0\u4F9D\u8CF4\u97FF\u61C9\u5F0F\u72C0\u614B\u7684\u5FA9\u96DC\u908F\u8F2F\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in formatlist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        {{ \`\${item.name} - \${item.age} - \${item.sex}\` }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">formatlist</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lists<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">items</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lists</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u7D05&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;women&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u667A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u51AC&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u674E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;men&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8A08\u7B97\u5C6C\u6027\u7DE9\u5B58-vs-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8A08\u7B97\u5C6C\u6027\u7DE9\u5B58-vs-\u65B9\u6CD5" aria-hidden="true">#</a> \u8A08\u7B97\u5C6C\u6027\u7DE9\u5B58 vs \u65B9\u6CD5</h3><p>\u5728\u8868\u9054\u5F0F\u4E2D\u8ABF\u7528\u4E00\u500B\u51FD\u6578\u4E5F\u6703\u7372\u5F97\u548C\u8A08\u7B97\u5C6C\u6027\u76F8\u540C\u7684\u7D50\u679C\u3002</p><p>\u4E0D\u540C\u4E4B\u8655\u5728\u65BC\u8A08\u7B97\u5C6C\u6027\u503C\u6703\u57FA\u65BC\u5176\u97FF\u61C9\u5F0F\u4F9D\u8CF4\u88AB\u7DE9\u5B58\u3002\u4E00\u500B\u8A08\u7B97\u5C6C\u6027\u50C5\u6703\u5728\u5176\u97FF\u61C9\u5F0F\u4F9D\u8CF4\u66F4\u65B0\u6642\u624D\u91CD\u65B0\u8A08\u7B97\u3002\u9019\u610F\u5473\u8457\u53EA\u8981<code>lists</code> \u4E0D\u6539\u8B8A\uFF0C\u7121\u8AD6\u591A\u5C11\u6B21\u8A2A\u554F <code>formatlist</code> \u90FD\u6703\u7ACB\u5373\u8FD4\u56DE\u5148\u524D\u7684\u8A08\u7B97\u7D50\u679C\uFF0C\u800C\u4E0D\u7528\u91CD\u5FA9\u57F7\u884C getter \u51FD\u6578\u3002</p><p><code>Date.now() </code>\u4E26\u4E0D\u662F\u4E00\u500B\u97FF\u61C9\u5F0F\u4F9D\u8CF4, \u4E0D\u80FD\u76F4\u63A5\u61C9\u7528\u5728computed\u4E2D\u3002</p><h3 id="\u53EF\u5BEB\u8A08\u7B97\u5C6C\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5BEB\u8A08\u7B97\u5C6C\u6027" aria-hidden="true">#</a> \u53EF\u5BEB\u8A08\u7B97\u5C6C\u6027</h3><p>\u8A08\u7B97\u5C6C\u6027\u9ED8\u8A8D\u50C5\u80FD\u901A\u904E\u8A08\u7B97\u51FD\u6578\u5F97\u51FA\u7D50\u679C\u3002</p><p>\u7576\u5617\u8A66\u4FEE\u6539\u4E00\u500B\u8A08\u7B97\u5C6C\u6027\u6642\uFF0C\u4F60\u6703\u6536\u5230\u4E00\u500B\u904B\u884C\u6642\u8B66\u544A\u3002</p><p>\u53EA\u5728\u67D0\u4E9B\u7279\u6B8A\u5834\u666F\u4E2D\u4F60\u53EF\u80FD\u624D\u9700\u8981\u7528\u5230\u300C\u53EF\u5BEB\u300D\u7684\u5C6C\u6027\uFF0C\u4F60\u53EF\u4EE5\u901A\u904E\u540C\u6642\u63D0\u4F9B<code>getter</code>\u548C <code>setter </code>\u4F86\u5275\u5EFA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Doe&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fullName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// getter</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// setter</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u904B\u884C<code>this.fullName = &#39;John Doe&#39;</code>\u6642\uFF0C<code>setter </code>\u6703\u88AB\u8ABF\u7528\u800C<code>this.firstName</code>\u548C<code>this.lastName</code>\u6703\u96A8\u4E4B\u66F4\u65B0\u3002</p><h3 id="\u7D44\u5408\u5F0Fapi-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7D44\u5408\u5F0Fapi-\u4F7F\u7528" aria-hidden="true">#</a> \u7D44\u5408\u5F0Fapi \u4F7F\u7528</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027 ref</span>
<span class="token keyword">const</span> formatlist <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> lists<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">items</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in lists<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.age &gt; 18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ \`\${item.name} - \${item.age} - \${item.sex}\` }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function l(c,i){return s(),a("div",null,o)}var r=n(p,[["render",l],["__file","computed.html.vue"]]);export{r as default};