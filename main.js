$(function() {


    console.log('jquery loaded')

    //===========================================================================//
                            /* ~~~ Landing page ~~~ */ 
    //===========================================================================//


    //============================== hover text on sub-img ==============================//
    
    $('.img-container').mouseenter(function(){

        var theHover = $(this).find('.hover-container');

        if ( $(this).hasClass('first-sub') || $(this).hasClass('second-sub') ) {

            theHover.removeClass('hidden').animate({marginTop:'15px'},'slow');

        } else if ( $(this).hasClass('third-sub') ) {

           if ($(window).width() > 550){

                theHover.removeClass('hidden').animate({marginTop:'5px'},'slow');
                
                theHover.find('.btn').removeClass('hidden');

            } else {

                $(this).find('.btn').removeClass('hidden').animate({marginTop:'30px'},'slow');
            }
        }
    });

    $('.img-container').mouseleave(function(){

        $(this).find('.hover-container').addClass('hidden').css({

        'margin-top': '-50px'
        })

        $(this).find('.shop-btn').addClass('hidden').css({

            'margin-top': '-20px'
        })
    });


});