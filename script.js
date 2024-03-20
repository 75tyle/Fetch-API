// console.log("hey!")

// fetch(`https://reqres.in/api/users`)
// .then(res => {
//     if(res.ok){
//         console.log('Succes');
//         return res.json()
//     }
//     else{
//         console.log('Unsuccesful');
//     }
// })
// .then(data => console.log(data))

console.log("hey!")

fetch(`https://reqres.in/api/users`,{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
        name:'User 1'
    })
})
.then(res => {
    return res.json()
})
.then(data => console.log(data))