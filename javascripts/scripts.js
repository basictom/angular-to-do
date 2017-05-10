// console.log("working..");
"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
  $scope.cat = "Meow";
  $scope.navItems = [{name: "New Item"}, {name: "All Items"}, {name: "Logout"}];
});

app.controller("ItemCtrl", ($scope) => {
  $scope.dog = "woof";

});
