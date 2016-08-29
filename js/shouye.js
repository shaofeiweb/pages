$(document).ready(function(){
	



	$('#submenu li:odd').css('background-color','#382f6b');
$('#submenu li:even').css('background-color','#463b7f');
$('#submenu li span').mouseover(function(){
	$(this).css({'color':'red','text-decoration':'underline'})
}).mouseout(function(){
	$(this).css({'color':'#cccccc','text-decoration':'none'})
});
$('#submenu li ').mouseover(function(){
	$(this).css('background','white').children().css('color','black');
	$(this).find('div').show()
})
$('#submenu li:odd ').mouseout(function(){
	$(this).css('background','#382f6b').children().css('color','white');
	$(this).find('div').hide()
})
$('#submenu li:even ').mouseout(function(){
	$(this).css('background','#463b7f').children().css('color','white');
	$(this).find('div').hide()
})


$('#OnavTop_r_t li').eq(5).mouseover(function(){
	$(this).find('span').html('&or;')
})
$('#OnavTop_r_t li').eq(5).mouseout(function(){
	$(this).find('span').html('&Alpha;')
})
$('#OnavTop_r_t li').eq(6).mouseover(function(){
	$(this).find('span').html('&or;')
})
$('#OnavTop_r_t li').eq(6).mouseout(function(){
	$(this).find('span').html('&Alpha;')
})

$('.navTop_l_b').mouseover(function(){
	$(this).find('ul').show();
		$(this).find('a').html('&or;')
})
$('.navTop_l_b').mouseout(function(){
	$(this).find('ul').hide();
	$(this).find('a').html('&Alpha;')
})

	
	
	
	
	
	
	setInterval(bannerShow,2000)
	var i=true;
	
	function bannerShow(){
		if(i){
			
			$('#banner_show img').eq(0).fadeIn();
			$('#banner_show img').eq(1).fadeOut();
			i=false;
			$('#banner_show ul ').find('li').eq(1).addClass('banner_show_index');
			$('#banner_show ul ').find('li').eq(0).removeClass('banner_show_index');
		}else{
			$('#banner_show img').eq(1).fadeIn();
			$('#banner_show img').eq(0).fadeOut();
			i=true;
			$('#banner_show ul ').find('li').eq(0).addClass('banner_show_index');
			$('#banner_show ul ').find('li').eq(1).removeClass('banner_show_index')
		}
		
		
		
	}
	
	
	$('.main1_l_b').find('dl').find('img').mouseover(function(){
		$(this).css('cursor','pointer');
		
	})
	
	$('.showOpacity').mouseover(function(){
		$(this).animate({'opacity':0.8},300).animate({'opacity':1},300);
		
	})

	
	$('.logobox').hover(
		function(){
		$(this).find('.logobox_inner').stop().animate({'left':-80},400)
	},
		function(){
			$(this).find('.logobox_inner').stop().animate({'left':0},400)
		}
	)
	
	
	
	
	function counntClock(i){
		
	
	var nowtime=new Date()
	var future=new Date(i)
	//var future=new Date(futuretime)
	var itimer=future-nowtime
	var day=Math.floor((itimer/(24*3600*1000)))
	var hour=Math.floor((itimer%(24*3600*1000))/(60*60*1000))
	var min=Math.floor((itimer%(24*3600*1000)%(3600*1000))/(60*1000))
	var sec=Math.floor((itimer%(24*3600*1000)%(3600*1000)%(60000))/(1000))
	var val=day+'天'+hour+'小时'+min+'分钟'+sec+'秒';
	return val
	}
	//【疑问 ，为什么外面获取不到val的值】
	setTime2()
	setTime1()
	setTime3()
	function setTime1(){
		$('.main2_t_b').find('span').eq(1).html(counntClock('2016,4,27,15:00'))
	}
	function setTime2(){
		$('.main2_t_b').find('span').eq(3).html(counntClock('2016,4,28,9:00'))
	}
	
	setInterval(setTime1,1000)
	setInterval(setTime2,1000)
	
	function setTime3(){
		$('.timeCount').html('剩余时间：'+counntClock('2016,4,29,15:00'))
	}
	setInterval(setTime3,1000)
	
	//轮播
	
		$('.banner_show1').find('i').eq(0).click(function(){
			
			$('.banner_show1').find('ul').stop().animate({'left':-462},1000,fn1);
			function fn1(){
				$('.banner_show1').find('ul').append($('.banner_show1').find('ul li').eq(0));
				$('.banner_show1').find('ul').css('left',-231)
			
			}
			
		}
		
		)
		
	$('.banner_show1').find('i').eq(1).click(function(){
		
		$('.banner_show1').find('ul').stop().animate({'left':0},1000,fn2);
		function fn2(){
		
		$('.banner_show1 ul').prepend($('.banner_show1 li').eq(5));
		$('.banner_show1 ul').css('left',-231)	
		}
		
	}
	
	)
	
	function le(){
			$('.banner_show1').find('ul').stop().animate({'left':-462},1000,fn1);
			function fn1(){
				$('.banner_show1').find('ul').append($('.banner_show1').find('ul li').eq(0));
				$('.banner_show1').find('ul').css('left',-231)
			
			}						
	}
	
	var timer=setInterval(le,3000)
	$('.banner_show1 ').mouseover(function(){
		clearInterval(timer)
		timer=null
	})
	$('.banner_show1 ').mouseout(function(){
		timer=setInterval(le,3000)
	})
	
	var turn = 1;
		
		$(window).scroll(function(){
		if($(window).scrollTop()>$(window).height() && turn == 1){
			$("#answer").show();
		
			
		}else{$("#answer").hide();
		$("#toTop").hide();
		}
		if($(window).scrollTop()>$(window).height()){	$("#toTop").show();$('#index_top_show').show()}else{$('#index_top_show').hide()}
		
		})
	
	
		$("#answer").click(function(){
		$(this).hide();
		turn = 0
	})
	
		
	
	
		$("#toTop").click(function(){
		$("body,html").animate({"scrollTop":0})	
	})
	
	
	$(window).scroll(fn1)
	
	function fn1(){
		
		if($(window).scrollTop()<300){
			$('.right_tips').fadeOut()
		}else{
			$('.right_tips').fadeIn()
			if($(window).scrollTop()<$(".ad").eq(0).offset().top){
			$('.right_tips a').css('color','black')
		}
		if($(window).scrollTop()>=$(".ad").eq(0).offset().top){
			$('.right_tips a').eq(0).css('color','red')
				$('.right_tips a').eq(0).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".ad").eq(1).offset().top){
			$('.right_tips a').eq(1).css('color','red');

			$('.right_tips a').eq(1).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".ad").eq(2).offset().top){
			$('.right_tips a').eq(2).css('color','red');

			$('.right_tips a').eq(2).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".ad").eq(3).offset().top){
			$('.right_tips a').eq(3).css('color','red');
			$('.right_tips a').eq(3).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(0).offset().top){
			$('.right_tips a').eq(4).css('color','red');
			$('.right_tips a').eq(4).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(1).offset().top){
			$('.right_tips a').eq(5).css('color','red');
			$('.right_tips a').eq(5).siblings().css('color','black')
		}
		
		if($(window).scrollTop()>=$(".mall").eq(2).offset().top){
			$('.right_tips a').eq(6).css('color','red');
			$('.right_tips a').eq(6).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(3).offset().top){
			$('.right_tips a').eq(7).css('color','red');
			$('.right_tips a').eq(7).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(4).offset().top){
			$('.right_tips a').eq(8).css('color','red');
			$('.right_tips a').eq(8).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(5).offset().top){
			$('.right_tips a').eq(9).css('color','red');
			$('.right_tips a').eq(9).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(6).offset().top){
			$('.right_tips a').eq(10).css('color','red');
			$('.right_tips a').eq(10).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(7).offset().top){
			$('.right_tips a').eq(11).css('color','red');
			$('.right_tips a').eq(11).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(8).offset().top){
			$('.right_tips a').eq(12).css('color','red');
			$('.right_tips a').eq(12).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(9).offset().top){
			$('.right_tips a').eq(13).css('color','red');
			$('.right_tips a').eq(13).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(10).offset().top){
			$('.right_tips a').eq(14).css('color','red');
			$('.right_tips a').eq(14).siblings().css('color','black')
		}
		if($(window).scrollTop()>=$(".mall").eq(11).offset().top){
			$('.right_tips a').eq(15).css('color','red');
			$('.right_tips a').eq(15).siblings().css('color','black')
		}
		}
		
	}
	/*
	$(document).click(function(){
		
		alert($('.ad').eq(0).offset().top)
	})
	*/


	$('.right_tips a').click(fn2)
	function fn2(){
		var index=$(this).index();
	
		var h;
	var x;

		if(index<4){
				h=$('.ad').eq(index).offset().top;
			$('body,html').animate({'scrollTop':h})
		}
		else{
			x=$('.mall').eq(index-4).offset().top;
			$('body,html').animate({'scrollTop':x})
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})//window结束













