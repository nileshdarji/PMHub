
//---------------------------------------------------------------------------------
//Backbone Collection for Projects
//---------------------------------------------------------------------------------

define(['backbone', 'models/project'], function (Backbone, Project) {
	
	var ProjectList = Backbone.Collection.extend({
		model: Project,
		url: 'http://localhost:8082/api/projects/'
	});

	return ProjectList;
});
