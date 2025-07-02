// ==========================================================================
// hamburger
// ==========================================================================

$(".hamburger-trigger").click(
    function() {
    $(".hamburger-menu").toggleClass("active")
    $(".hamburger").toggleClass("active")
    $("#hamburger-bg").toggleClass("active")
});

// ==========================================================================
// top-question accordion
// ==========================================================================
const questionTriggers = document.querySelectorAll('.js-question-trigger');
questionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item = trigger.closest('.question__box-item');
        item.classList.toggle('is-open');
    });
});

// ==========================================================================
// upper-arrow scroll control
// ==========================================================================
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#upper-arrow').fadeIn();
    } else {
        $('#upper-arrow').fadeOut();
    }
});

// スムーススクロール
$('#upper-arrow a').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// ==========================================================================
// voice slider
// ==========================================================================
$('.voice-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="image/top/logo_top_voice_arrow-l.svg" alt="前へ"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="image/top/logo_top_voice_arrow-r.svg" alt="次へ"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});