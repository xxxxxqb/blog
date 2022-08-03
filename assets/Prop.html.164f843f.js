import{_ as n,o as s,c as a,b as p}from"./app.ca1f7dd6.js";const t={},e=p(`<h1 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h1><p>\u5411\u7D44\u4EF6\u50B3\u905E\u6578\u64DA(\u7236\u50B3\u5B50)</p><h2 id="prop-\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#prop-\u58F0\u660E" aria-hidden="true">#</a> Prop \u58F0\u660E</h2><p>Props \u662F\u4E00\u7A2E\u7279\u5225\u7684 attributes\uFF0C\u9700\u8981\u5728\u5728\u7D44\u4EF6\u4E0A\u8072\u660E\u8A3B\u518A\u3002\u547D\u540D\u4E00\u822C\u4F7F\u7528 camelCase \u5F62\u5F0F\u3002</p><h4 id="\u9078\u9805\u5F0Fapi" tabindex="-1"><a class="header-anchor" href="#\u9078\u9805\u5F0Fapi" aria-hidden="true">#</a> \u9078\u9805\u5F0Fapi</h4><p>\u4F7F\u7528 <code>props</code> \u9078\u9805\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- RegisterComponent.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8072\u660Epops</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ description }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7D44\u5408\u5F0Fapi" tabindex="-1"><a class="header-anchor" href="#\u7D44\u5408\u5F0Fapi" aria-hidden="true">#</a> \u7D44\u5408\u5F0Fapi</h4><p>\u4F7F\u7528 <code>defineProps</code> \u5B8F\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- RegisterComponent.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ description }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7576\u4E00\u500B prop \u88AB\u8A3B\u518A\u5F8C\uFF0C\u53EF\u4EE5\u50CF\u4EE5\u81EA\u5B9A\u7FA9 attribute \u7684\u5F62\u5F0F\u50B3\u905E\u6578\u64DA\u7D66\u5B83\uFF0C\u53EF\u4EE5\u50B3\u905E\u4EFB\u4F55\u985E\u578B\u7684\u503C\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4EE5\u81EA\u5B9A\u7FA9 attribute \u7684\u5F62\u5F0F\u50B3\u905E\u6578\u64DA\u7D66 RegisterComponent --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RegisterComponent</span> <span class="token attr-name">titile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> RegisterComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/components/RegisterComponent.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// RegisterComponent: RegisterComponent</span>
    RegisterComponent
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;this is a description&#39;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prop\u6821\u9A57" tabindex="-1"><a class="header-anchor" href="#prop\u6821\u9A57" aria-hidden="true">#</a> Prop\u6821\u9A57</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u57FA\u790E\u985E\u578B\u6AA2\u67E5</span>
    <span class="token comment">//\uFF08\u7D66\u51FA \`null\` \u548C \`undefined\` \u503C\u5247\u6703\u8DF3\u904E\u4EFB\u4F55\u985E\u578B\u6AA2\u67E5\uFF09</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token comment">// \u591A\u7A2E\u53EF\u80FD\u7684\u985E\u578B</span>
    <span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5FC5\u50B3\uFF0C\u4E14\u70BA String \u985E\u578B</span>
    <span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Number \u985E\u578B\u7684\u9ED8\u8A8D\u503C</span>
    <span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5C0D\u8C61\u985E\u578B\u7684\u9ED8\u8A8D\u503C</span>
    <span class="token literal-property property">propE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token comment">// \u5C0D\u8C61\u6216\u8005\u6578\u7D44\u61C9\u7576\u7528\u5DE5\u5EE0\u51FD\u6578\u8FD4\u56DE\u3002</span>
      <span class="token comment">// \u5DE5\u5EE0\u51FD\u6578\u6703\u6536\u5230\u7D44\u4EF6\u6240\u63A5\u6536\u7684\u539F\u59CB props</span>
      <span class="token comment">// \u4F5C\u70BA\u53C3\u6578</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span>rawProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u7FA9\u985E\u578B\u6821\u9A57\u51FD\u6578</span>
    <span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// The value must match one of these strings</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FD\u6578\u985E\u578B\u7684\u9ED8\u8A8D\u503C</span>
    <span class="token literal-property property">propG</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
      <span class="token comment">// \u4E0D\u50CF\u5C0D\u8C61\u6216\u6578\u7D44\u7684\u9ED8\u8A8D\uFF0C\u9019\u4E0D\u662F\u4E00\u500B\u5DE5\u5EE0\u51FD\u6578\u3002\u9019\u6703\u662F\u4E00\u500B\u7528\u4F86\u4F5C\u70BA\u9ED8\u8A8D\u503C\u7684\u51FD\u6578</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Default function&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u88DC\u5145\uFF1A</p><ul><li><p>\u6240\u6709 <code>prop</code> \u9ED8\u8A8D\u90FD\u662F\u53EF\u9078\u7684\uFF0C\u9664\u975E\u8072\u660E\u4E86 <code>required: true</code>\u3002</p></li><li><p>\u9664 <code>Boolean </code>\u5916\u7684\u672A\u50B3\u905E\u7684\u53EF\u9078 <code>prop</code> \u5C07\u6703\u6709\u4E00\u500B\u9ED8\u8A8D\u503C <code>undefined</code>\u3002</p></li><li><p><code>Boolean </code>\u985E\u578B\u7684\u672A\u50B3\u905E <code>prop</code> \u5C07\u88AB\u8F49\u63DB\u70BA <code>false</code>, \u61C9\u8A72\u70BA\u5B83\u8A2D\u7F6E\u4E00\u500B <code>default</code> \u503C\u4F86\u78BA\u4FDD\u884C\u70BA\u7B26\u5408\u9810\u671F\u3002</p></li><li><p>\u5982\u679C\u8072\u660E\u4E86 <code>default </code>\u503C\uFF0C\u90A3\u9EBD\u5728 <code>prop</code> \u7684\u503C\u88AB\u89E3\u6790\u70BA <code>undefined</code> \u6642\uFF0C\u7121\u8AD6 <code>prop</code> \u662F\u672A\u88AB\u50B3\u905E\u9084\u662F\u986F\u5F0F\u6307\u660E\u7684 <code>undefined</code>\uFF0C\u90FD\u6703\u6539\u70BA default \u503C\u3002</p></li></ul><h2 id="\u5355\u5411\u6570\u636E\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5355\u5411\u6570\u636E\u6D41" aria-hidden="true">#</a> \u5355\u5411\u6570\u636E\u6D41</h2><p>\u6240\u6709\u7684 prop \u90FD\u9075\u5FAA\u8457\u55AE\u5411\u7D81\u5B9A\u539F\u5247\uFF0Cprop \u56E0\u7236\u7D44\u4EF6\u7684\u66F4\u65B0\u800C\u8B8A\u5316\uFF0C\u81EA\u7136\u5730\u5C07\u65B0\u7684\u72C0\u614B\u5411\u4E0B\u6D41\u5F80\u5B50\u7D44\u4EF6\uFF0C\u800C\u4E0D\u6703\u9006\u5411\u50B3\u905E\u3002\u9019\u907F\u514D\u4E86\u5B50\u7D44\u4EF6\u610F\u5916\u4FEE\u6539\u4E86\u7236\u7D44\u4EF6\u7684\u72C0\u614B\u3002</p>`,18),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","Prop.html.vue"]]);export{r as default};