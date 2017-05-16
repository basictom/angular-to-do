app.controller("ItemCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {



  //FIREBASE PROMISE FUNCTION



    let postNewItem = (newItem) => {
      return $q((resolve, reject) => {
        $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
        .then((resultz) => {
          resolve(resultz);
        }).catch((error) => {
          reject(error);
        });
      });
    };

    $scope.addNewItem = () => {
      $scope.newTask.isCompleted = false;
      postNewItem($scope.newTask)
      .then((response) => {
        $scope.newTask = {};
        getItems();
        console.log("response",response);
      }).catch((error) => {
        console.log("Add error", error);
      });
    };

});
