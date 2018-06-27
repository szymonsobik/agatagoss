$(document).ready(function() {
    navBar();
    navigation();
    topShadow();
    $('.dummy').viewportChecker();
});

$(window).scroll(function() {
    topShadow();
})

function navBar() {
    $('body').on('click', '.menuBtn', function() {
        $('.navBox').removeClass('hide');
    });
    
    $('body').on('click', '.menuBtnHide', function() {
        $('.navBox').addClass('hide');
    });
}

function navigation() {
    $('body').on('click', '.scrollPage', function(e) {
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top
        });
        $('.navBox').addClass('hide');
        e.preventDefault();
        return false;
    });
}

function topShadow() { 
    var scroll = $(window).scrollTop(),
        pageHeight = $(window).outerHeight() - 40;

    if (scroll <= pageHeight) {
        $('.topBar').removeClass('shadow');
    } else {
        $('.topBar').addClass('shadow');
    }
}