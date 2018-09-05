//---------------------------------------------------------------------------------
// Backbone Collection for Tasks
//---------------------------------------------------------------------------------

define([
  'models/task'
], function (Task) {
	
	var TaskList = Backbone.Collection.extend({
		model: Task,
		url: 'http://localhost:8080/api/tasks/'
	});

	return TaskList;
});
