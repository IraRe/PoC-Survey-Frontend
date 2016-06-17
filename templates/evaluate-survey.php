<?php
/**
 * @link http://prodyna.com
 * @since 1.0
 *
 * Template Name: Evaluate Survey
 */
require "header.php";
?>

	<body class="bg-dark">
	<div class="container" ng-app="pdSurvey">

		<div class="jumbotron">
			<h1>CISS Survey Results</h1>
		</div>

		<div class="row" ng-controller="pdSurveyMainController">
			<div class="col-sm-12">

				<hr>

				<table class=".table">

					<tr>
						<th>
							User
						</th>
						<div ng-repeat="question in survey.questions track by $index">
							<th>
								Frage <span ng-bind="$index + 1"></span>
							</th>
						</div>
					</tr>
					<div ng-repeat="question in survey.questions track by $index">
						<tr>
							<td>
								
							</td>
							<div ng-repeat="question in survey.questions">
								<td>
									<div ng-switch on="answerIsSet(question.answer)">
										<img ng-switch-when="true" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/check.png">
										<img ng-switch-when="false" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/cross.png">
									</div>
								</td>
							</div>	
						</tr>

						<!-- end ng-switch question type -->
					</div>
					<!-- end ng-repeat question -->

				</table>


				<button type="button" class="btn btn-primary pull-right">Umfrage bearbeiten</button>
			</div>
		</div>
	</div>
	</body>

<?php require "footer.php" ?>