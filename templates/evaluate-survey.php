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
			<h2>Umfrage: {{filledSurvey.name}}</h2>
		</div>

		<div class="row">
			<div class="col-sm-12">

				<hr>

                <table class=".table">
                    <tr>
                        <th>
                            User
                        </th>
                        <td ng-repeat="question in filledSurvey.questions">
                            Frage <span ng-bind="question.questionText"></span>

                            <div ng-repeat="answer in userAnswers">
                                <div ng-bind="answer.answerText"></div>
                            </div>
                        </td>
                    </tr>

                </table>
			</div>
		</div>
	</div>
	</body>

<?php require "footer.php" ?>