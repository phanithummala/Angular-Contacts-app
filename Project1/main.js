var app=angular.module('appmodule',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/AddContact',{
        template:'<h1>You are in Add contact page<h1>',
    })
    .otherwise({redirectTo:'/'});
}]);
app.controller('appcontroller',['$scope',function($scope)
{
  $scope.contacts=
  [
      {
          firstName:'Phanindra',
          lastName:'Thummala',
          FullName:'Thummala Phanindra',
          EmailID:'phanithummala@gmail.com',
          ContactNo:'7702112361'
      },
      {
          firstName:'Niteesh',
          lastName:'Chennoju',
          FullName:'Niteesh Chennoju',
          EmailID:'niteesh.chennoju@gmail.com',
          ContactNo:'1234567890'},
      {
          
          firstName:'Ramakrishna',
          lastName:'Medidha',
          FullName:'Ramakrishna Medidha',
          EmailID:'ramakrishna@gmail.com',
          ContactNo:'7894561230'
      },
      {
          firstName:'Gopinath',
          lastName:'Gopu',
          FullName:'Gopinath Gopu',
          EmailID:'gopi@gmail.com',
          ContactNo:'7894561230'
      }
 ]; 
$scope.orderBy = function(x) {
    $scope.myOrderBy = x;
  };

     
}]);


 /*var app = angular.module('RoutingApp',['ngRoute'])

        app.config(['$routeProvider',function($routeProvider){
        $routeProvider.
        when('/',{
            templateUrl: '/first.html',
        }).
        when('/about',{
            template: 'About us',
        }).
        when('/contact',{
            template: 'Contact us',
        }).
        otherwise({
            redirectTo : '/'
        });
    }]);*/