/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"css\">CSS</h1>\n<h3 id=\"盒模型\">盒模型</h3>\n<p>设置属性：box-sizing</p>\n<ul>\n<li>content-box: css标准盒模型，width:100px 表示 content 的宽度是100px；</li>\n<li>border-box：IE盒模型，width: 100px 表示 content + padding + border = 100px;</li>\n</ul>\n<p><code>css标准盒模型</code>和<code>IE盒模型</code>的宽高都不包含margin属性</p>\n<h3 id=\"css权重和优先级\">css权重和优先级</h3>\n<p>选择器：id选择器、class选择器、伪类选择器、标签选择器、伪元素</p>\n<p>!import 强行提升权重为最大</p>\n<p>内联样式</p>\n<p>!import &gt; 内联样式 &gt; id &gt; class &gt; 伪类 &gt; 标签 &gt; 伪标签</p>\n<h3 id=\"padding--margin\">padding &amp; margin</h3>\n<p>设置百分比时</p>\n<p><code>padding: 10%;</code></p>\n<p><code>margin: 10%;</code></p>\n<p>它们是按照<code>父元素的宽度</code>来计算的，要注意，<code>padding-top</code>,<code>padding-bottom</code>,<code>margin-top</code>,<code>margin-bottom</code>也是按照父元素的宽度来计算的。</p>\n<p>依靠这个原理，可以画正方形，或者其他一定比例的矩形都是可以的。</p>\n<h4 id=\"1-使用padding来画正方形\">1. 使用padding来画正方形</h4>\n<pre><code class=\"language-html\">&lt;div class=&quot;outer&quot;&gt;\n  &lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code class=\"language-css\">/* 父元素 */\n.outer {\n    width: 400px;\n  height: 600px;\n  background: #66f;\n}\n\n/* 子元素 正方形 */\n.inner {\n  /* width: 100% 按照父元素的宽 = 400px */\n  width: 100%;\n  height: 0;\n  /* padding-top: 100% 也是按照父元素的宽为基准 = 400px */\n  padding-top: 100%;\n  background: #f66;\n}\n</code></pre>\n<h4 id=\"2-使用margin--bfc来画正方形\">2. 使用margin + BFC来画正方形</h4>\n<p>这里的inner也可以使用伪元素代替，html看着就简洁点，但是<strong>伪元素本身默认是行内元素</strong>，margin属性是不生效的，要记得设置 <code>display: block;</code></p>\n<pre><code class=\"language-css\">.outer {\n    width: 400px;\n  /* 创建BFC，子元素的margin才不会溢出去  */\n  overflow: hidden;\n  background: #66f;\n}\n\n.inner {\n  height: 0;\n  margin-top: 100%; \n}\n\n/* 伪元素的写法\n.outer::after {\n  content: &quot;&quot;;\n  display: block;\n  margin-top: 100%;\n}\n*/\n</code></pre>\n<p>也可以利用<code>margin-left: -100%;</code>来向左移动一个父元素宽度的距离，在圣杯布局和双飞翼布局中有用到，下面会有例子。</p>\n<h3 id=\"position\">position</h3>\n<ul>\n<li>static: 对象遵循正常文档流，设置left top right bottom 属性<strong>无效</strong></li>\n<li>relative: 不会脱离文档流，设置left top right bottom 属性会发生偏移，设置偏移之后，它原本所占空间不会被其他元素填充</li>\n<li>fixed：脱离文档流，设置left top right bottom 位置会<strong>以视窗为基准发生偏移</strong></li>\n<li>absolute：脱离文档流，设置left top right bottom 位置会<strong>向上寻找relative为基准发生偏移</strong></li>\n<li>sticky: relative + fixed 的结合体，viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局</li>\n</ul>\n<h3 id=\"z-index\">z-index</h3>\n<p>表示文档流中的盒模型堆叠顺序，把屏幕面前的人当作观察者，堆叠在越上层的离观察者越近。</p>\n<h4 id=\"1-默认情况-都不包含-z-index时\">1. 默认情况 都不包含 z-index时</h4>\n<ul>\n<li>在一组由不含有任何z-index属性的同类元素，如例子中的定位块元素（DIV #1 至 #4），这些元素按照它们在HTML结构中出现的顺序堆叠，而不管它们的定位属性如何。</li>\n<li>普通流中不含有定位属性的标准块元素（DIV #5）始终先于定位元素渲染并出现在定位元素的下层，即便它们在HTML结构中出现的位置晚于定位元素也是如此。</li>\n</ul>\n<h4 id=\"2-float-浮动元素的层叠顺序\">2. float 浮动元素的层叠顺序</h4>\n<h3 id=\"float\">float</h3>\n<p>浮动元素以及如何清除浮动。</p>\n<h4 id=\"1-浮动元素的特点\">1. 浮动元素的特点</h4>\n<ul>\n<li>浮动元素会脱离正常的文档流</li>\n<li>内容会沿着浮动元素的右侧（float: left）或者左侧（float: right）向下流动，注意 <code>内容沿着左侧/右侧向下流动</code>，这里的内容不是指盒模型</li>\n<li>浮动元素会脱离文档流并向左或向右移动，直到它的外边缘碰到父元素边框或者其他浮动元素</li>\n<li>一旦水平方向上的剩余空间不够，就会换行</li>\n</ul>\n<h4 id=\"2-清除浮动\">2. 清除浮动</h4>\n<p>浮动元素会脱离正常的文档流，虽然它还是被父元素包含，但其实它无法撑开父元素的高度，也就是浮动元素可能会导致父元素的高度塌陷，清除浮动的方法：</p>\n<ul>\n<li>伪元素+clear  </li>\n<li>父级创建一个BFC来解决高度塌陷</li>\n</ul>\n<h3 id=\"flex布局\">flex布局</h3>\n<h4 id=\"1-flex-的三个参数代表什么-flex-0-0-200px\">1. flex 的三个参数代表什么 flex: 0 0 200px;</h4>\n<ul>\n<li>flex-grow 当有剩余空间时，按照什么比例放大</li>\n<li>flex-shrink 当超出flex的宽度时，按照什么比例缩小</li>\n<li>flex-basis 没有放大和缩小时的基础宽度或者高度，宽还是高要根据主轴方向来确定</li>\n</ul>\n<h4 id=\"2-order-可以改变顺序\">2. order 可以改变顺序</h4>\n<h4 id=\"3-flex-direction-可以改变flex流的主轴方向\">3. flex-direction 可以改变flex流的主轴方向</h4>\n<h3 id=\"手机适配方案\">手机适配方案</h3>\n<h4 id=\"概念\">概念</h4>\n<h5 id=\"像素\">像素</h5>\n<p>像素（Pel，pixel；pictureelement），为组成一幅图像的全部亮度和色度的最小图像单元</p>\n<p>每个像素都是由红绿蓝三种颜色并排组成的。(注意每个像素的大小是不固定的，他是根据设备的分辨率决定的</p>\n<h5 id=\"分辨率\">分辨率</h5>\n<p>分辨率就是横向的像素点数 x 纵向的像素点数</p>\n<h5 id=\"1-物理像素\">1. 物理像素</h5>\n<h5 id=\"2-逻辑像素\">2. 逻辑像素</h5>\n<h5 id=\"3-dpr\">3. dpr</h5>\n<p><a href=\"https://juejin.cn/post/6844903631993454600\">面试官：你了解过移动端适配吗？</a></p>\n<h4 id=\"适配方案\">适配方案</h4>\n<h5 id=\"1-rem--flexible\">1. rem + flexible</h5>\n<h5 id=\"2-1px-问题\">2. 1px 问题</h5>\n<p>css中写的 px 都是以逻辑像素为单位</p>\n<p>设计稿如果是750px宽度，当屏幕宽度是375px时</p>\n<p>设计稿中的1px 占高 1/750</p>\n<p>屏幕宽度375px时 占高 1/375 = 2 * 1/750 是设计稿的2倍，此时线高会变粗，为了和设计稿保持一致，设置scaleY来解决1px问题。</p>\n<pre><code class=\"language-css\">.border_bottom::after {\n  display: block;\n  height: 1px;\n  transform: scaleY(0.5);\n}\n</code></pre>\n<h3 id=\"vh-和-vw\">vh 和 vw</h3>\n<ul>\n<li>vh :  view height 视窗高度，被分为100份，1vh为 1/100 * 视窗高度</li>\n<li>vw ：view width 视窗宽度，被分为100份，1vw为 1/100 * 视窗宽度</li>\n</ul>\n<h3 id=\"水平居中和垂直居中\">水平居中和垂直居中</h3>\n<h4 id=\"1-行内元素使用-text-align-水平居中\">1. 行内元素使用 text-align 水平居中</h4>\n<p>只能是 inline-block 才可以使用 height + line-height 做垂直居中</p>\n<pre><code class=\"language-css\">.inline {\n  display: inline-block;\n  /* 水平居中 */\n  text-align: center;\n  /* 垂直居中 */\n    height: 60px;\n    line-height: 60px;\n}\n</code></pre>\n<h4 id=\"2-div--margin-auto-实现水平居中\">2. div + margin: auto 实现水平居中</h4>\n<p>为div设置固定宽度，并且设置margin:auto; 就可以实现水平居中</p>\n<h4 id=\"3-display-flex-可实现水平、垂直居中\">3. display: flex 可实现水平、垂直居中</h4>\n<p>align-item: center;</p>\n<p>justify-content: center;</p>\n<h4 id=\"4-利用-position-absolute--transform-translate3d-50--50-0\">4. 利用 position: absolute + transform: translate3d(-50%, -50%, 0)</h4>\n<p>html:</p>\n<pre><code class=\"language-html\">&lt;div class=&quot;outer&quot;&gt;\n  &lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<p>style:</p>\n<pre><code class=\"language-css\">.outer {\n    position: relative;\n  height: 100%;\n  background: #66f;\n}\n\n.inner {\n  position: absolute;\n  width: 200px;\n  height: 300px;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0)\n  background: #f66;\n}\n</code></pre>\n<h4 id=\"6-利用-position-absolute--margin-auto\">6. 利用 position: absolute + margin: auto</h4>\n<p>​\t父元素必须有高度</p>\n<h4 id=\"7--display-table-cell--vertical-align-middle-实现垂直居中，再加上margin-0-auto水平居中\">7.  display: table-cell + vertical-align: middle 实现垂直居中，再加上margin: 0 auto水平居中</h4>\n<pre><code class=\"language-css\">.outer {\n  width: 400px;\n  height: 600px;\n  display: table-cell;\n  vertical-align: middle;\n  background: #66f;\n}\n\n.inner {\n  width: 200px;\n  height: 300px;\n    margin: 0 auto;\n  background: #f66;\n}\n</code></pre>\n<h3 id=\"两栏布局的实现\">两栏布局的实现</h3>\n<h4 id=\"1-float--margin\">1. float + margin</h4>\n<p>​\t左侧用 float: left 浮动布局，使其脱离文档流，并且固定宽度 200px</p>\n<p>​\t主体部分margin-left: 200px;</p>\n<h4 id=\"2-float--bfc\">2. float + BFC</h4>\n<p>​\t左侧用 float: left 浮动布局，使其脱离文档流，并且固定宽度 200px</p>\n<p>​\t右侧创建一个BFC，并且宽度设置为100%</p>\n<p>​\t原理：float 和 BFC 不会有重叠部分。右侧的BFC会被挤到右边</p>\n<h4 id=\"3-flex-布局\">3. flex 布局</h4>\n<p>​\t包裹一个 container 容器，布局flex，宽高都是100%；</p>\n<p>​\t左侧固定栏： flex: 0 0 200px;</p>\n<p>​\t右侧自适应栏： flex: 1 1;</p>\n<h4 id=\"4-absolute布局\">4. absolute布局</h4>\n<h3 id=\"三栏布局\">三栏布局</h3>\n<h4 id=\"1-圣杯布局\">1. 圣杯布局</h4>\n<p>main、left、right都是 float:left 布局</p>\n<p>container 使用padding 给 left 和right 预留左右的位置 padding: 0 100px 0 200px; 左侧 200px 右侧100px</p>\n<ul>\n<li>left<ul>\n<li>margin-left: -100%; 向右移动100%父元素的宽度，可以跑到第一行去</li>\n<li>position:relative;  left: -200px; 再向左移动200px即可</li>\n</ul>\n</li>\n<li>right<ul>\n<li>margin-right: -100px; 其他元素会认为right的宽度是0，所以right也会移动到第一行。</li>\n</ul>\n</li>\n</ul>\n<pre><code class=\"language-html\">&lt;div class=&quot;container&quot;&gt;\n  &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;\n  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;\n  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<h4 id=\"2-双飞翼布局\">2. 双飞翼布局</h4>\n<p>container、left、right都是 float:left 布局</p>\n<ul>\n<li>left<ul>\n<li>margin-left: -100%; 向右移动100%父元素的宽度，可以跑到第一行去</li>\n</ul>\n</li>\n<li>right<ul>\n<li>margin-left: -100px; 向左移动100px，可以跑到第一行</li>\n</ul>\n</li>\n<li>main<ul>\n<li>margin: 0 100px 0 200px;</li>\n</ul>\n</li>\n</ul>\n<pre><code class=\"language-html\">&lt;div class=&quot;container&quot;&gt;\n  &lt;div class=&quot;main&quot;&gt;main&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=&quot;left&quot;&gt;left&lt;/div&gt;\n&lt;div class=&quot;right&quot;&gt;right&lt;/div&gt;\n</code></pre>\n<h4 id=\"3-flex-布局-1\">3. flex 布局</h4>\n<p>container flex 布局</p>\n<ul>\n<li>main<ul>\n<li>flex: 1 1;</li>\n</ul>\n</li>\n<li>left<ul>\n<li>flex: 0 0 200px;</li>\n</ul>\n</li>\n<li>right<ul>\n<li>flex: 0 0 100px;</li>\n</ul>\n</li>\n</ul>\n<p>再使用 order 属性来调整顺序即可</p>\n<pre><code class=\"language-html\">&lt;div class=&quot;container&quot;&gt;\n  &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;\n  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;\n  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<h3 id=\"css动画属性\">CSS动画属性</h3>\n<ul>\n<li>transition  过渡， 可以和transform或者其他的属性，比如 width, height, color, opacity 等搭配使用<ul>\n<li><code>transition: transform 1s easy-in-out 2s; </code> 表示在transform属性改变的时候触发动画，动画时常是1s，运动曲线是预设的easy-in-out，延迟2s执行。</li>\n<li>四个属性<ul>\n<li>transition-property : transform;  作用的属性</li>\n<li>transition-duration: 1s;  动画时间</li>\n<li>transition-timing-function: easy-in-out   动画执行函数（贝塞尔曲线）</li>\n<li>transition-delay: 2s 延迟多久执行</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>transform</li>\n<li>translate</li>\n<li>scale</li>\n<li>animation 比transition强大很多，有8个属性，会和 <code>@keyframes</code>搭配使用，用<code>@keyframes</code>控制关键帧，还可以设置无限循环播放，可以做很多动画</li>\n<li>@keyframes</li>\n</ul>\n"
      });
    };
  }
});

