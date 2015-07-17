// $(function(){

    //===========================================================================//
                            /* ~~~ Make that Shop ~~~ */ 
    //===========================================================================//
   
   var currentShopItems = { allItems : [], visibleItems : [] };

   var ShopItem = function(url, name, description, price, type) {

        this.image = url;
        this.name = name;
        this.desc = description;
        this.price = price;
        this.type = type;
   }

   var threeRackPyr = new ShopItem("https://img1.etsystatic.com/000/0/6226916/il_fullxfull.228901209.jpg", "Three Bottle Rack - Pyramid", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat asperiores modi aspernatur omnis hic sit natus recusandae, saepe, nobis nam?", "$75.00", "wine rack")

   currentShopItems.allItems.push(threeRackPyr);

   var threeRackStack = new ShopItem("http://www.stylemotivation.com/wp-content/uploads/2014/01/24-Creative-and-Classy-Wine-Rack-Designs-14.jpg", "Three Bottle Rack - Stacked", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat asperiores modi aspernatur omnis hic sit natus recusandae, saepe, nobis nam?", "$75.00", "wine rack") 

   currentShopItems.allItems.push(threeRackStack);

   var doubleHeart = new ShopItem("https://s-media-cache-ak0.pinimg.com/originals/4d/da/be/4ddabeda00ed9004b148e32e232e59f6.jpg", "Double Heart with Love", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat asperiores modi aspernatur omnis hic sit natus recusandae, saepe, nobis nam?", "$90.00", "art");

   currentShopItems.allItems.push(doubleHeart)

   var starThing = new ShopItem("https://img0.etsystatic.com/007/0/7323408/il_fullxfull.381721490_1s07.jpg", "Star Thingy", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat asperiores modi aspernatur omnis hic sit natus recusandae, saepe, nobis nam?", "$1000.00", "art")

   currentShopItems.allItems.push(starThing);


   //============================== Handlebars injection ==============================//

   var shopItemTemplateScript = $('#shop-script').html();

   var shopItemTemplate = Handlebars.compile(shopItemTemplateScript);

   $('.list-element').append(shopItemTemplate(currentShopItems));
   
           





































// });