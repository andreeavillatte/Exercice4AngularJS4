// Création d'un module angular du nom 'myApp'
var app = angular.module('carApp', []);
// Création d'un controller 'carCtrl'
app.controller('carCtrl', function ($scope, $http) {
    $http.get("assets/bdd/voiture.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de voiture.json dans la variable marques
            $scope.voitures = response.data;
        });
});