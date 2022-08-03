import{_ as m,r as u,o as g,c as b,a,w as p,v as c,t as l,d,e as k,b as i,f as v}from"./app.ca1f7dd6.js";const q=i(`<h1 id="\u8868\u55AE\u7D81\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u8868\u55AE\u7D81\u5B9A" aria-hidden="true">#</a> \u8868\u55AE\u7D81\u5B9A</h1><p>\u5982\u4F55\u5BE6\u73FEinput\u8F38\u5165\u8207\u6578\u64DA\u7684\u96D9\u5411\u7D81\u5B9A\uFF1F</p><ol><li><p>\u9996\u5148\u6578\u64DA\u8CE6\u503C\u7D66input\u7684value\u5C6C\u6027</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- input\u8F38\u5165\u6642\uFF0Ctext\u78BA\u6C92\u6709\u8B8A\u5316 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u7576text\u7684\u503C\u6709\u6539\u8B8A\u6642\uFF0Cinput\u7684\u503C\u6703\u540C\u6B65</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5982\u4F55\u5728input\u8F38\u5165\u8F38\u5165\u6642\uFF0C\u540C\u6B65\u66F4\u65B0text\uFF1F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>syncText($event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> // \u7D81\u5B9A\u4E00\u500Binput\u4E8B\u4EF6\uFF0C\u5728input\u6642\uFF0Cinput\u8F38\u5165\u503C\u8CE6\u503C\u7D66text
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(event) =&gt; { text = event.target.value }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">syncText</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h3><p><code>v-model</code>\u6307\u4EE4\u5E6B\u5FD9\u7C21\u5316\u4E86\u4EE5\u4E0A\u6D41\u7A0B\uFF0C\u5B83\u53EF\u4EE5\u7528\u65BC\u91DD\u5C0D\u5404\u7A2E\u985E\u578B\u7684\u8F38\u5165\uFF0C\u6703\u6839\u64DA\u6240\u4F7F\u7528\u5143\u7D20\u4E0D\u540C\u64F4\u5C55\u5230\u4E0D\u540C\u7684Dom\u5C6C\u6027\u548C\u4E8B\u4EF6.</p><p><code>v-model</code> \u6703\u5FFD\u7565\u4EFB\u4F55\u8868\u55AE\u4E0A\u7684\u521D\u59CB\u7684 <code>value</code>\u3001<code>checked</code> \u6216 <code>selected</code> attribute\u3002</p><p>\u5B83\u5C07\u59CB\u7D42\u5C07\u7576\u524D\u7D81\u5B9A\u7684 JavaScript \u72C0\u614B\u8996\u70BA\u6578\u64DA\u7684\u6B63\u78BA\u4F86\u6E90\u3002\u4F60\u61C9\u8A72\u5728 JavaScript \u4E2D\u8072\u660E\u8A72\u521D\u59CB\u503C\uFF0C\u4F7F\u7528<code>data</code> \u9078\u9805\u6216\u8005ref \u3002</p><h5 id="\u6587\u672C\u8F38\u5165" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u8F38\u5165" aria-hidden="true">#</a> \u6587\u672C\u8F38\u5165</h5><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u591A\u884C\u6587\u672C\u8F38\u5165" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C\u8F38\u5165" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C\u8F38\u5165</h5><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add multiple lines<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u8907\u9078\u6846" tabindex="-1"><a class="header-anchor" href="#\u8907\u9078\u6846" aria-hidden="true">#</a> \u8907\u9078\u6846</h5><h6 id="\u55AE\u4E00\u8907\u9078\u6846\u7D81\u5B9A\u7684\u662F\u5E03\u723E\u503C" tabindex="-1"><a class="header-anchor" href="#\u55AE\u4E00\u8907\u9078\u6846\u7D81\u5B9A\u7684\u662F\u5E03\u723E\u503C" aria-hidden="true">#</a> \u55AE\u4E00\u8907\u9078\u6846\u7D81\u5B9A\u7684\u662F\u5E03\u723E\u503C</h6>`,13),h=a("label",{for:"check"},"check",-1),x=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>check<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCheck<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>check<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>isCheck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">isCheck</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>true-value \u548C false-value \u662F Vue \u7279\u6709\u7684 attributes \u4E14\u50C5\u6703\u5728 v-model \u5B58\u5728\u6642\u5DE5\u4F5C\u3002</p><p>\u9019\u88CF toggle \u5C6C\u6027\u7684\u503C\u6703\u5728\u9078\u4E2D\u6642\u88AB\u8A2D\u70BA &#39;yes&#39;\uFF0C\u53D6\u6D88\u9078\u64C7\u6642\u8A2D\u70BA &#39;no&#39;\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u904E v-bind \u5C07\u5176\u7D81\u5B9A\u70BA\u5176\u4ED6\u52D5\u614B\u503C</p><h6 id="\u5C07\u591A\u500B\u8907\u9078\u6846\u7D81\u5B9A\u540C\u4E00\u500B\u6578\u7D44" tabindex="-1"><a class="header-anchor" href="#\u5C07\u591A\u500B\u8907\u9078\u6846\u7D81\u5B9A\u540C\u4E00\u500B\u6578\u7D44" aria-hidden="true">#</a> \u5C07\u591A\u500B\u8907\u9078\u6846\u7D81\u5B9A\u540C\u4E00\u500B\u6578\u7D44</h6><p><strong>\u5099\u8A3B: <code>v-model</code> \u548C<code>reative([])</code> \u4E00\u8D77\u4F7F\u7528\uFF0C\u6578\u64DA\u97FF\u61C9\u6703\u5931\u6548</strong></p>`,7),y=a("label",{for:"jack"},"Jack",-1),f=a("label",{for:"john"},"John",-1),_=a("label",{for:"mike"},"Mike",-1),w=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Jack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedNames<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jack<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Jack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>john<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>John<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedNames<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>john<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>John<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mike<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Mike<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedNames<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mike<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Mike<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">checkedNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u55AE\u9078\u6309\u9215" tabindex="-1"><a class="header-anchor" href="#\u55AE\u9078\u6309\u9215" aria-hidden="true">#</a> \u55AE\u9078\u6309\u9215</h5>`,2),V=a("label",{for:"pear"},"pear",-1),j=a("label",{for:"apple"},"apple",-1),J=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pear<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u9078\u64C7\u6846" tabindex="-1"><a class="header-anchor" href="#\u9078\u64C7\u6846" aria-hidden="true">#</a> \u9078\u64C7\u6846</h5><p><code>v-model</code>\u652F\u6301\u975E\u5B57\u7B26\u4E32\u985E\u578B\u7684\u503C\u7D81\u5B9A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ number: 123 }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u98FE\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u98FE\u7B26" aria-hidden="true">#</a> \u4FEE\u98FE\u7B26</h3><p><code>.lazy</code> : \u6539\u70BA\u5728\u6BCF\u6B21 <code>change</code> \u4E8B\u4EF6\u5F8C\u66F4\u65B0\u6578\u64DA\u3002</p>`,6),N=a("p",null,[a("code",null,".number"),v(" : \u5C07\u8F38\u5165\u5B57\u7B26\u8F49\u63DB\u70BA\u6578\u5B57")],-1),U=a("p",null,[a("code",null,".trim"),v("\uFF1A \u81EA\u52D5\u53BB\u9664\u8F38\u5165\u5167\u5BB9\u4E2D\u5169\u7AEF\u7684\u7A7A\u683C")],-1),M={__name:"form.html",setup(C){const e=u(["Jack"]),r=u(!0),o=u(""),t=u("");return(S,n)=>(g(),b("div",null,[q,a("div",null,[p(a("input",{type:"checkbox",id:"check","onUpdate:modelValue":n[0]||(n[0]=s=>r.value=s)},null,512),[[c,r.value]]),h]),x,a("p",null,"checkedNames: "+l(e.value),1),a("div",null,[p(a("input",{type:"checkbox",id:"jack",value:"Jack","onUpdate:modelValue":n[1]||(n[1]=s=>e.value=s)},null,512),[[c,e.value]]),y,p(a("input",{type:"checkbox",id:"john",value:"John","onUpdate:modelValue":n[2]||(n[2]=s=>e.value=s)},null,512),[[c,e.value]]),f,p(a("input",{type:"checkbox",id:"mike",value:"Mike","onUpdate:modelValue":n[3]||(n[3]=s=>e.value=s)},null,512),[[c,e.value]]),_]),w,a("div",null,[a("p",null,"pick: "+l(o.value),1),p(a("input",{type:"radio","onUpdate:modelValue":n[4]||(n[4]=s=>o.value=s),value:"pear"},null,512),[[d,o.value]]),V,p(a("input",{type:"radio","onUpdate:modelValue":n[5]||(n[5]=s=>o.value=s),value:"apple"},null,512),[[d,o.value]]),j]),J,a("p",null,"text: "+l(t.value),1),p(a("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>t.value=s),type:"text"},null,512),[[k,t.value,void 0,{lazy:!0}]]),N,a("p",null,"text: "+l(t.value),1),p(a("input",{"onUpdate:modelValue":n[7]||(n[7]=s=>t.value=s),type:"text"},null,512),[[k,t.value,void 0,{number:!0}]]),U,a("p",null,"text: "+l(t.value),1),p(a("input",{"onUpdate:modelValue":n[8]||(n[8]=s=>t.value=s),type:"text"},null,512),[[k,t.value,void 0,{trim:!0}]])]))}};var B=m(M,[["__file","form.html.vue"]]);export{B as default};
