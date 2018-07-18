
//---------------------------------------------------------------------------------
// Backbone Model
var Project = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		description: ''
	},
	validate: function(attrs) {
		if ( attrs.id < 0 ) {
			return 'ID must be positive';
		}
		if ( !attrs.name ) {
			return 'Project must have a name';
		}
	},
	urlRoot : 'http://localhost:8080/api/projects/',
	testFunction: function() {
		return "Hello " + this.get("name");
	}
});

//---------------------------------------------------------------------------------
// Backbone Collection
var ProjectList = Backbone.Collection.extend({
	model: Project,
	url: 'http://localhost:8080/api/projects/'
});

