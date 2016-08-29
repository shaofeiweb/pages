window.onload=function(){
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













}//window结束