(function () {
    'use strict';

    $('.main-nav__items .has-dropdown > a').click( function(){
        closeAll();
        const isActive = $(this).parent().find('.menu-dropdown').attr('data-visible') === 'true';
        $(this).parent().find('.menu-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive);
        $(this).attr('data-active', !isActive );
        
        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });
    
    $('.main-nav__actions-notify > a').click( function(){
        closeAll();
        const isActive = $('.notify-dropdown').attr('data-visible') === 'true';
        $('.notify-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);

        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });

    $('.main-nav__actions-mobilemenu .toggler').click( function(){
        closeAll();
        const isActive = $('.mobilem-dropdown').attr('data-visible') === 'true';
        $('.mobilem-dropdown').attr('data-visible', !isActive );
        $(this).parent().attr('data-active', !isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);

        if(isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });
    
    function closeAll(){
        $(this).attr('data-visible', false);
        $('.main-nav .menu-dropdown').attr('data-visible', false);
        $('.main-nav .has-dropdown').attr('data-active', false);
        $('.main-nav .notify-dropdown').attr('data-visible', false);
        $('.main-nav__actions-notify').attr('data-active', false);
        $('.main-nav__actions-mobilemenu').attr('data-active', false);
        $('.main-nav .mobilem-dropdown').attr('data-visible', false);
    }

    $('#menu-dropdown-backdrop').click(closeAll);

    $('.mobilem-dropdown .has-dropdown > a').click( function(){
        const isActive = $(this).parent().attr('data-active') === 'true';
        $(this).parent().attr('data-active', !isActive );
        $(".custom-scroll").customScrollbar();

    });

})();