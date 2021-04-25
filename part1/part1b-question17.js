function mod(array, callback) {
    const newarr = [];
    for (let i = 0; i < array.length; ++i) {
        newarr.push(callback(array[i]));
    }
    return newarr;
}

function doSmth(num) {
    return num * 2;
}

console.log(mod([1, 2, 3], doSmth));