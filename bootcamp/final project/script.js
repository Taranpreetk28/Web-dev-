const bar= document.getElementById('bar');
const cancel= document.getElementById('cancel');
const nav= document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (cacel) {
    cancel.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}