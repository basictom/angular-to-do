app.controller("ItemEditCtrl", function($routeParams, $scope, ItemFactory, $location) {

  $scope.newTask = {};
  ItemFactory.getSingleItem($routeParams.id)
  .then((results) => {
      // console.log("results", results);
    $scope.newTask = results.data;
  }).catch((error) => {
    console.log("single", error);
  });


  $scope.addNewItem = () => {
    // console.log($scope.newTask);
    ItemFactory.editItem($scope.newTask)
    .then((results) => {
      ItemFactory.getItemList(results.data);
      console.log(results);
      // resolve(results);
      $location.url('/items/list');
    }).catch((error) => {
      console.log("edit/add submit", error);
    });
  };


});
