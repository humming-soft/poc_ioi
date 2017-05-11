$(document).ready(function(){
	
	
	$('.plate_vector_map_aek_selabat').load('../assets/svg/plate_vector_map_group.svg',function(){
		
		
		// vector_track
		var json = [ 
			{"vector_track":"legend_v_track_1","vector_status":"0","url":""},
			{"vector_track":"legend_v_track_2","vector_status":"1","url":""},
			{"vector_track":"legend_v_track_3","vector_status":"2","url":""},
			{"vector_track":"legend_v_track_4","vector_status":"3","url":""},
			{"vector_track":"v_track_201","vector_status":"1","url":""},
			{"vector_track":"v_track_202","vector_status":"2","url":""},
			{"vector_track":"v_track_203","vector_status":"3","url":""},
			{"vector_track":"v_track_ug","vector_status":"1","url":""},
			{"vector_track":"v_track_204","vector_status":"0","url":""},
			{"vector_track":"v_track_205","vector_status":"0","url":""},
			{"vector_track":"v_track_206","vector_status":"0","url":""},
			{"vector_track":"v_track_207","vector_status":"0","url":""},
			{"vector_track":"v_track_208","vector_status":"0","url":""},
			{"vector_track":"v_track_209","vector_status":"0","url":""},
			{"vector_track":"v_track_210","vector_status":"2","url":""}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_track_name = b.vector_track;
			vector_track_status = b.vector_status;
			vector_track_url = b.url;
			if (vector_track_status==0) {/*blank*/
				$('#'+vector_track_name).css({'fill':'#777777','stroke':'#222222'});
			} else if (vector_track_status==1) {/*on schedule*/
				$('#'+vector_track_name).css({'fill':'#00ff55','stroke':'#00ff55'});
			} else if (vector_track_status==2) {/*behind late*/
				$('#'+vector_track_name).css({'fill':'#ff0055','stroke':'#ff0055'});
			} else if (vector_track_status==3) {/*critical*/
				blink('#'+vector_track_name, -1, 500);
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
				$('#'+vector_track_name).toggle('pulsate').css({'stroke-width':'5','fill':'#ff0055','stroke':'#ff0055'});
			};
		}
		
		var json = [
			{"vector_estate":"v_estate_1","vector_status":"1"},
			{"vector_estate":"v_estate_2","vector_status":"2"},
			{"vector_estate":"v_estate_3","vector_status":"3"},
			{"vector_estate":"v_estate_4","vector_status":"1"},
			{"vector_estate":"v_estate_5","vector_status":"2"},
			{"vector_estate":"v_estate_6","vector_status":"1"},
			{"vector_estate":"v_estate_7","vector_status":"3"}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_estate_name = b.vector_estate;
			vector_estate_status = b.vector_status;
			if (vector_estate_status==4) {/*blank*/
				$('#'+vector_estate_name).css({'fill':'#ffffff','stroke':'#222222'});
			} else if (vector_estate_status==1) {/*on schedule*/
				$('#'+vector_estate_name).css({'fill':'#ffffff','stroke':'#00ff55'});
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
		
		var json = [ 
			{"vector_depot":"legend_v_depot_1","vector_status":"1"},
			{"vector_depot":"legend_v_depot_2","vector_status":"2"},
			{"vector_depot":"legend_v_depot_3","vector_status":"3"},
			{"vector_depot":"legend_v_depot_4","vector_status":"4"},
			{"vector_depot":"v_depot_1","vector_status":"1"}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_depot_name = b.vector_depot;
			vector_depot_status = b.vector_status;
			if (vector_depot_status==4) {/*blank*/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#222222'});
			} else if (vector_depot_status==1) {/*on schedule*/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#00ff55'});
			} else if (vector_depot_status==2) {/*behind late*/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#ff0055'});
			} else if (vector_depot_status==3) {/*critical*/
				blink('#'+vector_depot_name, -1, 500);
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
				$('#'+vector_depot_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055'});
			};
		}
		
		
		// 
		// all
		//
		
		$('#plate_commercial .overall span.c1 span.block_val').text('4,777,107');
		$('#plate_commercial .overall span.c2 span.block_val').text('4,647,980');
		$('#plate_commercial .overall span.c3 span.block_val').text('20,120');
		
		$(function () {
			Highcharts.setOptions({
				colors: ['#ffaa00']
			});
			$('#barcom_variance').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Variance',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1','Division 2']
				},
				yAxis: {
					title: {
						text:'Percentage (%)',
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
					name: 'Variance',
					data: [0.67,0.05]
				}]
			});
		});

		$(function () {
			Highcharts.setOptions({
				colors: ['#9977cc','#00ff00']
			});
			$('#barcom_harvested').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Harvesting',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1','Division 2'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'kg',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Total FFB',
					data: [2857050.00,1920057.00]
				}, {
					name: 'Total Paid',
					data: [2767220.00,1880760.00]
				}]
			});
		});
	});
	
	
	
	
	
	
	var json = [ 
		{"chart_group":"harvesting","chart_title":"Harvesting and Paid","chart_name":"aaaa","chart_id":"donut_chart1","chart_value":"98","url":"#"},
		{"chart_group":"harvesting","chart_title":"FFB Bunch vs PREMI Paid","chart_name":"aaaa","chart_id":"donut_chart2","chart_value":"15","url":"#"},
		{"chart_group":"harvesting","chart_title":"Harvesting Map","chart_name":"aaaa","chart_id":"donut_chart3","chart_value":"64","url":"#"},
		{"chart_group":"harvesting","chart_title":"Harvesting Round","chart_name":"aaaa","chart_id":"donut_chart4","chart_value":"17","url":"#"},
		{"chart_group":"harvesting","chart_title":"Harvesting Team","chart_name":"aaaa","chart_id":"donut_chart5","chart_value":"81","url":"#"},
		{"chart_group":"production","chart_title":"FFB Net Weight Monitoring","chart_name":"aaaa","chart_id":"donut_chart1","chart_value":"65","url":"#"},
		{"chart_group":"production","chart_title":"FFB Quantity Monitoring","chart_name":"aaaa","chart_id":"donut_chart2","chart_value":"55","url":"#"},
		{"chart_group":"production","chart_title":"Netweight Monitoring","chart_name":"aaaa","chart_id":"donut_chart3","chart_value":"90","url":"#"},
		{"chart_group":"attendance","chart_title":"Attendance Monitoring","chart_name":"aaaa","chart_id":"donut_chart1","chart_value":"70","url":"#"},
	];
	
	for (i = 0; i < json.length; i++) {
		var b = json[i];
		use_chart_group = b.chart_group;
		use_chart_title = b.chart_title;
		use_chart_id = b.chart_id;
		use_chart_value = b.chart_value;
		use_chart_set_donut = b.set_donut;
		use_chart_name = b.chart_name;
		use_chart_url= b.url;
		
		use_chart_font_size = '20px';
		use_chart_font_color = '#ffffff';
		if (use_chart_value >= 75) {
			use_chart_donut_color = '#00ff55';
		} else if (use_chart_value >= 50) {
			use_chart_donut_color = '#ffff00';
		} else if (use_chart_value >= 25) {
			use_chart_donut_color = '#ff7700';
		} else if (use_chart_value < 25) {
			use_chart_donut_color = '#ff0055';
		};
		
		use_chart_svg_width = 100;
		use_chart_svg_height = 100;
		use_chart_circle_r = 49;
		use_chart_circle_cx = 49;
		use_chart_circle_cy = 49;
		use_chart_circle_data_total = 308;
		use_chart_circle_data_used = use_chart_value / 100 * use_chart_circle_data_total;
		
		donut_body = '<div><a class="url_donut_system" style="text-decoration: none; color: #fff;" href="'+use_chart_url+'" title="'+use_chart_name+'"><span class="donut_title_name">'+use_chart_title+'</span></a><svg class="svg_donut_system" width="'+use_chart_svg_width+'" height="'+use_chart_svg_height+'" style="border:1px solid '+use_chart_donut_color+';"><text style="font-style:normal;font-weight:bold;font-size:'+use_chart_font_size+';fill:'+use_chart_font_color+';" transform="matrix(0,1,-1,0,0,0)"><tspan sodipodi:role="line" x="25" y="-40">'+use_chart_value+'%</tspan></text><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color+';stroke-dasharray: '+use_chart_circle_data_used+','+use_chart_circle_data_total+';"></circle></svg></div>';
		
		$('#plate_donut_'+use_chart_group+' .'+use_chart_id+'').append(donut_body);
			
	}
	
	
	//
	// highcharts table
	//
	
	
	
	$("#pl_estate .btn_go_detail").click(function(){
		window.location.href = "block_06PO4101.php";
	})
	
	$("#barcom_harvested_detail").click(function(){
		window.location.href = "dboard_harvesting_and_paid.php";
	})
	
	
	
	// nav
	
	$(".goto_block_04P11101").click(function(){
		window.location.href = "block_04P11101.php";
	});
	$(".goto_block_04P11102").click(function(){
		window.location.href = "block_04P11102.php";
	});
	$(".goto_block_04P11201").click(function(){
		window.location.href = "block_04P11201.php";
	});
	$(".goto_block_04P11202").click(function(){
		window.location.href = "block_04P11202.php";
	});
	
	
	$("div.logo_holder > div.title").append(' - Aek Selabat');
	
	$("#barcom_harvested_reset").addClass('hidden')
	

	
	
	
	
	// ignite
	
	
	// 
	// reset to default
	//
	
	$("#barcom_harvested_reset").click(function(){
		$("#sortedby").text('Overall')
		$("#barcom_harvested_reset").addClass('hidden')
		
		$('#plate_commercial .overall span.c1 span.block_val').text('4,777,107');
		$('#plate_commercial .overall span.c2 span.block_val').text('4,647,980');
		$('#plate_commercial .overall span.c3 span.block_val').text('20,120');
		
		$(function () {
			Highcharts.setOptions({
				colors: ['#ffaa00']
			});
			$('#barcom_variance').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Variance',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1','Division 2']
				},
				yAxis: {
					title: {
						text:'Percentage (%)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Variance',
					data: [0.67,0.05]
				}]
			});
		});

		$(function () {
			Highcharts.setOptions({
				colors: ['#9977cc','#00ff00']
			});
			$('#barcom_harvested').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Harvesting',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1','Division 2'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'kg',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Total FFB',
					data: [2857050.00,1920057.00]
				}, {
					name: 'Total Paid',
					data: [2767220.00,1880760.00]
				}]
			});
		});
	})
	
	// 
	// division 1
	//
	
	$(".tanahraja_division1.btn_go_sort").click(function(){
		$("#sortedby").text('Division 1')
		$("#sortedby").removeClass('hidden')
		$("#barcom_harvested_reset").removeClass('hidden')
		// $('#plate_commercial .overall span.c1 span.block_val').text('2,857,050');
		// $('#plate_commercial .overall span.c2 span.block_val').text('2,767,220');
		// $('#plate_commercial .overall span.c3 span.block_val').text('19,140');
		$('#plate_commercial .overall span.c1 span.block_val').text('4,777,107');
		$('#plate_commercial .overall span.c2 span.block_val').text('4,647,980');
		$('#plate_commercial .overall span.c3 span.block_val').text('20,120');
		
		$(function () {
			Highcharts.setOptions({
				colors: ['#ffaa00']
			});
			$('#barcom_variance').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Variance',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016 (Division 1)',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1']
				},
				yAxis: {
					title: {
						text:'Percentage (%)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Variance',
					data: [0.67]
				}]
			});
		});

		$(function () {
			Highcharts.setOptions({
				colors: ['#9977cc','#00ff00']
			});
			$('#barcom_harvested').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Harvesting',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016 (Division 1)',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 1'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'kg',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Total FFB',
					data: [2857050.00]
				}, {
					name: 'Total Paid',
					data: [2767220.00]
				}]
			});
		});
	})
	
	// 
	// division 2
	//

	$(".tanahraja_division2.btn_go_sort").click(function(){
		$("#sortedby").text('Division 2')
		$("#sortedby").removeClass('hidden')
		$("#barcom_harvested_reset").removeClass('hidden')
		// $('#plate_commercial .overall span.c1 span.block_val').text('1,920,057');
		// $('#plate_commercial .overall span.c2 span.block_val').text('1,880,760');
		// $('#plate_commercial .overall span.c3 span.block_val').text('980');
		$('#plate_commercial .overall span.c1 span.block_val').text('4,777,107');
		$('#plate_commercial .overall span.c2 span.block_val').text('4,647,980');
		$('#plate_commercial .overall span.c3 span.block_val').text('20,120');
		
		$(function () {
			Highcharts.setOptions({
				colors: ['#ffaa00']
			});
			$('#barcom_variance').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Variance',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016 (Division 2)',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 2']
				},
				yAxis: {
					title: {
						text:'Percentage (%)',
						align: 'high'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Variance',
					data: [0.05]
				}]
			});
		});

		$(function () {
			Highcharts.setOptions({
				colors: ['#9977cc','#00ff00']
			});
			$('#barcom_harvested').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Harvesting',
					align: 'left'
				},
				subtitle: {
					text: 'For 2016 (Division 2)',
					align: 'left'
				},
				xAxis: {
					categories: ['Division 2'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'kg',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' kg'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Total FFB',
					data: [1920057.00]
				}, {
					name: 'Total Paid',
					data: [1880760.00]
				}]
			});
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});	
