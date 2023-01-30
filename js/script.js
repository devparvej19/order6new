// 'use strict'

// var cursor = document.querySelector(".follow-img");

// document.addEventListener("mousemove", (e) => {

//     var x = e.clientX;
//     var y = e.clientY;

//     cursor.style.left = `${x}px`;
//     cursor.style.top = `${y}px`;

// })
// let cursorImg = document.querySelectorAll(".follow-img");
// for (let i = 0; i < cursorImg; i++) {
//     cursorImg[i].addEventListener("mousemove", (e) => {
//         let x = e.clientX;
//         let y = e.clientY;
//         this.style.left = `${x}px`;
//         this.style.top = `${y}px`;
//     })

// }
window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);2



var cursor = document.querySelectorAll(".follow-img");
document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    console.log(cursor.length)
    for (let i = 0; i < cursor.length; i++) {
        cursor[i].style.left = `${x}px`;
        cursor[i].style.top = `${y}px`;
    }
})


function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}



// ==========================================
// images slide 
// ==========================================
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }

        console.log(slideInAt);
    });
}

window.addEventListener('scroll', debounce(checkSlide));
