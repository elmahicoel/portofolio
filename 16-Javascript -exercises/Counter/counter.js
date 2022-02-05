arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = parseInt(arr.length);

function timer(param) {
    console.log(param);
    i--;
}

const startCounter = setInterval(() =>{
    if(i == 0) {
        clearInterval(startCounter);
        console.log("Ai reusit!");
    } else {
        timer(i);
    }
}, 1000);