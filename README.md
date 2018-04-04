### 项目背景
此项目主要是利用业余时间完成，主要使用了react, redux, router完成, 大部分组件是纯手工完成[流汗], 主要目的是为了练习react全家桶的使用,练习一下在公司项目上不能使(xia)用(gao)的技术; 另外也是体验一下一个人完成一个完整的项目的难度(比我想象中的难了一(hen)点(duo))。
项目中也遇到了很多的坑, 后面我会把项目中遇到的坑整理出来, 目前的目标是先完成整体的功能。由于在项目开始时对整个项目的复杂性考虑不够周全,导致现在的项目结构不能很好的发挥redux的优势, 在整体功能完成之后我准备对项目的整体结构进行一次调整,之后再对代码进行优化整合。

### 项目遇到的坑
- 安装node-sass报错：
原因:安装node-sass时会去GitHub上面拉去代码,由于国内环境不稳定(大家懂的)下载时间可能过长导致超时失败。
解决办法:使用下面命令安装(其他的解决方法请自行搜索) SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass

- onTouchStart、onClick时间冲突：
当父元素添加了onTouchStart(onTouchMove/onTouchEnd)事件后, 子元素的onClick事件不会被触发。
原因：onTouchStart的执行顺序在onClick事件之前。执行顺序onTouchStart > onTouchMove > onTouchEnd > onClick
解决方法：
  1.把子元素触发onClick的事件放在onTouchStart上触发;
  2.阻止子元素的onTouchStart事件冒泡,使用 event.e.stopPropagation()

- 安卓浏览器不支持元素添加scrollTo事件：
这个暂时还没解决,这个方法用在了ShopMenu组件中,目前待定的解决方案是使用swiper替代原来的方案。

### 完成进度

- [x] 定位功能
- [x] 搜索切换城市
- [x] 推荐商家
- [x] 搜索功能
- [x] 搜索结果页
- [x] 排序筛选功能
- [x] 店铺商品详情
- [x] 购物车功能
- [x] 店铺评价页面
- [x] 商品详情
- [x] 商家详情页
- [ ] 登录、注册
- [ ] 提交订单
- [ ] 订单列表
- [ ] 订单详情
- [ ] 评价订单
- [ ] 下载App
- [ ] 添加、删除、修改收货地址
- [ ] 上传头像

### 项目截图

#### 项目state结构

#### 首页

#### 选择城市

#### 搜索页

#### 搜索结果

#### 店铺详情页
