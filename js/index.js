$('document').ready(function() {

    $('.trigger-light').hover(function() {
        $('.background-off').stop().fadeToggle(300, 'swing', function() {
        });
    });

});