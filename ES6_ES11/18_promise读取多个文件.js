// 引入fs模块
let fs = require('fs');

// fs.readFile('./为学.md',(err,data1)=>{
//     fs.readFile('./插秧诗.md',(err,data2)=>{
//         fs.readFile('./观书有感.md',(err,data3)=>{
//             let res = data1+'\r\n'+data2+'\r\n'+data3;
//             console.log(res.toString());
//         })
//     })
// })

// 使用promise
let p = new Promise((resolve,reject)=>{
    fs.readFile('./为学.md',(err,data)=>{
        resolve(data);
    })  
})

p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./插秧诗.md',(err,data)=>{
            resolve([value,data]);
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./观书有感.md',(err,data)=>{
            value.push(data);
            resolve(value);
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'));
})