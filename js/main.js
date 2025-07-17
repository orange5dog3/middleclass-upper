//wordpress用-------------------------------------------------------
(function ($) {

// ==========================================================================
// header scroll background
// ==========================================================================
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    
    // #first-viewが存在する場合はその高さを使用、存在しない場合は0を基準値とする
    let fvHeight = 0; // デフォルト値
    if ($('#first-view').length > 0) {
        fvHeight = $('#first-view').outerHeight();
    }
    
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
    
    // ハンバーガーメニューが開いている時は固定要素を非表示にする
    if ($(".hamburger-menu").hasClass("active")) {
        $("#contact-btn").fadeOut(200);
        $("#upper-arrow1").fadeOut(200);
        $("#upper-arrow2").fadeOut(200);
    } else {
        // ハンバーガーメニューが閉じている時は元の表示状態に戻す
        // スクロール位置に応じて適切に表示制御
        const scrollTop = $(window).scrollTop();
        
        // contact-btnの表示制御
        if (scrollTop > 100) {
            $("#contact-btn").fadeIn(200);
        }
        
        // upper-arrowの表示制御
        if ($('#first-view').length > 0) {
            const fvHeight = $('#first-view').outerHeight();
            const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
            const threshold = fvHeight + mainPaddingTop;
            
            if (scrollTop > threshold) {
                $("#upper-arrow1").fadeIn(200);
                $("#upper-arrow2").fadeIn(200);
            }
        }
    }
});

// ==========================================================================
// top-question accordion
// ==========================================================================


$(".js-question-trigger").click(function(){
    var $item = $(this).closest(".question__box-item");
    var $answer = $item.find(".question__card-a");
  
    $item.toggleClass("is-open");
  
    if ($item.hasClass("is-open")) {
        $answer
          .css("display", "flex")
          .hide()
          .slideDown(300);
    } else {
        $answer.slideUp(300, function() {
          $(this).css("display", "none");
        });
    }
  });

// ==========================================================================
// upper-arrow1 scroll control
// ==========================================================================
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const fvHeight = $('#first-view').outerHeight();
    const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
    const threshold = fvHeight + mainPaddingTop;
    
    if (scrollTop > threshold && !$(".hamburger-menu").hasClass("active")) {
        $('#upper-arrow1').fadeIn();
        
        // footer制御ロジック
        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").outerHeight();/*フッターの高さ*/

        // SP版判定（768px未満）
        const isMobile = $(window).width() < 768;
        
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            if (isMobile) {
                // SP版：footer到達時
                $("#upper-arrow1").css({
                    "position":"absolute",
                    "right": "2rem",
                    "bottom": footHeight + 78, 
                });
            } else {
                // PC版：footer到達時
                $("#upper-arrow1").css({
                    "position":"absolute",
                    "right": "11.5rem",
                    "bottom": footHeight + 90, 
                });
            }
        } else {
            if (isMobile) {
                // SP版：通常時
                $("#upper-arrow1").css({
                    "position":"fixed",
                    "right": "2rem",
                    "bottom": "7.8rem",
                });
            } else {
                // PC版：通常時
                $("#upper-arrow1").css({
                    "position":"fixed",
                    "right": "11.5rem",
                    "bottom": "9rem",
                });
            }
        }
    } else {
        $('#upper-arrow1').fadeOut();
    }
});

// スムーススクロール
$('#upper-arrow1 a').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// ==========================================================================
// upper-arrow2 scroll control
// ==========================================================================
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const fvHeight = $('#first-view').outerHeight();
    const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
    const threshold = fvHeight + mainPaddingTop;
    
    if (scrollTop > threshold && !$(".hamburger-menu").hasClass("active")) {
        $('#upper-arrow2').fadeIn();
        
        // footer制御ロジック
        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").outerHeight();/*フッターの高さ*/

        // SP版判定（768px未満）
        const isMobile = $(window).width() < 768;
        
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            if (isMobile) {
                // SP版：footer到達時
                $("#upper-arrow2").css({
                    "position":"absolute",
                    "right": "3rem",
                    "bottom": footHeight + 18, 
                });
            } else {
                // PC版：footer到達時
                $("#upper-arrow2").css({
                    "position":"absolute",
                    "right": "10.2rem",
                    "bottom": footHeight + 30, 
                });
            }
        } else {
            if (isMobile) {
                // SP版：通常時
                $("#upper-arrow2").css({
                    "position":"fixed",
                    "right": "3rem",
                    "bottom": "1.8rem",
                });
            } else {
                // PC版：通常時
                $("#upper-arrow2").css({
                    "position":"fixed",
                    "right": "10.2rem",
                    "bottom": "3rem",
                });
            }
        }
    } else {
        $('#upper-arrow2').fadeOut();
    }
});

// スムーススクロール
$('#upper-arrow2 a').click(function() {
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
        if ($(this).scrollTop() > 100 && !$(".hamburger-menu").hasClass("active")) {
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

// ==========================================================================
// 404 page button click event
// ==========================================================================
$(document).ready(function() {
    $('.btn-not-found').click(function() {
        window.location.href = 'https://orange-david.com/middle-class-upper/';
    });
});

})(jQuery);


// ==========================================================================
// slick resize event
// ==========================================================================

$(".voice-slider").slick('setPosition');
$(window).trigger('resize');

// $(window).on('resize', function() {
//     console.log('resize event fired');
// });

// $('.voice-slider').on('setPosition', function(event, slick){
//     console.log('slick setPosition fired');
// });