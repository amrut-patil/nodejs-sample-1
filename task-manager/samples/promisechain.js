
const add = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}

// add(4, 5).then((result) => {
//     console.log(result);

//     add(result, 8).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     })

// }).catch((error) => {
//     console.log(error);
// })

add(4, 8).then((result) => {
    console.log(result)
    return add(result, 12);
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(result);
})