/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"http\">Http</h1>\n<h3 id=\"开启一个server\">开启一个Server</h3>\n<pre><code class=\"language-js\">const http = require(&quot;http&quot;)\nconst port = 8085\nconst host = &quot;127.0.0.1&quot;\nhttp.createServer((req, res) =&gt; {\n  res.writeHead(200, {\n    &quot;Content-Type&quot;: &quot;text/plain;charset=utf-8&quot;\n  })\n  res.end(&quot;你好呀&quot;)\n}).listen(port, host)\n\nconsole.log(`Server running at http://${host}:${port}/`);\n</code></pre>\n<h3 id=\"发送http请求\">发送http请求</h3>\n<pre><code class=\"language-js\">const http = require(&quot;http&quot;)\nconst options = {\n  host: &quot;127.0.0.1&quot;,\n  port: 8085,\n  path: &quot;/&quot;,\n  method: &quot;GET&quot;\n}\nconst req = http.request(options, res =&gt; {\n  console.log(`Status=${res.status}, Header=${JSON.stringify(res.header)}`)\n  res.setEncoding(&quot;utf8&quot;)\n  res.on(&quot;data&quot;, (data) =&gt; {\n    console.log(data)\n  })\n})\nreq.end()\n</code></pre>\n"
      });
    };
  }
});

/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"koa-洋葱模型\">Koa 洋葱模型</h1>\n<h2 id=\"koa-compose\">koa-compose</h2>\n"
      });
    };
  }
});

/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"cors（cross-origin-resource-share）跨源资源共享\">CORS（Cross-Origin-Resource-Share）跨源资源共享</h1>\n<p>MDN地址：<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS\">CORS</a></p>\n<ul>\n<li>same-origin policy 同源策略： 两个地址的<code>scheme + host + port</code>相同代表两个地址同源</li>\n<li>为什么不能跨来源发送API</li>\n<li>安全隐患</li>\n</ul>\n<h3 id=\"解决cors问题\">解决CORS问题</h3>\n<p>要先明确一个概念： 简单请求 和 非简单请求</p>\n<p>Request请求分为简单请求和非简单请求</p>\n<h4 id=\"简单请求\">简单请求</h4>\n<p>​\t1. <code>POST</code>、<code>GET</code>、<code>HEAD</code>请求</p>\n<p>​\t2. request header 中没有携带额外信息（简单请求携带的信息可查询MDN）</p>\n<p>​\t3. <code>Content-Type</code>为 “multipart/form-data”、”text/plain”、”application/x-www-form-urlencoded”</p>\n<p>解决：</p>\n<p>​\t后端添加 <code>response-header: Access-Control-Allow-Origin</code>来指定是否放行</p>\n<h4 id=\"非简单请求\">非简单请求</h4>\n<ol>\n<li><p>request header 中携带了自定义信息 比如版本号”X-VERSION: 0.13”</p>\n</li>\n<li><p>Content-Type 超出了简单请求所述的范围 比如”application/json”</p>\n<p>对非简单请求，浏览器会先发送一个<code>preflight request 预检请求（OPTIONS请求）</code>来询问后端是否放行</p>\n</li>\n</ol>\n<h4 id=\"预检请求\">预检请求</h4>\n<p>​\t// …</p>\n<p>​\t<code>Access-Control-Request-Method: POST</code></p>\n<p>​\t<code>Access-Control-Request-Headers: X-VERSION, Content-Type</code></p>\n<p>解决：</p>\n<p>​\t添加OPTIONS的response-header表示对该请求，允许接收的<code>request-header</code>字段</p>\n<ul>\n<li><code>Access-Control-Allow-Origin</code></li>\n<li><code>Access-Control-Headers</code>: content-type, X-VERSION</li>\n<li><code>Access-Control-Max-Age</code>: 86400， 设置一个时间，在此时间内同一请求不再需要发送预检请求，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效</li>\n<li>等等</li>\n</ul>\n<h4 id=\"携带cookie的请求\">携带Cookie的请求</h4>\n<p>​\t一般来说，对跨源<code>XMLHttpRequest</code>和<code>fetch</code>请求，浏览器不会发送Cookie，如果需要发送，则request需要进行特殊设置</p>\n<pre><code class=\"language-javascript\">    let invocation = new XMLHttpRequest()\n    let url = &quot;http://bar.other/resources/credentialed-content/&quot;\n\n    function callOtherDomain() {\n        if(invocation) {\n            invocation.open(&#39;GET&#39;, url, true)\n            invocation.withCredentials = true;  // 如果要携带Cookie 进行特殊设置\n            invocation.onreadystatechange = handler\n            invocation.end()\n        }\n    }\n</code></pre>\n<p>后端也需要进行配置</p>\n<ul>\n<li>Access-Control-Allow-Credentials: true   // 如果不配置则请求无法返回<ul>\n<li>Access-Control-Allow-Origin: <a href=\"https://foo.example\">https://foo.example</a>\t\t// 携带Cookie时不能设置为通配符</li>\n</ul>\n</li>\n</ul>\n"
      });
    };
  }
});

/***/ }),

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: ""
      });
    };
  }
});

/***/ }),

