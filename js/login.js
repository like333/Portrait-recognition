$(function() {
	posCenter($('#box'));
	$(window).resize(function(){//窗口缩放
		var iTop = ($(document).height() - $('#box').outerHeight()) / 2;
			posCenter($('#box'));
	});//end

	$('.login_btn').click(function(){
		if($('.user').eq(0).val()==''){
			alert('用户名不能为空！');
		}
		if($('.psw').eq(1).val()==''){
			alert('密码不能为空！');
		}
	})//end
	
	//登录弹出框
	$(".dialog").dialog({
		width: 380,
		maxHeight: 300,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 300
		},
		hide: {
			effect: "blind",
			duration: 300
		},
		
	});
	
    $( "#forget" ).on( "click", function() {
      $( "#forgetDialog" ).dialog( "open" );
    });
	$('.confirm').click(function(){
		$( "#forgetDialog" ).dialog( "close" );
	})
	
	if(browser()){//ie9以下输入框默认字
		$('.user').val('请输入用户名').addClass('light_gray');
		$('.psw').val('请输入密码').addClass('light_gray');;
		$('.text_box').click(function(){
			if($(this).val()=='请输入用户名'||$(this).val()=='请输入密码'){
				$(this).val('').removeClass('light_gray');
			}
			return false;
		});
		$(document).click(function(){
			if($('.user').val()==''){
				$('.user').val('请输入用户名').addClass('light_gray');
			}
			if($('.psw').val()==''){
				$('.psw').val('请输入密码').addClass('light_gray');
			}
			return false;
		});
	}//end
	
	
//内容水平垂直居中
function posCenter($obj) { //将输入框定位在窗口中心
		var iTop = ($(document).height() - $obj.outerHeight()) / 2;
		$obj.css('top', iTop);
} //end

//判断ie
function browser() {
	var browser = navigator.appName
	var b_version = navigator.appVersion
	var version = b_version.split(";");
	var trim_Version = version[1].replace(/[ ]/g, "");
	if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
		return("IE 6.0");
	} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
		return("IE 7.0");
	} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
		return("IE 8.0");
	} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
		return("IE 9.0");
	}else{
		return false;
	}
}
	
})