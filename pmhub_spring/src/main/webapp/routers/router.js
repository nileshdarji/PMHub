
define([
  'collections/taskList',
  'views/taskListView'
], function (TaskList, TaskListView) {
	
	// Backbone Router
	var MyRouter = Backbone.Router.extend({
		routes:{
			"" : "projects",
			"projects" : "projects",
			"tasks" : "tasks",		
			"team" : "team"
		},
		
		projects: function(){
			//vent.trigger('projects:show');
			
			$("#headerContainer").text("Project List");
			$("#bodyContainer").html("");		
			$("#taskList").html("");	
			$("#newTaskDiv").html("");	
	
			var projectList = new ProjectList();
			
			projectList.fetch({
				success: function() {
					console.log('Got all projects');				
					console.log(projectList.toJSON());
					
					console.log($('#projects-list-header'));
					console.log(headerTemplate);
					$("#bodyContainer").html(headerTemplate);
					
					var projectListView = new ProjectListView({collection: projectList});
					$("#projectListContainer").html(projectListView.render().$el.html());		
				},
				error: function() {
					console.log('Failed to get projects');				
				}
			});
		},
	
		tasks: function(){
			$("#headerContainer").text("Tasks");
			$("#bodyContainer").html("");		
			$("#taskList").html("");	
			$("#newTaskDiv").html("");	
	
			
			var taskList = new TaskList();
			
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
		},
		
		team: function(){
			$("#headerContainer").text("Team Members");
			$("#bodyContainer").html("");		
			$("#taskList").html("");	
			$("#newTaskDiv").html("");	
			
		}
	});		
	
	return MyRouter;
});
