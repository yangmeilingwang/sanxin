$(document).ready(function(){
    $('#marquee').liMarquee({
        scrollamount: 200
    });
});
var Len = document.getElementById('marquee').getElementsByTagName('a').length;
var Num = 420*Len;
console.log(Num)
$("#marquee .inner").css("width",Num+"px");
var mySwiper01 = new Swiper("#carousel01",{  
    direction:"horizontal",
    loop:true,
    autoplayDisableOnInteraction:false, 
    pagination:".swiper-pagination",
    paginationClickable:true,
    prevButton:".swiper-button-prev", 
    nextButton:".swiper-button-next",
    onlyExternal:true,
    autoplay:3000,
    speed:1000,
    breakpoints:{
    	992:{
    		onlyExternal:false
    	}
    }
})
var mySwiper02 = new Swiper("#carousel02",{  
    direction:"horizontal",
    loop:true,
    autoplayDisableOnInteraction:false, 
    pagination:".swiper-pagination",
    paginationClickable:true,
    onlyExternal:true,
    autoplay:3000,
    speed:500,
    breakpoints:{
    	992:{
    		onlyExternal:false
    	}
    }
})