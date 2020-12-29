var isActive = false;

$('.menu').on('click', function (){
    if (isActive){
        $(this).removeClass('active');
        $('header').removeClass('menu-open');
    }
    else {
        $(this).addClass('active');
        $('header').addClass('menu-open');
    }

    isActive = !isActive;
});