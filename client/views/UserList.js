
var Backbone = require('backbone'),
    UserItem = require('./UserItem'),
    User     = require('../models/User')

var UserList = Backbone.View.extend({

  events: {
    'click .adduser': 'addUserClickHandler'
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.onCollectionChangeHandler, this)
    this.listenTo(this.collection, 'remove', this.onCollectionChangeHandler, this)
  },

  render: function() {
    this.$el.find('ul').empty()
    this.collection.forEach(function(user) {

      var userItem = new UserItem({ model: user })      
      userItem.render()
      this.$el.find('ul').append(userItem.$el)

    }, this)
  },

  addUserClickHandler: function(event) {
    var user

    user = new User({ 
      firstname: this.$el.find('.firstname').val(),
      lastname: this.$el.find('.lastname').val()
    })

    this.collection.add(user)
  },

  onCollectionChangeHandler: function() {
    this.render()
  }

})

module.exports = UserList