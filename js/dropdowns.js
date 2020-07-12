(function () {
    'use strict';

    $('.main-nav__items .has-dropdown > a').click( function(){
        const isActive = $(this).parent().find('.menu-dropdown').attr('data-visible') === 'true';
        $(this).parent().find('.menu-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive);
        $(this).attr('data-active', !isActive );
        $('.main-nav .notify-dropdown').attr('data-visible', false);
        $('.main-nav .mobilem-dropdown').attr('data-visible', false);
        
        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });
    
    $('.main-nav__actions-notify > a').click( function(){
        const isActive = $('.notify-dropdown').attr('data-visible') === 'true';
        $('.notify-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);
        $('.main-nav .menu-dropdown').attr('data-visible', false);
        $('.main-nav .mobilem-dropdown').attr('data-visible', false);

        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });

    $('.main-nav__actions-mobilemenu .toggler').click( function(){
        const isActive = $('.mobilem-dropdown').attr('data-visible') === 'true';
        $('.mobilem-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);
        $('.main-nav .menu-dropdown').attr('data-visible', false);
        $('.main-nav .notify-dropdown').attr('data-visible', false);

        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });
    
    $('#menu-dropdown-backdrop').click( function(){
        $(this).attr('data-visible', false);
        $('.main-nav .menu-dropdown').attr('data-visible', false);
        $('.main-nav .has-dropdown').attr('data-active', false);
        $('.main-nav .notify-dropdown').attr('data-visible', false);
        $('.main-nav__actions-notify').attr('data-active', false);
        $('.main-nav__actions-mobilemenu').attr('data-active', false);
        $('.main-nav .mobilem-dropdown').attr('data-visible', false);
    });

    $('.mobilem-dropdown .has-dropdown > a').click( function(){
        const isActive = $(this).parent().attr('data-active') === 'true';
        $(this).parent().attr('data-active', !isActive );
        $(".custom-scroll").customScrollbar();

    });

})();