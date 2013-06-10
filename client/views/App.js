
var Backbone = require('backbone'),
    Users = require('../collections/Users')
    UserList = require('./UserList')

var App = Backbone.View.extend({

  el: 'body',

  initialize: function() {
    var userCollection = new Users()
    userCollection.reset([
      {id: 1, firstname: 'Morten', lastname: 'Tvenning'},
      {id: 2, firstname: 'Damian', lastname: 'Lopata'}
    ])
    this.userList = new UserList({
      el: $('#userlist'),
      collection: userCollection
    })
    this.userList.render()
    window.ul = this.userList
  }

})

module.exports = App


