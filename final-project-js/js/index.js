$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      autoplay: true,
      margin: 10,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    });
    
    $("#logo")[0].onclick = function(){
      $("main").html(``);
      homePagePortal();
    }

    $(".header-clothing")[0].onclick = function(){
      $("main").html(``);
     homePagePortal();
    }

    $(".header-accessories")[0].onclick = function(){
      $("main").html(``);
     homePagePortal();
    }

    // $(".add-card i")[0].onclick= function(){
    //   $("main").html(``);
    //   itemCount();
    // }
    
    function homePagePortal(){
      //console.log("lokesh dhakad")

      
      
      $("main").html(``);
    
      $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product" , function(productData){
        console.log(productData);

       
//===================Clothing Start=========================

        var clothHeading = $("<h1>Clothing for Men and Women<h1>") ;
        clothHeading.attr("class" ,"heading");
        $("main").append(clothHeading);
        
        var clothDiv = $("<div></div>");
        clothDiv.attr("class","clothing");
        clothDiv.attr("for" , "#cloth-section");
        $("main").append(clothDiv); 

        
         
        
        var innerBox1 = $("<div></div>");
        innerBox1.attr("id","inner-box1");
        innerBox1.attr("class" ,"inner-box");
        $(".clothing").append(innerBox1);

        var img1 = $("<img>");
        img1.attr("src" ,productData[0].preview);
        $("#inner-box1").append(img1);

        var name1 =$(`<h3>${productData[0].name}</h3>`);
        name1.attr("class","name");
        $("#inner-box1").append(name1);

        var para1 = $(`<p>${productData[0].brand}</p>`);
       para1.attr("class","para")
        $("#inner-box1").append(para1);

        var price1 = $(`<h3>Rs: ${productData[0].price}</h3>`);
        price1.attr("class","price");
        $("#inner-box1").append(price1);

        $(img1).on("click",function(){
          cardProduct(productData);
        })
        
       

        //======================================

        var innerBox2 = $("<div></div>");
        innerBox2.attr("id","inner-box2");
        innerBox2.attr("class" ,"inner-box");
        $(".clothing").append(innerBox2);

        var img2 = $("<img>");
        img2.attr("src" ,productData[1].preview);
        $("#inner-box2").append(img2);

        var name2 =$(`<h3>${productData[1].name}</h3>`);
        name2.attr("class","name");
        $("#inner-box2").append(name2);

        var para2 = $(`<p>${productData[1].brand}</p>`);
       para2.attr("class","para")
        $("#inner-box2").append(para2);

        var price2 = $(`<h3>Rs: ${productData[1].price}</h3>`);
        price2.attr("class","price");
        $("#inner-box2").append(price2);

        $(img2).on("click",function(){
          cardProduct1(productData);
        })
        
        //======================================

        var innerBox3 = $("<div></div>");
        innerBox3.attr("id","inner-box3");
        innerBox3.attr("class" ,"inner-box");
        $(".clothing").append(innerBox3);


        var img3 = $("<img>");
        img3.attr("src" ,productData[2].preview);
        $("#inner-box3").append(img3);

        var name3 =$(`<h3>${productData[2].name}</h3>`);
        name3.attr("class","name");
        $("#inner-box3").append(name3);

        var para3 = $(`<p>${productData[2].brand}</p>`);
       para3.attr("class","para")
        $("#inner-box3").append(para3);

        var price3 = $(`<h3>Rs: ${productData[2].price}</h3>`);
        price3.attr("class","price");
        $("#inner-box3").append(price3);
        
        $(img3).on("click",function(){
          cardProduct2(productData);
        })
        //==============================


        var innerBox4 = $("<div></div>");
        innerBox4.attr("id","inner-box4");
        innerBox4.attr("class" ,"inner-box");
        $(".clothing").append(innerBox4);

        var img4 = $("<img>");
        img4.attr("src" ,productData[3].preview);
        $("#inner-box4").append(img4);

        var name4 =$(`<h3>${productData[3].name}</h3>`);
        name4.attr("class","name");
        $("#inner-box4").append(name4);

        var para4 = $(`<p>${productData[3].brand}</p>`);
       para4.attr("class","para")
        $("#inner-box4").append(para4);

        var price4 = $(`<h3>Rs: ${productData[3].price}</h3>`);
        price4.attr("class","price");
        $("#inner-box4").append(price4);

        $(img4).on("click",function(){
          cardProduct3(productData);
        })

        //======================================

        var innerBox5 = $("<div></div>");
        innerBox5.attr("id","inner-box5");
        innerBox5.attr("class" ,"inner-box");
        $(".clothing").append(innerBox5);

        var img5 = $("<img>");
        img5.attr("src" ,productData[4].preview);
        $("#inner-box5").append(img5);

        var name5 =$(`<h3>${productData[4].name}</h3>`);
        name5.attr("class","name");
        $("#inner-box5").append(name5);

        var para5 = $(`<p>${productData[4].brand}</p>`);
       para5.attr("class","para")
        $("#inner-box5").append(para5);

        var price5 = $(`<h3>Rs: ${productData[4].price}</h3>`);
        price5.attr("class","price");
        $("#inner-box5").append(price5);

        $(img5).on("click",function(){
          cardProduct4(productData);
        })

//============================clothing End==========================
//===========================Accessory strat=======================

var accessoryHeading = $("<h1>Accessories for Men and Women<h1>") ;
accessoryHeading.attr("class" ,"heading");
$("main").append(accessoryHeading);

var accessDiv = $("<div></div>");
        accessDiv.attr("class","accessory")
        $("main").append(accessDiv);

 
        var innerBox6 = $("<div></div>");
        innerBox6.attr("id","inner-box6");
        innerBox6.attr("class" ,"inner-box");
        $(".accessory").append(innerBox6);

        var img6 = $("<img>");
        img6.attr("src" ,productData[5].preview);
        $("#inner-box6").append(img6);

        var name6 =$(`<h3>${productData[5].name}</h3>`);
        name6.attr("class","name");
        $("#inner-box6").append(name6);

        var para6 = $(`<p>${productData[5].brand}</p>`);
       para6.attr("class","para")
        $("#inner-box6").append(para6);

        var price6 = $(`<h3>Rs: ${productData[5].price}</h3>`);
        price6.attr("class","price");
        $("#inner-box6").append(price6);

        $(img6).on("click",function(){
          cardProduct5(productData);
        })

       //======================================

       var innerBox7 = $("<div></div>");
        innerBox7.attr("id","inner-box7");
        innerBox7.attr("class" ,"inner-box");
        $(".accessory").append(innerBox7);

        var img7 = $("<img>");
        img7.attr("src" ,productData[6].preview);
        $("#inner-box7").append(img7);

        var name7 =$(`<h3>${productData[6].name}</h3>`);
        name7.attr("class","name");
        $("#inner-box7").append(name7);

        var para7 = $(`<p>${productData[6].brand}</p>`);
       para7.attr("class","para")
        $("#inner-box7").append(para7);

        var price7 = $(`<h3>Rs: ${productData[6].price}</h3>`);
        price7.attr("class","price");
        $("#inner-box7").append(price7);

        $(img7).on("click",function(){
          cardProduct6(productData);
        })

        //===========================================

        var innerBox8 = $("<div></div>");
        innerBox8.attr("id","inner-box8");
        innerBox8.attr("class" ,"inner-box");
        $(".accessory").append(innerBox8);

        var img8 = $("<img>");
        img8.attr("src" ,productData[7].preview);
        $("#inner-box8").append(img8);

        var name8 =$(`<h3>${productData[7].name}</h3>`);
        name8.attr("class","name");
        $("#inner-box8").append(name8);

        var para8 = $(`<p>${productData[7].brand}</p>`);
       para8.attr("class","para")
        $("#inner-box8").append(para8);

        var price8 = $(`<h3>Rs: ${productData[7].price}</h3>`);
        price8.attr("class","price");
        $("#inner-box8").append(price8);

        $(img8).on("click",function(){
          cardProduct7(productData);
        })


       //============================================

       var innerBox9 = $("<div></div>");
        innerBox9.attr("id","inner-box9");
        innerBox9.attr("class" ,"inner-box");
        $(".accessory").append(innerBox9);


        var img9 = $("<img>");
        img9.attr("src" ,productData[8].preview);
        $("#inner-box9").append(img9);

        var name9 =$(`<h3>${productData[8].name}</h3>`);
        name9.attr("class","name");
        $("#inner-box9").append(name9);

        var para9 = $(`<p>${productData[8].brand}</p>`);
       para9.attr("class","para")
        $("#inner-box9").append(para9);

        var price9 = $(`<h3>Rs: ${productData[8].price}</h3>`);
        price9.attr("class","price");
        $("#inner-box9").append(price9);

        $(img9).on("click",function(){
          cardProduct8(productData);
        })

        
        //==================================

        var innerBox10 = $("<div></div>");
        innerBox10.attr("id","inner-box10");
        innerBox10.attr("class" ,"inner-box");
        $(".accessory").append(innerBox10);

        var img10 = $("<img>");
        img10.attr("src" ,productData[9].preview);
        $("#inner-box10").append(img10);

        var name10 =$(`<h3>${productData[9].name}</h3>`);
        name10.attr("class","name");
        $("#inner-box10").append(name10);

        var para10 = $(`<p>${productData[9].brand}</p>`);
       para10.attr("class","para")
        $("#inner-box10").append(para10);

        var price10 = $(`<h3>Rs: ${productData[9].price}</h3>`);
        price10.attr("class","price");
        $("#inner-box10").append(price10);

        $(img10).on("click",function(){
          cardProduct9(productData);
        })
//===========================Accessory Ends=========================
    
    })
    
    var count=1;

    function cardProduct(data){
     // console.log(data);
        $("main").html(``);
        
        
         var cardMainDiv = $("<div></div>");
         cardMainDiv.attr("class" , "card-container");
         $("main").append(cardMainDiv);

         var mainBox = $("<div></div>");
         mainBox.attr("class" , "main-box");
         $(".card-container").append(mainBox);

         var leftImg = $("<div></div>");
         leftImg.attr("class" , "left-img");
         $(".main-box").append(leftImg);

         var clothImg = $("<img>");
         clothImg.attr("src" ,data[0].preview );
         clothImg.attr("class" , "cloth-img");
         $(".left-img").append(clothImg);

         var cardTextDiv = $("<div></div>");
         cardTextDiv.attr("class","card-text-div");
         $(".left-img").append(cardTextDiv);

         var cardHead = $(`<h1>${data[0].name}</h1>`);
         $(".card-text-div").append(cardHead);

         var cardBrand = $(`<h3>${data[0].brand}</h3>`);
         $(".card-text-div").append(cardBrand);

         var cardPrice = $(`<h2>Price Rs: ${data[0].price}</h2>`);
         cardPrice.attr("class","card-price");
         $(".card-text-div").append(cardPrice);

         var cardDescription = $("<h2>Description</h2>");
         $(".card-text-div").append(cardDescription);

         var cardPara = $(`<p>${data[0].description}</p>`);
         $(".card-text-div").append(cardPara);

         var cardProductPreview = $("<h2>Product Preview</h2>");
         $(".card-text-div").append(cardProductPreview);

         var cardPhotos = $("<div></div>");
         cardPhotos.attr("class" , "card-photos");
         $(".card-text-div").append(cardPhotos);



         
          
          var photosImg0 = $("<img>");
          photosImg0.attr("src" , data[0].photos[0]);
          
          photosImg0.on("click",function(){
          clothImg.attr("src",data[0].photos[0]);
         
          })
          $(".card-photos").append(photosImg0);

          var photosImg1 = $("<img>");
          photosImg1.attr("src" , data[0].photos[1]);
          
          photosImg1.on("click",function(){
          clothImg.attr("src",data[0].photos[1]);
          
         
          })
          $(".card-photos").append(photosImg1);

          var photosImg2 = $("<img>");
          photosImg2.attr("src" , data[0].photos[2]);
          
          photosImg2.on("click",function(){
          clothImg.attr("src",data[0].photos[2]);
          
          })
          $(".card-photos").append(photosImg2);

          var photosImg3 = $("<img>");
          photosImg3.attr("src" , data[0].photos[3]);
          
          photosImg3.on("click",function(){
          clothImg.attr("src",data[0].photos[3]);
          
          })
          $(".card-photos").append(photosImg3);

          var photosImg4 = $("<img>");
          photosImg4.attr("src" , data[0].photos[4]);
          
          photosImg4.on("click",function(){
          clothImg.attr("src",data[0].photos[4]);
          
          })
          $(".card-photos").append(photosImg4);

          var addToCardDiv = $("<div></div>");
          addToCardDiv.attr("class" , "add-to-card");
          $(".card-text-div").append(addToCardDiv);

          var addToCard = $("<button>Add to Card</button>");
          $(".add-to-card").append(addToCard);

          
          addToCard.on("click" , function(){
            $(".add-card p").html(count);
            count=count + 1;

            $(".add-card i")[0].onclick= function(){
              $("section").html(``);
              
              itemCount(count);
              //console.log(count);
            }
          })
          
          function itemCount(a){


            var checkout = $("<h1>Checkout</h1>")
            checkout.attr("class","check-out");
            $("section").append(checkout);

            var totalItem = $("<h3>Total Item: 1</h3>");
            totalItem.attr("class","total-item");
            $("section").append(totalItem);

            var itemCountDiv = $("<div></div>");
            itemCountDiv.attr("class" ,"item-count-div");
            $("section").append(itemCountDiv)

            
            var leftItemCount = $("<div></div>");
            leftItemCount.attr("class" ,"left-item");
            $(".item-count-div").append(leftItemCount);

            var leftItemImg = $("<img>");
            leftItemImg.attr("src" , data[0].preview);
            $(".left-item").append(leftItemImg);

            var leftItemText =$("<div><div>")
            leftItemText.attr("class","left-text");
            $(".left-item").append(leftItemText);


            var leftItemName =$(`<h3>${data[0].name}</h3>`);
            $(".left-text").append(leftItemName);

            var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
            $(".left-text").append(leftItemNo);

            var totalPrice = $(`<p>Amount: Rs  ${data[0].price * (a-1)}</p>`);
            $(".left-text").append(totalPrice);

           
            var rightItem = $("<div></div>");
            rightItem.attr("class","right-box");
            $(".item-count-div").append(rightItem);

            var totalAmount =$("<h1>Total Amount</h1>");
            $(".right-box").append(totalAmount);

            var amountRs =$(`<h3>Amount: Rs ${data[0].price * (a-1)}</h3>`);
            $(".right-box").append(amountRs);
            

            var submitBtn = $("<button>Place Order</button>");
            submitBtn.attr("class","submit-btn")
            $(".right-box").append(submitBtn);

            $(".submit-btn")[0].onclick = function(){
              $("section").html(``);
              orderPlaced();

              $(".add-card p").html("0");
            }

            
          }
         

        }

       
        

