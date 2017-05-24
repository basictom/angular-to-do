app.controller("ItemListCtrl", function($rootScope, $scope, ItemFactory) {

  $scope.items = [];


  let getItems = () => {
    ItemFactory.getItemList($rootScope.user.uid).then((itemz) => {
      $scope.items = itemz;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();

  $scope.deleteItem = (id) => {
    ItemFactory.deletz(id).then(() => {
      getItems();
    }).catch((error) => {
      console.log("delete", error);
    });
  };


  $scope.inputChange = (item) => {
    console.log("input change", item);
    ItemFactory.editItem(item)
    .then(() => {
    }).catch((error) => {
      console.log("input", error);
    });
  };


});
