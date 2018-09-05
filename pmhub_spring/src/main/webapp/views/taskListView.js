//---------------------------------------------------------------------------------
define([
  'models/task',
  'views/taskView'
], function (TaskList, TaskListView) {
	
	var TaskListView = Backbone.View.extend({
		
		tagName: 'table',
		className: 'table',
		
		initialize: function() {
			this.collection.on('add', this.addOneTask, this);
		},
		
		addOneTask: function(task) {
			var taskview = new TaskView({model: task});
			this.$el.append(taskview.render().el);
		},
		
		render: function() {
			this.collection.each(this.addOneTask, this);
			return this;
		}	
	});
});
