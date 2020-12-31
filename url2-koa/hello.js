var fn_hello = async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,${nmae}!</h1>`;
};

module.exports = {
    'GET /hello/:nmae': fn_hello
};