const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
let nthCircle = 1;

next.addEventListener('click', () => {
    nthCircle++
    if (nthCircle >= circles.length) {
        nthCircle = 4;
    }
    console.log(nthCircle);
});

prev.addEventListener('click', () => {
    nthCircle--
    if (nthCircle >= circles.length) {
        nthCircle = 4;
    }
    console.log(nthCircle);
});