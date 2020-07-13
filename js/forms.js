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