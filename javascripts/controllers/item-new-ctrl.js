app.controller("ItemNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, ItemFactory) {



  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    ItemFactory.postNewItem($scope.newTask)
    .then(() => {
      $scope.newTask = {};
      $location.url("/items/list");
      // getItems();
      //switch views here
    }).catch((error) => {
      console.log("Add error", error);
    });
  };

});