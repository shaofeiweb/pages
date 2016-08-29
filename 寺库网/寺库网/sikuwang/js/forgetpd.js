$(document).ready(function(){
	$('#pd_userName').blur(function(){
		if($(this).val()==''){
			$(this).val('请输入用户名')
		}
	})
	$('#pd_userName').focus(function(){
		if($(this).val()=='请输入用户名')
			$(this).val('')
		
	})
	
	
//	$(function(){
//		var a=Math.random()*10000;
//		if( a.length<4){
//			var k=a.length;
//			for(var j=0;j<k;j++){
//				a+='0'
//			}
//			return a
//		}
//		$('.forget_box').find('span').val(a)
//	})
	
	$('.forget_box').find('a').click(function(){
		
		var b=parseInt(Math.random()*10000);
		b=b.toString()
		
		if( b.length<4){
			
			var k=b.length;
			for(var j=0;j<4-k;j++){
				b='0'+b
			}
			
		}
		
		$('.forget_box').find('span').html(b)
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})



















