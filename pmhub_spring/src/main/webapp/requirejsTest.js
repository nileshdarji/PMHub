
//define(["lib/jquery", "lib/underscore", "lib/backbone", "models/task"], function ($, _, Backbone, Task) {

require.config({
	paths: {
		"jquery": "lib/jquery", 
		"underscore": "lib/underscore", 
		"backbone": "lib/backbone"
	}
});

console.log('requirejsTest.js loaded');		

require(['views/testView', 'models/task', 'collections/taskList', 'views/taskListView'], 
			function(TestView, Task, TaskList, TaskListView) {
	new TestView;
	new Task;
	var taskList = new TaskList;

	taskList.fetch({
		success: function() {
			console.log('Got all tasks');				
			console.log(taskList.toJSON());
			
			var taskListView = new TaskListView({collection: taskList});
			//console.log(taskListView.render().el);
			$("#taskList").html(taskListView.render().el);

			var addTask = new AddTaskView({collection: taskList});								
		},
		error: function() {
			console.log('Failed to get tasks');				
		}
	});	

});

//	console.log(Task);
//});
