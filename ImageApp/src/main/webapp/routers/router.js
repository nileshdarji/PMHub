
define([
  'collections/photoList',
  'views/photoListView'
], function (PhotoList, PhotoListView) {
	
	// Backbone Router
	var MyRouter = Backbone.Router.extend({
		routes:{
			"" : "labelimage",
			"labelimage" : "labelimage"
		},
		
		labelimage: function() {
			console.log('In labelimage');				
			
			$("#headerContainer").text("Label Image");
			$("#bodyContainer").html("");		
			$("#taskList").html("");	
			$("#newTaskDiv").html("");	

			var photoList = new PhotoList();
			
			photoList.fetch({
				success: function() {
					console.log('Got all photos');				
					console.log(photoList.toJSON());
					
					var photoListView = new PhotoListView({collection: photoList});
					$("#bodyContainer").html(photoListView.render().el);	
				},
				error: function() {
					console.log('Failed to get photo');				
				}
			});					
		}
	});		
	
	return MyRouter;
});