/***/ 382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"浏览器安全\">浏览器安全</h1>\n<p>参考文档：</p>\n<p><a href=\"https://tech.meituan.com/2018/09/27/fe-security.html\">美团技术团队-如何防止XSS攻击</a></p>\n<p><a href=\"https://tech.meituan.com/2018/10/11/fe-security-csrf.html\">美团技术团队-如何防止CSRF攻击</a></p>\n<h3 id=\"一些安全相关名词\">一些安全相关名词</h3>\n<ol>\n<li><p>XSS  跨站脚本攻击  (Cross-Site Script)</p>\n</li>\n<li><p>CSRF or XSRF 跨站请求伪造  (Cross-Site Recurity Forgery)</p>\n</li>\n<li><p>HTTPS</p>\n</li>\n<li><p>CSP（内容安全策略，禁止加载外域代码，禁止外域的提交） </p>\n</li>\n<li><p>HSTS（强制使用HTTPS）</p>\n</li>\n<li><p>X-Frame-options 控制当前页面是否可以被嵌入到iframe</p>\n</li>\n<li><p>SRI  subresource intergrity 子资源完整性</p>\n<p>打包文件后，根据文件内容生成hash值，并且注入到script标签上. 防止黑客篡改cdn上的资源内容</p>\n<p>浏览器加载script时，会根据内容生成hash值 并和script标签上的hash进行对比，如果相同，则认为内容是安全的</p>\n</li>\n<li><p>Referer-Policy 控制referer的携带策略</p>\n</li>\n</ol>\n<h3 id=\"node（服务器）攻击\">Node（服务器）攻击</h3>\n<h4 id=\"1-本地文件操作安全问题，由字符串拼接路径\">1. 本地文件操作安全问题，由字符串拼接路径</h4>\n<p>一般框架都可以规定静态资源文件，这个很容易理解，如果不做资源的访问限制，那用户访问服务器后，直接改变URL地址，就可以获取到服务器上的所有文件.</p>\n<p>express.static</p>\n<p>koa-static 中间件</p>\n<p>resolve-path  第三方库</p>\n<pre><code class=\"language-js\">const app = express()\napp.static(&quot;html&quot;)\n\nhttp.createServer(app).listen(3000)\n</code></pre>\n<h4 id=\"2-redos\">2. ReDos</h4>\n<p><strong>2-1. 什么是dos攻击</strong> </p>\n<p>dos攻击就是攻击者通过大量访问服务器，造成服务器负载过大，使正常的访问受到影响. 比如个人开发者购买了流量付费的某☁️服务器，如果不做安全措施，攻击者通过脚本或其他方式大量访问该服务器，就会造成额外的费用</p>\n<p><strong>2-2. ReDos</strong></p>\n<p>ReDos就是使用正则进行dos攻击，正则表达式嵌套关系深的时候，计算量增上速度很快 可能造成服务器宕机</p>\n<h3 id=\"前端攻击\">前端攻击</h3>\n<h3 id=\"xss\">XSS</h3>\n<h4 id=\"1--概念\">1.  概念</h4>\n<p>Cross-site Script 跨站脚本攻击.</p>\n<p>攻击者想尽一切办法把代码注入到网页中.</p>\n<h4 id=\"2--攻击类型\">2.  攻击类型</h4>\n<h5 id=\"外在表现\">外在表现</h5>\n<ol>\n<li><p>评论区、可输入位置植入js代码</p>\n</li>\n<li><p>url上拼接js代码，诱使用户打开</p>\n</li>\n</ol>\n<h5 id=\"技术实现\">技术实现</h5>\n<ol>\n<li><p>存储型 Server</p>\n<p>论坛发帖、商品评价、用户私信等储存到服务器攻击</p>\n<ul>\n<li>攻击者将自己的恶意代码提交到服务器，并存储到数据库中</li>\n<li>其他用户打开目标网站时会获取到服务器返回的恶意代码，拼接到HTML中返回</li>\n<li>执行恶意代码，完成攻击</li>\n</ul>\n</li>\n<li><p>反射型 Server</p>\n<ul>\n<li><p>攻击者构造出自己的恶意url</p>\n</li>\n<li><p>用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器</p>\n</li>\n<li><p>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行</p>\n</li>\n</ul>\n<blockquote>\n<p>Server 端 存储型 和 反射型 XSS攻击的区别：</p>\n<p>存储型 是攻击者利用XSS漏洞将恶意代码存储在<code>数据库</code>中；</p>\n<p>反射性 时攻击者利用XSS漏洞将恶意代码存储在<code>URL</code>中；</p>\n</blockquote>\n</li>\n<li><p>DOM型 Browser</p>\n<p>也是URL传参的功能，传入可执行文本，举例：</p>\n<pre><code class=\"language-js\">const a = document.queryElementsByTagName(&quot;a&quot;)[0]\n\nconst queryObj = []\nconst search = window.location.search\nsearch.replace(//, (m, $1, $2) =&gt; {\n      queryObj[$1] = decodeURIComponent($2)\n})\n\n// 通过浏览器url传参来决定a标签的跳转，可能有xss注入漏洞\n// 攻击者可以传入 javascript:xxx 参数，用户点击链接时会执行恶意代码\na.href = queryObject.redirectUrl;\n</code></pre>\n<blockquote>\n<p>反射型 和 DOM型 XSS攻击的区别：</p>\n<p>都是通过构造url来实现攻击，但是本质区别在于执行这段恶意代码的环境是客户端还是服务端</p>\n<p>反射性XSS攻击一般发生在服务端渲染（SSR）的网站</p>\n</blockquote>\n</li>\n</ol>\n<h4 id=\"3--如何防范\">3.  如何防范</h4>\n<p> XSS 可以攻击成功，一定是因为被攻击网站的服务端或客户端出现的代码漏洞。</p>\n<ol>\n<li><p>对数据进行严格的编码，比如 html元素、js、css、url</p>\n<p><strong>1-1. 尽量使用成熟的编码库，避免自己手写实现（可能考虑不周出现漏洞）</strong></p>\n<p><strong>1-2. 使用框架时要注意一些危险的API：</strong></p>\n<ul>\n<li>vue ： v-html </li>\n<li>react : dangerouslySetInnerHTML</li>\n</ul>\n<p><strong>1-3. DOM操作时要注意的API</strong></p>\n<ul>\n<li>.innerHTML</li>\n<li>.outerHTML</li>\n<li>document.write()</li>\n<li>href</li>\n</ul>\n</li>\n<li><p>CSP (Content Security Policy) 内容安全策略</p>\n<p>浏览器提供的一种安全策略</p>\n<p>服务端可以设置响应头<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy\"><code>Content-Security-Policy</code></a>，本质上是设立白名单，规定浏览器只能执行指定域名的代码，可防止 XSS 攻击</p>\n<p>也可以使用meta标签进行设置</p>\n<pre><code class=\"language-html\">&lt;meta\n  http-equiv=&quot;Content-Security-Policy&quot;\n  content=&quot;default-src https://example.net; child-src &#39;none&#39;; object-src &#39;none&#39;&quot;\n/&gt;\n</code></pre>\n</li>\n<li><p>防止Cookie盗用，配置HttpOnly</p>\n<ul>\n<li>配置HttpOnly后可以禁止JS获取Cookie，保护用户信息</li>\n</ul>\n</li>\n<li><p>验证码</p>\n<ul>\n<li>防止脚本冒充用户提交危险操作</li>\n</ul>\n</li>\n<li><p>控制输入长度，增加XSS攻击难度</p>\n</li>\n</ol>\n<h3 id=\"csrf--cross-site-request-forgery-跨站请求伪造\">CSRF  Cross-site Request Forgery 跨站请求伪造</h3>\n<h4 id=\"1-概念\">1. 概念</h4>\n<p>用户登录了某网站后，浏览器会储存该用户的登录信息，当用户访问了攻击者的网站时，攻击者可以通过在网站内部向被攻击网站发送请求，该请求会默认携带Cookie信息</p>\n<p>CSRF 攻击已经不常见了，因为现代浏览器的安全策略已经比较严格。</p>\n<h4 id=\"2-如何攻击\">2. 如何攻击</h4>\n<ol>\n<li>某人登陆了邮箱，浏览器储存了用户的cookie</li>\n<li>该人访问了第三方网站，第三方网站发起修改邮箱配置的请求，比如设置邮箱自动转发到其他邮箱，由于Cookie还没过期，就可以顺利发起请求达到黑入邮箱的目的.</li>\n</ol>\n<h4 id=\"3-攻击类型\">3. 攻击类型</h4>\n<ol>\n<li><p>Get 请求</p>\n<p>使用Img标签，诱使客户点击</p>\n<pre><code class=\"language-html\">&lt;img src=&quot;http://your-site.com?account=xxx&quot; /&gt;\n</code></pre>\n</li>\n<li><p>Post 请求 </p>\n<p>2-1.  使用form表单</p>\n<pre><code class=\"language-html\">&lt;form method=&quot;POST&quot;&gt;\n    &lt;input type=&quot;hidden&quot; name=&quot;account&quot; value=&quot;xxx&quot;/&gt;\n&lt;/form&gt;\n&lt;!-- 发起请求 --&gt;\n&lt;script&gt;document.forms[0].submit()&lt;/script&gt;\n</code></pre>\n<p>2-2.  诱导客户点击链接</p>\n<pre><code class=\"language-html\">&lt;a href=&quot;xxxx&quot;/&gt;\n</code></pre>\n</li>\n</ol>\n<p>CSRF 攻击不需要确切的获取用户的Cookie，由用户自己在不知情的情况下发起请求，所以设置HttpOnly无法防范 CSRF 攻击.</p>\n<p>XSS 攻击是执行攻击者的代码，获取用户的登录信息，再使用用户的登录信息发起请求.</p>\n<blockquote>\n<p>XSS 和 CSRF 是有区别的</p>\n<p>XSS 是攻击者侵入到当前网站内部，在当前网站注入恶意代码造成的攻击（当前网站）</p>\n<p>CSRF 是用户访问或者点击第三方网站链接时，向服务器发送请求造成的攻击（第三方网站）</p>\n<p>XSS 是利用了用户对网站的信任； </p>\n<p>CSRF 是利用了网站对用户的信任；</p>\n</blockquote>\n<h4 id=\"3-防范\">3. 防范</h4>\n<h5 id=\"3-1-阻止不明外域的访问\">3-1. 阻止不明外域的访问</h5>\n<ol>\n<li><p>同源检测 </p>\n<ul>\n<li><p>Origin Header</p>\n<p>如果存在Origin Header 直接通过它来判断就可以</p>\n<p>但是IE 11 不会在跨站CORS请求上添加Origin标头，Referer头将仍然是唯一的标识</p>\n<p>302重定向也会丢失Origin</p>\n</li>\n<li><p>Referer header</p>\n</li>\n</ul>\n<blockquote>\n<p>Referer 简介 （制定规范的时候有拼写错误，正确的单词是referrer）</p>\n<p>这个单词有拼写错误，它翻译过来是推荐人的意思</p>\n<p>当你使用google搜索访问A网站时，就会携带Referer信息，表明你是通过google来访问的A网站</p>\n<p>以下情况会发送Referer信息 🔥🔥 （刚好这三种情况都可能造成CSRF攻击）</p>\n<ol>\n<li>用户点击网页上的链接</li>\n<li>用户发送表单</li>\n<li>网页加载静态资源，比如加载图片、脚本、样式</li>\n</ol>\n<p>可以通过 <code>document.referrer</code>来获取。</p>\n<p>Referrer Policy 策略：</p>\n<p>如何设置：</p>\n<ol>\n<li>在CSP设置</li>\n<li>页面头部增加meta标签</li>\n<li>a标签增加referrerpolicy属性</li>\n</ol>\n</blockquote>\n<p>当客户访问第三方网站，并且发送了恶意的请求到服务器时，服务器就可以比对 referer 字段，来判断这个请求是否是信任的网站发送的.</p>\n<blockquote>\n<p> 不过要注意一点：Referer在一些情况下也会丢失，可参考<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy\">MDN</a></p>\n</blockquote>\n<ul>\n<li>无法确认 origin 和 referer的情况下，建议直接进行阻止</li>\n</ul>\n<h5 id=\"3-2-cookie-samesite\">3-2. Cookie SameSite</h5>\n<p>默认禁止跨域携带Cookie</p>\n<h5 id=\"3-3-提交时要求附加本域才能获取的信息\">3-3. 提交时要求附加本域才能获取的信息</h5>\n<ol>\n<li>某些安全性较高的请求需要输入手机验证码，比如支付请求等</li>\n<li>由于攻击者拿不到Cookie，提交请求的时候可以增加附加校验，比如 Token<ul>\n<li>用户登录后，服务器会生成一个加密的token作为该用户的标示返回给客户端，客户端会储存这个token</li>\n<li>用户在浏览网站发送请求时，为每个请求携带token</li>\n<li>服务器收到token后对其验证其有效性，对其解密来获取到用户信息（一般可以存到redis中）</li>\n</ul>\n</li>\n</ol>\n<blockquote>\n<p> CSRF Token虽然可以防止CSRF攻击，但是可能遭到XSS攻击泄漏token</p>\n</blockquote>\n<ol start=\"3\">\n<li><p>双重Cookie验证</p>\n<ul>\n<li>在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如<code>csrfcookie=v8g9e4ksfhw</code>）。</li>\n<li>在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例<code>POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw</code>）。</li>\n<li>后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。</li>\n</ul>\n<p>优点：</p>\n<ul>\n<li>比token简单</li>\n</ul>\n<p>缺点：</p>\n<ul>\n<li>这样的模式注定不能使用HttpOnly，意味着可能遭到XSS攻击</li>\n</ul>\n</li>\n</ol>\n</li>\n</ol>\n"
      });
    };
  }
});

