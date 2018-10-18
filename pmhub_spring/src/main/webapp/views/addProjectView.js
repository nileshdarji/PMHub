//-----------------------------------------------------------------------------------

define(['models/project','views/projectView', "text!templates/addProject.html"], 
		function (Project, ProjectView, AddProjectTemplate) {

	var AddProjectView = Backbone.View.extend({
		el: '#newTaskDiv',
		template: _.template(AddProjectTemplate),
		
		events: {
			'submit': 'submit'
		},
		
		initialize: function() {
			this.$el.html(this.template);		
		},
	
		submit: function(e) {
			e.preventDefault();
			console.log('Submitted');
			//var newProjectTitle = $(e.currentTarget).find('input[type=text]').val();
			var newProjectName = $("#newProject").val();
			var description = $("#description").val();
			console.log(newProjectName);
			
			var newProjectModel = new Project({name: newProjectName, description: description});
			
			var self = this;
			newProjectModel.save(null, {
				success: function() {
					console.log('Project added');				
					console.log(newProjectModel.toJSON());
					self.collection.add(newProjectModel);
					$("#newProject").val('');
					$("#description").val('');
				},
				error: function() {
					console.log('Failed to add project');				
				}
			});
		}
	});
	
	return AddProjectView;
});
