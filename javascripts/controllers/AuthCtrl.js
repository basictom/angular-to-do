app.controller("AuthCtrl", function($rootScope, $scope, $location, FIREBASE_CONFIG, AuthFactory, UserFactory){
  $scope.auth = {
    email: "a@a.com",
    password: "123456"
  };

  let logMeIn = () => {
    AuthFactory.authenticate($scope.auth).then((userCreds) => {
      console.log("user creds", userCreds);
      return UserFactory.getUser(userCreds.uid);
    }, (error) => {
      console.log("auth error", error);
    }).then((user) => {
      $rootScope.user = user;
      $location.url('/items/list');
    }).catch((error) => {
      console.log("get user error", error);
    });
  };

  $scope.registerUser = () => {

    AuthFactory.registerWithEmail($scope.auth)
    .then((didRegister) => {
      $scope.auth.uid = didRegister.uid;
      return UserFactory.addUser($scope.auth);
    }, (error) => {
      console.log("register error", error);
    }).then((registerComplete) => {
      // console.log("registerComplete",registerComplete);
      $location.url('/items/list');
    }, (error) => {
      console.log("error", error);
    });
  };

  $scope.loginUser = () => {
    logMeIn();
  };

});