/***/ }),

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"浏览器请求相关\">浏览器请求相关</h1>\n<h3 id=\"简单请求和非简单请求\">简单请求和非简单请求</h3>\n<h4 id=\"简单请求\">简单请求</h4>\n<ol>\n<li>满足 GET、POST、HEAD 方法</li>\n<li>头部不能超出这些字段：<ul>\n<li>Accept</li>\n<li>Accept-Language</li>\n<li>Content-Language</li>\n<li>Content-Type: <code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code>、<code>text/plain</code></li>\n</ul>\n</li>\n<li>请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器</li>\n<li>XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。 请求中没有使用 ReadableStream 对象。</li>\n</ol>\n<h4 id=\"非简单请求\">非简单请求</h4>\n<p>不满足简单请求的都是非简单请求，比如 <code>Content-Type</code>设置为 <code>application/json</code></p>\n<p>非简单请求需要发起预检请求。</p>\n<h4 id=\"为什么简单请求不需要发起预检请求？\">为什么简单请求不需要发起预检请求？</h4>\n<h3 id=\"常见的错误码\">常见的错误码</h3>\n<p>错误码是由服务器规定的，一般业务场景下错误码会分为两种，一种是通信状态码，一种是业务状态码。</p>\n<p>通信状态码是指客户端和浏览器之前进行数据通信时的状态码，通信状态码一般都是约定俗成的，但是并不一定每个场景都能正确返回符合规范的状态码，这都取决于服务端对状态码的处理。</p>\n<ul>\n<li>1xx 信息性状态码，表示请求正在处理</li>\n<li>2xx 成功状态码<ul>\n<li>200 ok</li>\n<li>204 no content 请求成功但是没有响应主体</li>\n<li>206 Patial Content 范围请求成功，包含 <code>Content-Range</code>指定范围的响应实体</li>\n</ul>\n</li>\n<li>3xx 重定向状态码<ul>\n<li>301 永久重定向 如果已经把当前uri保存为书签，浏览器会更新URI</li>\n<li>302 Found 临时重定向</li>\n<li>304 Not Modified 协商缓存命中？</li>\n</ul>\n</li>\n<li>4xx 客户端错误码，服务器无法处理请求<ul>\n<li>400 请求有语法错误，服务端无法理解</li>\n<li>401 Unauthorized 请求需要认证</li>\n<li>403 Forbidden 无权访问</li>\n<li>404 Not Found 客户端访问了服务器上不存在的资源</li>\n</ul>\n</li>\n<li>5xx 服务端错误码，服务器处理请求出错<ul>\n<li>500 Internal Server Error 服务器内部错误</li>\n<li>503 Service Unavailable 服务器正忙或正在维护</li>\n</ul>\n</li>\n</ul>\n<p>业务状态码种类繁多，是服务器定义用于客户端展示错误状态的。</p>\n<h3 id=\"跨域问题及解决方案\">跨域问题及解决方案</h3>\n<p>跨域问题的产生根本原因是浏览器的同源安全策略，为了避免一些常见的攻击，浏览器都会默认开启。前端在开发时一般会开启本地服务<code>localhost:xxx</code>，前后端分离开发时，前端需要发送请求到后端获取数据，由于 ajax 请求会被同源政策限制，这时就会出现跨域问题，目前流行的 Webpack 内置了</p>\n<p>跨域问题一般都是服务端来处理的</p>\n<ol>\n<li>开启本地服务，进行反向代理，前端的webpack、vite等都有这样的功能</li>\n</ol>\n<h2 id=\"xmlhttprequest\">XMLHttpRequest</h2>\n<pre><code class=\"language-js\">const xhr = new XMLHttpRequest();\n// GET请求\nxhr.open(&#39;GET&#39;, &#39;http://xxxx?a=1&amp;b=2&#39;);\nxhr.send()\n// POST请求\nxhr.open(&#39;POST&#39;, &#39;http://xxxx&#39;);\nxhr.setHeaders(&quot;Content-Type&quot;, &quot;application/x-www-formurlencoded&quot;)\nxhr.send({})\n\n// 请求状态\nxhr.onreadystatechange = function() {\n    if(xhr.readyState !== 4) {\n        return;\n    }\n // 如果请求超时，xhr.readyState依然会是4，但是在调用xhr.status会报错，所以需要包裹try/catch\n    try {\n        if(xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300 || xhr.status === 304) {\n            console.log(xhr.responseText)\n        } else {\n            console.error(`请求失败${xhr.status}`)\n        }\n    } catch(err) {}\n}\n\n// 超时 XHR Level2规范\nxhr.timeout = 3000\n// ontimeout事件\nxhr.ontimeout = function() {\n    console.error(&quot;请求超时！&quot;)\n}\n\n// onprogress事件\nxhr.upload.onprogress = function(p) {\n    console.log(Math.round((p.loaded / p.total) / 100) + &quot;%&quot;)\n}\n\n// load事件，响应接收完成后立即调用，简化状态判断，不需要再判断readyState\n// 可能有兼容问题\nxhr.onload = function() {\n    if(xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300 || xhr.status === 304) {\n            console.log(xhr.responseText)\n        } else {\n            console.error(`请求失败${xhr.status}`)\n        }\n}\n</code></pre>\n<ol>\n<li><p>xhr请求中止</p>\n<pre><code class=\"language-js\">xhr.abort()\n</code></pre>\n</li>\n<li><p>xhr.onreadystatechange事件要放在xhr.send()之前， 否则当请求时长很短时可能无法监听到变化</p>\n</li>\n</ol>\n<h2 id=\"fetch\">fetch</h2>\n<ol>\n<li><p>接收一个必传的参数input，返回一个Promise</p>\n<pre><code class=\"language-js\">fetch(url, {\n method: &#39;GET&#39;,\n body: {},\n headers: {}\n}).then(response =&gt; {\n // 读取响应文本\n response.text()\n // 读取json\n response.json()\n})\n</code></pre>\n</li>\n<li><p>成功获取请求 response.status === 200 ; response.statusText === “OK”</p>\n</li>\n<li><p><strong>重定向时返回的状态码依然是200  不是3xx</strong></p>\n</li>\n<li><p><strong>就算请求失败，即返回的状态码不是200，Promise依然会resolve结果，而不是catch</strong>\n只要服务器成功的将response返回到客户端，Promise都会被resolve</p>\n</li>\n<li><p>什么情况下会catch？\n只有在服务器未响应导致浏览器超时，或违反CORS，无网络连接，HTTPS错配及其他浏览器/网络问题才会导致期约被拒绝。</p>\n</li>\n<li><p>那怎么判断请求是否真的成功了？\n通过response.status === 200； 以及response.statusText === “OK”来判断</p>\n</li>\n<li><p>怎么中断fetch请求？\n通过<code>AbortController/AbortSignal</code>中断请求。\n```js\nconst abortController = new AbortController()\nfetch(&quot;xxx.zip&quot;, {\n signal: abortController\n}).then(response =&gt; {})\n.catch(err =&gt; {\n console.log(err)\n})</p>\n</li>\n</ol>\n<p>setTimeout(() =&gt; {\n    abourtController.abort()\n}, 10)</p>\n<pre><code>\n8. fetch没有timeout，怎么设置超时？\n```js\nfunction fetchWithTimeout(url, init, timeout) {\n    return new Promise((resolve, reject) =&gt; {\n        fetch(url, init)\n            .then(resolve)\n            .catch(reject)\n        setTimeout(reject, timeout)\n    })\n}\n</code></pre>\n<ol start=\"9\">\n<li>fetch默认是不带cookie的请求，怎么携带cookie？\n通过第二个参数的配置项<pre><code class=\"language-js\">fetch(url, {\n method: &#39;GET&#39;,\n credentials: &#39;same-origin&#39; // 同域会携带cookie\n})\n</code></pre>\n<h3 id=\"ajax的封装\">Ajax的封装</h3>\n</li>\n</ol>\n<h3 id=\"封装一个工具函数，处理对异步函数的超时\">封装一个工具函数，处理对异步函数的超时</h3>\n<pre><code>function asyncWithTimeout(asyncFn, timeout) {\n\n}\n\nfunction asyncFn() {\n    return new Promise((resolve, reject) =&gt; {\n    })\n}\n\nconst newFn = asyncWidthTimeout(asyncFn, 3000);\n</code></pre>\n"
      });
    };
  }
});

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"浏览器缓存\">浏览器缓存</h1>\n<p><a href=\"https://github.com/mkolp11597753/http-cache\">代码传送门</a></p>\n<h3 id=\"概念\">概念</h3>\n<h4 id=\"一、强缓存\">一、强缓存</h4>\n<p><strong>在向服务端发送请求之前</strong>，浏览器会根据请求头部携带的<code>Cache-Control</code>或者<code>Expires</code>来尝试命中强缓存，如果命中则直接返回资源，不会再向服务器发送请求</p>\n<p>强缓存的原理是为资源文件设置一个时间，只要没超过这个时间，都使用缓存，不管服务器文件是否更新。</p>\n<ul>\n<li>Expires：HTTP/1.0 表示资源过期时间，缺点是采用的是本机时间（绝对时间）</li>\n<li>Cache-Control：HTTP/1.1 为了解决Expires时间不准的问题（相对时间）</li>\n</ul>\n<p>注意⚠️：<br>Expires 和 Cache-Control 的时间都是取本机时间，所以<strong>都可以在本地篡改时间使缓存失效</strong>，Expires最大的问题是本地时间和服务器时间不一致导致的缓存时间和预期不一致。Cache-Control采取相对时间，至少保证缓存时间长度是正确的。</p>\n<p>简单来说，在本机时间没有被篡改的情况下，Expires的缓存时间都有很大可能和预期不一致！而Cache-Control采用相对时间，可以保证缓存时间的正确性。</p>\n<p><strong>Cache-Control</strong></p>\n<ul>\n<li><code>Cache-Control: max-age=300</code> 表示服务器再次获取该资源时没有超过300s 则命中缓存</li>\n<li><code>Cache-Control: no-cache</code> 表示当前资源跳过强缓存，可以使用协商缓存（如果有）</li>\n<li><code>Cache-Control: no-store</code> 不使用任何缓存（包括强缓存和协商缓存），强制服务器返回资源</li>\n<li><code>Cache-Control: private</code> 代理服务器不能缓存资源，只有客户端本地可以缓存</li>\n<li><code>Cache-Control: public</code> 大家都可以缓存这个资源</li>\n</ul>\n<h4 id=\"二、协商缓存\">二、协商缓存</h4>\n<p>如果服务器携带如下响应头，则会进行协商缓存，协商缓存需要发送请求，其原理就是<strong>客户端会发送请求询问服务器本地的文件是否过期</strong>，如果服务端说没过期，你可以使用本地缓存，则客户端会使用缓存，否则服务端会重新发送资源文件给客户端。</p>\n<p>响应头</p>\n<ul>\n<li><strong>ETag</strong> 根据文件内容生成的代码</li>\n<li><strong>Last-Modified</strong> 服务器的文件最后修改时间</li>\n</ul>\n<p>请求头</p>\n<ul>\n<li><strong>If-None-Match</strong> 对应ETag，第一次请求后，客户端会储存 ETag 并在下一次请求时赋给<code>If-None-Match</code></li>\n<li><strong>If-Modified-Since</strong> 对应Last-Modified，第一次请求后，客户端会储存 Last-Modified 并在下一次请求时赋给<code>If-Modified-Since</code></li>\n</ul>\n<h3 id=\"实战\">实战</h3>\n<ol>\n<li><h5 id=\"目录结构\">目录结构</h5>\n<pre><code>|-- http-cache\n|---- static     静态资源文件夹\n|-------- index.html  html\n|-------- queue.png   测试图片\n|---- server.js  服务器入口文件\n|---- utils.js   文件读取之类的工具类\n</code></pre>\n</li>\n</ol>\n<p>![image-20220212171039609](/Users/lz/Library/Application Support/typora-user-images/image-20220212171039609.png)</p>\n<ol start=\"2\">\n<li><h5 id=\"直接使用http来启动一个服务\">直接使用http来启动一个服务</h5>\n</li>\n</ol>\n<pre><code class=\"language-js\">// server.js\nconst http = require(&quot;http&quot;);\n\nconst server = http.createServer((req, res) =&gt; {\n  // 测试一下\n  res.statusCode=200;\n  res.end(&quot;Hello World&quot;);\n});\n\nserver.listen(3333, () =&gt; {\n  console.log(&quot;server listening on 3333&quot;);\n});\n</code></pre>\n<p>服务器的启动很简单就不赘述了，服务启动后在浏览器访问<code>localhost:3333</code>就可以看到效果</p>\n<p>![image-20220212171926091](/Users/lz/Library/Application Support/typora-user-images/image-20220212171926091.png)</p>\n<h5 id=\"3-html\">3. html</h5>\n<p>非常简单，展示 Hello World 以及一张图片。</p>\n<pre><code class=\"language-html\">&lt;html lang=&quot;en&quot;&gt;\n  &lt;head&gt;\n    &lt;title&gt;Document&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div&gt;Hello World&lt;/div&gt;\n    &lt;img src=&quot;./queue.png&quot; width=&quot;200&quot; /&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n<h5 id=\"4--工具类\">4.  工具类</h5>\n<p>对服务器来说，读取文件的操作是必不可少的，协商缓存还需要获取文件的修改时间，我们简单写几个工具函数</p>\n<p>工具函数写的很粗糙，但是对测试来说够用了。</p>\n<pre><code class=\"language-js\">// utils.js\nconst fs = require(&quot;fs&quot;);\nconst path = require(&quot;path&quot;);\n\n// 读取文件\nexports.readFileSync = function readFileSync(filePath, options) {\n  const absPath = path.resolve(__dirname, &quot;./static&quot;, normalizePath(filePath));\n\n  try {\n    fs.accessSync(absPath, fs.constants.W_OK);\n\n    return fs.readFileSync(absPath, options);\n  } catch (err) {\n    console.log(`${absPath} 文件访问受限！`, err);\n    return;\n  }\n};\n\n// 使用 fs.statSync 获取文件的stat，stat包含了一系列文件修改时间、创建时间等统计信息\nexports.getFileStat = function getFileStat(filePath) {\n  const absPath = path.resolve(__dirname, &quot;./static&quot;, normalizePath(filePath));\n\n  try {\n    fs.accessSync(absPath, fs.constants.W_OK);\n\n    return fs.statSync(absPath);\n  } catch (err) {\n    console.log(`${absPath} 文件访问受限！`, err);\n    return;\n  }\n};\n\n// 处理绝对路径\nfunction normalizePath(path) {\n  return path.replace(/^\\/+/, &quot;&quot;);\n}\n</code></pre>\n<h5 id=\"开始测试缓存！\">开始测试缓存！</h5>\n<p>我们来使用两个路由分别模拟<code>强缓存</code>和<code>协商缓存</code></p>\n<ul>\n<li>/cache1 强缓存</li>\n<li>/cache2 协商缓存</li>\n</ul>\n<p>修改 server.js，为了方便起见，我直接在请求开始就读取了 <code>index.html</code>文件内容，免得后面判断里要写重复内容</p>\n<pre><code class=\"language-js\">// server.js\nconst DEFAULT_PATH = &quot;index.html&quot;;\n\nconst server = http.createServer((req, res) =&gt; {\n  // 图方便，在这直接读取了 index.html 文件内容\n  const data = readFileSync(DEFAULT_PATH, { encoding: &quot;utf-8&quot; });\n  res.setHeader(&quot;content-type&quot;, &quot;text/html; charset=utf-8&quot;);\n\n  console.log(&quot;请求资源：&quot;, req.url);\n\n  // 路由 cache1 做强缓存处理\n  if (req.url === &quot;/cache1&quot;) {\n\n  }\n\n  // 路由 cache2 做协商缓存处理\n  else if (req.url === &quot;/cache2&quot;) {\n\n  }\n\n  // 其他资源，图片等 使用强缓存\n  else {\n\n  }\n});\n</code></pre>\n<ol>\n<li><strong>强缓存逻辑</strong></li>\n</ol>\n<p>以<code>Cache-Control</code> 为例，对<code>index.html</code>做强缓存处理</p>\n<pre><code class=\"language-js\">// 路由 cache1 做强缓存处理\nif (req.url === &quot;/cache1&quot;) {\n    res.setHeader(&quot;Cache-Control&quot;, &quot;max-age=120&quot;);\n  res.end(data);\n}\n</code></pre>\n<p>对图片资源做缓存处理</p>\n<pre><code class=\"language-js\">// 其他资源，图片等 使用强缓存\nelse {\n  res.setHeader(&quot;cache-control&quot;, &quot;max-age=60&quot;);\n  res.setHeader(&quot;content-type&quot;, &quot;image/png&quot;);\n  res.end(readFileSync(req.url));\n}\n</code></pre>\n<ol start=\"2\">\n<li><strong>测试 - index.html强缓存失效的原因！</strong></li>\n</ol>\n<p>代码很完美，打开浏览器输入 <code>localhost:3333/cache1</code> 来试试看！</p>\n<p>结果不对呀，图片确实被缓存了，配置的<code>Content-Type</code>生效了，但是 <code>index.html</code> 并没有被缓存，明明是相同的配置，为什么两种资源一个有缓存一个没有缓存？</p>\n<p>![image-20220212175322839](/Users/lz/Library/Application Support/typora-user-images/image-20220212175322839.png)</p>\n<p>点进详情看一看，浏览器为<code>index.html</code>资源文件配置了<code>Cache-Control: max-age=0</code>，但是我并没有在浏览器开启停用缓存的配置。</p>\n<p>我做了几次实验发现，浏览器在加载url栏输入地址的根资源时，会默认配置<code>Cache-Control: max-age=0</code>避免对根资源文件使用强缓存，当你的url栏输入了 <code>http://localhost:3333/cache1</code>时，这个 <code>cache1</code> 就是根资源文件。</p>\n<p>你也可以试试直接输入 <code>http://localhost:3333/queue.png</code>，会导致图片缓存失效。</p>\n<p>![image-20220212174219844](/Users/lz/Library/Application Support/typora-user-images/image-20220212174219844.png)</p>\n<ol start=\"3\">\n<li><strong>协商缓存逻辑</strong></li>\n</ol>\n<p>使用<code>Last-Modified</code>配置为例，在访问资源的时候，客户端发起的请求是由浏览器代理的，所以我们不需要设置客户端请求的头部，都交给浏览器来就行了。</p>\n<p>如果要开启协商缓存，服务器只需要在响应头加上 <code>Last-Modified</code> 即可，浏览器收到之后会自动配置请求头<code>if-modified-since</code>，要注意客户端第一次请求的时候，请求头是不会<code>if-modified-since</code>的，只有第二次之后会有，看代码实现：</p>\n<pre><code class=\"language-js\">//路由 cache2 做协商缓存处理\nelse if (req.url === &quot;/cache2&quot;) {\n  // 配置 &quot;Cache-Control: no-cache&quot; 关闭强缓存，需要浏览器发送请求来进行协商缓存\n  res.setHeader(&quot;Cache-Control&quot;, &quot;no-cache&quot;);\n  \n  // 拿到客户端的 &quot;if-modified-since&quot; 头部配置\n  const ifModifiedSince = req.headers[&quot;if-modified-since&quot;];\n  const stat = getFileStat(DEFAULT_PATH);\n  const mtimeStr = stat.mtime.toISOString();\n  console.log(&quot;文件修改时间 &quot;, stat.mtime);\n\n  if (ifModifiedSince) {\n    console.log(&quot;客户端传入时间 &quot;, ifModifiedSince);\n    res.setHeader(&quot;Last-Modified&quot;, mtimeStr);\n\n    // 资源失效了 返回新的资源，状态码 200，重新返回新的资源文件给浏览器\n    if (mtimeStr &gt; ifModifiedSince) {\n      res.statusCode = 200;\n      res.end(data);\n    } else {\n      // 资源没失效，浏览器可以使用本地资源，状态码 304，返回空资源就可以了\n      res.statusCode = 304;\n      res.end();\n    }\n  } else {\n        // 第一次访问该资源\n    res.setHeader(&quot;Last-Modified&quot;, mtimeStr);\n    res.end(data);\n  }\n}\n</code></pre>\n<ol start=\"4\">\n<li><p><strong>测试协商缓存是否生效</strong></p>\n<p>访问 <code>localhost:3333/cache2</code>，刷新一次，就能看到<code>cache2</code>资源返回状态码是304</p>\n<p>![image-20220212180627986](/Users/lz/Library/Application Support/typora-user-images/image-20220212180627986.png)</p>\n</li>\n</ol>\n<p>看这段代码，状态304时，服务器<code>res.end()</code>返回了空资源，浏览器却正确的获取到了资源，说明协商缓存生效！</p>\n<pre><code class=\"language-js\">// 资源没失效，浏览器可以使用本地资源，状态码 304，返回空资源就可以了\nres.statusCode = 304;\nres.end();\n</code></pre>\n<h4 id=\"总结\">总结</h4>\n<ul>\n<li>强缓存的命中，可以不用发起请求，直接获取本地资源。</li>\n<li>强缓存一旦没有命中，就需要发起请求，最终是返回资源文件还是命中协商缓存都是由服务器决定。</li>\n<li>命中协商缓存，那么就不需要再传输资源文件了，服务端会通知客户端使用自己本地的缓存。</li>\n</ul>\n<p><code>缓存未命中</code>，可以理解没有缓存或者缓存失效。</p>\n"
      });
    };
  }
});

