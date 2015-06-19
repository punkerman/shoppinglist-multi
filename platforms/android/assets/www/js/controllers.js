angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('PromosCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$http, prodService) {
  $scope.chat = Chats.get($stateParams.chatId);
  $http.get('http://servtec.esy.es/webService/easyShopping.php?categoria=' + $scope.chat.sector).then(function(resp){
    $scope.items= resp.data.productos;
    prodService.addProduct(resp.data.productos);
    console.log('Success', resp);

    return {
    all: function() {
      return items;
    },
    remove: function(chat) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (items[i].id === parseInt(itemId)) {

       return items[i];
        }
      }
      return null;
    }
  };

  },function(err){
    console.error('ERR',err);
  })
})

.controller('ProdDetailCtrl',function($scope,$stateParams,prodService,$ionicModal){
 
$scope.product= prodService.getProducts($stateParams.itemId);

console.log($scope.product);

$ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  console.log($scope);
});
