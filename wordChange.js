//Word Change Script
(function(){
    var words = [
        'what you need.',
        'websites.',
        'applications.',
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();