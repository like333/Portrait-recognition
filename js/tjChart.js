$(function() {
	var colorList = ['#a587e2', '#00b6f5', '#ffe013'];
	/*首页图表数据*/
	var mainData = {
		'aqyh': [{
			name: '安全隐患',
			value: 24
		}],
		'dwzf': [{
			name: '单位走访',
			value: 60
		}],
		'zdry': [{
			name: '重点人员',
			value: 78
		}],
		'rhzf': [{
			name: '户籍人口',
			value: 45
		}, {
			name: '人户分离',
			value: 15
		}, {
			name: '流动人口',
			value: 30
		}],
	};
	/* 1------入户走访*/
	function createBarSeries(mainData, name, color) {
		var result = [];
		result.push({
			name: name,
			type: 'bar',
			itemStyle: {
				normal: {
					color: function(Params) {
						return color[Params.dataIndex]
					}
				}
			},
			data: mainData,
			label: {
				normal: {
					show: true,
					position: 'top',
					offset: [0, -5],
					textStyle: {
						fontSize: 14
					},
					formatter: function(params) {
						return params.data.name;
					}
				}
			}
		})
		return result;
	}
	/* 1------入户走访*/
	var rhzfOption = {
		backgroundColor: '#ffffff',
		title: {
			text: '入户走访'
		},
		tooltip: {
			trigger: 'axis',
			formatter: '{a}<br/>{b}:{c}'
		},
		xAxis: {
			type: 'category',
			data: ['户籍人口', '人户分离', '流动人口'],
		},
		yAxis: {
			name: '数量'
		},
		series: createBarSeries(mainData.rhzf, '入户走访', colorList),
		barCategoryGap: '70%'
	}; //end
	/* 2-----重点人员管理*/
	function createSeries(mainData) {
		var result = [];
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					return '共' + params.value + '人' + '\n' + '\n' + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 16
				}
			}
		};
		for(var i = 0; i < mainData.length; i++) {
			result.push({
				type: 'pie',
				//center: [i * 50 + 25 + '%', '50%'],
				radius: ['50%', '55%'],
				label: insideLabel,
				itemStyle: {
					normal: {
						color: colorList[i]
					}
				},
				data: [{
					name: mainData[i].name,
					value: mainData[i].value,
				}],
			});
		}
		return result;
	}
	var zdryOption = {
		backgroundColor: "white",
		title: {
			text: '重点人员管理',
			x: 'left'
		},
		series: createSeries(mainData.zdry)
	} //end
	/* 3-安全隐患*/
	var aqyhOption = {
		backgroundColor: '#fff',
		title: {
			text: '安全隐患'
		},
		series: [{
			name: '安全隐患',
			center: ['50%', '54%'],
			type: 'pie',
			radius: ['0%', '60%'],
			avoidLabelOverlap: false,
			color: ['#00b6f5'],
			label: {
				normal: {
					position: 'center',
					formatter: '共' + "{c}" + '处' + "\n\n{b}",
					textStyle: {
						fontStyle: 'normal',
						fontWeight: 'normal',
						color: '#fff',
						fontSize: 18
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: mainData.aqyh
		}]
	};
	/* 4------单位走访*/
	var dwzfOption = {
		backgroundColor: '#fff',
		title: {
			text: '单位走访'
		},
		series: [{
			name: '单位走访',
			center: ['50%', '54%'],
			type: 'pie',
			radius: ['0%', '60%'],
			avoidLabelOverlap: false,
			color: ['#ffe013'],
			label: {
				normal: {
					position: 'center',
					formatter: '共' + "{c}" + '个' + "\n\n{b}",
					textStyle: {
						fontStyle: 'normal',
						fontWeight: 'normal',
						color: '#fff',
						fontSize: 18
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: mainData.dwzf
		}]
	}; //end

	function setInit(id, option) {
		var Chart = echarts.init(document.getElementById(id));
		Chart.setOption(option);
		$(window).resize(function() {
			Chart.resize({
				opts: {
					width: 'auto'
				}
			});
		});
	}
	setInit('zdry', zdryOption);
	setInit('aqyh', aqyhOption);
	setInit('dwzf', dwzfOption);
	setInit('rhzf', rhzfOption);

})