//=====================================================================

        function cardProduct1(data){
           console.log(data);
             $("main").html(``);
             
             
              var cardMainDiv = $("<div></div>");
              cardMainDiv.attr("class" , "card-container");
              $("main").append(cardMainDiv);
     
              var mainBox = $("<div></div>");
              mainBox.attr("class" , "main-box");
              $(".card-container").append(mainBox);
     
              var leftImg = $("<div></div>");
              leftImg.attr("class" , "left-img");
              $(".main-box").append(leftImg);
     
              var clothImg = $("<img>");
              clothImg.attr("src" ,data[1].preview );
              clothImg.attr("class" , "cloth-img");
              $(".left-img").append(clothImg);
     
              var cardTextDiv = $("<div></div>");
              cardTextDiv.attr("class","card-text-div");
              $(".left-img").append(cardTextDiv);
     
              var cardHead = $(`<h1>${data[1].name}</h1>`);
              $(".card-text-div").append(cardHead);
     
              var cardBrand = $(`<h3>${data[1].brand}</h3>`);
              $(".card-text-div").append(cardBrand);
     
              var cardPrice = $(`<h2>Price Rs: ${data[1].price}</h2>`);
              cardPrice.attr("class","card-price");
              $(".card-text-div").append(cardPrice);
     
              var cardDescription = $("<h2>Description</h2>");
              $(".card-text-div").append(cardDescription);
     
              var cardPara = $(`<p>${data[1].description}</p>`);
              $(".card-text-div").append(cardPara);
     
              var cardProductPreview = $("<h2>Product Preview</h2>");
              $(".card-text-div").append(cardProductPreview);
     
              var cardPhotos = $("<div></div>");
              cardPhotos.attr("class" , "card-photos");
              $(".card-text-div").append(cardPhotos);
     
     
     
              
               
               var photosImg0 = $("<img>");
               photosImg0.attr("src" , data[1].photos[0]);
               
               photosImg0.on("click",function(){
               clothImg.attr("src",data[1].photos[0]);
              
               })
               $(".card-photos").append(photosImg0);
     
               var photosImg1 = $("<img>");
               photosImg1.attr("src" , data[1].photos[1]);
               
               photosImg1.on("click",function(){
               clothImg.attr("src",data[1].photos[1]);
               
              
               })
               $(".card-photos").append(photosImg1);
     
               var photosImg2 = $("<img>");
               photosImg2.attr("src" , data[1].photos[2]);
               
               photosImg2.on("click",function(){
               clothImg.attr("src",data[1].photos[2]);
               
               })
               $(".card-photos").append(photosImg2);
     
               
     
               var addToCardDiv = $("<div></div>");
               addToCardDiv.attr("class" , "add-to-card");
               $(".card-text-div").append(addToCardDiv);
     
               var addToCard = $("<button>Add to Card</button>");
               $(".add-to-card").append(addToCard);



               addToCard.on("click" , function(){
                $(".add-card p").html(count);
                count=count + 1;
    
                $(".add-card i")[0].onclick= function(){
                  $("section").html(``);
                  
                  itemCount1(count);
                  //console.log(count);
                }
              })
              
              function itemCount1(a){
    
    
                var checkout = $("<h1>Checkout</h1>")
                checkout.attr("class","check-out");
                $("section").append(checkout);
    
                var totalItem = $("<h3>Total Item: 1</h3>");
                totalItem.attr("class","total-item");
                $("section").append(totalItem);
    
                var itemCountDiv = $("<div></div>");
                itemCountDiv.attr("class" ,"item-count-div");
                $("section").append(itemCountDiv)
    
                
                var leftItemCount = $("<div></div>");
                leftItemCount.attr("class" ,"left-item");
                $(".item-count-div").append(leftItemCount);
    
                var leftItemImg = $("<img>");
                leftItemImg.attr("src" , data[1].preview);
                $(".left-item").append(leftItemImg);
    
                var leftItemText =$("<div><div>")
                leftItemText.attr("class","left-text");
                $(".left-item").append(leftItemText);
    
    
                var leftItemName =$(`<h3>${data[1].name}</h3>`);
                $(".left-text").append(leftItemName);
    
                var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                $(".left-text").append(leftItemNo);
    
                var totalPrice = $(`<p>Amount: Rs  ${data[1].price * (a-1)}</p>`);
                $(".left-text").append(totalPrice);
    
               
                var rightItem = $("<div></div>");
                rightItem.attr("class","right-box");
                $(".item-count-div").append(rightItem);
    
                var totalAmount =$("<h1>Total Amount</h1>");
                $(".right-box").append(totalAmount);
    
                var amountRs =$(`<h3>Amount: Rs ${data[1].price * (a-1)}</h3>`);
                $(".right-box").append(amountRs);
                
    
                var submitBtn = $("<button>Place Order</button>");
                submitBtn.attr("class","submit-btn")
                $(".right-box").append(submitBtn);

                $(".submit-btn")[0].onclick = function(){
                  $("section").html(``);
                  orderPlaced();

                  $(".add-card p").html("0");
                }
                
              }
     
             }

