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