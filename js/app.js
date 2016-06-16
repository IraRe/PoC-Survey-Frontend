/**
 * Created by cklaffke on 16.06.2016.
 */

var survey_url = '/api/survey';

var questionTypes = [
    "input",
    "checkbox"
];

var survey = {
    "questions" : [{
        "id" : 1,
        "content": "Wie alt sind Sie?",
        "type": "input",
        "answer" : null
    }, {
        "id" : 2,
        "content": "Wie hat es Ihnen gefallen?",
        "type": "select",
        "answer" : null,
        "options": [
                "Sehr gut","Gut","Okay","Nicht gut"
        ]
    }]
};

var app = angular.module('pdSurvey', []);

app.controller('pdSurveyMainController', function ($scope) {

    $scope.survey = survey;

    console.log(survey);

    //angular.copy($scope.result);

    $scope.click = function (event, param) {
        console.log(survey);
        console.log('param: ' + param);
    };
    
    $scope.getIndexName = function(prefix, index){
        return prefix + '-' + index;
    }

    $scope.getProgress = function () {
        var answeredQuestions = 0;
        for (i = 0; i < survey.questions.length; i++) {
            if(survey.questions[i].answer != null)
            {
                answeredQuestions++;
            }
        }
        return answeredQuestions / survey.questions.length * 100;


    }

});