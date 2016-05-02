// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(document).ready(function() {
    resize_check()
});

$(window).resize(function() {
    resize_check()
});

function resize_check(){
    if ($(this).width() < 530) {
        $('.nav-container h1').hide();
        $('.nav-container').css("text-align", "center").css("font-size", "1.1em")
        $('.nav-container a').css("padding-left", "20px").css("padding-right", "20px")
    } else {
        $('.nav-container h1').show();
        $('.nav-container').css("text-align", "right").css("font-size", "0.9em")
        $('.nav-container a').css("padding-left", "2%").css("padding-right", "2%")
    };
};


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}