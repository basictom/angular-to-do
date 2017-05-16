app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {


  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = true;
    postNewItem($scope.newTask)
    .then((response) => {
      $scope.newTask = {};
      // getItems();
      //switch views here
      console.log("response",response);
    }).catch((error) => {
      console.log("Add error", error);
    });
  };
});
