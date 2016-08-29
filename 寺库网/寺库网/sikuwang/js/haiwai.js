$(document).ready(function(){
	$('.colum ul').eq(1).find('li').eq(4).mouseover(function(){
		$('.colum_top_hide').show();
		$('.colum span').html('&or;')
	})
	$('.colum ul').eq(1).find('li').eq(4).mouseout(function(){
		$('.colum_top_hide').hide()
		$('.colum span').html('&Lambda;')
	})

	$('.nav_list li').mouseover(function(){
		var index=$(this).index()
		var x=$('.nav_list li').eq(index).offset().left+$('.nav_list li').eq(index).width()/2+12
		
		$('#sanjiao').show().stop().animate({'left':x})
		$('.solid div').eq(index).addClass('solid_content').siblings().removeClass('solid_content')
	})
	$('.nav_list li').mouseout(function(){
		$('.solid div').removeClass('solid_content')
		$('#sanjiao').hide()
	})


	$('.haiwai_scroll ul li').click(fn1)
	function fn1(){
		var index=$(this).index();
		$('.haiwai_scroll ul li').removeClass('color')
		$(this).addClass('color')
		$('.haiwai_scroll img').hide()
		$('.haiwai_scroll img').eq(index).show()
	}
		var i=0
	setInterval(function(){
		i++;
		if(i>3){
			i=0
		}
		
		$('.haiwai_scroll ul li').removeClass('color')
		$('.haiwai_scroll ul li').eq(i).addClass('color')
		$('.haiwai_scroll img').hide()
		$('.haiwai_scroll img').eq(i).show()
	},1000)

	$('.haiwai_container div').mouseover(function(){
		$(this).css('cursor','pointer');
	
	})

	$('.haiwai_main li').mouseover(function(){
		var index=$(this).index();
		if(index==7){
			index=6
		}
		var l=$('.haiwai_main li').eq(0).outerWidth()*index
		$('.littleDash').stop().animate({'left':l})
		$('.haiwai_main li').css('border-bottom','2px solid #ededed')
		$('.haiwai_main li').eq(index).css('border-bottom','2px solid white')
		$('.haiwai_main p').css('border-bottom','none')
		$('.haiwai_main p').mouseover(function(){
			$('.haiwai_main li').eq(index).css('border-bottom','2px solid white')
		})
		$('.haiwai_main li').eq(7).css('border-bottom','2px solid #ededed');
		$('.a').removeClass('hideArea').hide()
		$('.a').eq(index).addClass('hideArea').show()
		
		
		
	})
	
	$('.hideArea ul li').children().css('margin-left',30)






})//结束\n