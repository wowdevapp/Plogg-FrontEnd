$(document).ready(function () {
    $('.bar-menu').click(function () { 
        $('nav').toggleClass('nav-toggle');        
    });
    $('.bar-menu').click(function () { 
        $('nav ul li.nav-item a').click(function () { 
            $('nav').removeClass('nav-toggle');
        });        
    });
    //get header height
     var headerHeight = $('header').height(); 
     $('.recherche').css('margin-top',headerHeight);

});