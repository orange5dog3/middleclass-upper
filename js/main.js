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