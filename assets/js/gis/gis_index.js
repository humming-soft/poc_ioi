$(document).ready(function(){
	
	$('.plate_vector_map_indonesia').load('../assets/svg/plate_vector_map_index.svg',function(){
		
		// nav
		$(".goto_region").click(function(){
			window.location.href = "region.php";
		})
		
		var json = [
			{"vector_estate":"v_estate_1","vector_status":"1"},
			{"vector_estate":"v_estate_2","vector_status":"1"},
			{"vector_estate":"v_estate_3","vector_status":"1"},
			{"vector_estate":"v_estate_4","vector_status":"1"},
			{"vector_estate":"v_estate_5","vector_status":"1"},
			{"vector_estate":"v_estate_6","vector_status":"1"},
			{"vector_estate":"v_estate_7","vector_status":"1"}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_estate_name = b.vector_estate;
			vector_estate_status = b.vector_status;
			if (vector_estate_status==4) {/*blank*/
				$('#'+vector_estate_name).css({'fill':'#ffffff','stroke':'#222222'});
			} else if (vector_estate_status==1) {/*on schedule*/
				$('#'+vector_estate_name).css({'fill':'#00ff00','stroke':'#000000'});
			} else if (vector_estate_status==2) {/*behind late*/
				$('#'+vector_estate_name).css({'fill':'#ffffff','stroke':'#ff0055'});
			} else if (vector_estate_status==3) {/*critical*/
				blink('#'+vector_estate_name, -1, 500);
				function blink(elem, times, speed) {
					if (times > 0 || times < 0) {
						if ($(elem).fadeTo( 500, 0.33 )) 
							$(elem).fadeTo( 500, 1);
						else
							$(elem).fadeTo( 500, 0.33 );
					}
					clearTimeout(function () {
						blink(elem, times, speed);
					});

					if (times > 0 || times < 0) {
						setTimeout(function () {
							blink(elem, times, speed);
						}, speed);
						times -= .5;
					}
				}
				$('#'+vector_estate_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055'});
			};
		}
		
		// $('#plate_commercial .overall span.c1 span.block_val').text('156,281,816');
		// $('#plate_commercial .overall span.c2 span.block_val').text('146,625,480');
		// $('#plate_commercial .overall span.c3 span.block_val').text('3,022,720');
		
		
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
		
		// barchart_4 (horizonntal barchart)

		Highcharts.chart('barchart_4', {
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Efficiency Optimization by Branch'
			},
			xAxis: {
				categories: [
					'LD','SD','WM'
				]
			},
			yAxis: [{
				min: 0,
				title: {
					text: 'Employees'
				}
			}],
			legend: {
				shadow: false
			},
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
				name: 'FFB Budget',
				color: '#f0f',
				data: [150,150,150],
				pointPadding: -0.2,
				pointPlacement: 0
			}, {
				name: 'FFB Actual',
				color: '#ff0',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.07
			}, {
				name: 'FFB Variance',
				color: '#0ff',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.06
			},
			{
				name: 'CPO Budget',
				color: '#f0f',
				data: [150,150,150],
				pointPadding: -0.2,
				pointPlacement: 0
			}, {
				name: 'CPO Actual',
				color: '#ff0',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.07
			}, {
				name: 'CPO Variance',
				color: '#0ff',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.06
			},
			{
				name: 'PK Budget',
				color: '#f0f',
				data: [150,150,150],
				pointPadding: -0.2,
				pointPlacement: 0
			}, {
				name: 'PK Actual',
				color: '#ff0',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.07
			}, {
				name: 'PK Variance',
				color: '#0ff',
				data: [140,140,140],
				pointPadding: 0.3,
				pointPlacement: 0.06
			}]
		});
		
		
		
	});
	
	
	
	//
	// highcharts draw
	//
	
	$("#barcom_harvested_detail").click(function(){
		window.location.href = "dboard_harvesting_and_paid_all.php";
	})
	
	
	
	
	
	
	
	
	
	
	
	
});	
