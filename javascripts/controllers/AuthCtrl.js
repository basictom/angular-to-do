app.controller("AuthCtrl", function($scope, FIREBASE_CONFIG, AuthFactory, UserFactory){
  $scope.auth = {};

  $scope.loginUser = () => {

  };

  $scope.registerUser = () => {

    AuthFactory.registerWithEmail($scope.auth)
    .then((didRegister) => {
      // console.log("registered", didRegister);
      $scope.auth.uid = didRegister.uid;
      return UserFactory.addUser($scope.auth.uid);
    }, (error) => {
      console.log("register error", error);
    }).then((registerComplete) => {
      console.log("registerComplete",registerComplete);
    }, (error) => {
      console.log("error", error);
    });
  };
});
