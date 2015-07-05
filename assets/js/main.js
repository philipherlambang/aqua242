$(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto();
    
    //combo box city
    
    
    $('.burger').click(function() {
        if ($('nav').css('display') == 'block') {
            $('nav').fadeOut('fast');
        } else {
            $('nav').fadeIn('fast');
        }
    });

    $('nav a').click(function() {
        if ($('.burger').css('display') == 'block') {
            $('nav').fadeOut('fast');
        }

        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('.ninfografis').click(function() {
        $('html,body').animate({scrollTop:1100}, 1000, 'easeInOutExpo');
    });

    $('.nabout').click(function() {
        $('html,body').animate({scrollTop:0}, 1000, 'easeInOutExpo');
    });
    
    $('.nvideolagu').click(function() {
        $('html,body').animate({scrollTop:0}, 1000, 'easeInOutExpo');
    });
});
