//---------------------------------------------------------------------------------
// Backbone Model
//---------------------------------------------------------------------------------

define(['backbone'], function (Backbone) {

	var Project = Backbone.Model.extend({
		urlRoot: 'http://localhost:8082/api/projects/',
		
		validate: function(attrs) {
			if ( !attrs.name ) {
				return 'Project must have a name';
			}
		},
		
		testFunction: function() {
			return "Hello " + this.get("name");
		}
	});

	return Project;
});


