app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {  // $routeProvider --- angular key word
  $routeProvider
  .when('/items/list', {
    templateUrl: '/partials/item-list.html',
    controller: 'ItemListCtrl'
  })
  .when('/items/new', {
    templateUrl: '/partials/item-new.html',
    controller: 'ItemNewCtrl'
  })
  .when('/item/view/:id', {
    templateUrl: '/partials/item-view.html',
    controller: 'ItemViewCtrl'
  })
  .when('/item/edit/:id', {
    templateUrl: '/partials/item-new.html',
    controller: 'ItemEditCtrl'
  }).otherwise('/items/list');
});

app.controller("NavCtrl", function($scope) {
  $scope.cat = "Meow";
  $scope.navItems = [{name: "New Item"}, {name: "All Items"}, {name: "Logout"}];
});

app.controller("ItemListCtrl", function() {
  console.log("Item List Ctrl");
});
app.controller("ItemNewCtrl", function() {
  console.log("Item New Ctrl");
});
app.controller("ItemViewCtrl", function() {
  console.log("Item View Ctrl");
});
app.controller("ItemEditCtrl", function() {
  console.log("Item Edit Ctrl");
});


app.controller("ItemCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {
  $scope.dog = "woof";
  $scope.showListView = true;
  // $scope.searchText =
  $scope.items = [];

  $scope.newItem = () => {
    // console.log("new item");
    $scope.showListView = false;
  };
  $scope.allItems = () => {
    $scope.showListView = true;
  };

  //FIREBASE PROMISE FUNCTION

  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
      .then((fbItems) => {
          let itemCollection = fbItems.data;
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
          resolve(itemz);
        resolve(fbItems);
      }).catch((error) => {
        reject(error);
      });
    });

  };

    let getItems = () => {
      getItemList().then((itemz) => {
        $scope.items = itemz;
      }).catch((error) => {
        console.log("get error", error);
      });
    };

    getItems();

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
        $scope.showListView = true;
        getItems();
        console.log("response",response);
      }).catch((error) => {
        console.log("Add error", error);
      });
    };

});
