$(function(){function t(){var t=!0;$.each(e,function(o,n){t=t&&""!=$(n).val()}),t?n.addClass("hasForgotten_confirm_button_active"):n.removeClass("hasForgotten_confirm_button_active")}function o(){i=setTimeout(function(){a.text(c+"秒后重新发送"),c--,c>0?o():0==c&&(a.text("获取验证码"),a.removeClass("get_code_wait"),c=59)},1e3)}var n=$(".hasForgotten_confirm_button"),e=$(".hasForgotten_per_box .hasForgotten_per_input");$.each(e,function(o,n){$(n).keyup(function(){t()})});var a=$(".get_code");a.click(function(){a.hasClass("get_code_wait")||($(this).addClass("get_code_wait").text("60秒后重新发送"),o())});var i,c=59;n.click(function(){$(this).hasClass("hasForgotten_confirm_button_active")&&(location.href="../login/login.html")})});