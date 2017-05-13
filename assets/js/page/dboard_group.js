$(document).ready(function(){
	
	$(".tag").click(function(){
		window.location.href = "estate.php";
	})

	// 
	// table group
	// 


	var table_data = [
		{
			"tg1_location":"LD",
			"tg1_ffb_act":"8888",
			"tg1_ffb_bud":"8888",
			"tgl_ffb_var":"88%",
			"tg1_cpo_act":"8888",
			"tg1_cpo_bud":"8888",
			"tgl_cpo_var":"88%",
			"tg1_pk_act":"8888",
			"tg1_pk_bud":"8888",
			"tgl_pk_var":"88%"
		},{
			"tg1_location":"SD",
			"tg1_ffb_act":"8888",
			"tg1_ffb_bud":"8888",
			"tgl_ffb_var":"88%",
			"tg1_cpo_act":"8888",
			"tg1_cpo_bud":"8888",
			"tgl_cpo_var":"88%",
			"tg1_pk_act":"8888",
			"tg1_pk_bud":"8888",
			"tgl_pk_var":"88%"
		},{
			"tg1_location":"WM",
			"tg1_ffb_act":"8888",
			"tg1_ffb_bud":"8888",
			"tgl_ffb_var":"88%",
			"tg1_cpo_act":"8888",
			"tg1_cpo_bud":"8888",
			"tgl_cpo_var":"88%",
			"tg1_pk_act":"8888",
			"tg1_pk_bud":"8888",
			"tgl_pk_var":"88%"
		}
	];
	for (var i = 0; i < table_data.length; i++) {
		a = table_data[i]
		data_tg1_location = a.tg1_location;
		data_tg1_ffb_act = a.tg1_ffb_act;
		data_tg1_ffb_bud = a.tg1_ffb_bud;
		data_tgl_ffb_var = a.tgl_ffb_var;
		data_tg1_cpo_act = a.tg1_cpo_act;
		data_tg1_cpo_bud = a.tg1_cpo_bud;
		data_tgl_cpo_var = a.tgl_cpo_var;
		data_tg1_pk_act = a.tg1_pk_act;
		data_tg1_pk_bud = a.tg1_pk_bud;
		data_tgl_pk_var = a.tgl_pk_var;

		var table_row = '<tr><td class="tg1_loc">'+data_tg1_location+'</td><td class="tg1_ffb"><div class="row"><div class="col-md-6 tg1_actual">Actual</div><div class="col-md-6 tg1_actual">'+data_tg1_ffb_act+'</div><div class="col-md-6 tg1_budget">Budget</div><div class="col-md-6 tg1_budget">'+data_tg1_ffb_act+'</div><div class="col-md-6 tgl_variance">Variance</div><div class="col-md-6 tgl_variance">'+data_tg1_ffb_act+'</div></div></td><td class="tg1_cpo"><div class="row"><div class="col-md-6 tg1_actual">Actual</div><div class="col-md-6 tg1_actual">'+data_tg1_ffb_act+'</div><div class="col-md-6 tg1_budget">Budget</div><div class="col-md-6 tg1_budget">'+data_tg1_ffb_act+'</div><div class="col-md-6 tgl_variance">Variance</div><div class="col-md-6 tgl_variance">'+data_tg1_ffb_act+'</div></div></td><td class="tg1_pk"><div class="row"><div class="col-md-6 tg1_actual">Actual</div><div class="col-md-6 tg1_actual">'+data_tg1_ffb_act+'</div><div class="col-md-6 tg1_budget">Budget</div><div class="col-md-6 tg1_budget">'+data_tg1_ffb_act+'</div><div class="col-md-6 tgl_variance">Variance</div><div class="col-md-6 tgl_variance">'+data_tg1_ffb_act+'</div></div></td></tr>';

		$('.portlet_region_production_data tbody').append(table_row);
	};
	


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

	// yield / HA
	Highcharts.chart('chart_yield_ha', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'2017'
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Hectar'
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
			name: 'Target',
			color: '#f50',
			data: [3200000],
			pointPadding: 0.2,
			pointPlacement: 0
		}, {
			name: 'Actual',
			color: '#5f5',
			data: [3000000],
			pointPadding: 0.3,
			pointPlacement:0
		}]
	});

	// production_cost
	Highcharts.chart('chart_production_cost', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'2017'
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
			name: 'Target',
			color: '#f50',
			data: [3200000],
			pointPadding: 0.2,
			pointPlacement: 0
		}, {
			name: 'Actual',
			color: '#ff0',
			data: [3000000],
			pointPadding: 0.3,
			pointPlacement:0
		}]
	});
	


});	