var app = angular.module('minmax', []);

app.controller('map', function ($scope,ContactService) {
	
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
			"lat":59.4371, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.4371, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.4371, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.437, 
			"ling":24.7536,
			"wat":1
		},		
]
}
});