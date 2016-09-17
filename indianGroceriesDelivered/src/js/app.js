angular.module('"IndianGroceriesDelivered"', [
  'ngRoute',
  'mobile-angular-ui',
  '"IndianGroceriesDelivered".controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});