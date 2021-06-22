// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('ok')
// },2000);
// console.log(3);
// console.log(4);
// console.log(5);

// const { response } = require("express");

/// making xmlhttp request
const getTodos = (resource, callback) => {
    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            // console.log(request,request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
                // callback(undefined, data);
            } else if (request.readyState == 4) {
                // callback('nothing', undefined);
                resolve(err);
            }
        });
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource)
        request.send();

    });


}

getTodos('test.json').then(data=>{
    console.log('promise 1')
    console.log(data);
    return getTodos('test_two.json');
}).then(data=>{
    console.log('promise 2')
    console.log(data)
}).catch(err=>{
    console.log(err)
})


//CALLBACK HELL
// getTodos('test.json', (err,data)=>{
//     // console.log('everything ok')
//     // console.log(err,data)
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data);
//         getTodos('test.json',(err,data)=>{
//             console.log(data)
//         })
//     }
// });

//PROMISE test
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         //fetch data
//         resolve('data parsing');
//         // reject('error');

//     });
// }

// getData().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// getData().then( (data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// });



