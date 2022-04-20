# CSS

### 盒模型

设置属性：box-sizing

- content-box: css标准盒模型，width:100px 表示 content 的宽度是100px；
- border-box：IE盒模型，width: 100px 表示 content + padding + border = 100px;

`css标准盒模型`和`IE盒模型`的宽高都不包含margin属性

### css权重和优先级

选择器：id选择器、class选择器、伪类选择器、标签选择器、伪元素

!import 强行提升权重为最大

内联样式

!import > 内联样式 > id > class > 伪类 > 标签 > 伪标签

### padding & margin

设置百分比时

`padding: 10%;`

`margin: 10%;`

它们是按照`父元素的宽度`来计算的，要注意，`padding-top`,`padding-bottom`,`margin-top`,`margin-bottom`也是按照父元素的宽度来计算的。

依靠这个原理，可以画正方形，或者其他一定比例的矩形都是可以的。

#### 1. 使用padding来画正方形

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

```css
/* 父元素 */
.outer {
	width: 400px;
  height: 600px;
  background: #66f;
}

/* 子元素 正方形 */
.inner {
  /* width: 100% 按照父元素的宽 = 400px */
  width: 100%;
  height: 0;
  /* padding-top: 100% 也是按照父元素的宽为基准 = 400px */
  padding-top: 100%;
  background: #f66;
}
```

#### 2. 使用margin + BFC来画正方形

这里的inner也可以使用伪元素代替，html看着就简洁点，但是**伪元素本身默认是行内元素**，margin属性是不生效的，要记得设置 `display: block;`

```css
.outer {
	width: 400px;
  /* 创建BFC，子元素的margin才不会溢出去  */
  overflow: hidden;
  background: #66f;
}

.inner {
  height: 0;
  margin-top: 100%; 
}

/* 伪元素的写法
.outer::after {
  content: "";
  display: block;
  margin-top: 100%;
}
*/
```



也可以利用`margin-left: -100%;`来向左移动一个父元素宽度的距离，在圣杯布局和双飞翼布局中有用到，下面会有例子。

### position

- static: 对象遵循正常文档流，设置left top right bottom 属性**无效**
- relative: 不会脱离文档流，设置left top right bottom 属性会发生偏移，设置偏移之后，它原本所占空间不会被其他元素填充
- fixed：脱离文档流，设置left top right bottom 位置会**以视窗为基准发生偏移**
- absolute：脱离文档流，设置left top right bottom 位置会**向上寻找relative为基准发生偏移**
- sticky: relative + fixed 的结合体，viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局



### z-index

表示文档流中的盒模型堆叠顺序，把屏幕面前的人当作观察者，堆叠在越上层的离观察者越近。

#### 1. 默认情况 都不包含 z-index时

- 在一组由不含有任何z-index属性的同类元素，如例子中的定位块元素（DIV #1 至 #4），这些元素按照它们在HTML结构中出现的顺序堆叠，而不管它们的定位属性如何。
- 普通流中不含有定位属性的标准块元素（DIV #5）始终先于定位元素渲染并出现在定位元素的下层，即便它们在HTML结构中出现的位置晚于定位元素也是如此。

#### 2. float 浮动元素的层叠顺序



### float

浮动元素以及如何清除浮动。

#### 1. 浮动元素的特点

- 浮动元素会脱离正常的文档流
- 内容会沿着浮动元素的右侧（float: left）或者左侧（float: right）向下流动，注意 `内容沿着左侧/右侧向下流动`，这里的内容不是指盒模型
-  浮动元素会脱离文档流并向左或向右移动，直到它的外边缘碰到父元素边框或者其他浮动元素
- 一旦水平方向上的剩余空间不够，就会换行

#### 2. 清除浮动

浮动元素会脱离正常的文档流，虽然它还是被父元素包含，但其实它无法撑开父元素的高度，也就是浮动元素可能会导致父元素的高度塌陷，清除浮动的方法：

- 伪元素+clear  
- 父级创建一个BFC来解决高度塌陷



### flex布局

#### 1. flex 的三个参数代表什么 flex: 0 0 200px;

- flex-grow 当有剩余空间时，按照什么比例放大
- flex-shrink 当超出flex的宽度时，按照什么比例缩小
- flex-basis 没有放大和缩小时的基础宽度或者高度，宽还是高要根据主轴方向来确定



#### 2. order 可以改变顺序



#### 3. flex-direction 可以改变flex流的主轴方向



### 手机适配方案

#### 概念

##### 像素

像素（Pel，pixel；pictureelement），为组成一幅图像的全部亮度和色度的最小图像单元

