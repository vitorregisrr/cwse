(function () {
    'use strict';

    $(".custom-scroll").customScrollbar();

    $('.modal .backdrop, .modal__close').click( function(){
        $(this).parents('.modal').attr('data-visible', false);
    });

    $('[data-toggle="modal"]').click( function(e){
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).attr('data-visible', true);
    })
})();