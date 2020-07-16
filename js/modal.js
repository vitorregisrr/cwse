(function () {
    'use strict';

    $(".custom-scroll").customScrollbar();

    $('.c-modal .backdrop, .modal__close').click( function(){
        $(this).parents('.c-modal').attr('data-visible', false);
    });

    $('[data-toggle="c-modal"]').click( function(e){
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).attr('data-visible', true);
    })
    $('.c-modal__close').click( function(e){
        e.preventDefault();
        
        $(this).parent().parent().parent().attr('data-visible', false);
    })
})();