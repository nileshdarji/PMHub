//---------------------------------------------------------------------------------
define(['models/project','views/projectView'], function (Project, ProjectView) {
	
	// Backbone View for project list
	var ProjectListView = Backbone.View.extend({
		
		tagName: 'table',
		className: 'table',
		
		initialize: function() {
			this.collection.on('add', this.addOneProject, this);
		},
		
		addOneProject: function(project) {
			var projView = new ProjectView({model: project});
			this.$el.append(projView.render().el);
		},
		
		render: function() {	
			this.collection.each(this.addOneProject, this);	
			return this;
		}		
	});
	
	return ProjectListView;
});