/***/ }),

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"网络相关\">网络相关</h1>\n<h2 id=\"tcpip网络协议\">TCP/IP网络协议</h2>\n<h4 id=\"tcpip参考模型\">TCP/IP参考模型</h4>\n<p>总共四层：</p>\n<ol>\n<li>第一层 应用层</li>\n<li>第二层 传输层</li>\n<li>第三层 网络层</li>\n<li>第四层 链路层</li>\n</ol>\n<blockquote>\n<p>Tips：OSI模型一共有七层，TCP/IP模型在实现时把7层OSI模型合并为4层</p>\n</blockquote>\n<h5 id=\"1-http在哪一层？\">1. Http在哪一层？</h5>\n<p>​\t应用层</p>\n<h5 id=\"2dns在哪一层？\">2.DNS在哪一层？</h5>\n<p>​\t应用层，它提供 域名 到 IP地址 之间的解析服务</p>\n<h5 id=\"3-tcp-传输层\">3. TCP 传输层</h5>\n<p>如何保证数据可靠性？</p>\n<ul>\n<li><p>3-1. 识别通信</p>\n<ul>\n<li>协议号 http、ftp 等，表示应用层使用的协议</li>\n<li>源IP</li>\n<li>源端口</li>\n<li>目标IP</li>\n<li>目标端口</li>\n</ul>\n<p>TCP使用socket建立连接，一个socket由 <code>源IP+源端口+目标IP+目标端口</code> 构成，（举例：针对服务器的一个服务，客户端机可以开启多个端口与服务器进行通信）</p>\n</li>\n</ul>\n<ul>\n<li>3-2. 三次握手、四次挥手  <ul>\n<li><p>三次握手：</p>\n<p>为了保证通信的可靠性，客户端 和 服务器 都需要保证 <strong>对方可以正常的发送/接收数据</strong>，需要三次确认过程</p>\n</li>\n<li><p>四次挥手：</p>\n<ol>\n<li>第一次 主机1 的数据已经传输完毕，<strong>提出</strong> 要断开连接</li>\n<li>第二次 主机2 接收到断开连接到请求，<strong>回复</strong>：知道了，同意关闭</li>\n<li>第三次 主机2 确保数据传输完毕，向 主机1 <strong>发送</strong> 关闭连接的请求</li>\n<li>第四次 主机1 收到请求后向 主机2 <strong>回复</strong> :收到你的请求</li>\n<li>主机2 收到之后，关闭连接。 主机1 在等待 2ms 后没有收到回复，也关闭连接</li>\n</ol>\n</li>\n</ul>\n</li>\n</ul>\n<h5 id=\"4-uri-和-url\">4. URI 和 URL</h5>\n<p>TCP/IP协议 对数据进行传输时，需要知道资源地址</p>\n<ul>\n<li><p>URI 用字符串标示了互联网资源，即<strong>定位标识符</strong></p>\n</li>\n<li><p>URL表示资源的地点（互联网上所处的位置），是URI的子集</p>\n</li>\n</ul>\n<p>说人话：</p>\n<p>URI 和 URL 都是对资源进行定位，只是它们的定位方式不同而已，URI 相当于给了资源一个唯一的身份证号（名称），而 URL 直接用地址来表示资源（位置）</p>\n<h4 id=\"http协议\">HTTP协议</h4>\n<p>HTTP协议 定义了一系列规则来<strong>通信</strong>并<strong>解析数据</strong>，对应的还有 ftp、mailto、telnet、file等协议</p>\n<ol>\n<li>请求要从客户端发出，最后服务端响应该请求并返回，服务端在没有收到请求之前不会发送响应</li>\n<li>请求报文的构成为 <code>Header</code> 、<code>Body</code></li>\n<li>HTTP 是不保存状态的协议（无状态协议）</li>\n<li>使用Cookie做状态管理（服务器根据Cookie识别客户端）</li>\n<li>通过URL来定位资源</li>\n<li>通过方法标识意图： GET、POST、PUT、DELETE、OPTIONS、TRACE、CONNECT、HEAD<ul>\n<li>常用的是 GET、POST、OPTIONS</li>\n<li>PUT 和 DELETE 没有验证机制，有安全问题，不常用</li>\n<li>TRACE 容易引发 XST(Cross-Site Tracing，跨站追踪)攻击</li>\n</ul>\n</li>\n</ol>\n<h5 id=\"http\">HTTP</h5>\n<p>HTTP协议初始版本中，每一次HTTP通信都会连接、断开一次TCP连接，随着前端发展，这种模式会增大服务器压力，<strong>HTTP1.1</strong>出现了两个关键的新特性：</p>\n<ol>\n<li><p>持久化连接  🔥</p>\n<p>只要任意一端没有明确的提出要断开请求，那么这个TCP连接会一直保持</p>\n<p>HTTP1.1 默认开启持久化连接</p>\n<p>如果要断开请求，只需要在请求头中携带<code>Connection: close</code> 才会在请求完后关闭连接。</p>\n</li>\n<li><p>管线化（pipelining）🔥</p>\n<p>即在同一个TCP连接里面，客户端可以同时发送多个请求，一般情况下没有开启</p>\n<p>缺点： </p>\n<ul>\n<li>客户端可以发送多个请求</li>\n<li>但是服务端一次只能处理一个请求</li>\n<li><strong>队头阻塞</strong></li>\n</ul>\n<blockquote>\n<p>Q：为什么Chrome一次可以支持六个并发请求，一个TCP一次不是只能处理一个请求吗❓❓❓</p>\n<p>A：因为Chrome同时支持6个TCP连接</p>\n</blockquote>\n</li>\n</ol>\n<h4 id=\"http-101120在并发请求上主要区别是什么\">HTTP 1.0/1.1/2.0在并发请求上主要区别是什么</h4>\n<ol>\n<li><p>HTTP/1.0</p>\n<p>每次TCP连接只能发送一个请求，当服务器响应后就会关闭这次连接，下一个请求需要再次建立TCP连接.</p>\n</li>\n<li><p>HTTP/1.1</p>\n<p>默认采用持久连接(TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive).</p>\n<p>增加了管道机制，在同一个TCP连接里，允许多个请求同时发送，增加了并发性，进一步改善了HTTP协议的效率，但是同一个TCP连接里，所有的数据通信是按次序进行的。回应慢，会有许多请求排队，造成&quot;队头堵塞&quot;。</p>\n</li>\n<li><p>HTTP/2.0</p>\n<ol>\n<li>双工模式，服务器也可以并发处理请求，解决队头阻塞问题</li>\n<li>多路由复用，同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级</li>\n<li>服务器推送，不经请求服务端主动向客户端发送数据</li>\n</ol>\n</li>\n</ol>\n<h4 id=\"创建一个http服务\">创建一个HTTP服务</h4>\n<pre><code class=\"language-js\">// http-server.js\nconst http = require(&quot;http&quot;)\nhttp.createServer((req, res) =&gt; {\n  res.writeHead(200, {\n    &quot;Content-Type&quot;: &quot;text/plain&quot;\n  })\n  res.end(&quot;hello world&quot;)\n})\n\nhttp.listen(3000, &#39;127.0.0.1&#39;)\n</code></pre>\n<h4 id=\"http发送请求\">http发送请求</h4>\n<pre><code class=\"language-js\">// http-client.js\nconst http = require(&quot;http&quot;)\nconst options = {\n  hostname: &quot;127.0.0.1&quot;,\n  port: 3000,\n  method: &quot;GET&quot;,\n  path: &quot;/&quot;\n}\nconst req = http.request(options, (res) =&gt; {\n  // 设置encoding\n  res.setEncoding(&quot;utf8&quot;);\n  res.on(&quot;data&quot;, (data) =&gt; {\n    console.log(data)\n  })\n})\n\n// 结束当前请求\nreq.end()\n</code></pre>\n<h4 id=\"一次完整的通信是什么样的？\">一次完整的通信是什么样的？</h4>\n<ol>\n<li><p>建立 TCP 连接</p>\n</li>\n<li><p>客户端向服务端发送请求命令</p>\n<p>一旦建立了TCP连接，客户端就会向服务器发送请求命令；</p>\n<p>例如：GET/info HTTP/1.1</p>\n</li>\n<li><p>客户端发送请求头信息</p>\n<p>以空白行来标识<code>Header</code>发送结束</p>\n</li>\n<li><p>服务器应答</p>\n<p>客户端向服务器发出请求后，服务器会客户端返回响应；</p>\n<p>例如： HTTP/1.1 200 OK</p>\n<p>响应的第一部分是协议的版本号和响应状态码</p>\n</li>\n<li><p>服务器返回响应头信息</p>\n</li>\n<li><p>服务器向客户端发送数据</p>\n</li>\n<li><p>关闭TCP连接</p>\n<p>如果客户端或者服务端在头部添加\t了<code>Connection:keep-alive</code>，TCP 连接在发送后将仍然保持打开状态</p>\n</li>\n</ol>\n"
      });
    };
  }
});

