$(document).ready(function(){
 
    $(".header__container-button-but").click(function(){
        $(".header__container-down").toggle();
        $(".recentWork").toggle();
        $(".collection").toggle();
        $(".footer").toggle();
    });
    

    //800 -длительность скроллинга в мс---------------------------------------------------
    $(function(){
        $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
        });
    });
    //--------------------------------------------------------------------------------

});
