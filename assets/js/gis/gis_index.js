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
		
		$(function () {
			Highcharts.setOptions({
				colors: ['#f50','#ff0','#f00']
			});
			$('#barchart1').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'PK and CPO Production (Million MT)',
					align: 'left'
				},
				subtitle: {
					text: '',
					align: 'left'
				},
				xAxis: {
					categories: [2014,2015,2016]
				},
				yAxis: {
					title: {
						text:'(Million MT)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' Million MT'
				},
				plotOptions: {
					line: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'PK Production',
					data: [1.15,1.23,1.18]
				},{
					name: 'CPO Production',
					data: [4.3,4.11,4.10]
				}
				]
			});
		});
		$(function () {
			Highcharts.setOptions({
				colors: ['#09f']
			});
			$('#barchart2').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'FFB Processed (Million MT)',
					align: 'left'
				},
				subtitle: {
					text: '',
					align: 'left'
				},
				xAxis: {
					categories: [2014,2015,2016]
				},
				yAxis: {
					title: {
						text:'(Million MT)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' MT'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'FFB Processed (Million MT)',
					data: [15.82,14.79,14.83]
				}]
			});
		});
		$(function () {
			Highcharts.setOptions({
				colors: ['#f0c']
			});
			$('#barchart3').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'FFB Yield (MT/ha)',
					align: 'left'
				},
				subtitle: {
					text: '',
					align: 'left'
				},
				xAxis: {
					categories: [2014,2015,2016]
				},
				yAxis: {
					title: {
						text:'MT/Ha',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' MT/Ha'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'FFB Yield (MT/ha)',
					data: [18.99,18.94,17.93]
				}]
			});
		});
		$(function () {
			Highcharts.setOptions({
				colors: ['#5f3','#0ff']
			});
			$('#barchart4').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'OER and KER (%)',
					align: 'left'
				},
				subtitle: {
					text: '',
					align: 'left'
				},
				xAxis: {
					categories: [2014,2015,2016]
				},
				yAxis: {
					title: {
						text:'(%)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' %'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'OER',
					data: [20.44,21.01,20.91]
				},{
					name: 'KER',
					data: [5.34,5.46,5.36]
				}]
			});
		});
		
		
	});
	
	
	
	//
	// highcharts draw
	//
	
	$("#barcom_harvested_detail").click(function(){
		window.location.href = "dboard_harvesting_and_paid_all.php";
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});	
