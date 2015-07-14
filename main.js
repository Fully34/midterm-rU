$(function() {


    console.log('jquery loaded')

    //===========================================================================//
                            /* ~~~ Landing page ~~~ */ 
    //===========================================================================//


    //============================== hover text on sub-img ==============================//
    
    // Create fresh elements to frankenstein
    var hoverText = function() {

        var els = {

            cont    : $("<div class='container'></div>"),
            title   : $("<h1 class='hover-title'></h1>"),
            par     : $("<p class='hover-description'></p>")
        }

        return els;
    }

    var frankenstein = function(title, description) {

        var els = hoverText();

        var container = els.cont;
        var titleText = els.title;
        var para = els.par;

        //set title text
        titleText.text(title);

        //set description text
        para.text(description);


        container.append(titleText, para);

        return container; 
    }

    // hover effects.
    $('.first-sub').on('mousemove', function() {
        
        

        $(this).css({

            'opacity': '0.3'
        })

        $(this).append()
    });

    $('.sub-img').on('mouseout', function() {

        $(this).css({

            'opacity': '1'
        })
    });
    
});