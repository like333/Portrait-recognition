$(function() {

	/* 勤务统计分析数据 */
	var staData = [10, 52, 200, 334, 390, 330, 220];

	var staOption = {
		background: '#fff',
		title: {
			text: '下社区率统计表',
			left: 'center'
		},
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '60%',
			data: staData
		}]
	};

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

	setInit('staChart', staOption);
})