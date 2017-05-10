
<div id="dashboard" class="col-md-12">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
			
				<div class="custom_breadcrumb col-md-12">
					<div class="">
						<nav class="">
							<a class="custom_breadcrumb-item" href="index.php"><i class="fa fa-home" aria-hidden="true"></i></a>
							<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
							<span class="custom_breadcrumb-item"><a href="region.php">Region</a></span>
							<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
							<span class="custom_breadcrumb-item"><a href="group.php">Group</a></span>
							<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
							<span class="custom_breadcrumb-item active">Estate</span>
						</nav>
					</div>
					<div class="title">
						Estate
					</div>
				</div>
				
				<div class="col-md-12 plate_portlet">
					<div class="row">
						
						<div class="col-md-12 plate_portlet">
							<div class="row">
								
								<?php include 'procurement/portlet/info_station.html'; ?>
								<?php include 'procurement/portlet/sbks1_progress.html'; ?>
								
							</div>
						</div>
						
						<!-- -- popup -- -->
						<div id="myModal_harvesting1" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1aa.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						<div id="myModal_harvesting2" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1ab.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						<div id="myModal_harvesting3" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1ac.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						<div id="myModal_harvesting4" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1ad.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						<div id="myModal_harvesting5" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1ae.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						
						<div id="myModal_ffb" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content override">
									<div class="modal-body">
										<?php include 'procurement/portlet/sbks1_table1b.html'; ?>
									</div>
									<div class="btn_ok">
										<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
									</div>
								</div>
							</div>
						</div>
						<!-- -- popup -- -->

						<div class="col-md-12">
							<div class="row">
								
								<div class="col-md-6">
									<div class="row">
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_1.html'; ?>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_2.html'; ?>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_3.html'; ?>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_4.html'; ?>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_5.html'; ?>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="row">
												<?php include 'procurement/portlet/block_number_6.html'; ?>
											</div>
										</div>
										
									</div>
								</div>
								
								<div class="col-md-6 plate_issue">
									<div class="row">
										
										<?php include 'procurement/portlet/scurve3.html'; ?>
										
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
			
			</div>
		</div>
	</div>
</div>
