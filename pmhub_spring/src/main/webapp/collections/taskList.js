//---------------------------------------------------------------------------------
// Backbone Collection for Tasks
//---------------------------------------------------------------------------------

define(['backbone', 'models/task'], function (Backbone, Task) {
	
	var TaskList = Backbone.Collection.extend({
		model: Task,
		url: 'http://localhost:8082/api/tasks/'
	});

	return TaskList;
});
