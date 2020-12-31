//处理post请求

//处理post请求，可以用router.post('/path', async fn)
//用post请求处理URL时，会遇到一个问题：post请求通常会发送一个表单，或者JSON，
//它作为request的body发送。但无论是Node.js提供的原始request对象，还是koa提供的request对象，
//都不提供解析request的body的功能！所以，又需要引入另一个middleware来解析原始request请求，
//然后，把解析后的参数，绑定到ctx.request.body中。
//在package.json中添加依赖项,"koa-bodyparser": "3.2.0",然后使用npm install安装。


//导入koa
const { listenerCount } = require("koa");
const Koa = require("koa");

//创建一个koa对象，表示web app本身
const app = new Koa();

//引入koa-bodyparser
const bodyParser = require("koa-bodyparser");


//引入koa-router
const router = require("koa-router")();

//middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

//写一个简单的登录表单
router.get("/",async (ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post("/signin",async (ctx,next)=>{
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`signin with name: ${name},password: ${password}`);
    if(name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome,${name}!</h1>`;
    }
    else{
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again!</a></p>`
    }
});

app.use(router.routes());

app.listen(8081);
console.log("app is running at 8081...");