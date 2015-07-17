$(function() {


    console.log('jquery loaded')

    //===========================================================================//
                            /* ~~~ Landing page ~~~ */ 
    //===========================================================================//


    //============================== hover text on sub-img ===========================//
    
    $('.img-container').mouseenter(function(){

        var theHover = $(this).find('.hover-container');

        // first two pictures have different dimensions, the third is too skinny at smaller screen sizes to render stuff the same.  

        if ( $(this).hasClass('first-sub') || $(this).hasClass('second-sub') ) {

            theHover.removeClass('hidden').animate({marginTop:'15px'}, 300);

        } else if ( $(this).hasClass('third-sub') ) {

            // Need to only display button if the screen is smaller than 550px wide, b/c third-sub picture height is too small to display any text    
            if ($(window).width() > 550){

                theHover.removeClass('hidden').animate({marginTop:'5px'}, 300);

                theHover.find('.btn').removeClass('hidden');

            } else {

                $(this).find('.btn').removeClass('hidden').animate({marginTop:'30px'},300);
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
    

    
    

















             

