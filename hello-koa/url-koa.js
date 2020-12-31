// 导入koa
const Koa = require("koa");

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 引入koa-router这个middleware，让它负责处理URL映射。
// 注意require("koa-router")返回是是函数
const router = require("koa-router")();

//log request URL
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next();
});

// 使用router.get('/path', async fn)来注册一个GET请求,
//可以在请求路径中使用带变量的/hello/:name，变量可以通过ctx.params.name访问。
//add url-router
router.get('/hello/:name', async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/',async (ctx,next)=>{
    ctx.response.body = '<h1>Index</h1>';
});

//add router middleware
app.use(router.routes());




//在端口监听
// app.listen(8081);
// console.log("app started at port 8081");




