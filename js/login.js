(function () {
    'use strict';

    $('[data-toggle="tab"]').click( function(e){
        e.preventDefault();
        e.stopPropagation();
        const id = $(event.target).attr('href');
        $('.login__tab').removeClass('active');
        $(id).addClass('active');
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $('.login-mod').click( function(){
        $('.login-mod').removeClass('active');
        $(this).addClass('active');
        $('#form-mod-input').val($(this).attr('data-type'));
    });

})();