/**
 * Created by cklaffke on 16.06.2016.
 */

var survey_url = '/api/survey';

var questionTypes = [
    "input",
    "checkbox"
];

var survey = {"id": 1,
    "name": "MySurvey",
    "questions": [{
    "id": 1,
    "questionType": "FREETEXT",
    "questionText": "In welchem Land wurde Baseball erfunden?",
    "answerOptions": []
},
    {
        "id": 2,
        "questionType": "MULTIPLECHOICE",
        "questionText": "Wann wurde die erste Verfassung der Welt verfasst?",
        "answerOptions": [{
            "id": 1,
            "answerText": "1921"
        },
            {
                "id": 2,
                "answerText": "712"
            },
            {
                "id": 3,
                "answerText": "2016"
            }]
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

            if ( $scope.answerIsSet(answer) ) {

                answeredQuestions += 1;
            }
        }

        console.log(counter+=1);

        return answeredQuestions / survey.questions.length * 100;
    };

    $scope.submit =  function () {
        var answers = [];

        var currentAnswer = null;

        for ( i = 0; i < survey.questions.length; i = i + 1 ) {
            answer = survey.questions[i].answer;

            currentAnswer.answerText = answer;
            currentAnswer.userId = user;
            currentAnswer.surveyName = survey.name;
            currentAnswer.questionAnswered = survey.questions[i];

            answers[i] = currentAnswer;
        }

        //Restcall survey + answers
    };

    $scope.answerIsSet = function(answer) {

        return ( typeof answer !== 'undefined' &&
        answer.length > 0 );

    };
});

app.controller('pdSurveyEvaluateController', function ($scope) {

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

            if ( $scope.answerIsSet(answer) ) {

                answeredQuestions += 1;
            }
        }

        console.log(counter+=1);

        return answeredQuestions / survey.questions.length * 100;
    };

    $scope.submit =  function () {
        var answers = [];

        var currentAnswer = null;

        for ( i = 0; i < survey.questions.length; i = i + 1 ) {
            answer = survey.questions[i].answer;

            currentAnswer.answerText = answer;
            currentAnswer.userId = user;
            currentAnswer.surveyName = survey.name;
            currentAnswer.questionAnswered = survey.questions[i];

            answers[i] = currentAnswer;
        }

        //Restcall survey + answers
    };

    $scope.answerIsSet = function(answer) {

        return ( typeof answer !== 'undefined' &&
        answer.length > 0 );

    };
});


