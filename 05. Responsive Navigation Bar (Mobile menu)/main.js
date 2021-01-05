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



var x = document.getElementById("search-box");

x.addEventListener("focus", addFocusClass, true);
x.addEventListener("blur", removeFocusClass, true);

function addFocusClass() {
    x.className += "onFocus";
}

function removeFocusClass() {
    x.className = ""; 
}