/**
 * Created by cklaffke on 16.06.2016.
 */

var questionTypes = [
    "input",
    "checkbox"
];

var survey = {
    "questions" : [{
        "content": "Wie alt sind Sie?",
        "type": "input"
    }, {
        "content": "Wie hat es Ihnen gefallen?",
        "type": "select",
        "options": [
            {
                "id" : 1,
                "value" : "Sehr gut"
            },
            {
                "id" : 2,
                "value" : "Gut"
            },
            {
                "id" : 3,
                "value" : "Okay"
            },
            {
                "id" : 4,
                "value" : "Nicht gut"
            }
        ]
    }]
};

var app = angular.module('pdSurvey', []);

app.controller('pdSurveyMainController', function ($scope) {

    $scope.survey = survey;

    $scope.click = function (event, param) {
        console.log('param: ' + param);
    };
    
    $scope.getIndexName = function(prefix, index){
        return prefix + '-' + index;
    }

});