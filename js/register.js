$(function(){
	
	


$('#vip').click(function(){
	$('#vip_name').toggle()
})

$('#userNegation').mouseover(function(){
	$('.src').slideDown();
	
})
$('#userNegation').mouseout(function(){
	$('.src').slideUp()
	
})
$('.src').mouseenter(function(){
	$(this).css('display','block')
})

$('.src').mouseleave(function(){
	$(this).css('display','none')
})

$('#userName').parent().find('input').focus(function(){
	$(this).css('border','1px solid red');
	
})

$('#userName').parent().find('input').blur(function(){
	$(this).css('border','1px solid #999999')
})
var a=['@163.com','@qq.com','@sina.com','@qihu.com','@186.com','@171.com','@151.com']


		$('#userName').keyup(function(ev) {
			var ev = ev || event
			if (ev.keyCode != 13) {
				$('.mail_choose').find('p').each(function(i, ele) {
					$('.mail_choose').show()
		
					$(this).text($('#userName').val() + a[i])
		
				})
		
			} else {
				return false
			}
		
		
		})

		var k = 0
		$('#userName').keydown(function(ev) {
			$('.mail_choose').find('p').eq(0).addClass('mail_choose_color')
			var ev = ev || event
			if (ev.keyCode == 40) {
				k++
				if (k > 6) {
					k = 6
				}
		
			}
			if (ev.keyCode == 38) {
				k--
				if (k < 0) {
					k = 0
				}
		
			}
			$('.mail_choose').find('p').removeClass('mail_choose_color')
			$('.mail_choose').find('p').eq(k).addClass('mail_choose_color').siblings().removeClass('mail_choose_color')
			if (ev.keyCode == 13) {
				$('#userName').val($('.mail_choose').find('p').eq(k).text())
				$('.mail_choose').hide()
				return false
			}
		
		
		})
	
	$(document).click(function(){
		$('.mail_choose').hide()
	})


	$('.mail_choose p').click(function(){
		$('#userName').val($(this).text())
		$('.mail_choose').hide()
	})

	$('#userName').blur(aa)

	//密码开始
	$('#password1').blur(bb)
	$('#confirm_password').blur(cc)	
	
	function cc(){
		if($('#confirm_password').val().length==0){$('#confirm_password').prev().find('span').eq(1).show().html('请在此输入密码').css({'color':'red','font-weight':'700'})
		return false;
		}
		else if($('#confirm_password').val()!=$('#password1').val()){
			$('#confirm_password').prev().find('span').eq(1).show()
			return false;
		}else{$('#confirm_password').prev().find('span').eq(1).hide()
		
		return true;
		}
	}
	
	function bb(){
		if($('#password1').val().length==0){$('#password1').prev().find('span').eq(1).show().html('请输入密码').css({'color':'red','font-weight':'700'})
		return false;}
		else if($('#password1').val().length<6||$('#password1').val().length>16){
			$('#password').prev().find('span').eq(1).show()
			return false;
		}else{$('#confirm_password').prev().find('span').eq(1).hide()
		
		return true;
		
		}
	}
	
	function aa(){
		
		if((/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i).test($(this).val().slice(0,11))){
			$('.re_column').find('span').eq(1).hide();
			return true;
			
		}else{
		$('.re_column').find('span').eq(1).css({'color':'red','font-weight':'700'}).html('请输入正确手机号');
		return false
		
		
		}
	}
	
	
	
	
	
	$('#confirm_btn').click(function(){
		
		if(aa&&cc()&&bb()){
			$.cookie('telphone',  $('#userName').val(),{'expires':7});
	        $.cookie('psw',  $('#password1').val(),{'expires':7});
	       
	        
			window.open('register_success.html' , ' _target')
			
		}else{
			return false;
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	



})//window