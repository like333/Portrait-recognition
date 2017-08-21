$(function() {
	function setWidth(){//侧边栏.sidebar，#main自适应宽高度设置
		$('#main').css('width', $('body').width() - $('.sidebar').outerWidth() - 40);
		$('.sidebar').css('height', $(window).height() - $('.header').height() - 10);
		$('#main .view').css('width', $('#main').width() - $('.treeView').outerWidth() - 40);//系统设置->组织机构右边宽度设置
		$('#eChart .tr2 .box').css('width', ($('#main').outerWidth() - 20) / 2 - 20);//首页布局
		$('#tipShow li').css('width', ($('#main').width() - 20) / 2 - 20);	//工作提示管理-查看模块宽度设置
	}
	setWidth();
	//窗口缩放宽度随之变化
	$(window).resize(setWidth);
	$(window).scroll(function() {
		$('.sidebar').css('top', $('.header').outerHeight() + $(this).scrollTop());
	})
	//二级菜单
	$('.sidebar h3').click(function() {
		if($('.sidebar ul').is(":hidden")) {
			$('.sidebar ul').show(500); //如果元素为隐藏,则将它显现
			$(this).find('.arrow').removeClass('icon-up');
			$(this).find('.arrow').addClass('icon-down');
		} else {
			$('.sidebar ul').hide(500); //如果元素为显现,则将其隐藏
			$(this).find('.arrow').removeClass('icon-down');
			$(this).find('.arrow').addClass('icon-up');
		}
	});
	//表格数据
	var tJson1 = {
		'所属派出所': ['东北旺派出所'],
		'责任民警': ['张三'],
		'房屋地址': ['东北旺马连洼社区9号楼1门101', '东北旺马连洼社区9号楼1门102', '东北旺马连洼社区9号楼1门201',
			'东北旺马连洼社区9号楼1门202', '东北旺马连洼社区9号楼1门301', '东北旺马连洼社区9号楼1门302',
			'东北旺马连洼社区9号楼1门401', '东北旺马连洼社区9号楼1门402', '东北旺马连洼社区9号楼1门501',
			'东北旺马连洼社区9号楼1门502'
		],
		'房屋类型': ['出租房屋', '自住房', '自住房', '出租房屋', '出租房屋', '自住房', '出租房屋', '出租房屋', '自住房', '出租房屋'],
		'走访日期': ['2016-12-05'],
		'操作': ['<a href="#" class="view">查看</a><a href="#" class="del">删除</a>']
	}
	var tJson2 = {
		'单位名称': ['江婷劳保用品店', '鲜奶吧', '中国移动手机专营店',
			'中国联通手机专营店', '万鑫社区便利店', '李涛山西刀削面馆',
			'易买吧代购服务店', '燕子烟酒茶专卖店', '小宝宝亲子家园',
			'丽人时尚美容美发'
		],
		'责任民警': ['张三'],
		'所属派出所': ['东北旺派出所'],
		'走访日期': ['2016-12-05'],
		'操作': ['<a href="unit_view.html" class="view">查看</a><a href="#" class="edit">编辑</a><a href="#" class="del">删除</a>']
	}
	var tJson3 = {
		'提示日期': ['2016-12-05'],
		'工作提示': ['走访工作提示'],
		'推送责任人': ['张三', '沈建刚', '张宏涛', '王宇', '李四', '沈建刚', '张宏涛', '王宇', '陈麟', '廖中原'],
		'操作': ['<a href="workTips_view.html" class="view">查看</a><a href="workTips_edit.html" class="edit">编辑</a><a href="#" class="del">删除</a>']
	}
	var tJson4 = {
		'所属派出所': ['东北旺派出所'],
		'警员': ['张三', '沈建刚', '张宏涛', '王宇', '李四', '沈建刚', '张宏涛', '王宇', '陈麟', '廖中原'],
		'警号': ['123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456'
		],
		'工作时间': ['2016-12-05'],
		'操作': ['<a href="workEffect_view.html" class="view">查看</a><a href="#" class="del">删除</a>']
	}
	var tJson5 = {
		'警号': ['123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456'
		],
		'姓名': ['韩怀国', '沈建刚', '张宏涛', '王宇', '李四', '沈建刚', '张宏涛', '王宇', '陈麟', '廖中原'],
		'所属派出所': ['东北旺派出所'],
		'工作状态': ['下社区'],
		'工作日期': ['2016-12-05'],
	}
	var tJson6 = {
		'用户账户': ['admin'],
		'用户名': ['管理员用户'],
		'警员编号': ['123212'],
		'角色': ['超级管理员'],
		'所属组织机构': ['北京市公安局'],
		'是否有效': ['是'],
		'操作': ['<a href="#" class="view">查看</a><a href="#" class="edit">修改</a><a href="#" class="reset">密码重置</a>']
	}
	var tJson7 = {
		'角色名称': ['admin'],
		'角色描述': ['普通管理员用户'],
		'是否有效': ['是'],
		'创建时间': ['2012-12-12 17:23:17'],
		'最后修改时间': ['2016-08-19 11:43:57'],
		'操作': ['<a href="javascript::" class="view">查看</a><a href="javascript::" class="edit">修改</a>']
	}
	var tJson8 = {
		'操作人账号': ['admin'],
		'用户名': ['管理员用户'],
		'操作模块': ['字典管理'],
		'操作类型': ['查询'],
		'IP': ['172.100.255.196'],
		'操作时间': ['2017-05-11 10:31:26']
	}
	var tJson9 = {
		'字典类型名称': ['工作区域密码下发状态', '安卓应用权', 'apk文件类型', '设备状态', '应用状态', '是否', '性别'],
		'字典类型编码': ['divice'],
		'字典类型名称描述': ['工作区域密码下发状态'],
		'是否有效': ['是'],
		'操作': ['<a href="javascript::" class="dicEdit">修改</a><a href="javascript::" class="dicMange">字典数据管理</a>']
	}
	var tJson10 = {//工作提示--查看 workTips_view.html
		'派出所': ['东北旺派出所'],
		'警号': ['123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456', '234567', '345678',
			'123456'
		],
		'姓名': ['韩怀国', '沈建刚', '张宏涛', '王宇', '李四', '沈建刚', '张宏涛', '王宇', '陈麟', '廖中原'],
		'接收时间': ['2017-05-11'],
		'状态': ['已查看','已查看','已查看','未查看','未查看','已查看','已查看','未查看','未查看','未查看']
	}
	var tJson11 = {//重点人员管理-importantMange.html
		'走访日期': ['2017-05-11'],
		'重点人姓名': ['李四'],
		'身份证号': ['1234567890988'],
		'责任民警': ['张三'],
		'所属派出所': ['东北旺派出所'],
		'操作': ['<a href="#" class="view">查看</a><a href="#" class="edit">编辑</a><a href="#" class="del">删除</a>']
	}
	var tJson12 = {//标准地址管理adddressMange.html
		'社区': ['东北旺马连洼社区'],
		'街道': ['东北旺马连洼'],
		'详细地址': ['1号楼3单元201'],
		'主责单位': ['单位名称'],
		'主责民警': ['韩怀国', '沈建刚', '张宏涛', '王宇', '李四', '沈建刚', '张宏涛', '王宇', '陈麟', '廖中原'],
		'审批状态': ['通过','未通过','通过','未通过','通过','通过','通过','通过','通过','通过'],
		'操作': ['<a href="#" class="view">查看</a><a href="#" class="edit">编辑</a><a href="#" class="del">删除</a>']
	}
	//创建表格
	function creatTb(obj, data) {
		//表头
		var $thead = $('<thead></thead>');
		var $hTr = $('<tr></tr>');
		$hTr.append('<th>序号</th>')
		for(var attr in data) {
			$hTr.append($('<th>' + attr + '</th>'));
		}
		$thead.append($hTr);
		obj.append($thead);
		
		//行
		var $tBody = $('<tbody></tbody>')
		for(var i = 0; i < 10; i++) {
			var $tr = $('<tr></tr>');
			$tr.append('<td>' + i + '</td>')
			//列
			for(var attr in data) {
				if(data[attr].length < 2) {
					$tr.append($('<td>' + data[attr][0] + '</td>'));
				} else {
					$tr.append($('<td>' + data[attr][i] + '</td>'));
				}
			}
			$tBody.append($tr);
		}
		obj.append($tBody);
		
		obj.find($('tr a.del')).click(function(){
			$(this).parents('tr').remove();
		})
	}
	//创建表格
	creatTb($('#homeTb'), tJson1); //入户走访
	creatTb($('#unitTb'), tJson2); //单位走访
	creatTb($('#tipsTb'), tJson3); //工作提示
	creatTb($('#effectTb'), tJson4); //工作成效
	creatTb($('#stasticTb'), tJson5); //勤务统计分析
	creatTb($('#userTb'), tJson6); //用户管理
	creatTb($('#roleTb'), tJson7); //角色管理
	creatTb($('#logTb'), tJson8); //日志管理
	creatTb($('#dicTb'), tJson9); //字典管理
	creatTb($('#tipsViewTb'), tJson10); //工作提示--查看 workTips_view.html
	creatTb($('#imporTb'), tJson11); //重点人员管理-importantMange.html
	creatTb($('#addressTb'), tJson12); //标准地址管理adddressMange.html
	
	var $str=$('#tipsViewTb tr');
	$str.each(function(){
		var $std=$(this).find($('td:last-child'));
		var str=$std.html();
		if(str=='未查看'){
			$std.css('color','red');
		}else if(str=='已查看'){
			$std.css('color','green');
		}
	})
	/*入户走访管理查看链接
	 * 房屋类型为出租房屋时候ruhu_cz.html
	 * 房屋类型为自住房时候ruhu_zz.html
	 */
	$('#homeTb tr').each(function() {
		var type = $(this).find($('td')).eq(4).html()
		if(type == "出租房屋") {
			$(this).find($('.view')).attr('href', 'ruhu_cz.html')
		} else if(type == "自住房") {
			$(this).find($('.view')).attr('href', 'ruhu_zz.html')
		}
	});
	
	//下拉框初始化
	$(".selector").selectmenu();
	//下拉框配置信息
	$(".selector").selectmenu({
		width: 225,
		height: 32
	});
	//弹出框配置
	$(".dialog").dialog({
		width: 660,
		height: 460,
		autoOpen: false,
		resizable: false,
		show: {
			effect: "blind",
			duration: 200
		},
		hide: {
			effect: "blind",
			duration: 200
		}
	});
	//弹出框取消按钮
	$('.confirm').click(function() {
		$(".dialog").dialog("close");
	});
	//角色管理点击编辑按钮弹出框打开
	$("#roleTb").find($('.edit')).on("click", function() {
		$("#roleEdit").dialog("open");
	});
	//创建用户sys_user.html
	$('#addUser').click(function() {
		$("#addUser_dialog").dialog("open");
	})
	//字典管理点击字典编辑按钮
	$("#dicTb").find($('.dicEdit')).on("click", function() {
		$("#dicEdit").dialog("open");
	});
	//字典管理点击字典管理按钮
	$("#dicTb").find($('.dicMange')).on("click", function() {
		$("#dicMange").dialog("open");
	});
	//
	//时间选择框初始化，开始时间--结束时间
	$("#datepicker").datepicker();
	//时间格式
	$("#from").datepicker({
		dateFormat: "yy-mm-dd"
	});
	$("#to").datepicker({
		dateFormat: "yy-mm-dd"
	});
	var dateFormat = "yy-mm-dd";
	from = $("#from")
		.datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 1
		})
		.on("change", function() {
			to.datepicker("option", "minDate", getDate(this));
		}),
		to = $("#to").datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 1
		})
		.on("change", function() {
			from.datepicker("option", "maxDate", getDate(this));
		});

	function getDate(element) {
		var date;
		try {
			date = $.datepicker.parseDate('dateFormat', element.value);
		} catch(error) {
			date = null;
		}
		return date;
	};
	//开始时间--结束时间end
	
	//点击查询按钮
	//初始隐藏
	
	$('#staChart').hide();
	//点击搜索按钮出现搜索结果
	$('.search_btn').click(function() {
		$('.table').css('background', 'white');
		$('.tool').show();
		$('.tb_box').show();
		$('#staChart').hide();
	});
	//勤务统计分析，点击统计按钮出现统计图
	$('.sta_btn').click(function() {
		$('.table').css('background', 'white');
		$('.tool').hide();
		$('.tb_box').hide();
		$('#staChart').show();
	});
	//角色管理表格点击查看，弹出框内容对应表格内容
	$("#roleTb").find($('.view')).on("click", function() {
		$("#roleView").dialog("open");
		var $line = $(this).parents('tr').find($('td'));
		$("#roleView td").eq(1).html($line.eq(2).html());
		$("#roleView td").eq(3).html($line.eq(3).html());
		$("#roleView td").eq(5).html($line.eq(4).html());
	});
	//分页#page配置信息
	$("#page").Page({
		totalPages: 7, //分页总数
		liNums: 5, //分页的数字按钮数(建议取奇数)
		activeClass: 'activP', //active 类样式定义
		callBack: function(page) {
			//console.log(page)
		}
	})

	/*表格勾选删除操作
	 * $tb 要操作的表格对象
	 * $btn点击删除的按钮对象(可选)
	*/
	function del($tb, $btn) {
		var $tbCh = $tb.find($('tbody input'));
		var $thCh = $tb.find($('thead input'));
		function check() {
			$tbCh.each(function() {
				if($(this).prop('checked')) {
					$(this).parent().parent().addClass('active');
				} else {
					$(this).parent().parent().removeClass('active');
				}
			});
			return $tb.find($('tbody input:checked')).length;
		}
		$tbCh.click(function() {
			check();
			check() == 10 ? $thCh.prop('checked', true) : $thCh.prop('checked', false);
		})
		$thCh.click(function() {
			$tbCh.prop('checked', $(this).prop("checked"));
			check();
		});
		if($btn) {
			$btn.click(function() {
				$tb.find($('tbody input:checked')).parent().parent().remove();
			});
		}
	}
	del($('.tb'), $('#del_btn'));
	//工作提示--查看模块信息展示
	del($('.notice'));
	del($('.zfgz'));
	del($('.zdrl'));
	//工作提示--查看模块删除按钮操作
	$('#tipsDelBtn').click(function() {
		$('.notice').find($('tbody input:checked')).parent().parent().remove();
		$('.zfgz').find($('tbody input:checked')).parent().parent().remove();
		$('.zdrl').find($('tbody input:checked')).parent().parent().remove();
	})

	/**
	 * 首页时间
	 * 获取当前时间
	 */
	function p(s) {
		return s < 10 ? '0' + s : s;
	}
	function num(w) {
		switch(w) {
			case 0:
				return '星期日';
				break;
			case 1:
				return '星期一';
				break;
			case 2:
				return '星期二';
				break;
			case 3:
				return '星期三';
				break;
			case 4:
				return '星期四';
				break;
			case 5:
				return '星期五';
				break;
			case 6:
				return '星期六';
				break;
		}
	}
	function getTime() {
		var myDate = new Date();
		//获取当前年
		var year = myDate.getFullYear();
		//获取当前月
		var month = myDate.getMonth() + 1;
		//获取当前日
		var date = myDate.getDate();
		var week = myDate.getDay();
		var h = myDate.getHours(); //获取当前小时数(0-23)
		var m = myDate.getMinutes(); //获取当前分钟数(0-59)
		var s = myDate.getSeconds();
		var now = year + '-' + p(month) + "-" + p(date) + " " + num(week) + " " + p(h) + ':' + p(m) + ":" + p(s);
		return now;
	}
	$('#browse .time').html(getTime());
	var timer = setInterval(function() {
		$('#browse .time').html(getTime());
	}, 1000)

	//tab初始化
	$("#tabs").tabs();
	
	//入户走访-查看房屋信息图片点击放大
	var $pic=$('#infoShow .tb .pic li'),
		$video=$('#infoShow .tb .video li'),
		$picZoomIn=$('#infoShow .tb .picZoomIn'),
		$videoZoomIn=$('#infoShow .tb .videoZoomIn');
		
		$picZoomIn.hide();
		$videoZoomIn.hide();
		
		zoom($pic);
		zoom($video);
		function zoom( obj1 ){
			obj1.click(function(){
				var $next=$(this).parent().next();
				$next.click(function(){
					$(this).hide();
					obj1.removeClass('active');
				})
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					$next.hide();
				}else{
					obj1.removeClass('active');
					$(this).addClass('active');
					$next.show();
					$next.find($('img')).attr('src',$(this).find($('img')).attr('src'));
				}
			});
		}
})