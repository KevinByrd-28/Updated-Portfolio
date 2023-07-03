
$(function() {
    setTimeout(function() { $("#loader-wrapper").fadeOut(1500); }, 2000)

    })

//JQuery Connect Birdie

$(function(){
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var fadeAway = 70;
     $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= fadeAway ) {
            $('.melty img').addClass('fade-out');
            $('.speech-bubble').addClass('fade-out');

            $('.melty img').removeClass('fade-in');
            $('.speech-bubble').removeClass('fade-in');
        }
        else if(scroll < fadeAway &&  $('.melty img').hasClass('fade-out') &&  $('.speech-bubble').hasClass('fade-out')){
            $('.melty img').removeClass('fade-out');
            $('.speech-bubble').removeClass('fade-out');

            $('.melty img').addClass('fade-in');
            $('.speech-bubble').addClass('fade-in');
        }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   });