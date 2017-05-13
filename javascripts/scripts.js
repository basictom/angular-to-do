"use strict";

app.controller("NavCtrl", ($scope) => {
  $scope.cat = "Meow";
  $scope.navItems = [{name: "New Item"}, {name: "All Items"}, {name: "Logout"}];
});

app.controller("ItemCtrl", ($scope) => {
  $scope.dog = "woof";
  $scope.showListView = true;
  // $scope.searchText =
  $scope.items = [];

  $scope.newItem = () => {
    // console.log("new item");
    $scope.showListView = true;
  }
  $scope.allItems = () => {
    $scope.showListView = false;
  }
});
