//---------------------------------------------------------------------------------
// Backbone Model
//---------------------------------------------------------------------------------

define(['backbone'], function (Backbone) {
	
	var Photo = Backbone.Model.extend({
		urlRoot: 'http://localhost:8081/api/photos/',
		
		validate: function(attrs) {
			console.log('Name: ' + attrs.name);
			if ( ! $.trim(attrs.name) ) {
				return 'A member requires a valid name';
			}
		}
	});

	return Photo;
});
