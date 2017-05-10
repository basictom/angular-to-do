// console.log("working..");
"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
  $scope.cat = "Meow";
  $scope.navItems = [{name: "New Item"}, {name: "All Items"}, {name: "Logout"}];
});

app.controller("ItemCtrl", ($scope) => {
  $scope.dog = "woof";
  $scope.showListView = true;
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      assignedTo: "Callan",
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      assignedTo: "Lauren",
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      assignedTo: "Zoe",
    }
  ];

  $scope.newItem = () => {
    // console.log("new item");
    $scope.showListView = true;
  }
  $scope.allItems = () => {
    $scope.showListView = false;
  }
});
