
require.config({
	paths: {
		"jquery": "lib/jquery",
		"underscore": "lib/underscore", 
		"backbone": "lib/backbone",
		"text": "lib/text"		
	}
});

console.log('app.js loaded');		

require(['routers/router'], function(MyRouter) {
	
	console.log('In MyRouter');		
	var router = new MyRouter();
	Backbone.history.start();	

});

