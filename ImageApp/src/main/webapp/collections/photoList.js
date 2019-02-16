//---------------------------------------------------------------------------------
// Backbone Collection for Photos
//---------------------------------------------------------------------------------

define(['backbone', 'models/photo'], function (Backbone, Photo) {
	
	var PhotoList = Backbone.Collection.extend({
		model: Photo,
		url: 'http://localhost:8081/api/photos/'
	});

	return PhotoList;
});
