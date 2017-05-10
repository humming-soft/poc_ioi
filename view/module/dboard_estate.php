
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
				
				<div class="col-md-12">
					<div class="row1">
						<div class="col-md-3">
							<div class="row">
								<?php include 'procurement/portlet/info_station.html'; ?>
								<?php include 'procurement/portlet/estate_age_profile.html'; ?>
							</div>
						</div>
						<div class="col-md-9">
							<div class="row">
								<?php include 'procurement/portlet/harvesting_info.html'; ?>
								<?php include 'procurement/portlet/estate_productivity.html'; ?>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</div>
	</div>
</div>
