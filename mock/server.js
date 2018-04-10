const Koa = require("koa");
const app = new Koa();
const path = require('path')
const convert = require('koa-convert')
const koastatic = require('koa-static')
const Router = require("koa-router");

const { uploadFile } = require('./util/upload')

let router = new Router();
let captcha_code = false;

const staticPath = './static'
// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(koastatic(
  path.join( __dirname,  staticPath)
)))
/**
 * 使用第三方中间件 end 
 */

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener("data", data => {
        // console.log(1111111,data)
        postdata += data;
      });
      ctx.req.addListener("end", function() {
        let parseData = JSON.parse(postdata);
        // console.log(2222222222,postdata)
        resolve(parseData);
      });
    } catch (err) {
      reject(err);
    }
  });
}

// 将POST请求参数字符串解析成JSON
// function parseQueryStr(queryStr) {
//   let queryData = {};
//   let queryStrList = queryStr.split("&");
//   console.log(queryStrList);
//   for (let [index, queryStr] of queryStrList.entries()) {
//     let itemList = queryStr.split("=");
//     queryData[itemList[0]] = decodeURIComponent(itemList[1]);
//   }
//   return queryData;
// }

//首页数据
let entries = require("./home/entries.js");
router.get("/api/home/entries", async ctx => {
  const { latitude, longitude } = ctx.query;
  console.log("entries:::", latitude, longitude);
  ctx.body = entries;
});

let shoplist = require("./home/shoplist.js");
router.get("/api/shopping/restaurants", async ctx => {
  const { offset, filter } = ctx.query;
  console.log("Restaurants:::", offset, filter);
  ctx.body = shoplist;
});

let foodCategoty = require("./shop/food/category");
router.get("/api/shopping/food/sift_factors", async ctx => {
  const { entry_id } = ctx.query;
  console.log("sift_factors:::", entry_id);
  // switch(entry_id){
  //   case "20004689":
  //     ctx.body = foodCategoty
  //     break
  //   default:
  //     ctx.body = {message:"无效的entry_id"}
  // }
  if (
    entry_id === "20008529" ||
    entry_id === "20008849" ||
    entry_id === "20008857" ||
    entry_id === "20008537" ||
    entry_id === "20008521"
  ) {
    ctx.body = [];
  } else {
    ctx.body = foodCategoty;
  }
});

let categoties = require("./shop/food/categories");
router.get("/api/shopping/category", async ctx => {
  const { latitude, longitude } = ctx.query;
  console.log("category:::", latitude, longitude);
  ctx.body = categoties;
});

let filterBar = require("./shop/fliterBar");
router.get("/api/shopping/restaurants/filter-bar", async ctx => {
  const { latitude, longitude } = ctx.query;
  console.log("FilterBar:::", latitude, longitude);
  ctx.body = filterBar;
});

let address = require("./home/address.js");
router.get("/api/location/address", async ctx => {
  const { latitude, longitude } = ctx.query;
  console.log("address:::", latitude, longitude);
  if (latitude <= 0 || longitude <= 0) {
    ctx.body = {
      message: "无效的经纬度坐标",
      name: "未知地址"
    };
  } else {
    ctx.body = address;
  }
});

let addresslist = require("./home/addresslist.js");
router.get("/api/location/search_poi_nearby", async ctx => {
  const { keyword, latitude, longitude } = ctx.query;
  console.log("search_poi_nearby:::", keyword, latitude, longitude);
  ctx.body = addresslist;
});

let typeahead = require("./search/typeahead.js");
router.get("/api/shopping/typeahead", async ctx => {
  const { keyword, latitude, longitude } = ctx.query;
  console.log("typeahead:::", keyword, latitude, longitude);
  ctx.body = typeahead;
});

let hotSearchWord = require("./search/hotSearchWord.js");
router.get("/api/shopping/hot_search_words", async ctx => {
  const { latitude, longitude } = ctx.query;
  console.log("typeahead:::", latitude, longitude);
  ctx.body = hotSearchWord;
});

let searchResult_1 = require("./search/searchResult_1");
router.get("/api/shopping/search", async ctx => {
  const { keyword } = ctx.query;
  ctx.body = searchResult_1;
});

let menu = require("./shopDetail/menu");
let coco = require("./shopDetail/cocoMenu");
router.get("/api/shopping/shop/menu", async ctx => {
  const { shop_id } = ctx.query;
  if (shop_id == 160197368) {
    ctx.body = coco;
  } else {
    ctx.body = menu;
  }
});

let shopinfo = require("./shopDetail/shopinfo");
router.get("/api/shopping/shopinfo/:shop_id", async ctx => {
  const { shop_id } = ctx.params;
  ctx.body = shopinfo;
});

let rating = require("./shopDetail/rating");
router.get("/api/shopping/shop/ratings/:shop_id", async ctx => {
  const { shop_id } = ctx.params;
  const { offset, limit } = ctx.query;
  ctx.body = rating;
});

// //提交评论
// router.post("/api/submitAssess", async ctx => {
//   let postData = await parsePostData(ctx);
//   console.log("提交评论", postData);
//   ctx.body = {
//     code: 200,
//     message: "提交成功"
//   };
// });

router.get("/api/captchas", async ctx => {
  captcha_code = "000000";
  setTimeout(() => {
    captcha_code = false;
  }, 120000);
  ctx.body = { code: 200 };
});

// 登录验证
let userinfo = require("./user/userinfo.js");
router.post("/api/login", async ctx => {
  let postData = await parsePostData(ctx);
  let result = userinfo();
  if (postData.captcha_code) {
    if (!captcha_code || postData.captcha_code !== captcha_code) {
      result = { code: 400, message: "验证码错误" };
    }
  } else {
    if (postData.username === "" || postData.password === "123") {
      result = { code: 400, message: "登录失败,用户名或密码错误" };
    }
  }
  if (!result.code) {
    const userid = result.user_id;
    ctx.cookies.set("userid", userid, {
      path: "/", // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date("2017-02-15"), // cookie失效时间
      httpOnly: false, // 是否只用于http请求中获取
      overwrite: false // 是否允许重写
    });
  }
  ctx.body = result;
});

//
router.get("/api/current_user", async ctx => {
  const userid = ctx.cookies.get("userid")
  if(!!userid){
    ctx.body = { user_id:userid };
  }else{
    ctx.body = { code: 200 };
  }
});

router.get("/api/userinfo", async ctx => {
  const { user_id } = ctx.query;
  let result = userinfo();
  ctx.body = result;
});

router.post("/api/user/:shop_id/avatar", async ( ctx ) => {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join( __dirname, 'static/image' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album',
      path: serverFilePath
    })
    userinfo.avatar = result.avatar;
    ctx.body = result;
});
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(9000, () => {
  console.log("[demo] route-use-middleware is starting at port 9000");
});
