$(document).ready(function(){
	
	$('input').slice(0,2).focus(function(){
	
	$(this).css('background','url(img/login_user2.jpg) -15px no-repeat')
})
	
	$('input').slice(0,2).blur(function(){
	
	$(this).css('background','url(img/login_user.jpg) -15px no-repeat')
})
	
	$('.now_to_login').click(function(){
		if($('#userName').val()==$.cookie('telphone')&&$('#password').val()==$.cookie('psw')){
		window.open('index.html' , ' _target')
		
	}else{alert('false')}
	
	
	})
	
	
})












