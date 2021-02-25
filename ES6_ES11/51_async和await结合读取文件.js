let fs = require('fs');
function weixue(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./为学.md',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    })
}
function chayang(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./插秧诗.md',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    })
}
function guanshu(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./观书有感.md',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    })
}

async function main(){
    let weixue1 = await weixue();
    let chayang1 = await chayang();
    let guanshu1 = await guanshu();
    console.log(weixue1.toString());
    console.log(chayang1.toString());
    console.log(guanshu1.toString());
}

main();