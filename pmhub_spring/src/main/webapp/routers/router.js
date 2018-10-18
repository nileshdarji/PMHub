
define([
  'collections/projectList',
  'views/projectListView',
  'views/addProjectView',
  'collections/taskList',
  'views/taskListView',
  'views/addTaskView',
  'collections/memberList',
  'views/memberListView',
  'views/addMemberView'
], function (ProjectList, ProjectListView, AddProjectView, TaskList, TaskListView, AddTaskView, 
			MemberList, MemberListView, AddMemberView) {
	
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
					
					// console.log($('#projects-list-header'));
					// console.log(headerTemplate);
					// $("#bodyContainer").html(headerTemplate);
					
					var addProject = new AddProjectView({collection: projectList});								
					
					var projectListView = new ProjectListView({collection: projectList});
					$("#taskList").html(projectListView.render().el);							
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

			var memberList = new MemberList();
			
			memberList.fetch({
				success: function() {
					console.log('Got all members');				
					console.log(memberList.toJSON());
					
					var memberListView = new MemberListView({collection: memberList});
					//console.log(memberListView.render().el);
					$("#taskList").html(memberListView.render().el);
	
					var addMember = new AddMemberView({collection: memberList});								
				},
				error: function() {
					console.log('Failed to get members');				
				}
			});					
		}
	});		
	
	return MyRouter;
});
