<!-- Initialize Swiper -->


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
//     var swiper = new Swiper('.swiper-container', {
//     // Default parameters
//     slidesPerView: 1,
//     spaceBetween: 10,
//     // Responsive breakpoints
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 20
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 4,
//             spaceBetween: 40
//         }
//     }
// });
