const icon = document.querySelector('.icon');
const nav = document.getElementById("myTopnav");
const dropbtn = document.querySelector('.dropbtn');
const dropbtn2 = document.querySelector('.dropbtn2');
const dropcontent = document.querySelector('.dropdown-content');
const dropcontent2 = document.querySelector('.dropdown-content2');
const carrot = document.querySelector('.carrot');
const carrot2 = document.querySelector('.carrot2');

dropbtn.addEventListener('click', function () {
    dropcontent.classList.toggle('dropdown-is-visible');
    carrot.classList.toggle('rotate');
})

dropbtn2.addEventListener('click', function () {
    dropcontent2.classList.toggle('dropdown-is-visible');
    carrot2.classList.toggle('rotate');
})


icon.addEventListener('click', function () {
    nav.classList.toggle('responsive');
    if(dropcontent.classList.contains('dropdown-is-visible') || dropcontent2.classList.contains('dropdown-is-visible')){
        dropcontent.classList.remove('dropdown-is-visible');
        dropcontent2.classList.remove('dropdown-is-visible');
        }

});

