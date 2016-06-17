/**
 * Created by cklaffke on 16.06.2016.
 */

var survey_url = '/api/survey';

var questionTypes = [
    "input",
    "checkbox"
];

var survey = {
    "questions": [{
        "id": 1,
        "content": "Wie alt sind Sie?",
        "type": "input",
        "answer": undefined
    }, {
        "id": 2,
        "content": "Wie hat es Ihnen gefallen?",
        "type": "select",
        "answer": undefined,
        "options": [
            "Sehr gut",
            "Gut",
            "Okay",
            "Nicht gut"
        ]
    }]
};

var app = angular.module('pdSurvey', []);

var counter = 0;

app.controller('pdSurveyMainController', function ($scope) {

    $scope.survey = typeof survey === 'undefined' ? {} : survey;

    $scope.getIndexName = function(prefix, index) {

        return prefix + '-' + index;
    };

    $scope.survey.progress = 0;

    $scope.getProgress = function() {

        var i,
            answer,
            answeredQuestions = 0;

        for ( i = 0; i < survey.questions.length; i = i + 1 ) {

            answer = survey.questions[i].answer;

            if ( answerIsSet(answer) ) {

                answeredQuestions += 1;
            }
        }

        console.log(counter+=1);

        return answeredQuestions / survey.questions.length * 100;
    };

    $scope.answerIsSet = function(answer) {

            return ( typeof answer !== 'undefined' &&
                answer.length > 0 );

    };
});