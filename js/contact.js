/*--=====================================================
|-Validating The Form                                       |
=====================================================--*/
let validateForm = () => {
    //We Remove The Error Message
    $('.warningMessage').remove();

    /*--========================
    |-Variables With Input Values|
    =========================--*/
    let username = $('#username').val();
    let mail = $('#mail').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    let formValidationSentCorrectly = false;

    /*--========================
    |-Validating Name Field    |
    =========================--*/
    if(username == "" || username == null){

        changeBorderColor("username");
        //Warning Message
        warningMessage("Este campo es obligatorio.");
        return false;

    }else{

        let allowedCharacters = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

        if(!allowedCharacters.test(username)){
            //Message Informing That You Must Enter A Valid Name
            changeBorderColor("username");
            warningMessage("No se permiten caracteres especiales o números para este campo.");
            return false;
        }
    }

    /*--========================
    |-Validating Mail Field    |
    =========================--*/
    if(mail == "" || mail == null){

        changeBorderColor("mail");
        //Warning Message
        warningMessage("Este campo es obligatorio.");
        return false;

    }else{

        let allowedCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if(!allowedCharacters.test(mail)){
            //Message Informing That You Must Enter A Valid Mail
            changeBorderColor("mail");
            warningMessage("Este correo no es válido.");
            return false;
        }
    }

    /*--========================
    |-Validating Phone Field    |
    =========================--*/
    if(phone == "" || phone == null){

        changeBorderColor("phone");
        //Warning Message
        warningMessage("Este campo es obligatorio.");
        return false;

    }else{

        let allowedCharacters = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        let allowedCharactersTwo = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

        if(allowedCharacters.test(phone) || !allowedCharactersTwo.test(phone)){
            //Message Informing That You Must Enter A Valid Phone
            changeBorderColor("phone");
            warningMessage("Este número telefónico no es válido.");
            return false;
        }
    }

    /*--========================
    |-Validating Message Field  |
    =========================--*/
    if(message == "" || message == null){

        changeBorderColor("message");
        //Warning Message
        warningMessage("Este campo es obligatorio.");
        return false;

    }else{

        let allowedCharacters = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

        if(!allowedCharacters.test(message)){
            //Message Informing That You Must Enter A Valid Message
            changeBorderColor("message");
            warningMessage("No se permiten caracteres especiales.");
            return false;
        }
    }
    
    /*--=====================================================
    |-Alert Informing That The Form Was Sent Correctly      |
    =====================================================--*/
    formValidationSentCorrectly = true;

    if(formValidationSentCorrectly == true){
        Swal.fire({
            	title: '<span class="alertSendForm">Formulario enviado correctamente</span>',
                html: '<p class="alertSendForm">En unas horas responderé a su correo, gracias por visitar mi página web</p>',
                confirmButtonText: 'Entendido',
                grow: 'column',
                backdrop: true,
                allowOutsideClick: true,
                allowEscapeKey: true,
                allowEnterKey: false,

                showConfirmButton: true,
                confirmButtonColor: '#37ddbe',
                confirmButtonAriaLabel: 'Entendido',

                imageUrl: 'https://vargaspg.github.io/JVwebDeveloper-/img/contact/mainSend.svg',
                imageWidth: '100%',
                imageHeight: '100px',

        }).then((result) =>{
            if (result.isConfirmed) {

                setInterval('sendForm()',500);
                return true;

              }
        });

    }

}

let sendForm = () =>{
    $('form').submit();
}

/*--=====================================================
|-Returning To Defaults After Displaying The Error      |
=====================================================--*/
$('input').focus(function(){
    $('.contactStructure .contactContainer .contactContent form .inputContainer input').css("border", "none");
    $('.warningMessage').remove();
    defaultColorBorder('username');
    defaultColorBorder('mail');
    defaultColorBorder('phone');
});

$('textarea').focus(function(){
    $('.contactStructure .contactContainer .contactContent form .inputContainer textarea').css("border", "none");
    $('.warningMessage').remove();
    defaultColorBorder('message');
});

/*--=====================================================
|-Function To Change The Default Input Border       |
=====================================================--*/
let defaultColorBorder = (fact) => {
    $('#' + fact).css("border", "none");
}

/*--=====================================================
|-Function To Change The Input Edge                    |
=====================================================--*/
let changeBorderColor = (fact) => {
    $('#' + fact).css({
        border: "2px solid #f11400"
    });
}

/*--=====================================================
|-Function To Display Alert Message                     |
=====================================================--*/
let warningMessage = (textError) => {
   $('#username').before(`<div class="warningMessage">Error: ${textError}</div>`); 
}
