/*--=====================================================
|-Flitrar Elementos                                         |
=======================================================--*/
$(document).ready(function () {

    let $activeEffectbutton = $('.projectArea .buttonGroup button');

    $activeEffectbutton.click(function (e) {

        $('.projectArea .buttonGroup button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projectArea .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.projectArea .buttonGroup #btn1').trigger('click');

    $('.projectArea .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    /*--=====================================================
    |-Animación Efecto Active                         |
    =======================================================--*/
    activeEffectbutton.click(function(){

        if($(this).hasClass('active')){
    
            $(this).removeClass('active');
    
        }else{
    
            $('.projectArea .buttonGroup button').removeClass('active');
            $(this).addClass('active');
    
        }
        
    });

      
});
