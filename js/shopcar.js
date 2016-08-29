$(document).ready(function(){
	var flag=1
	$('#cheeck1').click( a)
	$('#cheeckAll').click( a)
	function a(){

		
		if(flag==1){
			$('input').attr('checked','true')
			flag=0

		}else{
			$('input').removeAttr('checked')
			flag=1

		}
		
	}

	//计算小计
	var x=$('.row4').eq(0).find('td').eq(5).find('input').val()
	x=parseInt(x)
	var y=$('.row4').eq(0).find('td').eq(6).find('b')
	var z=$('.row4').eq(0).find('td').eq(4).html()
	 z=z.toString().slice(1);
	 z=parseInt(z)
	var a=$('.row3').eq(0).find('td').eq(5).find('input').val()
	a=parseInt(a)
	var b=$('.row3').eq(0).find('td').eq(6).find('b')
	var c=$('.row3').eq(0).find('td').eq(4).html()
	 c=c.toString().slice(1);
	 c=parseInt(c)
	
	
	
	
	
	
	$('.row4').eq(0).find('.little').eq(1).click(function(){
		
		x++
		y.html('￥'+x*z)
		$('.row4').eq(0).find('td').eq(5).find('input').val(x)
		$('.p1 b').html((x+a))
		$('.p2 b').html((x+a))
		$('.p4 b').html((x*z+a*c))
		
		
	})
	
	$('.row4').eq(0).find('.little').eq(0).click(function(){
		
		x--
		if(x<1){
			x=1
		}
		y.html('￥'+x*z)
		$('.row4').eq(0).find('td').eq(5).find('input').val(x)
		$('.p1 b').html((x+a))
		$('.p2 b').html((x+a))
		$('.p4 b').html((x*z+a*c))
	})
		
		
		
		
		
		
		
	
	
	
	$('.row3').eq(0).find('.little').eq(1).click(function(){
		
		a++
		b.html('￥'+a*c)
		$('.row3').eq(0).find('td').eq(5).find('input').val(a)
		$('.p1 b').html((x+a))
		$('.p2 b').html((x+a))
		$('.p4 b').html((x*z+a*c))
		
	})
	
	$('.row3').eq(0).find('.little').eq(0).click(function(){
	
		a--
		if(a<1){
			a=1
		}
		b.html('￥'+a*c)
		$('.row3').eq(0).find('td').eq(5).find('input').val(a)
		$('.p1 b').html((x+a))
		$('.p2 b').html((x+a))
		$('.p4 b').html((x*z+a*c))
		
	})
	
	
	$('.removeAll').addClass('hid')

	
	$('input').click(function(){
		
		if($(this).attr('checked')=='checked'){
		$('.removeAll').removeClass('hid')
		
	}else{$('.removeAll').addClass('hid')
			
	}
	})
	
	
	function setbg(obj){
		
		
		if(obj.attr('checked')=='checked'){
		
		obj.parent().parent().css('background','pink')	
	}else{
			obj.parent().parent().css('background','white')	
	}
	
	}
	
//	$('input').eq(1).click(function(){
//	var obj = $(this)		
//		setbg(obj)
//		
//	})
//	$('input').eq(3).click(function(){
//	var obj = $(this)		
//		setbg(obj)
//		
//	})
	
	
	
	
	
	
	
	
	$('.removeAll').click(function(){

			$('.removeAll').addClass('hid')		
			$('.cheeck2').parent().parent().remove()
			$('.p1 b').html(0)
			$('.p2 b').html(0)
			$('.p4 b').html(0)
			$('#cheeck1').removeAttr('checked')
			$('#cheeckAll').removeAttr('checked')
			
			
//		$('.cheeck2').each(function(){
//				if($(this).attr('checked')=='checked'){
//					var x=$(this).parent().parent().height()
//					var y=$('.main1').height()
//			$('.main1').height(y-x)
//				$(this).parent().parent().remove()
//				
//				var l=$('.main1').find('.row2').eq(0)
//				
//				var d=$('.main1').find('b').html().toString().slice(1);
//				
//			
//			$('.p1 b').html(l.find('.inputCount').eq(0).val())
//			$('.p2 b').html(l.find('.inputCount').eq(0).val())
//			$('.p4 b').html(d)
//			}
//			})
//		
//		
//			$('input').removeAttr('checked')
		
		
			
			
		
		})

		$('.del').eq(0).click(function(){
			$(this).parent().parent().remove()
			x=0
			$('.p1 b').html((a))
			$('.p2 b').html((a))
			$('.p4 b').html((a*c))
			
		})

		$('.del').eq(1).click(function(){
			$(this).parent().parent().remove()
			$('.p1 b').html((x))
			$('.p2 b').html((x))
			$('.p4 b').html((x*z))
			a=0
			
		})
		
		$('.content3 span').eq(0).show()
		$('.content3 span').eq(0).click(function (){
			$('.content3 ul').animate({'left':-920},1000)
			$('.content3 span').eq(0).hide()
			$('.content3 span').eq(1).show()
		})

		$('.content3 span').eq(1).click(function (){
			$('.content3 ul').animate({'left':0},1000)
			$('.content3 span').eq(0).show()
			$('.content3 span').eq(1).hide()
		})








})
