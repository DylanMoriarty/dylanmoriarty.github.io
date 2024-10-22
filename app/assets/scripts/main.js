global.$ = global.jQuery = global.jquery = require('jquery');
require('splitpic');

function checkHeader() {
  var bannerImage = document.querySelector(".welcomemat-center")

  if (bannerImage) {
    var rightNow = new Date().getHours()
    var newImage = "../assets/graphics/banners/main/"

    if (rightNow > 19 || rightNow < 5) {
      bannerImage.src=newImage + "evening.jpg"
    } else if (rightNow < 9) {
      bannerImage.src=newImage + "morning.jpg"
    } else if (rightNow < 12) {
      bannerImage.src=newImage + "brunch.jpg"
    } else if (rightNow < 16) {
      bannerImage.src=newImage + "lunch.jpg"
    } else {
      bannerImage.src=newImage + "latenoon.jpg"
    }
  }
}

function hideHeader() {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

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

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
}

$(document).ready(function() {
  if (document.querySelector('#front-content')) {
    checkHeader()
  }

  hideHeader()

  console.log('It is the time you have wasted for your rose that makes your rose so important.')
})
