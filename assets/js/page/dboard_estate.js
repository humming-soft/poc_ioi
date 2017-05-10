$(document).ready(function(){
	
	
	
	
	// ------------------------------
	//
	// block_info
	//
	// ------------------------------
	
	//.portlet_info
	
	$('.portlet_info span.info_title').text('Block 04P11101');
	$('.portlet_info span.info_subtitle').text('Tanah Raja');
	
	
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
			}]
		});
	});

});	