const open = document.querySelector('button#open');
const close = document.querySelector('button#close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));