// 导入koa
const Koa = require("koa");

// 创建一个Koa对象表示web app本身:
const app = new Koa();

//导入controller middleware
const controller = require('./controller');

// 使用middleware
app.use(controller());

// 在端口监听
app.listen(8081);
console.log("app started at port 8081");