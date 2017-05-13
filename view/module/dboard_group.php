
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
							<span class="custom_breadcrumb-item active">Group</span>
						</nav>
					</div>
					<div class="title">
						Group
					</div>
				</div>
				
				<div class="col-md-12">
					<div class="row">
						
						<div class="col-md-8">
							<div class="row">
								<?php include 'procurement/portlet/portlet_map2.html'; ?>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<div class="col-md-12">
									<div class="row">
										<?php include 'procurement/portlet/portlet_region_production_data.html'; ?>
									</div>
								</div>
								<div class="col-md-6">
									<div class="row">
										<?php include 'procurement/portlet/portlet_production_cost.html'; ?>
									</div>
								</div>
								<div class="col-md-6">
									<div class="row">
										<?php include 'procurement/portlet/portlet_yield_ha.html'; ?>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="col-md-12">
					<div class="row">
						
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/portlet_bar_group_1.html'; ?>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/portlet_bar_group_2.html'; ?>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<?php include 'procurement/portlet/portlet_bar_group_3.html'; ?>
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
</div>
