

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
// let x = Math.random() * canvas.width;
// let y = Math.random() * canvas.height;


// Patrat
// c.fillStyle = "rgba(255, 0, 0, 0.2)";
// c.fillRect(350, 298, 150, 150);

// c.fillStyle = "rgba(255, 0, 0, 0.2)";
// c.fillRect(658, 114, 150, 150);

// //Linie
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 100);
// c.lineTo(500, 350);
// c.strokeStyle = "#52abab";
// c.stroke();

//Cerc
const setX = function () {
    const x = Math.random() * window.innerWidth;
    return x;    
}

const setY = function () {
    const y = Math.random() * window.innerHeight;
    return y;
}

const setRadius = function() {
    const radius = Math.ceil(Math.random() * 80);
    return radius;
}

const setColor = function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random() + 0.1;
    return `rgba(${r}, ${g}, ${b}, ${a} )`;
}

let i = 0;

function animate() {
    // c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(setX(), setY(), setRadius(), 0, Math.PI *2, false);
    c.fillStyle = setColor();
    c.fill();
    if( i === 100 ) {
        console.log("s-a terminat pt ca i = " + i);
        return;
    }
    requestAnimationFrame(animate);
    i++
}

animate();
