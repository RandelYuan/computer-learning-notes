import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as r,a as t,b as e,d as n,f as o}from"./app-39aa3793.js";const c={},p={href:"https://react.dev/learn/thinking-in-react",target:"_blank",rel:"noopener noreferrer"},h=o('<ul><li>根据 React 思维来构建应用，可以让代码更加清晰、更易于维护，也使得应用的行为更加可预测。</li><li>学会从组件的角度来思考界面，而不是从页面或者视图的角度。每个组件都有其特定的任务和行为，同时也独立于其他组件。这意味着可以在不影响其他组件的情况下，更新每个组件。</li></ul><h2 id="step-1-将-ui-拆解为组件层级结构" tabindex="-1"><a class="header-anchor" href="#step-1-将-ui-拆解为组件层级结构" aria-hidden="true">#</a> Step 1: 将 UI 拆解为组件层级结构</h2><ul><li>将应用划分成不同的组件。每个组件都应该有一个明确的职责，同时尽可能的复用，每个组件都包含它自己的逻辑。</li><li>可以将每一个组件看成一块拼图，每一块拼图都是独立的，有自己的形状和颜色，放在一起就构成了一个完整的图画。</li><li>例如，一个简单的网站可能包含 &quot;头部&quot; 组件，&quot;导航栏&quot; 组件，&quot;主内容&quot; 组件等等。</li></ul><h2 id="step-2-创建静态版本" tabindex="-1"><a class="header-anchor" href="#step-2-创建静态版本" aria-hidden="true">#</a> Step 2: 创建静态版本</h2><ul><li>静态版本的目标是构建出一个不含有状态、不进行数据处理的页面，只是简单的渲染出 UI。</li><li>在React中，组件可以接收两种类型的数据：props 和 state。props 是从父组件传递给子组件的，而 state 是组件内部管理并可能改变的数据。</li><li>通常 props 是从API请求到的数据。而 state 是随时间变化和用户交互而改变的数据，例如：筛选后的列表。</li><li>在这一阶段，不需要考虑 state，只需要用 props 传递数据，并将其渲染到页面上。</li></ul><h2 id="step-3-确定-state" tabindex="-1"><a class="header-anchor" href="#step-3-确定-state" aria-hidden="true">#</a> Step 3: 确定 state</h2><ul><li>在 React 中，state 是应用程序在某个时间点上的数据。通常 state 会随着时间变化和用户交互而改变。</li><li>设计 state 最重要的一条原则是保证它 Don&#39;t Repeat Yourself(DRY，不要自我重复)。</li><li>例如：搜索框中用户输入的搜索词、购物车中的商品都可能会变化，因此这些应该被定义为 state。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 React 中，根据下列情况可以判定某条数据是不是 state</p><ul><li>随着时间推移，会变化</li><li>不同通过props从父组件传递</li><li>不基于已存在于组件中的 state 或者 props 进行计算</li></ul></div><h2 id="step-4-确定哪些组件应该拥有-state" tabindex="-1"><a class="header-anchor" href="#step-4-确定哪些组件应该拥有-state" aria-hidden="true">#</a> Step 4: 确定哪些组件应该拥有 state</h2><ul><li>确定哪些组件拥有哪个 state 可以通过以下的步骤实现 <ul><li>找到所有需要根据 state 渲染或者产生行为的组件</li><li>寻找距离它们最近的共同父组件</li><li>如果找不到合适的放置 state 的组件，可以创建一个仅用于保存 state 的新组件，并将其添加到公共父组件上层的某个位置</li></ul></li><li>确定 state 应该被放置在哪： <ul><li>通常直接放置在距离它们最近的共同父组件</li><li>也可以放置在父组件上层的组件</li></ul></li></ul><h2 id="step-5-反向数据流" tabindex="-1"><a class="header-anchor" href="#step-5-反向数据流" aria-hidden="true">#</a> Step 5: 反向数据流</h2><ul><li>一般情况下，在 React 中数据是单向流动的——从父组件到子组件。但是，有时候子组件需要更新父组件中的状态，这就需要使用反向数据流</li><li>通常会为子组件添加一些可以触发状态变化的事件处理器，如onClick，onChange等。当这些事件触发时，子组件会调用一个从父组件传递下来的函数(通常被称为回调函数)，并把需要更新的新值作为参数传递给这个函数。父组件接收到新值后，会更新自身的状态，然后重新渲染自己以及所有的子组件。</li><li>通过这种方式，React 能够确保数据的一致性，使得父组件和子组件能够同步地更新状态。</li></ul>',12);function d(u,_){const a=l("ExternalLinkIcon");return s(),r("div",null,[t("p",null,[e("这篇文章是我在学习"),t("a",p,[e("Thinking in React"),n(a)]),e("的一些收获和思考。React 思维可以帮助开发者理解如何将复杂的UI设计分解为独立的、可复用的组件，以及如何通过props和state来处理数据和用户交互。")]),h])}const R=i(c,[["render",d],["__file","thinking-in-react.html.vue"]]);export{R as default};
