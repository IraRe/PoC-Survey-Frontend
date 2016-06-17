<?php
/**
 * @link http://prodyna.com
 * @since 1.0
 *
 * Template Name: Test Angular JS
 */
require "header.php";
?>

<body class="bg-dark">
    <div class="container" ng-app="pdSurvey">

        <div class="jumbotron">
            <h1>CISS Test Angular JS</h1>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-info">
                    <strong>Info!</strong> <span ng-bind="info"></span>
                </div>
                <div>
                    <button class="btn btn-primary pull-right">Greet me</button>
                </div>
            </div>
        </div>
    </div>
</body>

<?php require "footer.php" ?>