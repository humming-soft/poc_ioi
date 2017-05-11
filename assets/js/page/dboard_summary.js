$(document).ready(function(){
	
	
	
	// ------------------------------
	//
	// summary
	//
	// ------------------------------
	
	summary = [
		{"estate":"KT-01","p_target":"88%","p_actual":"88%","p_variance":"2","p_trending":"up","e_status":"1"},
		{"estate":"RP-01","p_target":"88%","p_actual":"88%","p_variance":"5","p_trending":"up","e_status":"1"},
		{"estate":"RP-02","p_target":"88%","p_actual":"88%","p_variance":"1","p_trending":"right","e_status":"2"},
		{"estate":"RP-03","p_target":"88%","p_actual":"88%","p_variance":"1","p_trending":"up","e_status":"1"},
		{"estate":"RP-04","p_target":"88%","p_actual":"88%","p_variance":"3","p_trending":"right","e_status":"2"},
		{"estate":"RP-05","p_target":"88%","p_actual":"88%","p_variance":"3","p_trending":"down","e_status":"3"},
		{"estate":"RP-06","p_target":"88%","p_actual":"88%","p_variance":"1","p_trending":"up","e_status":"1"},
		{"estate":"RP-07","p_target":"88%","p_actual":"88%","p_variance":"2","p_trending":"up","e_status":"1"},
		{"estate":"RP-08","p_target":"88%","p_actual":"88%","p_variance":"1","p_trending":"up","e_status":"1"},
		{"estate":"SU-01","p_target":"88%","p_actual":"88%","p_variance":"3","p_trending":"up","e_status":"1"},
		{"estate":"SU-02","p_target":"88%","p_actual":"88%","p_variance":"3","p_trending":"up","e_status":"1"},
		{"estate":"SU-03","p_target":"88%","p_actual":"88%","p_variance":"3","p_trending":"right","e_status":"2"}
	]
	
	for (var i = 0; i < summary.length; i++) {
		var a = summary[i];
		sum_estate = a.estate;
		sum_p_target = a.p_target;
		sum_p_actual = a.p_actual;
		sum_p_variance = a.p_variance;
		sum_p_trending = a.p_trending;
		sum_e_status = a.e_status;
		
		ht_op = '<tr><td class="val_checkbox"><input type="checkbox" name="" value=""></td>';
		ht_estate = '<td>'+sum_estate+'</td>';
		ht_p_target = '<td class="val_early">'+sum_p_target+'</td>';
		ht_p_actual = '<td class="val_late">'+sum_p_actual+'</td>';
		ht_p_variance = '<td class="goto_center">'+sum_p_variance+'</td>';
		ht_p_trending = '<td class="goto_center trend"><i class="fa fa-arrow-'+sum_p_trending+'" aria-hidden="true"></i></td>';
		ht_e_status = '<td class="ball_indicator mrt_colorcode_ball_'+sum_e_status+'"><i class="fa fa-circle" aria-hidden="true"></i></td>';
		ht_ed = '</tr>';
		
		
		$(".portlet_summary table tbody").append(ht_op+ht_estate+ht_p_target+ht_p_actual+ht_p_variance+ht_p_trending+ht_ed);
		
	};
	
	

});	
