define(['backbone'], function (Backbone) {
	
	//---------------------------------------------------------------------------------
	var TestView = Backbone.View.extend({
		initialize: function() {
			console.log('Test View Created');	
		}
	});
	
	return TestView;
});
