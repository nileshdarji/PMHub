//---------------------------------------------------------------------------------
// Backbone Model
//---------------------------------------------------------------------------------

define(['backbone'], function (Backbone) {
	
	var Photo = Backbone.Model.extend({
		urlRoot: 'http://localhost:8081/api/photos/',
		idAttribute: "photoId"
	});

	return Photo;
});
