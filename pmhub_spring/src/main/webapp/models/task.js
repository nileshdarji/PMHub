
//---------------------------------------------------------------------------------
// Backbone Model
var Task = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/api/tasks/',
	
	validate: function(attrs) {
		console.log('Name: ' + attrs.name);
		if ( ! $.trim(attrs.name) ) {
			return 'A task requires a valid name';
		}
	}
});

//---------------------------------------------------------------------------------
// Backbone Collection
var TaskList = Backbone.Collection.extend({
	model: Task,
	url: 'http://localhost:8080/api/tasks/'

});
