/*--=====================================================
|-Variables                                     |
=======================================================--*/
let activeEffectNavigation = $('.homePageStructure .navbar .navigation li a');
let responsiveMenuIcon = $('.homePageStructure .navbar .bar a');
let navbarScrollEffect = $('.homePageStructure .navbar');
let navbarScrollEffectA = $('.homePageStructure .navbar .navigation ul li a');
let navbarScrollEffectAR = $('.homePageStructure .navbar .bar a');
/*--=====================================================
|-Active Effect                                     |
=======================================================--*/
activeEffectNavigation.click(function(){

    if($(this).hasClass('active')){

        $(this).removeClass('active');

    }else{

        $('.homePageStructure .navbar .navigation li a').removeClass('active');
        $(this).addClass('active');

    }

});

/*--=====================================================
|-Navbar Scroll Effect                                  |
=======================================================--*/
$(window).scroll(function(){

	if ($(window).scrollTop() >= 40) {

		navbarScrollEffect.addClass('navbarScroll');
		navbarScrollEffectA.addClass('navbarScrollA');
		navbarScrollEffectAR.addClass('navbarScrollA');

	}else{

		navbarScrollEffect.removeClass('navbarScroll');
		navbarScrollEffectA.removeClass('navbarScrollA');
		navbarScrollEffectAR.removeClass('navbarScrollA');

	}

});

/*--=====================================================
|-Responsive Navbar                                     |
=======================================================--*/
responsiveMenuIcon.click(function() {

	responsiveMenuIcon.after($(".homePageStructure .navbar .navigation").slideToggle("slow"));

});