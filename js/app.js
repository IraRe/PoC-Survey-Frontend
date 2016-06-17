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

        $http.get(surveyUrl).then(function(resp) {

            console.log(resp);

            $scope.survey = resp.data;
            $scope.survey.progress = 0;
        });
    }

    $scope.getIndexName = function(prefix, index) {

        return prefix + '-' + index;
    };

    $scope.getProgress = function() {

        if (typeof $scope.survey.questions === 'undefined') {
            return 0;
        }

        var i,
            answer,
            answeredQuestions = 0;

        for ( i = 0; i < $scope.survey.questions.length; i = i + 1 ) {

            answer = $scope.survey.questions[i].answer;

            if ( $scope.answerIsSet(answer) ) {

                answeredQuestions += 1;
            }
        }

        console.log(counter+=1);

        return answeredQuestions / $scope.survey.questions.length * 100;
    };

    init();

    $scope.submit =  function () {
        var answers = [];

        var currentAnswer = undefined;

        for ( i = 0; i < $scope.survey.questions.length; i = i + 1 ) {
            answer = $scope.survey.questions[i].answer;

            currentAnswer.answerText = answer;
            currentAnswer.userId = user;
            currentAnswer.surveyName = $scope.survey.name;
            currentAnswer.questionAnswered = $scope.survey.questions[i];

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

    $scope.survey = typeof filledSurvey === 'undefined' ? {} : filledSurvey;

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

        var fillUrl = proxyBaseUrl + 'fill';

        var data = {

            survey: $scope.survey,
            userAnswers: answers

        };

        console.log(data);

        return ;

        $http.post(fillUrl, data).then(function(resp) {

            console.log(resp);
        });
    };

    $scope.answerIsSet = function(answer) {

        return ( typeof answer !== 'undefined' &&
        answer.length > 0 );

    };
});


