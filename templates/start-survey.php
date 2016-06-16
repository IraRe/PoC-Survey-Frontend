<?php
/**
 * @link http://prodyna.com
 * @since 1.0
 *
 * Template Name: Start Survey
 */
require "header.php";
?>

<body class="bg-dark">
    <div class="container" ng-app="pdSurvey">

        <div class="jumbotron">
            <h1>CISS Survey</h1>
        </div>

        <div class="row" ng-controller="pdSurveyMainController">
            <div class="col-sm-12">
                <div class="progress">
                    <div class="progress-bar progress-bar-success"
                         style="width:{{survey.progress}}%;"
                         role="progressbar"
                         aria-valuenow="{{survey.progress}}"
                         aria-valuemin="0"
                         aria-valuemax="100">
                        <span ng-bind="survey.progress = getProgress()"></span>
                    </div>
                </div><!-- progress -->

                <hr>

                <form role="form">
                    <div class="form-group">
                        <div ng-repeat="question in survey.questions track by $index">

                            <div ng-switch on="question.type">
                                <div class="well">
                                    <label for="{{getIndexName('question', $index)}}">
                                        <span>Frage </span> <span ng-bind="$index + 1"></span><span>:</span>
                                        <span ng-bind="question.content"></span>
                                    </label>
                                    <input ng-switch-when="input"
                                           ng-model="question.answer"
                                           id="{{getIndexName('question', $index)}}"
                                           type="text"
                                           class="form-control"/>

                                    <select ng-switch-when="select"
                                            ng-model="question.answer"
                                            class="form-control">
                                        <option ng-repeat="option in question.options"
                                                ng-bind="option"
                                                value="{{option}}">
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!-- end ng-switch question type -->
                        </div>
                        <!-- end ng-repeat question -->
                    </div>
                    <!-- end form-group -->
                    <button type="button" class="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
    </div>
</body>

<?php require "footer.php" ?>