
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
							<!-- <span class="custom_breadcrumb-item"><a href="group.php">Group</a></span>
							<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span> -->
							<span class="custom_breadcrumb-item active">Estate</span>
						</nav>
					</div>
					<div class="title">
						Estate
					</div>
				</div>
				
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/info_station.html'; ?>
							</div>
						</div>
						<div class="col-md-8">
							<div class="row">
								<?php include 'procurement/portlet/harvesting_info.html'; ?>

							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/estate_age_profile.html'; ?>
							</div>
						</div>
						<div class="col-md-8">
							<div class="row">
								<?php include 'procurement/portlet/estate_productivity.html'; ?>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/portlet_outturn.html'; ?>
							</div>
						</div>
						<div class="col-md-8">
							<div class="row">
								<?php include 'procurement/portlet/portlet_harvesters_performance.html'; ?>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<?php include 'procurement/portlet/harvest_standards.html'; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
