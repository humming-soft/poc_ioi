$(document).ready(function(){

	$('.blink').blink();

	
	
	// ------------------------------
	//
	// table group
	//
	// ------------------------------

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
	
	// ------------------------------
	//
	// yield / HA
	//
	// ------------------------------ 
	
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

	// ------------------------------
	//
	// production_cost
	//
	// ------------------------------ 
	
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
	
	// ------------------------------
	//
	// block_info
	//
	// ------------------------------

	//.portlet_info

	$('.portlet_info span.info_title').text('ROYAL PALM ESTATE');
	$('.portlet_info span.info_subtitle').text('Lahad Datu');


	// ------------------------------
	//
	// info
	//
	// ------------------------------

	//.portlet_sbks_progress

	$('.portlet_sbks_progress div.data1 span.item_value').text('2002');
	// $('.portlet_sbks_progress div.data2 span.item_value').text('1,258,040 kg');
	// $('.portlet_sbks_progress div.data3 span.item_value').text('1,219,340 kg');
	$('.portlet_sbks_progress div.data2 span.item_value').text('8,580.40 MT');
	$('.portlet_sbks_progress div.data3 span.item_value').text('8,193.40 MT');


	// ------------------------------
	//
	// harvesting
	//
	// ------------------------------

	//.portlet_keydates

	$('.pbn_harvesting div.plate span.number').text('199,480kg');
	$('.pbn_loosefruit div.plate span.number').text('4,220');
	$('.pbn_paid div.plate span.number').text('194,660kg');
	$('.pbn_variance div.plate span.number').text('4,820kg');
	$('.pbn_ffb div.plate span.number').text('203,700kg');


	// ------------------------------
	//
	// harvesting_map
	//
	// ------------------------------

	harvesting_map_data = [
		{"hmd_date":"6 Nov 2016","hmd_u":"0","hmd_ur":"0","hmd_or":"0","hmd_r":"119","hmd_d":"0","hmd_h":"119","hmd_lf":"1"},
		{"hmd_date":"22 Nov 2016","hmd_u":"0","hmd_ur":"0","hmd_or":"0","hmd_r":"174","hmd_d":"0","hmd_h":"174","hmd_lf":"5"},
		{"hmd_date":"31 Nov 2016","hmd_u":"0","hmd_ur":"0","hmd_or":"0","hmd_r":"117","hmd_d":"0","hmd_h":"117","hmd_lf":"3"}
	]

	for (var i = 0; i < harvesting_map_data.length; i++) {
		var ii = harvesting_map_data[i];
		hmd_val_hmd_date = ii.hmd_date;
		hmd_val_hmd_u = ii.hmd_u;
		hmd_val_hmd_ur = ii.hmd_ur;
		hmd_val_hmd_or = ii.hmd_or;
		hmd_val_hmd_r = ii.hmd_r;
		hmd_val_hmd_d = ii.hmd_d;
		hmd_val_hmd_h = ii.hmd_h;
		hmd_val_hmd_lf = ii.hmd_lf;

		$('.portlet_harvest_map_aa table tbody').append('<tr><td>'+hmd_val_hmd_date+'</td><td class="col_blk_01"><span>'+hmd_val_hmd_u+'</span></td><td class="col_blk_02"><span>'+hmd_val_hmd_ur+'</span></td><td class="col_blk_03"><span>'+hmd_val_hmd_or+'</span></td><td class="col_blk_04"><span>'+hmd_val_hmd_r+'</span></td><td class="col_blk_05"><span>'+hmd_val_hmd_d+'</span></td><td class="col_blk_06"><span>'+hmd_val_hmd_h+'</span></td></tr>');
		$('.portlet_harvest_map_ab table tbody').append('<tr><td>'+hmd_val_hmd_date+'</td><td class="col_blk_07"><span>'+hmd_val_hmd_lf+'</span></td></tr>');
		$('.portlet_harvest_map_ac table tbody').append('<tr><td>'+hmd_val_hmd_date+'</td><td class="col_blk_04"><span>'+hmd_val_hmd_r+'</span></td></tr>');
		$('.portlet_harvest_map_ad table tbody').append('<tr><td>'+hmd_val_hmd_date+'</td><td class="col_blk_01"><span>'+hmd_val_hmd_u+'</span></td><td class="col_blk_02"><span>'+hmd_val_hmd_ur+'</span></td><td class="col_blk_03"><span>'+hmd_val_hmd_or+'</span></td><td class="col_blk_05"><span>'+hmd_val_hmd_d+'</span></td><td class="col_blk_07"><span>'+hmd_val_hmd_lf+'</span></td></tr>');
		$('.portlet_harvest_map_ae table tbody').append('<tr><td>'+hmd_val_hmd_date+'</td><td class="col_blk_06"><span>'+hmd_val_hmd_h+'</span></td><td class="col_blk_07"><span>'+hmd_val_hmd_lf+'</span></td></tr>');

	};

	// ------------------------------
	//
	// ffb_detail
	//
	// ------------------------------

	ffb_details_data = [
		{"fdd_date":"7 Nov 2016","fdd_val":"321"},
		{"fdd_date":"21 Nov 2016","fdd_val":"298"}
	]

	var fdd_val_total = 0;

	for (var i = 0; i < ffb_details_data.length; i++) {
		var qq = ffb_details_data[i];
		fdd_val_date = qq.fdd_date;
		fdd_val_val = qq.fdd_val;

		fdd_val_total += parseInt(qq.fdd_val);

		$('.portlet_ffb_details table tbody').append('<tr><td>'+fdd_val_date+'</td><td class="col_blk_01"><span>'+fdd_val_val+'</span></td>');
		$('.pbn_ffb div.plate span.number').text(fdd_val_total+'kg');
		$('.pbn_ffb_details div.plate span.number').text(fdd_val_total+'kg');
	};


	// ------------------------------
	//
	// scurve
	//
	// ------------------------------

	$('div.portlet_scurve div.portlet_scurve_data > .row > div.item:nth-child(1) span.iv_low').text('1,092,936');
	$('div.portlet_scurve div.portlet_scurve_data > .row > div.item:nth-child(2) span.iv_high').text('1,457,352');
	$('div.portlet_scurve div.portlet_scurve_data > .row > div.item:nth-child(3) span.iv_actual').text('1,258,040');

	$(function () {
		Highcharts.setOptions({
			colors: ['#ff0055','#00aaff','#00ff55']
		});
		$('#demo_scurve3').highcharts({
			title: {
				text: '',
				x: -20
			},
			subtitle: {
				text: '',
				x: -20
			},
			xAxis: {
				categories: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
				plotBands: [{ // visualize the weekend
					from: 9,
					to: 11.5,
					color:'rgba(0,0,0,.3)'
				}],
				plotLines: [{
					color: '#fff',
					dashStyle: 'dot',
					width: 2,
					value: 9,
					label: {
						rotation: 0,
						x: -50,
						y: 15,
						style: {
							fontStyle: 'italic',
							color: '#fff'
						},
						text: 'Current'
					},
					zIndex: 3
				}]
			},
			yAxis: {
				title: {
					text: 'kg'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				shared: true,
				crosshairs: true
			},
			legend: {
				align: 'left',
				verticalAlign: 'top',
				y: 20,
				floating: true,
				color: '#ffffff',
				borderWidth: 0
			},
			series: [{
				name: 'Low',
				data: [631644,786240,977808,1043016,1174212,1250964,1376700,1227096,1099332,1092936,1065168,952380]
			}, {
				name: 'High',
				data: [869232,1110720,1195272,1303848,1588392,1674660,1835028,1689168,1489176,1457352,1425372,1335828]
			}, {
				name: 'Actual',
				data: [790452,925548,1086540,1133808,1382004,1472640,1530204,1444560,1295424,1258040]
			}],
			credits: {
				enabled: false
			}
		});

		// Highcharts.chart('highcharts-ht1', {
		// 	chart: {
		// 		type: 'column'
		// 	},
		// 	title: {
		// 		text: 'Budget'
		// 	},
		// 	xAxis: {
		// 		type: 'category'
		// 	},
		// 	yAxis: [{
		// 		title: {
		// 			text: 'RM',
		// 			align: 'middle'
		// 		},
		// 		labels: {
		// 			format: '{value}'
		// 		}
		// 	}],
		// 	rangeSelector: {
		// 		selected: 1
		// 	},
		// 	legend: {
		// 		shadow: false
		// 	},
		// 	tooltip: {
		// 		shared: true,
		// 		valuePrefix: 'RM '
		// 	},
		// 	plotOptions: {
		// 		column: {
		// 			grouping: false,
		// 			shadow: false,
		// 			borderWidth: 1
		// 		},
		// 		series: {
		// 			borderColor: '#fff'
		// 		}
		// 	},
		// 	series: [{
		// 		name: 'Target',
		// 		color: '#2255BC',
		// 		data: [{
		// 			name: '2016-2017',
		// 				y:6846000
		// 			}],
		// 		pointPadding: 0.3,
		// 		pointPlacement: 0,
		// 	}, {
		// 		name: 'Actual',
		// 		color: '#0c9',
		// 		data: [{
		// 			name: '2016-2017',
		// 			y:4812000,
		// 			 drilldown: 'b1'
		// 		}],
		// 		pointPadding: 0.4,
		// 		pointPlacement: 0
		// 	}],
		// 	drilldown: {
		// 		drillUpButton: {
		// 			relativeTo: 'spacingBox',
		// 			position: {
		// 				y: 0,
		// 				x: 0
		// 			},
		// 			theme: {
		// 				fill: 'white',
		// 				'stroke-width': 1,
		// 				stroke: 'silver',
		// 				r: 0,
		// 				states: {
		// 					hover: {
		// 						fill: '#bada55'
		// 					},
		// 					select: {
		// 						stroke: '#039',
		// 						fill: '#bada55'
		// 					}
		// 				}
		// 			}
		//
		// 		},
		// 		series: [{
		// 			name: 'Actual',
		// 			id: 'b1',
		// 			data: [
		// 				[
		// 					'Jul 16',
		// 					23400
		// 				],
		// 				[
		// 					'Aug 16',
		// 					23500
		// 				],
		// 				[
		// 					'Sept 16',
		// 					21400
		// 				],
		// 				[
		// 					'Oct 16',
		// 					23470
		// 				],
		// 				[
		// 					'Nov 16',
		// 					28400
		// 				],
		// 				[
		// 					'Dec 16',
		// 					33400
		// 				],
		// 				[
		// 					'Jan 17',
		// 					53400
		// 				],
		// 				[
		// 					'Feb 17',
		// 					21000
		// 				],
		// 				[
		// 					'Mar 17',
		// 					20900
		// 				],
		// 				[
		// 					'Apr 17',
		// 					20900
		// 				]
		// 			]
		// 		},
		// 		]
		// 	},
		// 	credits: {
		// 		enabled: false
		// 	}
		// });
		// $('#highcharts-ht2').highcharts({
		// 	chart: {
		// 		type: 'column'
		// 	},
		// 	title: {
		// 		text: 'Harvest'
		// 	},
		// 	xAxis: {
		// 		categories: [
		// 			'2016',
		// 		]
		// 	},
		// 	yAxis: [{
		// 		min: 0,
		// 		title: {
		// 			text: 'Metric Ton (MT)'
		// 		},
		// 		labels: {
		// 			format: '{value}'
		// 		}
		// 	}],
		// 	legend: {
		// 		shadow: false
		// 	},
		// 	tooltip: {
		// 		shared: true,
		// 		valueSuffix: ' MT'
		// 	},
		// 	plotOptions: {
		// 		column: {
		// 			grouping: false,
		// 			shadow: false,
		// 			borderWidth: 0
		// 		}
		// 	},
		// 	series: [{
		// 		name: 'Target',
		// 		color: '#f50',
		// 		data: [4000],
		// 		pointPadding: 0.3,
		// 		pointPlacement: 0
		// 	}, {
		// 		name: 'Actual',
		// 		color: '#0c9',
		// 		data: [3580],
		// 		pointPadding: 0.4,
		// 		pointPlacement: 0
		// 	}],
		// 	credits: {
		// 		enabled: false
		// 	}
		// });
		// $('#highcharts-ht3').highcharts({
		// 	chart: {
		// 		type: 'column'
		// 	},
		// 	title: {
		// 		text: 'Total FFB Harvested'
		// 	},
		// 	xAxis: {
		// 		categories: [
		// 			'2016',
		// 		]
		// 	},
		// 	yAxis: [{
		// 		min: 0,
		// 		title: {
		// 			text: 'Percentage (%)'
		// 		},
		// 		labels: {
		// 			format: '{value}'
		// 		}
		// 	}],
		// 	legend: {
		// 		shadow: false
		// 	},
		// 	tooltip: {
		// 		shared: true,
		// 		valueSuffix: ' %'
		// 	},
		// 	plotOptions: {
		// 		column: {
		// 			grouping: false,
		// 			shadow: false,
		// 			borderWidth: 0
		// 		}
		// 	},
		// 	series: [{
		// 		name: 'Variance',
		// 		color: '#0f0',
		// 		data: [68]
		// 	}],
		// 	credits: {
		// 		enabled: false
		// 	}
		// });

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
	Highcharts.setOptions({
		// colors: ['rgb(255, 85, 0)','rgb(255, 255, 0)','rgb(0, 255, 0)', 'rgb(0, 153, 255)','rgb(0, 0, 255)']
		colors: ['#999','#afa','#0c0', '#ff0','#f50']
	});
	Highcharts.chart('donut', {
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45
			}
		},
		title: {
			text: ''
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		plotOptions: {
			pie: {
				shadow: false,
				cursor: 'pointer',
				depth: 45
				// dataLabels: {
				// 	distance: 0,
				// 	overflow: "justify"
				// }
			}
		},
		tooltip: {
			valueSuffix: '%'
		},
		series: [{
		},
			{
				name: 'Versions',
				data: [["Immature",22],["Young (4-5 years)",21],["Prime (10-20 Years)",14],["Old (21-25 Years)",17],[">25 Years",26]],
				size: '80%',
				innerSize: '60%',
				dataLabels: {
					formatter: function () {
						// display only if larger than 1
						return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
					}
				}
			}],
		credits: {
			enabled: false
		}
	});

	$(function () {
		Highcharts.setOptions({
			colors: ['#09f','#0fa', 'rgb(255,255,25)','#f90', '#f45b5b']
		});
		Highcharts.chart('line_chart_1', {
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['July 16','August 16','September 16','October 16','November 16','December 16','January 17','February 17','March 17','April 17','May 17','June 17']
			},
			yAxis: {
				title: {
					text: 'Metric Ton',
					align: 'middle'
				}
			},
			rangeSelector: {
				selected: 1
			},
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: 'MT'
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#666666',
						lineWidth: 1
					}
				}
			},
			series: [{
				type: 'line',
				name: 'Financial Year 2015-2016',
				marker: {
					symbol: 'square'
				},
				data: [1500,1800,2300,2500,2800,3000,3100,3400,3400,3800,4000,4100]

			}, {
				type: 'line',
				name: 'Financial Year 2016-2017',
				marker: {
					symbol: 'diamond'
				},
				data: [1300,1400,1600,1800,2000,3000,3200,3400,3450, 3350]
			}, {
				type: 'column',
				name: 'Week 1',
				data: [1100, 1200, 1200, 1300, 1300 ,1290, 1250, 900, 1200, 1950]
			},{
				type: 'column',
				name: 'Week 2',
				data: [1200, 1320, 1390, 1500, 1400, 1300, 1000, 1290, 1430, 1960]
			},{
				type: 'column',
				name: 'Week 3',
				data: [1500, 1210, 1410, 1800, 1600, 1750, 1320, 1320, 1600]
			}
			],
			credits: {
				enabled: false
			}
		});
	});
	Highcharts.chart('dpie_chart_1', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			margin: [0, 0, 0, 0],
			spacingTop: 0,
			spacingBottom: 0,
			spacingLeft: 0,
			spacingRight: 0,
			height: 250
		},
		title: {
			text: 'Harvesting Rounds',
			// style: {
			// 	color: '#9EDD2E',
			// 	fontSize: '150%',
			// 	fontWeight: 'bold'
			// },
			// align: 'center',
			// verticalAlign: 'middle',
			// y: 10
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: 10,
					style: {
						fontWeight: 'bold',
						color: 'white',
						textShadow: '0px 1px 2px black'
					},
					formatter: function () {
						return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y : null;
					}
				},
				startAngle: 0,
				endAngle: 360,
				center: ['50%', '50%'],
				size: '80%'
			}
		},
		tooltip:{
			enabled:true,
			formatter: function() { return '<b>'+this.point.name+'</b> :'+ this.point.y +' Round(s)' ; }
		},
		// tooltip: {
		// 	enabled: true,
		// 	formatter: function (evt) {
		// 		var current = this.series.data;
		// 		//console.log(current[current.length - 1].category);
		// 		var tooltip;
		// 		tooltip = '<span style="color:#EBFF00">' + this.series.name + ':)</span>: <b>' + current[current.length - 1].y + '%</b><br/>';
		// 		return tooltip;
		// 	}
		// },
		series: [{
			type: 'pie',
			size: '65%',
			innerSize: '85%',
			style: {
				color: 'white'
			},
			data: [
				{
					name: 'Current',
					y: 3,
					color: '#0fa'
				},
				{
					name: 'Remaining',
					y: (5-3),
					color: 'rgba(0,0,0,0.2)'
				}
			]
		},{
			type: 'pie',
			size: '80%',
			innerSize:  '85%',
			data: [
				{
					name: 'Total',
					y: 5,
					color: '#09f'
				}
			]
		}],
		credits: {
			enabled: false
		}
	});

	// var a = [1,2,5];
	// var j = 0, i = 0;
	// Highcharts.chart('dbar_chart_2', {
	// 	chart: {
	// 		type: 'bar'
	// 	},
	// 	title: {
	// 		text: 'QUALITY VARIANCE'
	// 	},
	// 	xAxis: {
	// 		categories: ['Field 1', 'Field 2', 'Field 3'],
	// 		title: {
	// 			text: null
	// 		}
	// 	},
	// 	yAxis: {
	// 		min: 0,
	// 		title: {
	// 			text: null
	// 		},
	// 		labels: {
	// 			overflow: 'justify'
	// 		}
	// 	},
	// 	tooltip: {
	// 		formatter: function () {
	// 				return '<b>'+this.x+'</b><br><span>' + this.series.name +':'+ this.y +'</span>';
	// 		}
	// 	},
	// 	plotOptions: {
	// 		bar: {
	// 			dataLabels: {
	// 				enabled: true,
	// 				formatter : function(){
	// 					if(this.series.name === 'Variance'){
	// 						r = (a[j]) +"%";
	// 						j++;
	// 					}else{
	// 						r = this.y;
	// 					}
	// 					return r;
	// 				}
	// 			}
	// 		}
	// 	},
	// 	legend: {
	// 		layout: 'vertical',
	// 		align: 'right',
	// 		verticalAlign: 'top',
	// 		x: -40,
	// 		y: 0,
	// 		floating: true,
	// 		borderWidth: 1,
	// 		backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	// 		shadow: true
	// 	},
	// 	credits: {
	// 		enabled: false
	// 	},
	// 	series: [{
	// 		name: 'Total FFB',
	// 		data: [759, 1300, 1160]
	// 	},{
	// 		name: 'Variance',
	// 		data: [7.59, 26, 58]
	// 	}]
	// });


});	