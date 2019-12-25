//Show Desktop serch form   
$("#nav-search").click(function(){
    if ($("#nav-search-container").css("z-index")==="-100"){
        $("#nav-search-container").css({
            "z-index":"1000"
        });
    }
    else{
        $("#nav-search-container").css({
            "z-index":"-100"
        });
    }


});


//For hiding mobile navbar 
screen_width = $(window).width();
negative_screen_width =  -$(window).width()+"px";

var navm=$(".navm").css({
    "left": negative_screen_width
});



//Mobile navigation bar controls
$("#navbar-control").click(function(){
    let navm=$(".navm").css("left");
    if (navm===negative_screen_width){
        $(".navm").css({
            "left":"0"
        })

        document.getElementById("navbar-close-icon").className="fas fa-times";
    }
    else{
        $(".navm").css({

            "left":negative_screen_width
        })
        document.getElementById("navbar-close-icon").className="fas fa-bars";
    }
});


//Mobile Navigation Dropdown
$(".navm-drop__top--icon").click(function(){

    if ($(".navm-drop__content").css("display")==="none"){
        $(".navm-drop__content").css({
            "display":"block"
        })
    }
    else{
        $(".navm-drop__content").css({
            "display":"none"
        })
    }
    
  
});





//Change article font size

// + font size
$('.post-details__font--increment').click(function(){
    let post_content = $(".post-content");
    let fsize =  parseInt(post_content.css("font-size").split("px")[0]);
    post_content.css({
        "font-size":(fsize+1)+'px'
    })
});


// - font size
$('.post-details__font--decrement').click(function(){
    let post_content = $(".post-content");
    let fsize =  parseInt(post_content.css("font-size").split("px")[0]);
    post_content.css({
        "font-size":(fsize-1)+'px'
    })
});




//For comment  add section ,make it visible and scroll to that form
$("button.post-comment").click(function(){
    $(".comment").css(
        {
            "display":"block"
        }
    );
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".comment").offset().top
    }, 1000);
    
});


//Form animations

$(".form-group__label").mouseleave(function(e){
    console.log($($(this).children()[0]).val().length);
      if ($($(this).children()[0]).val().length > 0){
        console.log($($(this).children()[1]).css({"top":"15px", "font-size":"10px"}));
      }
      else{
        console.log($($(this).children()[1]).css({"top":"35px", "font-size":"16px"}));
 
      }
      
});
