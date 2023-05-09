/*====================
   swiper custom js
=======================*/
var swiper = new Swiper(".featureSlider", {
    pagination: {
        el: ".feature-pagination",
        type: "progressbar",
        // type: "fraction",
    },
});


var swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});