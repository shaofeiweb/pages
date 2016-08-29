$(document).ready(function(){
	$('.gs_l_container_l li').eq(0).css('background','url(img/good5.jpg)')
	$('.gs_l_container_l li').mouseenter(function(){
		var index=$(this).index()
		
		$(this).css('background','url(img/good5.jpg)')
		$(this).siblings().css('background','none')
		$('.gs_l_container_r img').attr('src','img/good'+(index+6)+'.jpg')
		$('.goods_big img').attr('src','img/good'+(index+6)+'.jpg')
	})
	
	$('.gs_l_container_r').mousemove(overfun)
	
		function overfun(e){
				$('.goods_small').css('display','block')
		$('.goods_big').css('display','block')
			var e=e||event;
			var x=e.pageX;
			var y=e.pageY;
			var ex=x-$(this).offset().left-$('.goods_small').width()/2
			var ey=y-$(this).offset().top-$('.goods_small').height()/2
			if(ex<=0){
				ex=0
			}
			if(ex>200){
				ex=200
			}
			if(ey<=0){
				ey=0
			}
			if(ey>200){
				ey=200
			}
			$('.goods_small').css({'left':ex,'top':ey})
			
			$(".goods_big img").css({"left":-ex*2,"top":-ey*2})
			
			
		}
	
			$('.gs_l_container_r').mouseleave(function(){
				$('.goods_small').css('display','none')
		$('.goods_big').css('display','none')
			})


			$('.gs_l_b li').mouseenter(function(){
				var that=$(this).find('img')
				$(this).find('img').stop().animate({'top':-10},function(){
					that.animate({'top':0})
				})
			})


			$('.gs_r ul li:last-child').mouseenter(function(){
				var that=$(this).find('img')
				$(this).find('img').stop().animate({'top':0},function(){
					that.stop().animate({'top':9})
				})
			})

			$('.gs_r ul li').slice(1,7).mouseenter(function(){
				
				$(this).addClass('abc')
			})

			$('.gs_r ul li').slice(1,7).mouseleave(function(){
				$(this).removeClass('abc')
			})

			$('.gs_r ul li').slice(1,7).click(function(){
			$(this).addClass('abcd').siblings().removeClass('abcd')
			})

			$('.gs_r_last a').eq(0).click(function(){
				
				var x=$('.gs_r_last input').val()
				x--
				if(x<1){
					x=1
				}
				var x=$('.gs_r_last input').val(x)
			
			})

				$('.gs_r_last a').eq(1).click(function(){
				
				var x=$('.gs_r_last input').val()
				var y=$('.gs_r_last b').html()
				x++
				if(x>y){
					x=y
				}
				var x=$('.gs_r_last input').val(x)
			})
				var x=$('.gs_r_last input').val()
				var y=$('.gs_r_last b').html()
			$('.gs_r_last input').blur(function(){
				
				
				if(x<=y){
					$('.gs_r_last input').val(y)
			}
			})
			

			$('.goods_main_common li').mouseenter(function(){
				$(this).find('img').stop().animate({'width':80,'height':80,'left':-30,'top':0},300).css('border','1px solid #888888')
			})

			$('.goods_main_common li').mouseleave(function(){
				$(this).find('img').stop().animate({'width':58,'height':64,'left':0,'top':19},300).css('border','none')
			})



			$('.goods_main_r ul li').slice(0,4).mouseenter(function(){
				var x=$(this).index()
				$(this).addClass('bbbb').siblings().removeClass('bbbb')
				$('.goods_main_r>div').css('display','none')
				$('.goods_main_r>div').eq(x).css('display','block')
			})
			
			
			$(window).scroll(function(){
				aaaa()
				bbbb()
			})
			
			aaaa()
			function aaaa(){
				if($(window).scrollTop()>$(window).height()){
				$('.goodaside3').fadeIn()
				$('.goodaside2').fadeIn()
				$('.goodaside').css({'height':'108px'})
				
				
				
			}else{
				$('.goodaside3').fadeOut()
				$('.goodaside2').fadeOut()
				$('.goodaside').css('height','36px')
			}
			}
			$('.goodaside3').click(function(){
					$('body,html').animate({'scrollTop':0})
					
				})
			var x=$('.goods_main_r ul').offset().top
			function bbbb(){
				if($(window).scrollTop()>x){
					$('.goods_main_r ul').addClass('eee')
				}else{
					$('.goods_main_r ul').removeClass('eee')
				}
			}
			$('.goods_shopcar').click(function(){
				$('#jixu').show()
				$('.asd').addClass('asd1')
				
			})
			$('#jixu').hide()
			$('.x,.jixugouwu').click(function(){
				$(this).parent().hide()
				$('.asd').removeClass('asd1')
			})
//


var frag=document.createDocumentFragment();
		for(var i=1;i<=76;i++){
			var img=document.createElement("img");
			img.src = "img_iphone/"+i+".jpg";
			img.style.display="none";
			frag.appendChild(img)
		}
		var oiphone=document.getElementById('iphone')
		oiphone.appendChild(frag);
		var oiphoneMove=document.getElementById('iphoneMove')
		var oimg=oiphone.getElementsByTagName("img")
		var lastIndex=0;
		var starX=0;
		var index=0
		var prevImg=null;
		oiphoneMove.onmousedown=function(ev){
			ev=ev||event;
			starX=ev.clientX;
			oiphoneMove.onmousemove=function(ev){
				var x=ev.clientX;
				var dis=x-starX;
				if(dis>=0){
					index=(Math.floor(dis/20)+lastIndex)%77
				}else{
					index=(Math.floor(dis/20)+lastIndex+77)%77
				}
				if(prevImg){
					prevImg.style.display="none"
				}
				oimg[index].style.display='block';
//				document.title=index;
				prevImg=oimg[index];				
			}
		}
		
		oiphoneMove.onmouseup=function(ev){
			lastIndex=index
			oiphoneMove.onmousemove=''
		}
























})