function printtime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let id = setInterval(printtime, 1000);