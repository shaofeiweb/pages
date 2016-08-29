$(document).ready(function(){
	$('.x').eq(0).click(function(){
		$('div').eq(0).hide()
	})
	
	$('.nav').find('a').mouseover(function(){
		$('.nav').find('a').removeClass('ch')
	
		$(this).addClass('ch')
	})
	
	$('.nav').find('a').mouseout(function(){
		$('.nav').find('a').removeClass('ch')
		
	})
	
	$('.nav').find('a').eq(5).mouseover(function(){
			$(this).addClass('ch')
		$('.sell_showlist').stop().fadeIn(300)
		
	})
	$('.nav').find('a').eq(5).mouseout(function(){
			$(this).removeClass('ch')
		$('.sell_showlist').stop().fadeOut(300)
	})
	
	var i=0
	$('.show_img a').eq(1).click(f1)
	function f1(){
		i++;
		if(i>3){
			i=0
		}
		$('.show_img img').fadeOut(1000)
		$('.show_img img').eq(i).stop().fadeIn(1000)
		
		$('.show_img li').eq(i).addClass('little').siblings().removeClass('little')
	}
	
	$('.show_img li').click(function(){
		i=$(this).index()-1;
		f1()
	})
	
	
	
	
	
	$('.show_img a').eq(0).click(f2)
	function f2(){
		i--;
		if(i<0){
			i=3
		$('.show_img img').fadeOut(1000);	
		$('.show_img img').eq(i).fadeIn(1000)
		$('.show_img li').eq(i).addClass('little').siblings().removeClass('little')
		}
	}
	var timer=null
	timer = setInterval(f1,3000)
	$('.show_img').hover(function(){
		clearInterval(timer);
		$('.show_img a').fadeIn(1000)
	},function(){
		timer = setInterval(f1,3000);
		$('.show_img a').fadeOut(1000)
	})
	
	$('.sell_contain').hover(function(){
		$(this).find('a').fadeIn(1000)
	},function(){
		$(this).find('a').fadeOut(1000)
	})
	
	$('.sell_contain a').eq(0).click(function(){
		$('.sell_contain ul').append($('.sell_contain li').eq(0))
	})
	$('.sell_contain a').eq(1).click(function(){
		$('.sell_contain ul').prepend($('.sell_contain li').eq(2))
	})
	
	
	
	$('.sell_contain li').hover(function(){
		$(this).css({'height':'169px',"border-bottom":'4px solid red'})
	},function(){
		$(this).css({'height':'173px','border':'none'})
	})
	
	$('.content_pic li').hover(function(){
		$(this).find('p').css({'height':'24px',"border-bottom":'4px solid red'})
	},function(){
		$(this).find('p').css({'border':'4px'})
	})
	$('body img').mouseover(function(){
		$(this).css('cursor','pointer')
	})
	
	
	
	
	
	
	
})//结束