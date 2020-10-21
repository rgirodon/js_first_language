document.body.innerHTML = '<button>Click Me</button>';

let btn = document.querySelector('button');

btn.onclick = function() {

    let color = document.body.style.backgroundColor;

    if (color == 'black') {
        document.body.style.backgroundColor = 'white';
    }
    else {
        document.body.style.backgroundColor = 'black';
    }
};