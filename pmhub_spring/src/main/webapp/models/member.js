//---------------------------------------------------------------------------------
// Backbone Model
//---------------------------------------------------------------------------------

define(['backbone'], function (Backbone) {
	
	var Member = Backbone.Model.extend({
		urlRoot: 'http://localhost:8082/api/members/',
		
		validate: function(attrs) {
			console.log('Name: ' + attrs.name);
			if ( ! $.trim(attrs.name) ) {
				return 'A member requires a valid name';
			}
		}
	});

	return Member;
});
