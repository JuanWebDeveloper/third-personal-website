/*--=====================================================
|-Quote alert                                       |
=====================================================--*/
let quoteAlert = () => {
    Swal.fire({
        title: '<span class="alertSendForm">Escribe tu correo y me comunicare lo más pronto posible.</span>',
        html: '<p class="alertSendForm">Espero que podamos trabajar juntos 😊</p>',
        confirmButtonText: 'Enviar',
        grow: 'column',
        backdrop: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: false,
    
        input: 'text',
        inputPlaceholder: 'Ejemplo@gmail.com',
    
        showConfirmButton: true,
        confirmButtonColor: '#37ddbe',
        confirmButtonAriaLabel: 'Entendido',
    
        imageUrl: 'https://github.com/JuanWebDeveloper/third-personal-website/img/quotation.svg',
        imageWidth: '100%',
        imageHeight: '100px'
    
    });
}