//========================================================================


             function cardProduct2(data){
              // console.log(data);
                 $("main").html(``);
                 
                 
                  var cardMainDiv = $("<div></div>");
                  cardMainDiv.attr("class" , "card-container");
                  $("main").append(cardMainDiv);
         
                  var mainBox = $("<div></div>");
                  mainBox.attr("class" , "main-box");
                  $(".card-container").append(mainBox);
         
                  var leftImg = $("<div></div>");
                  leftImg.attr("class" , "left-img");
                  $(".main-box").append(leftImg);
         
                  var clothImg = $("<img>");
                  clothImg.attr("src" ,data[2].preview );
                  clothImg.attr("class" , "cloth-img");
                  $(".left-img").append(clothImg);
         
                  var cardTextDiv = $("<div></div>");
                  cardTextDiv.attr("class","card-text-div");
                  $(".left-img").append(cardTextDiv);
         
                  var cardHead = $(`<h1>${data[2].name}</h1>`);
                  $(".card-text-div").append(cardHead);
         
                  var cardBrand = $(`<h3>${data[2].brand}</h3>`);
                  $(".card-text-div").append(cardBrand);
         
                  var cardPrice = $(`<h2>Price Rs: ${data[2].price}</h2>`);
                  cardPrice.attr("class","card-price");
                  $(".card-text-div").append(cardPrice);
         
                  var cardDescription = $("<h2>Description</h2>");
                  $(".card-text-div").append(cardDescription);
         
                  var cardPara = $(`<p>${data[2].description}</p>`);
                  $(".card-text-div").append(cardPara);
         
                  var cardProductPreview = $("<h2>Product Preview</h2>");
                  $(".card-text-div").append(cardProductPreview);
         
                  var cardPhotos = $("<div></div>");
                  cardPhotos.attr("class" , "card-photos");
                  $(".card-text-div").append(cardPhotos);
         
         
         
                  
                   
                   var photosImg0 = $("<img>");
                   photosImg0.attr("src" , data[2].photos[0]);
                   
                   photosImg0.on("click",function(){
                   clothImg.attr("src",data[2].photos[0]);
                  
                   })
                   $(".card-photos").append(photosImg0);
         
                   var photosImg1 = $("<img>");
                   photosImg1.attr("src" , data[2].photos[1]);
                   
                   photosImg1.on("click",function(){
                   clothImg.attr("src",data[2].photos[1]);
                   
                  
                   })
                   $(".card-photos").append(photosImg1);
         
                   var photosImg2 = $("<img>");
                   photosImg2.attr("src" , data[2].photos[2]);
                   
                   photosImg2.on("click",function(){
                   clothImg.attr("src",data[2].photos[2]);
                   
                   })
                   $(".card-photos").append(photosImg2);
         
                   var photosImg3 = $("<img>");
                   photosImg3.attr("src" , data[2].photos[3]);
                   
                   photosImg3.on("click",function(){
                   clothImg.attr("src",data[2].photos[3]);
                   
                   })
                   $(".card-photos").append(photosImg3);
         
                   var photosImg4 = $("<img>");
                   photosImg4.attr("src" , data[2].photos[4]);
                   
                   photosImg4.on("click",function(){
                   clothImg.attr("src",data[2].photos[4]);
                   
                   })
                   $(".card-photos").append(photosImg4);


                   var photosImg5 = $("<img>");
                   photosImg5.attr("src" , data[2].photos[5]);
                   
                   photosImg5.on("click",function(){
                   clothImg.attr("src",data[2].photos[5]);
                   
                   })
                   $(".card-photos").append(photosImg5);
         
                   var addToCardDiv = $("<div></div>");
                   addToCardDiv.attr("class" , "add-to-card");
                   $(".card-text-div").append(addToCardDiv);
         
                   var addToCard = $("<button>Add to Card</button>");
                   $(".add-to-card").append(addToCard);


                   addToCard.on("click" , function(){
                    $(".add-card p").html(count);
                    count=count + 1;
        
                    $(".add-card i")[0].onclick= function(){
                      $("section").html(``);
                      
                      itemCount2(count);
                      //console.log(count);
                    }
                  })
                  
                  function itemCount2(a){
        
        
                    var checkout = $("<h1>Checkout</h1>")
                    checkout.attr("class","check-out");
                    $("section").append(checkout);
        
                    var totalItem = $("<h3>Total Item: 1</h3>");
                    totalItem.attr("class","total-item");
                    $("section").append(totalItem);
        
                    var itemCountDiv = $("<div></div>");
                    itemCountDiv.attr("class" ,"item-count-div");
                    $("section").append(itemCountDiv)
        
                    
                    var leftItemCount = $("<div></div>");
                    leftItemCount.attr("class" ,"left-item");
                    $(".item-count-div").append(leftItemCount);
        
                    var leftItemImg = $("<img>");
                    leftItemImg.attr("src" , data[2].preview);
                    $(".left-item").append(leftItemImg);
        
                    var leftItemText =$("<div><div>")
                    leftItemText.attr("class","left-text");
                    $(".left-item").append(leftItemText);
        
        
                    var leftItemName =$(`<h3>${data[2].name}</h3>`);
                    $(".left-text").append(leftItemName);
        
                    var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                    $(".left-text").append(leftItemNo);
        
                    var totalPrice = $(`<p>Amount: Rs  ${data[2].price * (a-1)}</p>`);
                    $(".left-text").append(totalPrice);
        
                   
                    var rightItem = $("<div></div>");
                    rightItem.attr("class","right-box");
                    $(".item-count-div").append(rightItem);
        
                    var totalAmount =$("<h1>Total Amount</h1>");
                    $(".right-box").append(totalAmount);
        
                    var amountRs =$(`<h3>Amount: Rs ${data[2].price * (a-1)}</h3>`);
                    $(".right-box").append(amountRs);
                    
        
                    var submitBtn = $("<button>Place Order</button>");
                    submitBtn.attr("class","submit-btn")
                    $(".right-box").append(submitBtn);

                    $(".submit-btn")[0].onclick = function(){
                      $("section").html(``);
                      orderPlaced();

                      $(".add-card p").html("0");
        
                    }
                  }
                   
                 }
