//change on scroll color
$(window).scroll(function () { 
    //condition to differe betwen WEB and MOBILE scroll effect
    if($(window).width()>600){
        $('nav').toggleClass('scrolled',$(this).scrollTop() >780);
        if ($(this).scrollTop() > 780) {
            $('nav .navbar-nav').addClass('custom');
            $('nav .navbar-brand').addClass('custom');
          } else {
            $('nav .navbar-nav').removeClass('custom');
            $('nav .navbar-brand').removeClass('custom');
          }
    }else{
        $('nav').toggleClass('scrolled',$(this).scrollTop() >580);
        if ($(this).scrollTop() > 580) {
            $('nav .navbar-nav').addClass('custom');
            $('nav .navbar-brand').addClass('custom');
          } else {
            $('nav .navbar-nav').removeClass('custom');
            $('nav .navbar-brand').removeClass('custom');
          }
    }
    
});

//scroll down & contact side text apear only on web view
$(document).ready(function () {
    if($(window).width()>600){
        $('.scroll-down').removeClass('custom');  
        $('.contact').removeClass('custom');   
    }else{
          $('.scroll-down').addClass('custom');
          $('.contact').addClass('custom');
    }
});

