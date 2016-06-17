<?php
/**
 * @link http://prodyna.com
 * @since 1.0
 *
 * Template Name: Start Survey
 */
require "header.php";
?>

<body class="bg-dark" xmlns="http://www.w3.org/1999/html">
    <div class="container" ng-app="pdSurvey" ng-controller="pdSurveyMainController">

        <div class="jumbotron">
            <h1>CISS Survey</h1>
            <h2>Umfrage: {{survey.name}}</h2>
        </div>

        <div class="row" >
            <div class="col-sm-12">
                <div class="progress">
                    <div class="progress-bar progress-bar-success"
                         style="width:{{survey.progress}}%;"
                         role="progressbar"
                         aria-valuenow="{{survey.progress}}"
                         aria-valuemin="0"
                         aria-valuemax="100">
                        <span ng-hide="survey.progress === 0" ng-bind="survey.progress = getProgress()"></span>
                    </div>
                </div><!-- progress -->

                <hr>

                <form role="form">
                    <div class="form-group">
                        <div ng-repeat="question in survey.questions track by $index">

                            <div ng-switch on="question.questionType">
                                <div class="well">
                                    <label for="{{getIndexName('question', $index)}}">
                                        <span>Frage </span> <span ng-bind="$index + 1"></span><span>:</span>
                                        <span ng-bind="question.questionText"></span>
                                    </label>
                                    <input ng-switch-when="FREETEXT"
                                           ng-model="question.answer"
                                           id="{{getIndexName('question', $index)}}"
                                           type="text"
                                           class="form-control">
                                    </input>

                                    <select ng-switch-when="MULTIPLECHOICE"
                                            ng-model="question.answer"
                                            class="form-control">
                                        <option ng-repeat="option in question.answerOptions"
                                                ng-bind="option.answerText"
                                                value="{{option.id}}">
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!-- end ng-switch question type -->
                        </div>
                        <!-- end ng-repeat question -->
                    </div>
                    <!-- end form-group -->
                    <a href="http://localhost/wordpress2/evaluate-survey/">
                        <button type="button" ng-click="submit" class="btn btn-primary pull-right">Absenden</button>
                    </a>
                </form>
            </div>
        </div>
    </div>
</body>

<?php require "footer.php" ?>