//===========================================================================


                 function cardProduct3(data){
                  // console.log(data);
                     $("main").html(``);
                     
                     
                      var cardMainDiv = $("<div></div>");
                      cardMainDiv.attr("class" , "card-container");
                      $("main").append(cardMainDiv);
             
                      var mainBox = $("<div></div>");
                      mainBox.attr("class" , "main-box");
                      $(".card-container").append(mainBox);
             
                      var leftImg = $("<div></div>");
                      leftImg.attr("class" , "left-img");
                      $(".main-box").append(leftImg);
             
                      var clothImg = $("<img>");
                      clothImg.attr("src" ,data[3].preview );
                      clothImg.attr("class" , "cloth-img");
                      $(".left-img").append(clothImg);
             
                      var cardTextDiv = $("<div></div>");
                      cardTextDiv.attr("class","card-text-div");
                      $(".left-img").append(cardTextDiv);
             
                      var cardHead = $(`<h1>${data[3].name}</h1>`);
                      $(".card-text-div").append(cardHead);
             
                      var cardBrand = $(`<h3>${data[3].brand}</h3>`);
                      $(".card-text-div").append(cardBrand);
             
                      var cardPrice = $(`<h2>Price Rs: ${data[3].price}</h2>`);
                      cardPrice.attr("class","card-price");
                      $(".card-text-div").append(cardPrice);
             
                      var cardDescription = $("<h2>Description</h2>");
                      $(".card-text-div").append(cardDescription);
             
                      var cardPara = $(`<p>${data[3].description}</p>`);
                      $(".card-text-div").append(cardPara);
             
                      var cardProductPreview = $("<h2>Product Preview</h2>");
                      $(".card-text-div").append(cardProductPreview);
             
                      var cardPhotos = $("<div></div>");
                      cardPhotos.attr("class" , "card-photos");
                      $(".card-text-div").append(cardPhotos);
             
             
             
                      
                       
                       var photosImg0 = $("<img>");
                       photosImg0.attr("src" , data[3].photos[0]);
                       
                       photosImg0.on("click",function(){
                       clothImg.attr("src",data[3].photos[0]);
                      
                       })
                       $(".card-photos").append(photosImg0);
             
                       var photosImg1 = $("<img>");
                       photosImg1.attr("src" , data[3].photos[1]);
                       
                       photosImg1.on("click",function(){
                       clothImg.attr("src",data[3].photos[1]);
                       
                      
                       })
                       $(".card-photos").append(photosImg1);
             
                       var photosImg2 = $("<img>");
                       photosImg2.attr("src" , data[3].photos[2]);
                       
                       photosImg2.on("click",function(){
                       clothImg.attr("src",data[3].photos[2]);
                       
                       })
                       $(".card-photos").append(photosImg2);
             
                       var photosImg3 = $("<img>");
                       photosImg3.attr("src" , data[3].photos[3]);
                       
                       photosImg3.on("click",function(){
                       clothImg.attr("src",data[3].photos[3]);
                       
                       })
                       $(".card-photos").append(photosImg3);
             
                       var photosImg4 = $("<img>");
                       photosImg4.attr("src" , data[3].photos[4]);
                       
                       photosImg4.on("click",function(){
                       clothImg.attr("src",data[3].photos[4]);
                       
                       })
                       $(".card-photos").append(photosImg4);
             
                       var addToCardDiv = $("<div></div>");
                       addToCardDiv.attr("class" , "add-to-card");
                       $(".card-text-div").append(addToCardDiv);
             
                       var addToCard = $("<button>Add to Card</button>");
                       $(".add-to-card").append(addToCard);


                       

                       addToCard.on("click" , function(){
                        $(".add-card p").html(count);
                        count=count + 1;
            
                        $(".add-card i")[0].onclick= function(){
                          $("section").html(``);
                          
                          itemCount3(count);
                          //console.log(count);
                        }
                      })
                      
                      function itemCount3(a){
            
            
                        var checkout = $("<h1>Checkout</h1>")
                        checkout.attr("class","check-out");
                        $("section").append(checkout);
            
                        var totalItem = $("<h3>Total Item: 1</h3>");
                        totalItem.attr("class","total-item");
                        $("section").append(totalItem);
            
                        var itemCountDiv = $("<div></div>");
                        itemCountDiv.attr("class" ,"item-count-div");
                        $("section").append(itemCountDiv)
            
                        
                        var leftItemCount = $("<div></div>");
                        leftItemCount.attr("class" ,"left-item");
                        $(".item-count-div").append(leftItemCount);
            
                        var leftItemImg = $("<img>");
                        leftItemImg.attr("src" , data[3].preview);
                        $(".left-item").append(leftItemImg);
            
                        var leftItemText =$("<div><div>")
                        leftItemText.attr("class","left-text");
                        $(".left-item").append(leftItemText);
            
            
                        var leftItemName =$(`<h3>${data[3].name}</h3>`);
                        $(".left-text").append(leftItemName);
            
                        var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                        $(".left-text").append(leftItemNo);
            
                        var totalPrice = $(`<p>Amount: Rs  ${data[3].price * (a-1)}</p>`);
                        $(".left-text").append(totalPrice);
            
                       
                        var rightItem = $("<div></div>");
                        rightItem.attr("class","right-box");
                        $(".item-count-div").append(rightItem);
            
                        var totalAmount =$("<h1>Total Amount</h1>");
                        $(".right-box").append(totalAmount);
            
                        var amountRs =$(`<h3>Amount: Rs ${data[3].price * (a-1)}</h3>`);
                        $(".right-box").append(amountRs);
                        
            
                        var submitBtn = $("<button>Place Order</button>");
                        submitBtn.attr("class","submit-btn")
                        $(".right-box").append(submitBtn);

                        $(".submit-btn")[0].onclick = function(){
                          $("section").html(``);
                          orderPlaced();

                          $(".add-card p").html("0");
            
                        }
                      }
             
                     }
