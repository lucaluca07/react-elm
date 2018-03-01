const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");

let router = new Router();

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener("data", data => {
        postdata += data;
      });
      ctx.req.addListener("end", function() {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (err) {
      reject(err);
    }
  });
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split("=");
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

//首页数据
let entries = require("./home/entries.js");
router.get("/api/home/entries", async ctx => {
  ctx.body = entries;
});

let address = require("./home/address.js");
router.get("/api/home/address", async ctx => {
  const {latitude,longitude} = ctx.query
  console.log(latitude,longitude)
  if(latitude<=0 || longitude<=0){
    ctx.body = {"message":"无效的经纬度坐标","name":"未知地址"}
  }else{
    ctx.body = address;
  }
  
});
// //首页超值特惠和天天立减数据
// let homeAdData = require("./home/ad.js");
// router.get("/api/homead", async ctx => {
//   ctx.body = homeAdData;
// });

// //猜你喜欢数据
// let listData = require("./home/list.js");
// router.get("/api/homelist/:city/:page", async ctx => {
//   const paramsCity = ctx.params.city;
//   const paramsPage = ctx.params.page;

//   console.log("当前城市：" + paramsCity);
//   console.log("当前页数：" + paramsPage);

//   let data = listData;
//   //如果页码大于等于3 hasMore = false
//   if (paramsPage >= 3) {
//     data.data.hasMore = false;
//   } else {
//     data.data.hasMore = true;
//   }
//   ctx.body = data;
// });
// // 搜索结果页 - 搜索结果 - 三个参数
// var searchListData = require("./search/list.js");
// router.get("/api/search/:page/:city/:category/:keyword", async ctx => {
//   // 参数
//   const params = ctx.params;
//   const paramsPage = params.page;
//   const paramsCity = params.city;
//   const paramsCategory = params.category;
//   const paramsKeyword = params.keyword;

//   console.log("当前页数：" + paramsPage);
//   console.log("当前城市：" + paramsCity);
//   console.log("当前类别：" + paramsCategory);
//   console.log("关键字：" + paramsKeyword);
//   if (paramsPage >= 5) {
//     searchListData.data.hasMore = false;
//   } else {
//     searchListData.data.hasMore = true;
//   }
//   ctx.body = searchListData;
// });
// // 搜索结果页 - 搜索结果 - 两个参数
// router.get("/api/search/:page/:city/:category", async ctx => {
//   // 参数
//   const params = ctx.params;
//   const paramsPage = params.page;
//   const paramsCity = params.city;
//   const paramsCategory = params.category;

//   console.log("当前页数：" + paramsPage);
//   console.log("当前城市：" + paramsCity);
//   console.log("当前类别：" + paramsCategory);

//   if (paramsPage >= 5) {
//     searchListData.data.hasMore = false;
//   } else {
//     searchListData.data.hasMore = true;
//   }

//   ctx.body = searchListData;
// });
// //获取商户详情
// let detailInfo = require("./detail/info.js");
// router.get("/api/detail/info/:shopId", async ctx => {
//   const shopId = ctx.params.shopId;
//   console.log("商户ID:" + shopId);
//   ctx.body = detailInfo;
// });
// //获取评论列表
// let detailComment = require("./detail/comment.js");
// router.get("/api/detail/comment/:shopId/:page", async ctx => {
//   const shopId = ctx.params.shopId;
//   const page = ctx.params.page;
//   console.log("商户ID:" + shopId);
//   console.log("页数:" + page);
//   if (page >= 5) {
//     detailComment.hasMore = false;
//   } else {
//     detailComment.hasMore = true;
//   }
//   ctx.body = detailComment;
// });
// //
// //用户信息

// router.get("/api/user/info/:username", async ctx => {
//   const username = ctx.params.username;
//   console.log("用户ID:" + username);
//   ctx.body = userinfo;
// });
// //获取用户订单
// let deallist = require("./user/dealList.js");
// router.get("/api/user/deal/:username", async ctx => {
//   const username = ctx.params.username;
//   console.log("用户ID:" + username);
//   ctx.body = deallist;
// });
// //提交评论
// router.post("/api/submitAssess", async ctx => {
//   let postData = await parsePostData(ctx);
//   console.log("提交评论", postData);
//   ctx.body = {
//     code: 200,
//     message: "提交成功"
//   };
// });
// //登录验证
// let userinfo = require("./user/userinfo.js");
// router.post("/api/login", async ctx => {
//   let postData = await parsePostData(ctx);
//   console.log("登录", postData);
//   let result = { data:userinfo, code: 200, message: "登录成功" };
//   if (postData.username === "" || postData.password === "123") {
//     result = { code: 400, message: "登录失败,用户名或密码错误" };
//   }
//   ctx.body = result;
// });

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(9000, () => {
  console.log("[demo] route-use-middleware is starting at port 9000");
});
