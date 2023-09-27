const inp = document.querySelector('input')
const div = document.querySelector('.color')

forever();

function forever(){
    requestAnimationFrame(forever);

    div.style.backgroundColor = inp.value
}