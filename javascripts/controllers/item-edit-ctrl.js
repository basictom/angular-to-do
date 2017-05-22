app.controller("ItemEditCtrl", function($routeParams, $scope, ItemFactory, $location) {

  $scope.newTask = {};
  ItemFactory.getSingleItem($routeParams.id)
  .then((results) => {
      console.log("results", results);
    $scope.newTask = results.data;
  }).catch((error) => {
    console.log("signle]]", error);
  });


  $scope.addNewItem = () => {
    ItemFactory.editItem($scope.newTask)
    .then((results) => {
      $location.url('/items/list');
      resolve(results);
    }).catch((error) => {
      console.log("edit/add submit", error);
    });
  };


});