/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h1 id=\"hash--history\">hash &amp; history</h1>\n<h3 id=\"基础知识\">基础知识</h3>\n<h4 id=\"hash-和-history\">hash 和 history</h4>\n<p>hash 和 history 是浏览器的两种模式</p>\n<p>举个例子 <code>https://myblog.com/vue-router/#title</code> </p>\n<p>其中 hash 值就为 <code>#title</code>，history 值为 <code>/myblog.com/vue-router/</code></p>\n<h5 id=\"根本区别\">根本区别</h5>\n<ol>\n<li>history 改变时会向服务器请求新页面</li>\n<li>hash 改变时不会向服务器发新请求，传统页面中经常使用hash进行当前页面各个位置的滚动跳转</li>\n</ol>\n<h5 id=\"获取\">获取</h5>\n<pre><code class=\"language-js\">// 获取hash https://myblog.com/vue-router/#title\nlocation.hash // #title\nlocation.pathname // /myblog.com/vue-router/\n</code></pre>\n<h4 id=\"路由的跳转\">路由的跳转</h4>\n<p>这些都是浏览器提供给开发者的API</p>\n<ol>\n<li><code>location.href = &quot;xxx&quot;</code></li>\n<li><code>history.pushState(state, title, url)</code></li>\n<li><code>history.go(number)</code></li>\n</ol>\n<h4 id=\"浏览器路由事件\">浏览器路由事件</h4>\n<h5 id=\"popstate-和-hashchange-🔥\">popstate 和 hashchange 🔥</h5>\n<p>现代流行的SPA框架的路由基本都是依赖这两个API，所以很重要，一定要搞清楚它们的触发时机</p>\n<p><strong>1. 如何监听</strong></p>\n<pre><code class=\"language-js\">window.addEventListener(&quot;popstate&quot;, function() {\n  // 监听到popstate触发逻辑\n})\n\nwindow.addEventListener(&quot;hashchange&quot;, function() {\n  // 监听到hashchange触发逻辑\n})\n</code></pre>\n<p><strong>2. 触发时机</strong></p>\n<ul>\n<li><ol>\n<li>刷新页面时，不会触发 <code>popstate</code> 和 <code>hashchange</code></li>\n</ol>\n<ul>\n<li>1-1. 刷新页面时，url解析在前，js加载在后，根本就没有挂载用户自定的监听事件，所以肯定不会触发</li>\n</ul>\n</li>\n<li><ol start=\"2\">\n<li>调用<code>history.go(num)</code></li>\n</ol>\n<ul>\n<li>2-1. <code>popstate</code> 和 <code>hashchange</code> 都触发 🌟</li>\n</ul>\n</li>\n<li><ol start=\"3\">\n<li>调用<code>location.href=&quot;xxx&quot;</code></li>\n</ol>\n<ul>\n<li>3-1. <code>location.href=&quot;#/xxx&quot;</code> ： <code>popstate</code> 和 <code>hashchange</code> 都触发 🌟</li>\n<li>3-2. <code>location.href=&quot;/xxx/mmm&quot;</code> ： 参考 1-1 会刷新页面，不会触发事件</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>总结：</p>\n<p>会触发浏览器的路由事件的总共有两种情况</p>\n<ol>\n<li>history.go()  或者点击浏览器的前进、后退按钮</li>\n<li>location.href=&quot;#/xxx&quot;  只改变url中的hash值，手动在地址栏修改也会触发</li>\n</ol>\n</blockquote>\n<h4 id=\"自定义事件\">自定义事件</h4>\n<p>除了上面说的浏览器原生事件来触发<code>popstate</code> 和 <code>hashchange</code>，还可以自定义事件来手动触发</p>\n<p>Event 下有很多 子类，比如 <code>PopStateEvent</code> <code>ProgressEvent</code> <code>StorageEvent</code> 等等</p>\n<h5 id=\"popstateevent\">PopStateEvent</h5>\n<pre><code class=\"language-js\">// 创建一个事件\nfunction createPopstateEvent(state) {\n  let evt\n  try {\n      evt = new PopStateEvent(&quot;popstate&quot;, { state })\n  } catch(e) {\n    // 兼容 IE11\n    evt = window.document.createEvent(&quot;PopStateEvent&quot;)\n    evt.initEvent(&quot;popstate&quot;, false, false, state)\n  }\n  \n  return evt\n}\n</code></pre>\n<h5 id=\"dispatchevent\">dispatchEvent</h5>\n<p>手动触发一个事件</p>\n<pre><code class=\"language-js\">window.addEventListener(&#39;popstate&#39;, (ev) =&gt; {\n    console.log(&quot;popstate trigger &quot;, ev)\n})\nconst evt = createPopstateEvent()\nwindow.dispatchEvent(evt)\n</code></pre>\n"
      });
    };
  }
});

