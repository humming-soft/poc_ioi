$(document).ready(function(){
	
	
	// 
	// barchart group
	// 
	
	// group 1
	Highcharts.chart('barchart_1_left', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'APR-17'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [200000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [114000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	Highcharts.chart('barchart_1_right', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'2016','2017'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Budget',
			color: '#09f',
			data: [3200000,3600000],
			pointPadding: 0.2,
			pointPlacement: 0
		}, {
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [3000000,3400000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [420000,450000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	
	// group 2
	Highcharts.chart('barchart_2_left', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'APR-17'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [200000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [114000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	Highcharts.chart('barchart_2_right', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'2016','2017'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Budget',
			color: '#09f',
			data: [3200000,3600000],
			pointPadding: 0.2,
			pointPlacement: 0
		}, {
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [3000000,3400000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [420000,450000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	
	// group 3
	Highcharts.chart('barchart_3_left', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'APR-17'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [200000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [114000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	Highcharts.chart('barchart_3_right', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'2016','2017'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Metric Tonnes(MT)'
			}
		}],
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			showInLegend:false,
			name: 'Budget',
			color: '#09f',
			data: [3200000,3600000],
			pointPadding: 0.2,
			pointPlacement: 0
		}, {
			showInLegend:false,
			name: 'Target',
			color: '#0ff',
			data: [3000000,3400000],
			pointPadding: 0.3,
			pointPlacement:0
		}, {
			showInLegend:false,
			name: 'Actual',
			color: '#c0c',
			data: [420000,450000],
			pointPadding: 0.4,
			pointPlacement: 0
		}]
	});
	


});	