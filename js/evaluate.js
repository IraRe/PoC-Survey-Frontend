app.controller('pdSurveyEvaluateController', function ($scope, $http) {

    console.log("test");
    var surveyUrl = proxyBaseUrl + '/filled/current?userId=';

    function init() {

        $http.get(surveyUrl + user).then(function (resp) {

            console.log(resp);

            $scope.filledSurvey = resp.data.survey;
            $scope.userAnswers = resp.data.userAnswers;
        });
    }

    $scope.getIndexName = function(prefix, index) {

        return prefix + '-' + index;
    };

    $scope.answerIsSet = function(answer) {

        return ( typeof answer !== 'undefined' &&
        answer.length > 0 );

    };
    init();
});