//=========================================================================


                     function cardProduct4(data){
                      // console.log(data);
                         $("main").html(``);
                         
                         
                          var cardMainDiv = $("<div></div>");
                          cardMainDiv.attr("class" , "card-container");
                          $("main").append(cardMainDiv);
                 
                          var mainBox = $("<div></div>");
                          mainBox.attr("class" , "main-box");
                          $(".card-container").append(mainBox);
                 
                          var leftImg = $("<div></div>");
                          leftImg.attr("class" , "left-img");
                          $(".main-box").append(leftImg);
                 
                          var clothImg = $("<img>");
                          clothImg.attr("src" ,data[4].preview );
                          clothImg.attr("class" , "cloth-img");
                          $(".left-img").append(clothImg);
                 
                          var cardTextDiv = $("<div></div>");
                          cardTextDiv.attr("class","card-text-div");
                          $(".left-img").append(cardTextDiv);
                 
                          var cardHead = $(`<h1>${data[4].name}</h1>`);
                          $(".card-text-div").append(cardHead);
                 
                          var cardBrand = $(`<h3>${data[4].brand}</h3>`);
                          $(".card-text-div").append(cardBrand);
                 
                          var cardPrice = $(`<h2>Price Rs: ${data[4].price}</h2>`);
                          cardPrice.attr("class","card-price");
                          $(".card-text-div").append(cardPrice);
                 
                          var cardDescription = $("<h2>Description</h2>");
                          $(".card-text-div").append(cardDescription);
                 
                          var cardPara = $(`<p>${data[4].description}</p>`);
                          $(".card-text-div").append(cardPara);
                 
                          var cardProductPreview = $("<h2>Product Preview</h2>");
                          $(".card-text-div").append(cardProductPreview);
                 
                          var cardPhotos = $("<div></div>");
                          cardPhotos.attr("class" , "card-photos");
                          $(".card-text-div").append(cardPhotos);
                 
                 
                 
                          
                           
                           var photosImg0 = $("<img>");
                           photosImg0.attr("src" , data[4].photos[0]);
                           
                           photosImg0.on("click",function(){
                           clothImg.attr("src",data[4].photos[0]);
                          
                           })
                           $(".card-photos").append(photosImg0);
                 
                           var photosImg1 = $("<img>");
                           photosImg1.attr("src" , data[4].photos[1]);
                           
                           photosImg1.on("click",function(){
                           clothImg.attr("src",data[4].photos[1]);
                           
                          
                           })
                           $(".card-photos").append(photosImg1);
                 
                           var photosImg2 = $("<img>");
                           photosImg2.attr("src" , data[4].photos[2]);
                           
                           photosImg2.on("click",function(){
                           clothImg.attr("src",data[4].photos[2]);
                           
                           })
                           $(".card-photos").append(photosImg2);
                 
                           var photosImg3 = $("<img>");
                           photosImg3.attr("src" , data[4].photos[3]);
                           
                           photosImg3.on("click",function(){
                           clothImg.attr("src",data[4].photos[3]);
                           
                           })
                           $(".card-photos").append(photosImg3);
                 
                           var photosImg4 = $("<img>");
                           photosImg4.attr("src" , data[4].photos[4]);
                           
                           photosImg4.on("click",function(){
                           clothImg.attr("src",data[4].photos[4]);
                           
                           })
                           $(".card-photos").append(photosImg4);
                 
                           var addToCardDiv = $("<div></div>");
                           addToCardDiv.attr("class" , "add-to-card");
                           $(".card-text-div").append(addToCardDiv);
                 
                           var addToCard = $("<button>Add to Card</button>");
                           $(".add-to-card").append(addToCard);

                           


                           addToCard.on("click" , function(){
                            $(".add-card p").html(count);
                            count=count + 1;
                
                            $(".add-card i")[0].onclick= function(){
                              $("section").html(``);
                              
                              itemCount4(count);
                              //console.log(count);
                            }
                          })
                          
                          function itemCount4(a){
                
                
                            var checkout = $("<h1>Checkout</h1>")
                            checkout.attr("class","check-out");
                            $("section").append(checkout);
                
                            var totalItem = $("<h3>Total Item: 1</h3>");
                            totalItem.attr("class","total-item");
                            $("section").append(totalItem);
                
                            var itemCountDiv = $("<div></div>");
                            itemCountDiv.attr("class" ,"item-count-div");
                            $("section").append(itemCountDiv)
                
                            
                            var leftItemCount = $("<div></div>");
                            leftItemCount.attr("class" ,"left-item");
                            $(".item-count-div").append(leftItemCount);
                
                            var leftItemImg = $("<img>");
                            leftItemImg.attr("src" , data[4].preview);
                            $(".left-item").append(leftItemImg);
                
                            var leftItemText =$("<div><div>")
                            leftItemText.attr("class","left-text");
                            $(".left-item").append(leftItemText);
                
                
                            var leftItemName =$(`<h3>${data[4].name}</h3>`);
                            $(".left-text").append(leftItemName);
                
                            var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                            $(".left-text").append(leftItemNo);
                
                            var totalPrice = $(`<p>Amount: Rs  ${data[4].price * (a-1)}</p>`);
                            $(".left-text").append(totalPrice);
                
                           
                            var rightItem = $("<div></div>");
                            rightItem.attr("class","right-box");
                            $(".item-count-div").append(rightItem);
                
                            var totalAmount =$("<h1>Total Amount</h1>");
                            $(".right-box").append(totalAmount);
                
                            var amountRs =$(`<h3>Amount: Rs ${data[4].price * (a-1)}</h3>`);
                            $(".right-box").append(amountRs);
                            
                
                            var submitBtn = $("<button>Place Order</button>");
                            submitBtn.attr("class","submit-btn")
                            $(".right-box").append(submitBtn);

                            $(".submit-btn")[0].onclick = function(){
                              $("section").html(``);
                              orderPlaced();

                              $(".add-card p").html("0");
                            }
                            
                          }
                 
                         }
//===========================================================================
                         


