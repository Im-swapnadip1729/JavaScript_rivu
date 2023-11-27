//generate a random color

const randomColour = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[parseInt(Math.random()*16)] ;
    }
    return color;
}

let inervalId;
const startChangingColour = function(){
    if (!inervalId){
        inervalId = setInterval(changeColour,1000);
    }
    function changeColour() {
        document.body.style.backgroundColor = randomColour();
    }
}

const stopChangingColour = function(){
    clearInterval(inervalId);
    inervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColour);
document.querySelector('#stop').addEventListener('click', stopChangingColour);
