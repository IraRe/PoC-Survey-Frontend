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
	<div class="container" ng-app="pdSurvey" ng-controller="pdSurveyEvaluateController">

		<div class="jumbotron">
			<h1>CISS Survey Results</h1>
			<h2>Umfrage: {{survey.name}}</h2>
		</div>

		<div class="row">
			<div class="col-sm-12">

				<hr>

				<table class=".table">

					<tr>
						<th>
							User
						</th>
						<th ng-repeat="question in survey.questions">
							Frage <span ng-bind="question."></span>
						</th>
					</tr>
					<div ng-repeat="question in survey.questions track by $index">
						<tr>
							<td>

							</td>
								<td ng-repeat="question in survey.questions">
									<div ng-switch on="answerIsSet(question.answer)">
										<img ng-switch-when="true" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/check.png">
										<img ng-switch-when="false" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/cross.png">
									</div>
								</td>
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