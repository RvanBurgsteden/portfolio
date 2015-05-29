var main = function ()  {
  "use strict";

setInterval(function () {
console.log("Wordt elke 5 sec afgedrukt");

 	   if($(".img1").hasClass("zichtbaar")) {
 	   	    $(".img1").fadeOut(1000, function(){
 	   	    		$(".img2").fadeIn(1000,function(){
 	   	    				$(".img1").removeClass("zichtbaar");
 	   	    				$(".img2").addClass("zichtbaar");
 	   	 			});
 	   	    });
 	   }



 	   else if($(".img2").hasClass("zichtbaar")){
 	   	         $(".img2").fadeOut(1000, function(){
 	   	                  $(".img3").fadeIn(1000, function(){
  	                           $(".img2").removeClass("zichtbaar");
  	                           $(".img3").addClass("zichtbaar");
  	      					});
 	   	     		});
 	   	
  	        }
  	       
  	       else if($(".img3").hasClass("zichtbaar")){
 	   	         $(".img3").fadeOut(1000, function(){
 	   	                  $(".img4").fadeIn(1000, function(){
  	                           $(".img3").removeClass("zichtbaar");
  	                           $(".img4").addClass("zichtbaar");
  	      					});
 	   	     		});
 	   	
  	        }


  	    else{
  	         $(".img4").fadeOut(1000, function(){
  	                  $(".img1").fadeIn(1000, function(){
                                $(".img").removeClass("zichtbaar");            
  	    	                    $(".img1").addClass("zichtbaar");
  	    		       });
  	          	});
  	    	}
   	   	



}, 3000); 
}

$("document").ready(main);