$(document).ready(function(){
	$('.pin_container ul li').mouseenter(function(){
		$(this).children().mouseover(function(){
			$(this).css('cursor','pointer')
		})
		$(this).stop().animate({'opacity':0.6},200,function(){
		
			$(this).stop().animate({'opacity':1},200)
		})
		$(this).find('img').eq(1).stop(true,true).animate({'height':'217px'},300)
	
	})
	$('.pin_container ul li').mouseleave(function(){
		$(this).find('img').eq(1).stop(true,true).animate({'height':'0px'},300);
		
	})
		
		
		
		
		
		
		
		
		
	$('.pin_container3_r li').mouseover(function(){
		
		$(this).find('div').show();
		$(this).find('div').css({'width': 1,'height': 1,'background': 'black'})
		var that=$(this)
		
		
		$(this).find('img').attr('src','img/prada2.jpg')
			$(this).find('.c1').stop().animate({'height':'140px'},300,function(){
			that.find('.c2').stop().animate({'width':'140px'},300)
		})
		$(this).find('.c3').stop().animate({'height':'140px'},300,function(){
			that.find('.c4').stop().animate({'width':'140px'},300)
		})
		
	})
	
	$('.pin_container3_r li').mouseout(function(){
		$(this).find('img').attr('src','img/prada.jpg');
		$(this).find('div').css({'height':1,'width':1,'display':'none'})
	})
	
	
	
	
	
	
	
	
	$('.pin_container5_l2 ul li').mouseenter(function(){
		$(this).css({'cursor':'pointer','border':'none','border-top':'1px solid black','border-bottom':'1px solid black'});
			$(this).find('b').css('display','inline')
	})
	
	$('.pin_container5_l2 ul li').mouseleave(function(){
		$(this).css({'border':'none','border-top':'1px solid white','border-bottom':'1px solid white'})
		$(this).find('b').css('display','none')
	})
	
	$('.pin_container5_r_b ul li').mouseover(function(){
		$(this).css('background','url(img/abc1.jpg) no-repeat center center')
	})
	
	$('.pin_container5_r_b ul li').mouseout(function(){
		$(this).css('background','none')
	})
	var x=$('.pin_container4').offset().top
	
	// $(window).scroll(function(){
		
	// 	if($(window).scrollTop()>=1373){
	// 	$('.pin_container4').css({'position':'fixed','top':0,'left':'0%'})
	// }else{$('.pin_container4').css({'position':'absolute','top':"1373px",'left':'0%'})}
	
	// })
	
	
	
	// $('#ll').css({'position':'absolute','top':'1572px','left':'20%'})
	
	
	
	
	
	
	
		$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.returnTop').show()
		}else{$('.returnTop').hide()}
	})

	$('.returnTop').click(function(){
		$('html,body').animate({'scrollTop':0})
	})
	
	
	
	
	
	
	
	
	
	
	
	




















})//结束

