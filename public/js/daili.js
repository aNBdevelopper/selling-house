/**
 * Created by lenovo on 2016/11/15.
 */
$(function(){
	var touXiang = $(".touxiang");
	touXiang.click(function(){
		$(".add_touxiang" ).trigger("click");
	})
	var weixin_erweima = $(".weixin_erweima");
	weixin_erweima.click(function(){
		$(".weixin_erweima_input" ).trigger("click");
	})
	var yingyezhizhao = $(".yingyezhizhao");
	yingyezhizhao.click(function(){
		$(".yingyezhizhao_input" ).trigger("click");
	})
	var zushou_daili = $(".zushou_daili");
	zushou_daili.click(function(){
		$(".zushou_daili_input" ).trigger("click");
	})

	var wancehng_button = $(".confirm" );
	wancehng_button.click(function(){
		location.href="zhezhaoceng.html";
	})
})