function cardProduct5(data){
  console.log(data);
    $("main").html(``);
    
    
     var cardMainDiv = $("<div></div>");
     cardMainDiv.attr("class" , "card-container");
     $("main").append(cardMainDiv);

     var mainBox = $("<div></div>");
     mainBox.attr("class" , "main-box");
     $(".card-container").append(mainBox);

     var leftImg = $("<div></div>");
     leftImg.attr("class" , "left-img");
     $(".main-box").append(leftImg);

     var clothImg = $("<img>");
     clothImg.attr("src" ,data[5].preview );
     clothImg.attr("class" , "cloth-img");
     $(".left-img").append(clothImg);

     var cardTextDiv = $("<div></div>");
     cardTextDiv.attr("class","card-text-div");
     $(".left-img").append(cardTextDiv);

     var cardHead = $(`<h1>${data[5].name}</h1>`);
     $(".card-text-div").append(cardHead);

     var cardBrand = $(`<h3>${data[5].brand}</h3>`);
     $(".card-text-div").append(cardBrand);

     var cardPrice = $(`<h2>Price Rs: ${data[5].price}</h2>`);
     cardPrice.attr("class","card-price");
     $(".card-text-div").append(cardPrice);

     var cardDescription = $("<h2>Description</h2>");
     $(".card-text-div").append(cardDescription);

     var cardPara = $(`<p>${data[5].description}</p>`);
     $(".card-text-div").append(cardPara);

     var cardProductPreview = $("<h2>Product Preview</h2>");
     $(".card-text-div").append(cardProductPreview);

     var cardPhotos = $("<div></div>");
     cardPhotos.attr("class" , "card-photos");
     $(".card-text-div").append(cardPhotos);



     
      
      var photosImg0 = $("<img>");
      photosImg0.attr("src" , data[5].photos[0]);
      
      photosImg0.on("click",function(){
      clothImg.attr("src",data[5].photos[0]);
     
      })
      $(".card-photos").append(photosImg0);

      var photosImg1 = $("<img>");
      photosImg1.attr("src" , data[5].photos[1]);
      
      photosImg1.on("click",function(){
      clothImg.attr("src",data[5].photos[1]);
      
     
      })
      $(".card-photos").append(photosImg1);

      var photosImg2 = $("<img>");
      photosImg2.attr("src" , data[5].photos[2]);
      
      photosImg2.on("click",function(){
      clothImg.attr("src",data[5].photos[2]);
      
      })
      $(".card-photos").append(photosImg2);

      

      var addToCardDiv = $("<div></div>");
      addToCardDiv.attr("class" , "add-to-card");
      $(".card-text-div").append(addToCardDiv);

      var addToCard = $("<button>Add to Card</button>");
      $(".add-to-card").append(addToCard);

      


      addToCard.on("click" , function(){
        $(".add-card p").html(count);
        count=count + 1;

        $(".add-card i")[0].onclick= function(){
          $("section").html(``);
          
          itemCount5(count);
          //console.log(count);
        }
      })
      
      function itemCount5(a){


        var checkout = $("<h1>Checkout</h1>")
        checkout.attr("class","check-out");
        $("section").append(checkout);

        var totalItem = $("<h3>Total Item: 1</h3>");
        totalItem.attr("class","total-item");
        $("section").append(totalItem);

        var itemCountDiv = $("<div></div>");
        itemCountDiv.attr("class" ,"item-count-div");
        $("section").append(itemCountDiv)

        
        var leftItemCount = $("<div></div>");
        leftItemCount.attr("class" ,"left-item");
        $(".item-count-div").append(leftItemCount);

        var leftItemImg = $("<img>");
        leftItemImg.attr("src" , data[5].preview);
        $(".left-item").append(leftItemImg);

        var leftItemText =$("<div><div>")
        leftItemText.attr("class","left-text");
        $(".left-item").append(leftItemText);


        var leftItemName =$(`<h3>${data[5].name}</h3>`);
        $(".left-text").append(leftItemName);

        var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
        $(".left-text").append(leftItemNo);

        var totalPrice = $(`<p>Amount: Rs  ${data[5].price * (a-1)}</p>`);
        $(".left-text").append(totalPrice);

       
        var rightItem = $("<div></div>");
        rightItem.attr("class","right-box");
        $(".item-count-div").append(rightItem);

        var totalAmount =$("<h1>Total Amount</h1>");
        $(".right-box").append(totalAmount);

        var amountRs =$(`<h3>Amount: Rs ${data[5].price * (a-1)}</h3>`);
        $(".right-box").append(amountRs);
        

        var submitBtn = $("<button>Place Order</button>");
        submitBtn.attr("class","submit-btn")
        $(".right-box").append(submitBtn);

        $(".submit-btn")[0].onclick = function(){
          $("section").html(``);
          orderPlaced();

          $(".add-card p").html("0");
        }
        
      }

    }

//======================================================================

    function cardProduct6(data){
      console.log(data);
        $("main").html(``);
        
        
         var cardMainDiv = $("<div></div>");
         cardMainDiv.attr("class" , "card-container");
         $("main").append(cardMainDiv);
    
         var mainBox = $("<div></div>");
         mainBox.attr("class" , "main-box");
         $(".card-container").append(mainBox);
    
         var leftImg = $("<div></div>");
         leftImg.attr("class" , "left-img");
         $(".main-box").append(leftImg);
    
         var clothImg = $("<img>");
         clothImg.attr("src" ,data[6].preview );
         clothImg.attr("class" , "cloth-img");
         $(".left-img").append(clothImg);
    
         var cardTextDiv = $("<div></div>");
         cardTextDiv.attr("class","card-text-div");
         $(".left-img").append(cardTextDiv);
    
         var cardHead = $(`<h1>${data[6].name}</h1>`);
         $(".card-text-div").append(cardHead);
    
         var cardBrand = $(`<h3>${data[6].brand}</h3>`);
         $(".card-text-div").append(cardBrand);
    
         var cardPrice = $(`<h2>Price Rs: ${data[6].price}</h2>`);
         cardPrice.attr("class","card-price");
         $(".card-text-div").append(cardPrice);
    
         var cardDescription = $("<h2>Description</h2>");
         $(".card-text-div").append(cardDescription);
    
         var cardPara = $(`<p>${data[6].description}</p>`);
         $(".card-text-div").append(cardPara);
    
         var cardProductPreview = $("<h2>Product Preview</h2>");
         $(".card-text-div").append(cardProductPreview);
    
         var cardPhotos = $("<div></div>");
         cardPhotos.attr("class" , "card-photos");
         $(".card-text-div").append(cardPhotos);
    
    
    
         
          
          var photosImg0 = $("<img>");
          photosImg0.attr("src" , data[6].photos[0]);
          
          photosImg0.on("click",function(){
          clothImg.attr("src",data[6].photos[0]);
         
          })
          $(".card-photos").append(photosImg0);
    
          var photosImg1 = $("<img>");
          photosImg1.attr("src" , data[6].photos[1]);
          
          photosImg1.on("click",function(){
          clothImg.attr("src",data[6].photos[1]);
          
         
          })
          $(".card-photos").append(photosImg1);
    
          var photosImg2 = $("<img>");
          photosImg2.attr("src" , data[6].photos[2]);
          
          photosImg2.on("click",function(){
          clothImg.attr("src",data[6].photos[2]);
          
          })
          $(".card-photos").append(photosImg2);
    
          
    
          var addToCardDiv = $("<div></div>");
          addToCardDiv.attr("class" , "add-to-card");
          $(".card-text-div").append(addToCardDiv);

          var addToCard = $("<button>Add to Card</button>");
          $(".add-to-card").append(addToCard);

         


          addToCard.on("click" , function(){
            $(".add-card p").html(count);
            count=count + 1;

            $(".add-card i")[0].onclick= function(){
              $("section").html(``);
              
              itemCount6(count);
              //console.log(count);
            }
          })
          
          function itemCount6(a){


            var checkout = $("<h1>Checkout</h1>")
            checkout.attr("class","check-out");
            $("section").append(checkout);

            var totalItem = $("<h3>Total Item: 1</h3>");
            totalItem.attr("class","total-item");
            $("section").append(totalItem);

            var itemCountDiv = $("<div></div>");
            itemCountDiv.attr("class" ,"item-count-div");
            $("section").append(itemCountDiv)

            
            var leftItemCount = $("<div></div>");
            leftItemCount.attr("class" ,"left-item");
            $(".item-count-div").append(leftItemCount);

            var leftItemImg = $("<img>");
            leftItemImg.attr("src" , data[6].preview);
            $(".left-item").append(leftItemImg);

            var leftItemText =$("<div><div>")
            leftItemText.attr("class","left-text");
            $(".left-item").append(leftItemText);


            var leftItemName =$(`<h3>${data[6].name}</h3>`);
            $(".left-text").append(leftItemName);

            var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
            $(".left-text").append(leftItemNo);

            var totalPrice = $(`<p>Amount: Rs  ${data[6].price * (a-1)}</p>`);
            $(".left-text").append(totalPrice);

           
            var rightItem = $("<div></div>");
            rightItem.attr("class","right-box");
            $(".item-count-div").append(rightItem);

            var totalAmount =$("<h1>Total Amount</h1>");
            $(".right-box").append(totalAmount);

            var amountRs =$(`<h3>Amount: Rs ${data[6].price * (a-1)}</h3>`);
            $(".right-box").append(amountRs);
            

            var submitBtn = $("<button>Place Order</button>");
            submitBtn.attr("class","submit-btn")
            $(".right-box").append(submitBtn);

            $(".submit-btn")[0].onclick = function(){
              $("section").html(``);
              orderPlaced();

              $(".add-card p").html("0");
            }
            
          }
    
        }
