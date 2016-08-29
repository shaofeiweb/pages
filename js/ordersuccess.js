$(document).ready(function(){
	$('.main2 ul li').click(function(){
		$(this).addClass('active1').siblings().removeClass('active1')
	})
	var flag=1
	$('.a').slice(8,15).hide()
	$('#bb').hide()
	
	$('#aa').click(function(){
		if(flag==1){
			$('.a').show()
			$(this).hide()
			$('#bb').show()
		}else{
			$('.a').slice(0,8).show()
			$('.a').slice(8,15).hide()
			$(this).show()
			$('#bb').hide()
			flag=1
			$('#hide4').hide()
			$(this).parent().parent().find('input').removeAttr('checked')
		}
		$('#yesToPay').css({"background":'#666666','cursor':'not-allowed'})
	})
	
		$('#hide4').hide()
	$('#bb').click(function(){
		$('.a').slice(8,15).hide()
		$('.a').slice(0,7).show()
		$(this).hide()
		$('#aa').show()
	})
	
	$('.a').find('img').click(function(){
		$('.a').hide()
		$(this).parent().show()
		$('#aa').show()
		$('#bb').hide()
		$(this).parent().parent().find('input').removeAttr('checked')
		$(this).parent().find('input').attr('checked','checked')
		flag=0
		$('#hide4').show()
		$('#yesToPay').css({"background":'red','cursor':'pointer'})
	})
	
	$('.a').find('input').click(function(){
		$('.a').hide()
		$(this).parent().show()
		$('#aa').show()
		$('#bb').hide()
		$('#hide4').show()
		flag=0
		$('#yesToPay').css({"background":'red','cursor':'pointer'})
	})
	$('.c1').hide()
	$('.c1').eq(0).show()
	$('.main2 ul li').click(function(){
		var index=$(this).index()
		$('.c1').hide()
		$('.c1').eq(index).show()
		$('.main2 ul li').removeClass('active1')
		$(this).addClass('active1')
	})
	
	
	
	
	
	
	
	
	
	
	
})