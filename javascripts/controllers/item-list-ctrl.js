app.controller("ItemListCtrl", function($scope, ItemFactory) {

  $scope.items = [];


  let getItems = () => {
    ItemFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();


});
