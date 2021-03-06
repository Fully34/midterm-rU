$(function(){

//===========================================================================//
                            /* ~~~ Queue Page ~~~ */ 
//===========================================================================//
   

    //============================== global variables ==============================//

    var quoteArr = ['Engage!', 'Sequence Initiate!', 'Annnd here... We... Go...', 'Makin\'n Moves!', 'Let\'s do this!', '#BOOM', 'No Sweat!', 'Break the wrist. Walk away.', 'JACKPOT!', 'One Small Step For Man!', 'SWEEP THE LEG!', 'Nobody makes me bleed my own blood!', 'We\'re gonna need a bigger boat', 'Heeeeeere\'s Johnny!', 'It\'s party time!', 'ARRGGGHHH,  KELLY CLARKSON!', 'There\'s no crying in baseball!', 'I\'ll have what she\'s having', 'The price is wrong']   

    //HANDLEBARS TEMPLATE COMPILE -- FOR INCOMPLETE TABLE
    var templateScript = $('#table-data-script').html();

    var tableDataTemplate = Handlebars.compile(templateScript);

    var incompleteCustomerData = {customers: [] };

    //HANDLEBARS TEMPLATE COMPILE -- FOR RECENTLY SHIPPED TABLE
    var templateScriptComplete = $('#complete-table-script').html();

    var completeTableTemplate = Handlebars.compile(templateScriptComplete);

    var completeCustomerData = {

        customers: [],

        customersToRender : [] 

    };


    // global var for order numbers
    var orderCount = 1;

    //========================= customer object constructor=========================//


    var Customer = function(order, name, address, type) {

        this.order = order;    
        this.name = name;
        this.address = address || null;
        //===============//
        // NEED TO ALTER THIS WHEN WE LEARN BACK-END STUFF!!!! IE: when somebodies payment goes thru, this gets set to true
        this.paid = true;
        // ==============//
        this.inProgress = false;
        this.complete = false;
        this.shipped = false; 
        this.type = type || null;
        this.progressRando = _.sample(quoteArr, 1);
        this.completeRando = _.sample(quoteArr, 1);
        this.shippedRando = _.sample(quoteArr, 1);
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
        this.dateShipped = new Date();
    }

    // dummy customer 
    // var cust1 = new Customer(orderCount, 'Chris Fullinwider', '123 Awesome St.', 'Rack');
    // var theArray = incompleteCustomerData.customers;

    // theArray.push(cust1);

    //============================== submit button ==============================//

    //only checking if there is actually something there in each input field 
        //> more sophisticated validation will be used in the final site
    var validate = function(string) {

        if ( (string.length <= 0) ) {

            return false;
        }

        return true;
    }

    // create new customer on click and push that customer to current customer array as well as to the table
    $('.submit-customer-btn').on('click', function(event) {

        event.preventDefault();

        // variables set to value of form elements
        var name = $(this).siblings('#name-input').val().toLowerCase();
        var address = $(this).siblings('#address-input').val().toLowerCase();
        var type = $(this).siblings('#type-input').val().toLowerCase();

        // validate the text we extract from the form elements
        var valName = validate(name);
        var valAddress = validate(address);
        var valType = validate(type)

        // FORM VALIDATION
        if (!valName) {

            var errorInName = $(this).siblings('#name-input');
            errorInName.addClass('invalid-form');

            setTimeout(function(){

                $('#name-input').removeClass('invalid-form').val('');
            }, 1000);
        }

        if (!valAddress) {

            var errorInAddress = $(this).siblings('#address-input');
            errorInAddress.addClass('invalid-form');

            setTimeout(function(){

                $('#address-input').removeClass('invalid-form').val('');
            }, 1000);
        }

        if ( (!valType) ) {

            var errorInType = $(this).siblings('#type-input');
            errorInType.addClass('invalid-form');


            setTimeout(function(){

                $('#type-input').removeClass('invalid-form').val('');
            }, 1000);
        }

        // if all inputs have a string in them, proceed with creating the customer
        if (valName && valAddress && valType) {

            var ensure = confirm('Make sure you entered your infomation right! \n\n Name: ' + name + '\n Address: ' + address + '\n Type: ' + type);

            if ( ensure ) {

                // nuke and repave    
                $('.queue-table-body').html('');

                var newCust = new Customer(orderCount, name, address, type); 

                // increment the order count for each new customer created
                orderCount ++;

                var array = incompleteCustomerData.customers;

                array.push(newCust);

                $(this).siblings('#name-input').val('');
                $(this).siblings('#address-input').val('');
                $(this).siblings('#type-input').val('');

                // use handlebars to generate the table on the fly
                $('.queue-table-body').append(tableDataTemplate(incompleteCustomerData));

            } else {

                alert('Fix that stuff then, fool!')
            }
        }
    });
    
    //======================= replacing the button on the queue ==============================//
    
    // find and return customer object based on order number
    var returnTheCustomer = function(orderNum) {

        var arr = incompleteCustomerData.customers;

        // find the customer and set to variable
        var theCustomer = _.find(arr, function(obj) { return obj.order === orderNum; });

        return theCustomer;
    };

    $('.table').on('click', '.table-check', function(){

        // DOM traversal to link action to data inside incompleteCustomerData.customers array 
        var parentRow = $(this).closest('.table-row');
        // need to return data-order attribute as an integer, it returns a string by default
        var orderNumber = parseInt( parentRow.find('.orderData').attr('data-order'), 10);
        var theCustomer = returnTheCustomer(orderNumber);

        if ( theCustomer.paid ) {

            var yesNo = confirm("Are you really done, Cameron?");

            if ( yesNo ) {

                if ( $(this).hasClass('progress-check') ) {

                    $('.queue-table-body').html('');
                    theCustomer.isInProgress();
                    $('.queue-table-body').append(tableDataTemplate(incompleteCustomerData));

                } else if ( $(this).hasClass('complete-check') ) {

                    $('.queue-table-body').html('');
                    theCustomer.isComplete();
                    $('.queue-table-body').append(tableDataTemplate(incompleteCustomerData));

                } else if ( $(this).hasClass('shipped-check') ) {
                    
                    var incompleteArr = incompleteCustomerData.customers;

                    var completeArr = completeCustomerData.customers;
                    var completeArrRender = completeCustomerData.customersToRender;

                    completeArr.push(theCustomer);
                    theCustomer.isShipped();


                    // take this customer out of the incomplete array and push it to the complete array
                        // then push it to template and the completed table
                    for (var i = 0; i < incompleteArr.length; i++) {

                        debugger;

                        if (incompleteArr[i].dateShipped === theCustomer.dateShipped) {

                            var toBeSpliced = i;
                        } 
                    }

                    incompleteArr.splice(toBeSpliced, 1);

                    $('.queue-table-body').html('');
                    $('.queue-table-body').append(tableDataTemplate(incompleteCustomerData));

                    // Add this customer to the customerToRender array in the completeCustomerData object
                    completeArrRender.unshift(theCustomer);
                    if ( completeArrRender.length >= 5) {

                        completeArrRender.length = 5;
                    }

                    $('.shipped-table-body').html('');
                    $('.shipped-table-body').append(completeTableTemplate(completeCustomerData))
                    // $('.shipped-table-body').append(completeTableTemplate(completeCustomerData))

                }

            } else {

                alert("I knew you were lying");
            }

        } else {

            alert("Don't make them anything!  They haven't PAID!")
        }
    });

}); //> end jQuery
