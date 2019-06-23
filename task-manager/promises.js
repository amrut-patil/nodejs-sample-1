const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([5, 8, 24]);
        reject("some error occured");                   
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('success');
    console.log(result);
}).catch((error) => {
    console.log('error');
    console.log(error);
})