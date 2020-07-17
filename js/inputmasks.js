(function () {
    'use strict';

    $('.mask-phone').mask('(00) 0000-0000');
    $('.mask-cellphone').mask('(00) 00000-0000');

    $('.form-password .btn-eye').click(function (e) {
        const isActive = $(this).attr('data-active') == 'false';
        $(this).attr('data-active', isActive);
        $(this)
            .parent()
            .find('input')
            .attr('type', isActive
                ? 'password'
                : 'text');
    });

    $('#txtInput').focus(function () {
        if ($('#txtInput').val() == "") {
            $('#txtInput').css('font-size', '14px');
        } else {
            $('#txtInput').css('font-size', '24px');
        }
    });

    $('.quantity-input .control').click( function(){
        const input =  $(this).parent().find('input');
        const currVal = parseInt(input.val())

        if($(this).hasClass('minor')){
            input.val(currVal === 1 ? 1 : currVal-1)
        }else{
            input.val(currVal+1);
        }
    })


})();