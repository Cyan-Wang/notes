// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);// 打印URL
    await next();// 调用下一个middleware
});

app.use(async (ctx,next)=>{
    const now = new Date().getTime();
    console.log("now: "+now);
    await next();
    const now4 = new Date().getTime();
    console.log("now4: "+now4);
});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx,next)=>{
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello,koa2!</h1>";
    const now2 = new Date().getTime();
    console.log("now2: "+now2);
    await next();
});


//在端口监听
// app.listen(8081);
// console.log("app started at port 8081");


//参数ctx是由koa传入的封装了request和response的变量，可通过它访问request和response，
// next是koa传入的将要处理的下一个异步函数。
// 上面的异步函数中，首先用await next();处理下一个异步函数，然后，设置response的Content-Type和内容。
// 由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数，这两个关键字将在ES7中引入。

