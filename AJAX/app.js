//导入koa,在koa2中，导入的是一个class，因此用大写Koa表示
const Koa = require('koa');

//引入koa-router,注意require('koa-router')返回的是函数
const router = require('koa-router')();

//创建一个Koa对象表示web app本身
const app = new Koa();

//打印request URL
// app.use(async(ctx,next)=>{
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });

//add url-route
router.get('/',async(ctx,next)=>{
    ctx.response.body = '<h1>Index</h1>';
});

router.get('/server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.body = 'Hello AJAX';
})

router.get('/json_server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    //响应一个对象
    const data = {
        name:'atguigu5'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    ctx.response.body = str;
})

router.get('/ie',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.body = 'Hello IE';
})

router.post('/server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.body = 'Hello AJAX POST';
})

async function delayer(time = 3000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },time);
    });
}

router.get('/delay',async(ctx,next)=>{
    await delayer();
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.body = '延迟响应';
})

router.get('/jquery-server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    const data = {
        name:'尚硅谷'
    }
    ctx.response.body = JSON.stringify(data);
})
router.post('/jquery-server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    const data = {
        name:'尚硅谷'
    }
    ctx.response.body = JSON.stringify(data);
})

router.get('/axios-server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    const data = {
        name:'尚硅谷~'
    }
    ctx.response.body = JSON.stringify(data);
})

router.post('/axios-server',async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin','*');
    const data = {
        name:'尚硅谷2~'
    }
    ctx.response.body = JSON.stringify(data);
})

//add router middleware
app.use(router.routes());

//在端口8080监听
app.listen(8080);
console.log('app started at port 8080...');