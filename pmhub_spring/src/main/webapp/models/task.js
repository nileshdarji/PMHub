
//---------------------------------------------------------------------------------
// Backbone Model
//---------------------------------------------------------------------------------

define(['backbone'], function (Backbone) {
	
	var Task = Backbone.Model.extend({
		urlRoot: 'http://localhost:8082/api/tasks/',
		
		validate: function(attrs) {
			console.log('Name: ' + attrs.name);
			if ( ! $.trim(attrs.name) ) {
				return 'A task requires a valid name';
			}
		}
	});

	return Task;
});
