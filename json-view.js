// Write your package code here!
Template.jsonView.onRendered(function () {
  this.$('.json-view').JSONView(this.data.json || {}, this.data.options || {});
});
