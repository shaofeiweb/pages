$(document).ready(function(){
	$('.cool_main2_main li').slice(0,7).mouseenter(function(){
		var index=$(this).index()
		$('#xian').stop().animate({"left":171*index},300)
		$(this).find('span').show()
		$(this).find('b').hide()
		$(this).siblings().find('b').show()
		$(this).siblings().find('span').hide()
	})
	
	$('#look').mouseenter(function(){
		$('#cool_main2_main_hide').stop().slideDown()
		$('.cool_main2_main_show').stop().slideDown()
	})
	
	$('#look').mouseleave(function(){
		$('#cool_main2_main_hide').stop().slideUp()
		$('.cool_main2_main_show').stop().slideUp()
	})
	
	
	$('.cool_main4_p1').eq(0).mouseenter(function(){
		$(this).find('img').stop().animate({'left':446,'opacity':1},500)
	})
	
	$('.cool_main4_p2').eq(0).mouseenter(function(){
		$(this).find('img').stop().animate({'left':-240,'opacity':1},500)
	})
	
	$('.cool_main4_p1').eq(0).mouseleave(function(){
		$(this).find('img').stop().animate({'left':'30%','opacity':0},500)
	})
	
	$('.cool_main4_p2').eq(0).mouseleave(function(){
		$(this).find('img').stop().animate({'left':'30%','opacity':0},500)
	})
	
	
	for(var i=53;i<=126;i++){
	
		var img = '<li class="water_li"><img src="img/water/water ('+i+').jpg"/></li>'
		$('#water').append(img)
	}	
		
		

    $('.water_li').append('<div class="shadow"></div>')
	$('.water_li').append('<div class="shadow_show"></div>')	

	for(var j=1;j<=8;j++){
			
			var box='<div class="d'+j+'"></div>'
	
	$('.shadow_show').append(box)
	
	}


    $('.shadow_show').append('<p>PRADA销量最好的4色女包</p>')
	
	
		

	
	
	
	
	$('#water li').mouseover(function(){
		$(this).find('div').show();
		var index=$(this).index()
			//alert(index)
		$(this).find('p').show();
		$(this).find('.d1').stop().animate({'width':95})
		$(this).find('.d2').stop().animate({'width':95})
		$(this).find('.d3').stop().animate({'width':95})
		$(this).find('.d4').stop().animate({'width':95})
		$(this).find('.d5').stop().animate({'height':45})
		$(this).find('.d6').stop().animate({'height':45})
		$(this).find('.d7').stop().animate({'height':45})
		$(this).find('.d8').stop().animate({'height':45})
		$(this).find('p').stop().animate({'top':20,'opacity':1})
		$(this).find('.shadow').stop().animate({'opacity':0.5})
	})
	
	
	
	$('#water li').mouseleave(function(){
		$(this).find('.d1').stop().animate({'width':0})
		$(this).find('.d2').stop().animate({'width':0})
		$(this).find('.d3').stop().animate({'width':0})
		$(this).find('.d4').stop().animate({'width':0})
		$(this).find('.d5').stop().animate({'height':0})
		$(this).find('.d6').stop().animate({'height':0})
		$(this).find('.d7').stop().animate({'height':0})
		$(this).find('.d8').stop().animate({'height':0})
		$(this).find('p').stop().animate({'top':-60})
		$(this).find('.shadow').stop().animate({'opacity':0})
		
	})
	
	$(window).scroll(function(){
		if($('#water').height()==9350){
			$('#water').css('height',9350)
		}else{
			if($(window).scrollTop()>=0&&$(window).scrollTop()<2000){
			$('#water').css('height',2310)
			
			}else if($(window).scrollTop()>=2000&&$(window).scrollTop()<3914){
				$('#water').css('height',4310)
			
			
			}else if($(window).scrollTop()>=3914&&$(window).scrollTop()<5944){
				$('#water').css('height',6310)
			}else if($(window).scrollTop()>=5944&&$(window).scrollTop()<6944){
				$('#water').css('height',8010)
			} else{
				$('#water').css('height',9350)
			}
		}
		
		
	})
	
//		console.log($(window).scrollTop());
//			console.log($(document).height());
	
	
	
	
	
	$('.returnTop').click(function(){
		$('html,body').animate({'scrollTop':0})
	})
	
	
	
	
	
	
	
	function counntClock(i){
		
	
	var nowtime=new Date()
	var future=new Date(i)
	
	var itimer=future-nowtime
	var day=Math.floor((itimer/(24*3600*1000)))
	var hour=Math.floor((itimer%(24*3600*1000))/(60*60*1000))
	var min=Math.floor((itimer%(24*3600*1000)%(3600*1000))/(60*1000))
	var sec=Math.floor((itimer%(24*3600*1000)%(3600*1000)%(60000))/(1000))
	var val='猴年倒计时'+'</br>'+day+'天'+'</br>'+hour+'小时'+'</br>'+min+'分钟'+'</br>'+sec+'秒';
	return val
	}
	
	function setTime1(){
		$('.timeTxt').html(counntClock('2016,2,8,00:00'))
	}
	setInterval(setTime1,1000)
	setTime1()
	
	
	
	
	
	
	function bbb(b){
		if(b<10){
			return "0"+b
		}else{return ""+b}
	}
		function time(){
			var o=document.getElementById('hn')
			var aImg=o.getElementsByTagName("img")
			var oTime=new Date();
			var oNowTime=bbb(oTime.getHours())+bbb(oTime.getMinutes())+bbb(oTime.getSeconds());
			for(i=0;i<aImg.length;i++){
				aImg[i].src="img/"+oNowTime.charAt(i)+".png"
			}
		
		}
		setInterval(time,1000)	
		time()

		










function getTime(){
	var time=new Date();
	hour=time.getHours();
	min=time.getMinutes();
	sec=time.getSeconds();
	var arr=[];
	arr.push(parseInt(hour/10));
	arr.push(hour%10);
	arr.push(parseInt(min/10));
	arr.push(min%10);
	arr.push(parseInt(sec/10));
	arr.push(sec%10);
	for(var i=0;i<6;i++){
		document.getElementById('img'+i).src='img/'+arr[i]+'.png'
	}
}

setInterval(getTime,1000)
getTime()

	
	
	
	
	
	
	
	
})