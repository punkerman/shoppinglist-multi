angular.module('starter.services', [])

.service('prodService', function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.length=0;
      productList.push(newObj);
      
  };

  var getProducts = function(id){
   
    for (var i = 0; i < productList[0].length; i++) {
       if (productList[0][i].id === id) {
          return productList[0][i];
        }
      }

      return null;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    sector: 'meat',
    titulo: 'Carnes',
    face: './img/carnesjpeg.png'
  }, {
    id: 1,
    sector: 'drink',
    titulo: 'Bedibas',
    face: './img/drinks.png'
  },{
    id: 2,
    sector: 'pasta',
    titulo: 'Pastas',
    face: './img/pasta.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