//==================================================================



        function cardProduct7(data){
          console.log(data);
            $("main").html(``);
            
            
             var cardMainDiv = $("<div></div>");
             cardMainDiv.attr("class" , "card-container");
             $("main").append(cardMainDiv);
        
             var mainBox = $("<div></div>");
             mainBox.attr("class" , "main-box");
             $(".card-container").append(mainBox);
        
             var leftImg = $("<div></div>");
             leftImg.attr("class" , "left-img");
             $(".main-box").append(leftImg);
        
             var clothImg = $("<img>");
             clothImg.attr("src" ,data[7].preview );
             clothImg.attr("class" , "cloth-img");
             $(".left-img").append(clothImg);
        
             var cardTextDiv = $("<div></div>");
             cardTextDiv.attr("class","card-text-div");
             $(".left-img").append(cardTextDiv);
        
             var cardHead = $(`<h1>${data[7].name}</h1>`);
             $(".card-text-div").append(cardHead);
        
             var cardBrand = $(`<h3>${data[7].brand}</h3>`);
             $(".card-text-div").append(cardBrand);
        
             var cardPrice = $(`<h2>Price Rs: ${data[7].price}</h2>`);
             cardPrice.attr("class","card-price");
             $(".card-text-div").append(cardPrice);
        
             var cardDescription = $("<h2>Description</h2>");
             $(".card-text-div").append(cardDescription);
        
             var cardPara = $(`<p>${data[7].description}</p>`);
             $(".card-text-div").append(cardPara);
        
             var cardProductPreview = $("<h2>Product Preview</h2>");
             $(".card-text-div").append(cardProductPreview);
        
             var cardPhotos = $("<div></div>");
             cardPhotos.attr("class" , "card-photos");
             $(".card-text-div").append(cardPhotos);
        
        
        
             
              
              var photosImg0 = $("<img>");
              photosImg0.attr("src" , data[7].photos[0]);
              
              photosImg0.on("click",function(){
              clothImg.attr("src",data[7].photos[0]);
             
              })
              $(".card-photos").append(photosImg0);
        
              var photosImg1 = $("<img>");
              photosImg1.attr("src" , data[7].photos[1]);
              
              photosImg1.on("click",function(){
              clothImg.attr("src",data[7].photos[1]);
              
             
              })
              $(".card-photos").append(photosImg1);
        
              var photosImg2 = $("<img>");
              photosImg2.attr("src" , data[7].photos[2]);
              
              photosImg2.on("click",function(){
              clothImg.attr("src",data[7].photos[2]);
              
              })
              $(".card-photos").append(photosImg2);
        
              
        
              var addToCardDiv = $("<div></div>");
              addToCardDiv.attr("class" , "add-to-card");
              $(".card-text-div").append(addToCardDiv);
    
              var addToCard = $("<button>Add to Card</button>");
              $(".add-to-card").append(addToCard);

              addToCard.on("click" , function(){
                $(".add-card p").html(count);
                count=count + 1;
    
                $(".add-card i")[0].onclick= function(){
                  $("section").html(``);
                  
                  itemCount7(count);
                  //console.log(count);
                }
              })
              
              function itemCount7(a){
    
    
                var checkout = $("<h1>Checkout</h1>")
                checkout.attr("class","check-out");
                $("section").append(checkout);
    
                var totalItem = $("<h3>Total Item: 1</h3>");
                totalItem.attr("class","total-item");
                $("section").append(totalItem);
    
                var itemCountDiv = $("<div></div>");
                itemCountDiv.attr("class" ,"item-count-div");
                $("section").append(itemCountDiv)
    
                
                var leftItemCount = $("<div></div>");
                leftItemCount.attr("class" ,"left-item");
                $(".item-count-div").append(leftItemCount);
    
                var leftItemImg = $("<img>");
                leftItemImg.attr("src" , data[7].preview);
                $(".left-item").append(leftItemImg);
    
                var leftItemText =$("<div><div>")
                leftItemText.attr("class","left-text");
                $(".left-item").append(leftItemText);
    
    
                var leftItemName =$(`<h3>${data[7].name}</h3>`);
                $(".left-text").append(leftItemName);
    
                var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                $(".left-text").append(leftItemNo);
    
                var totalPrice = $(`<p>Amount: Rs  ${data[7].price * (a-1)}</p>`);
                $(".left-text").append(totalPrice);
    
               
                var rightItem = $("<div></div>");
                rightItem.attr("class","right-box");
                $(".item-count-div").append(rightItem);
    
                var totalAmount =$("<h1>Total Amount</h1>");
                $(".right-box").append(totalAmount);
    
                var amountRs =$(`<h3>Amount: Rs ${data[7].price * (a-1)}</h3>`);
                $(".right-box").append(amountRs);
                
    
                var submitBtn = $("<button>Place Order</button>");
                submitBtn.attr("class","submit-btn")
                $(".right-box").append(submitBtn);

                $(".submit-btn")[0].onclick = function(){
                  $("section").html(``);
                  orderPlaced();

                  $(".add-card p").html("0");
    
                }
              }
        
            }

//==================================================================

            function cardProduct8(data){
              console.log(data);
                $("main").html(``);
                
                
                 var cardMainDiv = $("<div></div>");
                 cardMainDiv.attr("class" , "card-container");
                 $("main").append(cardMainDiv);
            
                 var mainBox = $("<div></div>");
                 mainBox.attr("class" , "main-box");
                 $(".card-container").append(mainBox);
            
                 var leftImg = $("<div></div>");
                 leftImg.attr("class" , "left-img");
                 $(".main-box").append(leftImg);
            
                 var clothImg = $("<img>");
                 clothImg.attr("src" ,data[8].preview );
                 clothImg.attr("class" , "cloth-img");
                 $(".left-img").append(clothImg);
            
                 var cardTextDiv = $("<div></div>");
                 cardTextDiv.attr("class","card-text-div");
                 $(".left-img").append(cardTextDiv);
            
                 var cardHead = $(`<h1>${data[8].name}</h1>`);
                 $(".card-text-div").append(cardHead);
            
                 var cardBrand = $(`<h3>${data[8].brand}</h3>`);
                 $(".card-text-div").append(cardBrand);
            
                 var cardPrice = $(`<h2>Price Rs: ${data[8].price}</h2>`);
                 cardPrice.attr("class","card-price");
                 $(".card-text-div").append(cardPrice);
            
                 var cardDescription = $("<h2>Description</h2>");
                 $(".card-text-div").append(cardDescription);
            
                 var cardPara = $(`<p>${data[8].description}</p>`);
                 $(".card-text-div").append(cardPara);
            
                 var cardProductPreview = $("<h2>Product Preview</h2>");
                 $(".card-text-div").append(cardProductPreview);
            
                 var cardPhotos = $("<div></div>");
                 cardPhotos.attr("class" , "card-photos");
                 $(".card-text-div").append(cardPhotos);
            
            
            
                 
                  
                  var photosImg0 = $("<img>");
                  photosImg0.attr("src" , data[8].photos[0]);
                  
                  photosImg0.on("click",function(){
                  clothImg.attr("src",data[8].photos[0]);
                 
                  })
                  $(".card-photos").append(photosImg0);
            
                  var photosImg1 = $("<img>");
                  photosImg1.attr("src" , data[8].photos[1]);
                  
                  photosImg1.on("click",function(){
                  clothImg.attr("src",data[8].photos[1]);
                  
                 
                  })
                  $(".card-photos").append(photosImg1);
            
                  var photosImg2 = $("<img>");
                  photosImg2.attr("src" , data[8].photos[2]);
                  
                  photosImg2.on("click",function(){
                  clothImg.attr("src",data[8].photos[2]);
                  
                  })
                  $(".card-photos").append(photosImg2);
            
                  
            
                  var addToCardDiv = $("<div></div>");
                  addToCardDiv.attr("class" , "add-to-card");
                  $(".card-text-div").append(addToCardDiv);
        
                  var addToCard = $("<button>Add to Card</button>");
                  $(".add-to-card").append(addToCard);

                  


                  addToCard.on("click" , function(){
                    $(".add-card p").html(count);
                    count=count + 1;
        
                    $(".add-card i")[0].onclick= function(){
                      $("section").html(``);
                      
                      itemCount8(count);
                      //console.log(count);
                    }
                  })
                  
                  function itemCount8(a){
        
        
                    var checkout = $("<h1>Checkout</h1>")
                    checkout.attr("class","check-out");
                    $("section").append(checkout);
        
                    var totalItem = $("<h3>Total Item: 1</h3>");
                    totalItem.attr("class","total-item");
                    $("section").append(totalItem);
        
                    var itemCountDiv = $("<div></div>");
                    itemCountDiv.attr("class" ,"item-count-div");
                    $("section").append(itemCountDiv)
        
                    
                    var leftItemCount = $("<div></div>");
                    leftItemCount.attr("class" ,"left-item");
                    $(".item-count-div").append(leftItemCount);
        
                    var leftItemImg = $("<img>");
                    leftItemImg.attr("src" , data[8].preview);
                    $(".left-item").append(leftItemImg);
        
                    var leftItemText =$("<div><div>")
                    leftItemText.attr("class","left-text");
                    $(".left-item").append(leftItemText);
        
        
                    var leftItemName =$(`<h3>${data[8].name}</h3>`);
                    $(".left-text").append(leftItemName);
        
                    var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                    $(".left-text").append(leftItemNo);
        
                    var totalPrice = $(`<p>Amount: Rs  ${data[8].price * (a-1)}</p>`);
                    $(".left-text").append(totalPrice);
        
                   
                    var rightItem = $("<div></div>");
                    rightItem.attr("class","right-box");
                    $(".item-count-div").append(rightItem);
        
                    var totalAmount =$("<h1>Total Amount</h1>");
                    $(".right-box").append(totalAmount);
        
                    var amountRs =$(`<h3>Amount: Rs ${data[8].price * (a-1)}</h3>`);
                    $(".right-box").append(amountRs);
                    
        
                    var submitBtn = $("<button>Place Order</button>");
                    submitBtn.attr("class","submit-btn")
                    $(".right-box").append(submitBtn);

                    $(".submit-btn")[0].onclick = function(){
                      $("section").html(``);
                      orderPlaced();

                      $(".add-card p").html("0");
        
                    }
                  }
            
                }

