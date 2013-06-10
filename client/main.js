
var $         = require('jquery-browserify'),
    Backbone  = require('backbone'),
    _         = require('underscore'),
    App       = require('./views/App')


$(document).ready(function() {
  
  var appView = new App()

  appView.render()

})