每个像素都是由红绿蓝三种颜色并排组成的。(注意每个像素的大小是不固定的，他是根据设备的分辨率决定的

##### 分辨率

分辨率就是横向的像素点数 x 纵向的像素点数

##### 1. 物理像素

##### 2. 逻辑像素

##### 3. dpr

[面试官：你了解过移动端适配吗？](https://juejin.cn/post/6844903631993454600)

#### 适配方案

##### 1. rem + flexible

##### 2. 1px 问题

css中写的 px 都是以逻辑像素为单位

设计稿如果是750px宽度，当屏幕宽度是375px时

设计稿中的1px 占高 1/750

屏幕宽度375px时 占高 1/375 = 2 * 1/750 是设计稿的2倍，此时线高会变粗，为了和设计稿保持一致，设置scaleY来解决1px问题。

```css
.border_bottom::after {
  display: block;
  height: 1px;
  transform: scaleY(0.5);
}
```



### vh 和 vw

- vh :  view height 视窗高度，被分为100份，1vh为 1/100 * 视窗高度
- vw ：view width 视窗宽度，被分为100份，1vw为 1/100 * 视窗宽度



### 水平居中和垂直居中

#### 1. 行内元素使用 text-align 水平居中

只能是 inline-block 才可以使用 height + line-height 做垂直居中

```css
.inline {
  display: inline-block;
  /* 水平居中 */
  text-align: center;
  /* 垂直居中 */
	height: 60px;
	line-height: 60px;
}
```

#### 2. div + margin: auto 实现水平居中

为div设置固定宽度，并且设置margin:auto; 就可以实现水平居中

#### 3. display: flex 可实现水平、垂直居中

align-item: center;

justify-content: center;

#### 4. 利用 position: absolute + transform: translate3d(-50%, -50%, 0)

html:

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

style:

```css
.outer {
	position: relative;
  height: 100%;
  background: #66f;
}

.inner {
  position: absolute;
  width: 200px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0)
  background: #f66;
}
```



#### 6. 利用 position: absolute + margin: auto

​	父元素必须有高度

#### 7.  display: table-cell + vertical-align: middle 实现垂直居中，再加上margin: 0 auto水平居中

```css
.outer {
  width: 400px;
  height: 600px;
  display: table-cell;
  vertical-align: middle;
  background: #66f;
}

.inner {
  width: 200px;
  height: 300px;
	margin: 0 auto;
  background: #f66;
}
```



### 两栏布局的实现

#### 1. float + margin

​	左侧用 float: left 浮动布局，使其脱离文档流，并且固定宽度 200px

​	主体部分margin-left: 200px;

#### 2. float + BFC

​	左侧用 float: left 浮动布局，使其脱离文档流，并且固定宽度 200px

​	右侧创建一个BFC，并且宽度设置为100%

​	原理：float 和 BFC 不会有重叠部分。右侧的BFC会被挤到右边

#### 3. flex 布局

​	包裹一个 container 容器，布局flex，宽高都是100%；

​	左侧固定栏： flex: 0 0 200px;

​	右侧自适应栏： flex: 1 1;

#### 4. absolute布局



### 三栏布局

#### 1. 圣杯布局

main、left、right都是 float:left 布局

container 使用padding 给 left 和right 预留左右的位置 padding: 0 100px 0 200px; 左侧 200px 右侧100px

- left
  - margin-left: -100%; 向右移动100%父元素的宽度，可以跑到第一行去
  - position:relative;  left: -200px; 再向左移动200px即可
- right
  - margin-right: -100px; 其他元素会认为right的宽度是0，所以right也会移动到第一行。

```html
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```



#### 2. 双飞翼布局

container、left、right都是 float:left 布局

- left
  - margin-left: -100%; 向右移动100%父元素的宽度，可以跑到第一行去
- right
  - margin-left: -100px; 向左移动100px，可以跑到第一行
- main
  - margin: 0 100px 0 200px;

```html
<div class="container">
  <div class="main">main</div>
</div>
<div class="left">left</div>
<div class="right">right</div>
```



#### 3. flex 布局

container flex 布局

- main
  - flex: 1 1;
- left
  - flex: 0 0 200px;
- right
  - flex: 0 0 100px;

再使用 order 属性来调整顺序即可

```html
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```



### CSS动画属性

- transition  过渡， 可以和transform或者其他的属性，比如 width, height, color, opacity 等搭配使用
  - `transition: transform 1s easy-in-out 2s; ` 表示在transform属性改变的时候触发动画，动画时常是1s，运动曲线是预设的easy-in-out，延迟2s执行。
  - 四个属性
    - transition-property : transform;  作用的属性
    - transition-duration: 1s;  动画时间
    - transition-timing-function: easy-in-out   动画执行函数（贝塞尔曲线）
    - transition-delay: 2s 延迟多久执行
- transform
- translate
- scale
- animation 比transition强大很多，有8个属性，会和 `@keyframes`搭配使用，用`@keyframes`控制关键帧，还可以设置无限循环播放，可以做很多动画
- @keyframes  