//====================================================================


                function cardProduct9(data){
                  console.log(data);
                    $("main").html(``);
                    
                    
                     var cardMainDiv = $("<div></div>");
                     cardMainDiv.attr("class" , "card-container");
                     $("main").append(cardMainDiv);
                
                     var mainBox = $("<div></div>");
                     mainBox.attr("class" , "main-box");
                     $(".card-container").append(mainBox);
                
                     var leftImg = $("<div></div>");
                     leftImg.attr("class" , "left-img");
                     $(".main-box").append(leftImg);
                
                     var clothImg = $("<img>");
                     clothImg.attr("src" ,data[9].preview );
                     clothImg.attr("class" , "cloth-img");
                     $(".left-img").append(clothImg);
                
                     var cardTextDiv = $("<div></div>");
                     cardTextDiv.attr("class","card-text-div");
                     $(".left-img").append(cardTextDiv);
                
                     var cardHead = $(`<h1>${data[9].name}</h1>`);
                     $(".card-text-div").append(cardHead);
                
                     var cardBrand = $(`<h3>${data[9].brand}</h3>`);
                     $(".card-text-div").append(cardBrand);
                
                     var cardPrice = $(`<h2>Price Rs: ${data[9].price}</h2>`);
                     cardPrice.attr("class","card-price");
                     $(".card-text-div").append(cardPrice);
                
                     var cardDescription = $("<h2>Description</h2>");
                     $(".card-text-div").append(cardDescription);
                
                     var cardPara = $(`<p>${data[9].description}</p>`);
                     $(".card-text-div").append(cardPara);
                
                     var cardProductPreview = $("<h2>Product Preview</h2>");
                     $(".card-text-div").append(cardProductPreview);
                
                     var cardPhotos = $("<div></div>");
                     cardPhotos.attr("class" , "card-photos");
                     $(".card-text-div").append(cardPhotos);
                
                
                
                     
                      
                      var photosImg0 = $("<img>");
                      photosImg0.attr("src" , data[9].photos[0]);
                      
                      photosImg0.on("click",function(){
                      clothImg.attr("src",data[9].photos[0]);
                     
                      })
                      $(".card-photos").append(photosImg0);
                
                      var photosImg1 = $("<img>");
                      photosImg1.attr("src" , data[9].photos[1]);
                      
                      photosImg1.on("click",function(){
                      clothImg.attr("src",data[9].photos[1]);
                      
                     
                      })
                      $(".card-photos").append(photosImg1);
                
                      var photosImg2 = $("<img>");
                      photosImg2.attr("src" , data[9].photos[2]);
                      
                      photosImg2.on("click",function(){
                      clothImg.attr("src",data[9].photos[2]);
                      
                      })
                      $(".card-photos").append(photosImg2);
                
                      
                
                      var addToCardDiv = $("<div></div>");
                      addToCardDiv.attr("class" , "add-to-card");
                      $(".card-text-div").append(addToCardDiv);
            
                      var addToCard = $("<button>Add to Card</button>");
                      $(".add-to-card").append(addToCard);

                      


                      addToCard.on("click" , function(){
                        $(".add-card p").html(count);
                        count=count + 1;
            
                        $(".add-card i")[0].onclick= function(){
                          $("section").html(``);
                          
                          itemCount9(count);
                          //console.log(count);
                        }
                      })
                      
                      function itemCount9(a){
            
            
                        var checkout = $("<h1>Checkout</h1>")
                        checkout.attr("class","check-out");
                        $("section").append(checkout);
            
                        var totalItem = $("<h3>Total Item: 1</h3>");
                        totalItem.attr("class","total-item");
                        $("section").append(totalItem);
            
                        var itemCountDiv = $("<div></div>");
                        itemCountDiv.attr("class" ,"item-count-div");
                        $("section").append(itemCountDiv)
            
                        
                        var leftItemCount = $("<div></div>");
                        leftItemCount.attr("class" ,"left-item");
                        $(".item-count-div").append(leftItemCount);
            
                        var leftItemImg = $("<img>");
                        leftItemImg.attr("src" , data[9].preview);
                        $(".left-item").append(leftItemImg);
            
                        var leftItemText =$("<div><div>")
                        leftItemText.attr("class","left-text");
                        $(".left-item").append(leftItemText);
            
            
                        var leftItemName =$(`<h3>${data[9].name}</h3>`);
                        $(".left-text").append(leftItemName);
            
                        var leftItemNo = $(`<p>Totol Number- ${a-1}<p>`);
                        $(".left-text").append(leftItemNo);
            
                        var totalPrice = $(`<p>Amount: Rs  ${data[9].price * (a-1)}</p>`);
                        $(".left-text").append(totalPrice);
            
                       
                        var rightItem = $("<div></div>");
                        rightItem.attr("class","right-box");
                        $(".item-count-div").append(rightItem);
            
                        var totalAmount =$("<h1>Total Amount</h1>");
                        $(".right-box").append(totalAmount);
            
                        var amountRs =$(`<h3>Amount: Rs ${data[9].price * (a-1)}</h3>`);
                        $(".right-box").append(amountRs);
                        
            
                        var submitBtn = $("<button>Place Order</button>");
                        submitBtn.attr("class","submit-btn")
                        $(".right-box").append(submitBtn);
            
                        
                       $(".submit-btn")[0].onclick = function(){
                        $("section").html(``);
                        orderPlaced();
                       }

                      }
                
                    }
                    function orderPlaced(){
                      var success = $("<div></div>");
                      success.attr("class","success");
                      $("section").append(success);

                      var successBox =$("<div></div>");
                      successBox.attr("class","success-box")
                      $("section").append(successBox);

                      var placed =$(`<h1>Order Successful</h1>`);
                      $(".success-box").append(placed);
                      
                      $(".add-card p").html("0");
                   } 
                    
                                 
    
  }

 
 
    homePagePortal();

  })
 
