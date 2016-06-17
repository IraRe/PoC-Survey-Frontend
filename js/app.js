/**
 * Created by cklaffke on 16.06.2016.
 */

var survey_url = '/api/survey';

var questionTypes = [
    "input",
    "checkbox"
];

var app = angular.module('pdSurvey', []);

var counter = 0;

app.controller('pdSurveyMainController', function ($scope, $http) {

    var surveyUrl = proxyBaseUrl + '/survey/current';


    $scope.survey = {
        progress: 0
    };

    function init() {

        $http.get(surveyUrl).then(function (resp) {

            console.log(resp);

            $scope.survey = resp.data;
            $scope.survey.progress = 0;
        });
    }

    $scope.getIndexName = function (prefix, index) {

        return prefix + '-' + index;
    };

    $scope.getProgress = function () {

        if (typeof $scope.survey.questions === 'undefined') {
            return 0;
        }

        var i,
            answer,
            answeredQuestions = 0;

        for (i = 0; i < $scope.survey.questions.length; i = i + 1) {

            answer = $scope.survey.questions[i].answer;

            if ($scope.answerIsSet(answer)) {

                answeredQuestions += 1;
            }
        }

        return answeredQuestions / $scope.survey.questions.length * 100;
    };

    init();

    $scope.submit = function () {
        var answers = [];

        var i, currentAnswer = {};

        for (i = 0; i < $scope.survey.questions.length; i = i + 1) {

            currentAnswer.answerText = $scope.survey.questions[i].answer;
            currentAnswer.userId = user;
            currentAnswer.surveyName = $scope.survey.name;
            currentAnswer.questionAnswered = $scope.survey.questions[i];

            answers[i] = currentAnswer;
        }

        var fillUrl = proxyBaseUrl + '/filled',
            data = {
                survey: $scope.survey,
                userAnswers: answers

            };

        $http.post(fillUrl, data).then(function (resp) {

            console.log(resp);
        });
    };

    $scope.answerIsSet = function (answer) {

        return ( typeof answer !== 'undefined' &&
        answer.length > 0 );

    };
});


