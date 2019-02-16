//---------------------------------------------------------------------------------
define(['collections/photoList','views/photoView'], function (PhotoList, PhotoView) {
	
	var PhotoListView = Backbone.View.extend({
		
		//tagName: 'table',
		//className: 'table',
		
		initialize: function() {
			this.collection.on('add', this.addOnePhoto, this);
		},
		
		addOnePhoto: function(photo) {
			var photoView = new PhotoView({model: photo});
			this.$el.append(photoView.render().el);
		},
		
		render: function() {
			this.collection.each(this.addOnePhoto, this);
			return this;
		}	
	});
	
	return PhotoListView;
});
