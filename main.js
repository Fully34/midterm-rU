// $(function() {


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


    //===========================================================================//
                            /* ~~~ Queue Page ~~~ */ 
    //===========================================================================//
   

    //============================== global variables ==============================//

    var progressArr = ['Engage!', 'Sequence Initiate!', 'And... Here... We... Go...', 'Makin\'n Moves!', 'Let\'s Do This!' ]   

    var completeArr = ['#BOOM', 'No Sweat!', 'I Will Take All Challengers!'];

    var incompleteCustomerArr = [];

    var completeCustomerArr = [];

    // global var for order numbers
    var orderCount = 1;

    //========================= customer object constructor=========================//

    var Customer = function(order, name, address) {
        this.order = order;    
        this.name = name;
        this.address = address;
        this.paid = null;
        this.inProgress = null;
        this.complete = null;
        this.shipped = null; 
        this.type = null;
    }

    Customer.prototype.isPaid = function() {

        this.paid = true;
    }

    Customer.prototype.isInProgress = function() {

        this.inProgress = true;
    }

    Customer.prototype.isComplete = function() {

        this.complete = true;
    }

    Customer.prototype.isShipped = function() {

        this.shipped = true;
    }


    var cust1 = new Customer(1, "myName", "123 awesome street, awesomeville, CO, 83874" );
    console.log("cust1 " + cust1)


    //============================== submit button ==============================//

    // create new customer on click and push that customer to current customer array as well as to the table
    $('.submit-customer-btn').on('click', function(event) {

        event.preventDefault();

        var name = $(this).siblings('#name-input').val().toLowerCase();
        var address = $(this).siblings('#address-input').val().toLowerCase();
        var type = $(this).siblings('#type-input').val().toLowerCase();

        var valName = validate(name);
        var valAddress = validate(address);
        var valType = validate(type)

        // check each input for value
        if (!valName) {

            $(this).siblings('#name-input').addClass('invalid-form');
        }

        if (!valAddress) {

            $(this).siblings('#address-input').addClass('invalid-form');
        }

        if (!valType) {

            $(this).siblings('#type-input').addClass('invalid-form');
        }

        // if all inputs have a string in them, proceed with creating the customer
        if (valName && valAddress && valType) {

            var newCust = new Customer(); 

            makeNewCust(newCust, name, address, type, orderCount);

            // increment the order count for each new customer created
            orderCount ++;

            incompleteCustomerArr.push(newCust);

            $(this).siblings('#name-input').val('');
            $(this).siblings('#address-input').val('');
            $(this).siblings('#type-input').val('');
        }
    });
            
    var validate = function(string) {

        if ( (string.length <= 0) ) {

            return false;
        }

        return true;
    }

    var makeNewCust = function(obj, name, address, type, order) {
        obj.name = name;
        obj.address = address;
        obj.type = type;
        obj.order = orderCount;
    };
























             


// });