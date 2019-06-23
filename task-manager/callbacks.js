
const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is error');
        callback(undefined, [1, 2, 8]);
    }, 2000);

}

doWorkCallback((error, result) => {
    if (error){
        return console.log(error);
    }

    console.log(result);
});