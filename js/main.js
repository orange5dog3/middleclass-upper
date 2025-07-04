// ==========================================================================
// header scroll background
// ==========================================================================
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const fvHeight = $('#first-view').outerHeight(); // 
    
    if (scrollTop > fvHeight) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});



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
    const scrollTop = $(this).scrollTop();
    const fvHeight = $('#first-view').outerHeight();
    const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
    const threshold = fvHeight + mainPaddingTop;
    
    if (scrollTop > threshold) {
        $('#upper-arrow').fadeIn();
        
        // footer制御ロジック
        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").outerHeight();/*フッターの高さ*/

        // SP版判定（768px未満）
        const isMobile = $(window).width() < 768;
        
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            if (isMobile) {
                // SP版：footer到達時
                $("#upper-arrow").css({
                    "position":"absolute",
                    "bottom": footHeight + 78, 
                });
            } else {
                // PC版：footer到達時
                $("#upper-arrow").css({
                    "position":"absolute",
                    "bottom": footHeight + 90, 
                });
            }
        } else {
            if (isMobile) {
                // SP版：通常時
                $("#upper-arrow").css({
                    "position":"fixed",
                    "bottom": "7.8rem",
                });
            } else {
                // PC版：通常時
                $("#upper-arrow").css({
                    "position":"fixed",
                    "bottom": "9rem",
                });
            }
        }
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
// contact button footer control
// ==========================================================================
$(function() {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#contact-btn").fadeIn(300);
            } else {
            $("#contact-btn").fadeOut(300);
        }

        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").outerHeight();/*フッターの高さ*/

        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#contact-btn").css({
                "position":"absolute",
                "bottom": footHeight,
            });
        } else {
            $("#contact-btn").css({
                "position":"fixed",
                "bottom": "0",
            });
        }
    });

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