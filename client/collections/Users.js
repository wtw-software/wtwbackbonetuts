
var Backbone = require('backbone'),
    User = require('../models/User')

var Users = Backbone.Collection.extend({

  model: User,

  initialize: function() {
    this.setUpSync()
  },

  setUpSync: function() {
    this.socket.on('command', function( command, data ) {
      this[command](data)
    })
  }

})

module.exports = Users