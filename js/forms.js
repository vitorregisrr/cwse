// Formulário acessar (LOGIN)
$("#form-login").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minLength: 6
        },
    },

    messages: {
        password: {
            required: "Digite sua senha",
            minLength: "Sua senha deve ter no mínimo 6 caractéres"
        },

        email: {
            required: 'Digite seu email',
            email: 'Email inválido'
        },
    }
});

// Formulário cadastro (LOGIN)
$("#form-login").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        email: {
            required: true,
            minLength: 6
        },
        password: {
            required: true,
            minLength: 6
        },
    },

    messages: {
        password: {
            required: "Digite sua senha",
            minLength: "Sua senha deve ter no mínimo 6 caractéres"
        },

        nome: {
            required: "Digite sua senha",
            minLength: "Sua senha deve ter no mínimo 6 caractéres"
        },

        email: {
            required: 'Digite seu email',
            email: 'Email inválido'
        },
    }
});

// Formulário checkout cartao
$("#form-checkout-cartao").validate({
    rules: {
        creditCardHolderName: {
            required: true
        },
        creditCardNumber: {
            required: true
        },
        creditCardHolderBirthDate: {
            required: true
        },
        creditCardHolderPhone: {
            required: true
        },
        senderCPF: {
            required: true
        },
        validade: {
            required: true
        },
        codigoseguranca: {
            required: true
        },
        parcelas: {
            required: true
        },
    },

    messages: {
        creditCardHolderName: {
            required: "Campo inválido",
        },

        creditCardNumber: {
            required: 'Campo inválido',
        },

        creditCardHolderBirthDate: {
            required: 'Campo inválido',
        },

        creditCardHolderPhone: {
            required: 'Campo inválido',
        },

        senderCPF: {
            required: 'Campo inválido',
        },
        
        validade: {
            required: 'Campo inválido',
        },

        codigoseguranca: {
            required: 'Campo inválido',
        },

        parcelas: {
            required: 'Campo inválido',
        },
    }
});

// Formulário recuperar senha (LOGIN)
const recuperarValidate = $("#form-recuperar");
recuperarValidate.validate({
    rules: {
        email: {
            required: true,
            email: true
        },
    },

    messages: {
        email: {
            required: 'Digite seu email',
            email: 'Email inválido'
        },
    }
});

$('#form-recuperar').submit(function(e){
    e.preventDefault();
    if(recuperarValidate.valid()){
        $.ajax({
            method: "POST",
            url: "/",
            data: { email: $('#form-recuperar-email').val()},
            success: function( msg ) {
                $('#alert-recuperar-success').show();
            },
            error: function( msg ) {
                $('#alert-recuperar-error').show();
            }
        })
    }
});

$('#form-checkout-boleto').submit(function(e){
    $('#boleto-loading').show();
    $('#form-checkout-boleto').find('[type="submit"]').attr('disabled', 'disabled')
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/",
        data: { },
        success: function( msg ) {
            $('#boleto-loading').hide();
            $('#boleto-error').hide();
            $('#boleto-gerado').show();
        },
        error: function(msg){
            $('#boleto-loading').hide();
            $('#boleto-error').show();
            $('#form-checkout-boleto').find('[type="submit"]').attr('disabled', false)
            }
        })
});