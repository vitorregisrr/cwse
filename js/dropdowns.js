(function () {
    'use strict';

    //!!! DROPDOWNS DO NAVBAR !!!//

    function closeAll(close1, close2, close3){
        if(close1){
            $('.main-nav .menu-dropdown').attr('data-visible', false);
            $('.main-nav .has-dropdown').attr('data-active', false);
        }
       
        if(close2){
            $('.main-nav .notify-dropdown').attr('data-visible', false);
            $('.main-nav__actions-notify').attr('data-active', false);
        }

        if(close3){
            $('.main-nav__actions-mobilemenu').attr('data-active', false);
            $('.main-nav .mobilem-dropdown').attr('data-visible', false);
        }
    }

    $('.main-nav__items .has-dropdown > a').click( function(){
        closeAll(false, true, true);
        const isActive = !($(this).parent().find('.menu-dropdown').attr('data-visible') == 'true');
        $(this).parent().find('.menu-dropdown').attr('data-visible', isActive );
        $(this).parent().attr('data-active', isActive);
        $(this).attr('data-active', isActive );
        
        if(!isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });
    
    $('.main-nav__actions-notify > a').click( function(){
        closeAll(true, false, true);
        const isActive = !($('.notify-dropdown').attr('data-visible') == 'true');
        $('.notify-dropdown').attr('data-visible', isActive );
        $(this).parent().attr('data-active', isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);

        if(!isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });

    $('.main-nav__actions-mobilemenu .toggler').click( function(){
        closeAll(true, true, false);
        const isActive = !($('.mobilem-dropdown').attr('data-visible') == 'true');
        $('.mobilem-dropdown').attr('data-visible', isActive );
        $(this).parent().attr('data-active', isActive );
        $('#menu-dropdown-backdrop').attr('data-visible', true);

        if(!isActive){
            $('#menu-dropdown-backdrop').attr('data-visible', false);
        }else{
            $('#menu-dropdown-backdrop').attr('data-visible', true);
        }
    });

    $('#menu-dropdown-backdrop').click(() => closeAll(true, true, true));

    $('.mobilem-dropdown .has-dropdown > a').click( function(){
        const isActive = !($(this).parent().attr('data-active') == 'true');
        $(this).parent().attr('data-active', isActive );
        $(".custom-scroll").customScrollbar();

    });

    // !!! END DROPDOWNS NAVBAR !!!/

})();