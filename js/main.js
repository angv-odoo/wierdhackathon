var app = angular.module('minmax', []);
app.controller('map', function ($scope,ContactService) {
  $scope.problemplaces=[{
      locationInput:'59.4370,24.7536',
      topic: 'crime',
      location:'wtfdude',
      forr: 0,
      againstt:0
    },
    {location: "messagejkafshdjdasnlkfhsajdzf",
    topic : "transport",
locationInput : "(59.442282456336535,  24.727547764778137)",
      forr: 3,
      againstt:0
}];
$scope.information="message";
$scope.problems= {}
$scope.saved = function(){
$scope.problemplaces = $scope.problemplaces.concat([{
 location: $scope.information, topic: $scope.topic,locationInput: $scope.locationInput
    }])
    console.log($scope.problemplaces);
			console.log($scope.information);
			console.log($scope.topic);
			console.log($scope.locationInput);

	}
 $scope.fo=2;
 $scope.for = function(){
 $scope.fo=$scope.fo+1;
 }
  $scope.again=0;
 $scope.against = function(){
 $scope.again=$scope.again+1;
 }
  $scope.mafunction = function(){
   
   $("#sidebar").toggle("slow");
   console.log("lol");
  }
console.log("andro");
$scope.places=ContactService;
console.log($scope.places[1]);
});


app.service('ContactService', function () {

  return {
    "places": [
    {
      "lat":59.4370, 
      "ling":24.7536,
      "wat":1
    },
    {
      "lat":59.4370, 
      "ling":24.7536,
      "wat":1
    },    {
      "lat":59.4369, 
      "ling":24.7536,
      "wat":1
    },    {
      "lat":59.4366, 
      "ling":24.7536,
      "wat":1
    },    {
      "lat":59.4367, 
      "ling":24.7536,
      "wat":1
    },    
]
}
});