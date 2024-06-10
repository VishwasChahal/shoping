document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 5000, // Adjust autoplay delay as needed
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        }
    });

    var swiper2 = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 5000, // Adjust autoplay delay as needed
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        }
    });

    var swiper3 = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 5000, // Adjust autoplay delay as needed
        },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});

