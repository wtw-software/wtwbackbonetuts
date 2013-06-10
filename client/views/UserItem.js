
var Backbone = require('backbone'),
    hogan = require('hogan.js')

var UserItem = Backbone.View.extend({

  tagName: 'li',
  template: hogan.compile("{{firstname}} {{lastname}} <button class='delete'></button>"),

  events: {
    'click .delete': 'onClickDeleteHandler'
  },

  render: function() {
    var html = this.template.render(this.model.toJSON())
    this.$el.html(html)
  },

  onClickDeleteHandler: function() {
    this.model.collection.remove(this.model)
  }

})

module.exports = UserItem