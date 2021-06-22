// fetch('test.json').then( (response)=>{
//     console.log(response);
//     return response.json();
    
// }).then(data =>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

const getDatas = async ()=>{
    const response = await fetch('test.json');
    if (response.status !== 200){
        throw new Error('something wrong with server');
    }
    const data = await response.json()
    // console.log(data)
    return data;
};

getDatas()
    .then( data=>console.log(data))
    .catch(err=>console.log(err.message));