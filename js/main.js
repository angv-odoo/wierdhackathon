var app = angular.module('minmax', []);

app.controller('map', function ($scope,ContactService) {

console.log("andro");
$scope.places=ContactService;
});


app.service('ContactService', function () {

	return {
		"places": [
		{
			"lat":59.4369, 
			"ling":24.7533,
			"wat":1
		},
		{
			"lat":59.4371, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.4352, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.4373, 
			"ling":24.7536,
			"wat":1
		},		{
			"lat":59.4374, 
			"ling":24.7536,
			"wat":1
		},		
]
}
});