
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
			"" : "labelimage",
			"labelimage" : "labelimage"
		},
		
		labelimage: function() {
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