/***/ }),

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('session', {
        innerHTML: "<h3 id=\"一、地址栏从输入url开始，浏览器都做了什么工作？\">一、地址栏从输入url开始，浏览器都做了什么工作？</h3>\n<h5 id=\"1-构建请求\">1. 构建请求</h5>\n<p>​\t<code>GET /index.html HTTP1.1</code></p>\n<h5 id=\"2-强缓存\">2. 强缓存</h5>\n<p><strong>在向服务端发送请求之前</strong>，浏览器会根据请求头部携带的<code>Cache-Control</code>或者<code>Expires</code>来尝试命中强缓存，如果命中则直接返回资源，不会再向服务器发送请求</p>\n<p>强缓存的原理是为资源文件设置一个时间，只要没超过这个时间，都使用缓存，不管服务器文件是否更新。</p>\n<ul>\n<li>Expires：HTTP/1.0 表示资源过期时间，缺点是采用的是本机时间，容易被篡改（绝对时间）</li>\n<li>Cache-Control：HTTP/1.1 为了解决Expires时间不准的问题（相对时间）</li>\n</ul>\n<p><strong>Cache-Control</strong></p>\n<ul>\n<li><code>Cache-Control: max-age=300</code>  表示服务器再次获取该资源时没有超过300s 则命中缓存</li>\n<li><code>Cache-Control: no-cache</code> 表示每次使用缓存之前都要交给服务器验证（走协商缓存）</li>\n<li><code>Cache-Control: no-store</code> 表示不使用缓存 </li>\n<li><code>Cache-Control: private</code> 代理服务器不能缓存资源，只有客户端本地可以缓存</li>\n<li><code>Cache-Control: public</code> 大家都可以缓存这个资源</li>\n</ul>\n<blockquote>\n<p>tips：客户端可以在头部配置 no-cache 和 no-store 来跳过强缓存</p>\n</blockquote>\n<h5 id=\"3-dns解析\">3. DNS解析</h5>\n<p>​\tDNS解析url地址，获得服务器IP地址、端口号</p>\n<h5 id=\"4-建立tcp连接\">4. 建立TCP连接</h5>\n<p>​\t如果没有命中强缓存，意味着客户端需要和服务端进行通信</p>\n<p>​\t客户端和服务端要进行数据传输，首先要建立连接管道，HTTP协议使用TCP来进行数据传输</p>\n<p>​\tTCP通过<code>客户端IP、客户端端口</code>， <code>服务端IP、服务端端口</code>来建立一个唯一的连接</p>\n<p>​\t连接建立后实现数据传输，三次握手，三次握手是为了确保双方都拥有接收和发送的能力。</p>\n<p>​\t三次握手：</p>\n<pre><code>1. 客户端发送SYN 证明自己的发送能力\n   2. 服务端接收到SYN后，加上ACK一起返回给客户端，证明自己的发送能力和接收能力\n   3. 客户端接收到 SYN+ACK 后，再次发送 ACK 给服务端，证明自己的发送能力\n   4. 最终服务端和客户端都变成 ESTABLISH 状态，可以进行数据传输\n</code></pre>\n<p>​\t当请求结束后，四次挥手，连接关闭。</p>\n<p>​\t四次挥手：</p>\n<p>​\t当客户端提出想要关闭连接后，四次挥手是为了保证服务端数据传输完毕，才可以关闭连接。</p>\n<ol>\n<li><p><strong>第一次：</strong>客户端发送FIN，表示客户端想要关闭连接</p>\n</li>\n<li><p><strong>第二次：</strong>服务端收到后，可能手上的事还没处理完，但是必须先给客户端答复，免得客户端等待时间太长以为服务端没收到，于是先回复ACK</p>\n</li>\n<li><p>客户端接收到服务端的回复后，状态变为 FIN-WAIT-1，此时客户端会关闭发送能力，只保留接收能力，等待服务器的下一次回复</p>\n</li>\n<li><p><strong>第三次：</strong>服务端这边数据处理结束后表示连接可以关闭了，于是向客户端发送 FIN，此时服务端还不能立马关闭，必须保证客户端收到消息了才能关，不然服务端自己跑了客户端还在苦苦等候</p>\n</li>\n<li><p><strong>第四次：</strong>客户端收到后回复ACK</p>\n</li>\n<li><p>服务器收到后知道客户端收到自己的FIN了，于是放心的关闭了，<strong>如果服务端等了1MSL没有收到客户端的ACK，会重新发送FIN</strong></p>\n</li>\n<li><p>客户端等待 2MSL 后关闭</p>\n<p>为啥最后客户端要等 2MSL？（1MSL 报文最大生存时间，大概4分钟）</p>\n<p>因为报文一个来回最大的时间是2MSL</p>\n<p>其中 1MSL 确保自己的 ACK 可以到达服务端， 1MSL 保证服务端如果重新发送了FIN，自己可以收到</p>\n</li>\n</ol>\n<h5 id=\"5-向服务器发送资源请求\">5. 向服务器发送资源请求</h5>\n<h5 id=\"6-协商缓存\">6. 协商缓存</h5>\n<p>如果服务器携带如下响应头，则会进行协商缓存，协商缓存需要发送请求，其原理就是<strong>客户端会发送请求询问服务器本地的文件是否过期</strong>，如果服务端说没过期，你可以使用本地缓存，则客户端会使用缓存，否则服务端会重新发送资源文件给客户端。</p>\n<p>响应头</p>\n<ul>\n<li><strong>ETag</strong> 根据文件内容生成的代码</li>\n<li><strong>Last-Modified</strong> 服务器的文件最后修改时间</li>\n</ul>\n<p>请求头</p>\n<ul>\n<li><strong>If-None-Match</strong> 对应ETag，第一次请求后，客户端会储存 ETag 并在下一次请求时赋给<code>If-None-Match</code></li>\n<li><strong>If-Modified-Since</strong> 对应Last-Modified，第一次请求后，客户端会储存 Last-Modified 并在下一次请求时赋给<code>If-Modified-Since</code></li>\n</ul>\n<p>../images/协商缓存1.png</p>\n<p>../images/协商缓存2.png</p>\n<h3 id=\"二、\">二、</h3>\n"
      });
    };
  }
});

