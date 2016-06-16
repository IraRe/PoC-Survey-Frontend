<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each one. For example, tag.php (Tag archives),
 * category.php (Category archives), author.php (Author archives), etc.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 *
 * Template Name: Start Survey
 */
require "header.php"; ?>
    <div class="container" ng-app="pdSurvey">
        <div class="row" ng-controller="pdSurveyMainController">
            <div class="col-sm-12">
                <form role="form">
                    <div class="form-group">


                        <div ng-repeat="question in survey.questions track by $index">

                            <label for="{{getIndexName('question', $index)}}">Frage <span ng-bind="$index + 1"></span>:</label>
                            <h3> <span ng-bind="question.content"></span></h3>
                            <div ng-switch on="question.type">
                                <input type="text"  ng-switch-when="input" id="{{getIndexName('question', $index)}}"/>

                                <select  ng-switch-when="select" >

                                        <option ng-repeat="option in question.options" value="{{option.id}}" >{{option.value}}</option>

                                </select>

                            </div>

                        </div>

                    </div>
                    
                    <button class="btn btn-default" ng-click="click($event, 'bla')">Submit</button>
                </form>
            </div>
        </div>
    </div>



<?php require "footer.php" ?>