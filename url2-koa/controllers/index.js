var fn_index = async (ctx,next)=>{
  ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post"> 
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input password="password" type="password"></p>
        <p><input type="submit" value="登陆"></p>
    </form>`;  
};

var fn_signin = async (ctx,next)=>{
    var name = ctx.request.body.name;
    var password = ctx.request.body.password;
    console.log(`signin with name: ${name}, password: ${password}`);
    if(name === 'koa' && password === "12345"){
        ctx.response.body = `<h1>Welcome,${name}!</h1>`
    }
    else{
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again!</a></p>`
    }
};

// 通过module.exports把两个URL暴露出来

module.exports = {
    "GET /":fn_index,
    "POST /signin":fn_signin
};