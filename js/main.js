$(document).ready(function() {
    navBar();
    navigation();
    topShadow();
    hideModal();
    $('body').on('click', '.offerSeeMore a', function(e) {
        e.preventDefault();
        var $id = $(this).attr('data-id');
        modal($id);
    });
    // $('.dummy').viewportChecker();
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
            scrollTop: $(section).offset().top - 57
        });
        $('.navBox').addClass('hide');
        e.preventDefault();
        return false;
    });
}

function topShadow() { 
    var scroll = $(window).scrollTop(),
        pageHeight = $(window).outerHeight() - 80;

    if (scroll <= pageHeight) {
        $('.topBar').removeClass('shadow');
    } else {
        $('.topBar').addClass('shadow');
    }
}

function modal($id) {
    $('.modalShadow').fadeIn();
    $('#' + $id).fadeIn();
    $('body').css({
        'overflow-y':'hidden'
    });
    $('body').on('click', '.modalShadow, .modalContent', function(e) {
        e.preventDefault();
        $('.modalShadow').fadeOut();
        $('#' + $id).fadeOut();
        $('body').css({
            'overflow-y':'scroll'
        });
    });
}

function hideModal() {
    $('body').on('click', '.closeModal', function(e) {
        e.preventDefault();
        $('.modalShadow').fadeOut();
        $('.modalWrapper').fadeOut();
        $('body').css({
            'overflow-y':'scroll'
        });
    });
}