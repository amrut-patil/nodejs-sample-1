

const add = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0)
                reject("Negative number not allowed")
            else
                resolve(a + b);
        }, 2000);
    })
}



const doWork = async () => {
    const result = await add(25, 75);
    const result2 = await add(result, -50);
    const result3 = await add(result2, 100);
    return result3;
}

doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
})

console.log('end');

// const doWork = async () => {
//     throw new Error("something went wrong");
//     return "Test";
// }

// doWork().then((result) => {
//     console.log('result', result);
// }).catch((e) => {
//     console.log('e', e);
// })