/***/ }),

/***/ 279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./css.md": 237,
	"./nodejs/http.md": 659,
	"./nodejs/koa洋葱模型.md": 794,
	"./浏览器相关/cors.md": 658,
	"./浏览器相关/https.md": 588,
	"./浏览器相关/安全问题.md": 382,
	"./浏览器相关/浏览器请求.md": 528,
	"./浏览器相关/缓存策略.md": 230,
	"./浏览器相关/网络.md": 864,
	"./浏览器相关/路由跳转.md": 704,
	"./浏览器相关/面试题.md": 824
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 279;

/***/ }),

/***/ 734:
/***/ ((module) => {

"use strict";
module.exports = require("vue");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			143: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_server)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(734);
;// CONCATENATED MODULE: external "vue-router"
const external_vue_router_namespaceObject = require("vue-router");
;// CONCATENATED MODULE: ./src/docs/index.js


// TODO:: 同步收集md文件， -> 后面修改为动态手动配置加载
const requireContext = __webpack_require__(279)

const mdModules = {}
const routes = []
const pathCollection = []

requireContext.keys().forEach((key) => {
  const module = requireContext(key)
  const routePath = getPath(key)

  const pathArr = routePath.substring(1).split('/')
  const arr = pathArr.reduce((pre, curr, idx) => {
    const parent = pre[idx]
    const item = {
      title: curr,
      ptitle: parent.title
    }
    if(idx === pathArr.length - 1) {
      item.routeName = routePath
    }

    pre.push(item)

    return pre
  }, [{title: '$$root'}])

  
  pathCollection.push(...arr)

  mdModules[routePath] = module

  routes.push({
    path: routePath,
    name: routePath,
    component: module.default
  })
})

console.log(pathCollection)

function getPath(path) {
  return path.replace(/^\.(.*)\.md$/, (_, $1) => $1)
}

/** 生成 Nav 树结构 */
function buildNavnode(array) {
  const cacheMap = Object.create(null)
  cacheMap['$$root'] = {
    title: '$$root',
    children: []
  }

  for(const item of array) {
    const { title, ptitle } = item

    if(!cacheMap[ptitle]) {
      const node = {
        title: ptitle,
        children: []
      }
      cacheMap[ptitle] = node
    }

    if(!cacheMap[title]) {
      const cNode = {
        title,
        children: []
      }
      if (item.routeName) {
        cNode.routeName = item.routeName
      }
      cacheMap[title] = cNode
      cacheMap[ptitle].children.push(cNode)
    }
  }

  return cacheMap['$$root']
}

const treeNode = buildNavnode(pathCollection)
console.log(treeNode)



;// CONCATENATED MODULE: ./src/router.js


/**
 * @type {import('vue-router').RouteRecordRaw[] }
 */
const router_routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => __webpack_require__.e(/* import() */ 341).then(__webpack_require__.bind(__webpack_require__, 341))
  }, 
  {
    path: '/404',
    component: () => __webpack_require__.e(/* import() */ 476).then(__webpack_require__.bind(__webpack_require__, 476))
  },
  ...routes
]

console.log(router_routes)

// 导出公共的创建router的方法，为保证客户端和服务器的路由一致性
/* harmony default export */ function src_router(history) {
  return (0,external_vue_router_namespaceObject.createRouter)({
    history,
    routes: router_routes,
  })
}
;// CONCATENATED MODULE: ./src/layout/navbarItem.jsx


var NavbarItem = {
  name: 'NavbarItem',
  props: {
    nodeData: Object
  },
  setup: function setup(props) {
    var nodeData = props.nodeData;
    /** render */

    return function () {
      if (!nodeData) return null;
      var childrens = nodeData.children && nodeData.children.length > 0 ? (0,external_vue_.createVNode)("ul", null, [nodeData.children.map(function (node) {
        return (0,external_vue_.createVNode)(NavbarItem, {
          "key": node.title,
          "nodeData": node
        }, null);
      })]) : null;
      return (0,external_vue_.createVNode)("li", null, [nodeData.routeName ? (0,external_vue_.createVNode)(external_vue_router_namespaceObject.RouterLink, {
        "class": "inline-block px-4 py-2",
        "to": nodeData.routeName
      }, {
        "default": function _default() {
          return [nodeData.title];
        }
      }) : (0,external_vue_.createVNode)("div", {
        "class": "cursor-default px-2 py-2"
      }, [nodeData.title]), childrens]);
    };
  }
};
/* harmony default export */ const navbarItem = (NavbarItem);
;// CONCATENATED MODULE: ./src/layout/navbar.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const navbar = ({
  name: 'Navbar',
  setup: function setup() {
    return function () {
      return (0,external_vue_.createVNode)("aside", {
        "class": "fixed w-80 top-12 h-full flex-col transition-transform  lg:translate-x-0"
      }, [(0,external_vue_.createVNode)("ul", null, [(0,external_vue_.createVNode)(navbarItem, {
        "nodeData": _objectSpread(_objectSpread({}, treeNode), {}, {
          title: '文章列表'
        })
      }, null)])]);
    };
  }
});
;// CONCATENATED MODULE: ./src/layout/index.jsx



var Layout = {
  setup: function setup() {
    return function () {
      return (0,external_vue_.createVNode)("div", {
        "class": "relative"
      }, [(0,external_vue_.createVNode)("header", {
        "class": "fixed h-12 w-full leading-12 px-4"
      }, null), (0,external_vue_.createVNode)(navbar, null, null), (0,external_vue_.createVNode)("div", {
        "class": "pl-80"
      }, [(0,external_vue_.createVNode)("div", {
        "class": "container mx-auto pt-12 markdown-body"
      }, [(0,external_vue_.createVNode)(external_vue_router_namespaceObject.RouterView, null, null)])])]);
    };
  }
};
/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./src/App.jsx


/* harmony default export */ const App = ({
  setup: function setup() {
    return function () {
      return (0,external_vue_.createVNode)(layout, null, null);
    };
  }
});
;// CONCATENATED MODULE: ./src/entry-server.js





/* harmony default export */ function entry_server() {
  const app = (0,external_vue_.createSSRApp)(App)
  const router = src_router((0,external_vue_router_namespaceObject.createMemoryHistory)())
  
  app.use(router)

  return {
    app,
    router
  }
}
})();

module.exports = __webpack_exports__;
/******/ })()
;