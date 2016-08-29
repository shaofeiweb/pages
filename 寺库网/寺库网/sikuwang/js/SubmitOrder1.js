$(document).ready(function(){
	$('.show a').eq(1).click(function(){
			$('.show a').eq(0).css('background','#ececec')
		$(this).css('background','red')
		$('.show div').eq(1).show()
		$('.show div').eq(0).hide()
	})
	$('.show a').eq(0).click(function(){
		$('.show a').eq(1).css('background','#ececec')
		$(this).css('background','red')
		$('.show div').eq(0).show()
		$('.show div').eq(1).hide()
	})

	$('.myyouhui').click(function(){
		$('.show').slideToggle()
	})

//	$('#telephone,#phone').blur(function(){
//		if($('#telephone').val()==''&&$('#phone').val()==''){
//		$('#phone').next('strong').show()
//	}else{$('#phone').next('strong').hide()}
//	})
	
		$('#telephone').blur(function(){
		if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test($(this).val())){
		$('#phone').next('strong').show().html('请输入正确的手机号')
		
		}
	})

	$('#phone').blur(function(){
		if(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test($('#telephone').val())==-1){
			$('#phone').next('strong').show().html('请输入正确的手机号')
		}else if(!/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/.test($(this).val()) ){
			$('#phone').next('strong').show().html('请输入正确的电话号码')
		}
		else if($('#telephone').val()==''&&$('#phone').val()==''){
		$('#phone').next('strong').show()
	}else{$('#phone').next('strong').hide()}
	})

	_init_area()

	

	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.returnTop').show()
		}else{$('.returnTop').hide()}
	})

	$('.returnTop').click(function(){
		$('html,body').animate({'scrollTop':0})
	})






})