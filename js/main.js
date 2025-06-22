// hamburger------------------------
$(document).ready(function() {
    $(".hamburger-trigger").click(function() {
        $(".hamburger").toggleClass("active");
        $(".hamburger-menu").toggleClass("show");
        $("#hamburger-bg").toggleClass("active");
    });
    
    // 背景クリックでメニューを閉じる
    $("#hamburger-bg").click(function() {
        $(".hamburger").removeClass("active");
        $(".hamburger-menu").removeClass("show");
        $("#hamburger-bg").removeClass("active");
    });
});