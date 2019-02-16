//---------------------------------------------------------------------------------
define(['models/photo', 'text!templates/photoList.html'], function (Photo, PhotoListTemplate) {
	
	var MemberView = Backbone.View.extend({
		
		tagName: 'table',
		template: _.template(PhotoListTemplate),
		
		initialize: function() {
			//this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
			//this.listenTo(this.model, 'change', this.render);
		},
		
		events: {
			'click .update-member': 'updateMember'
		},
			
		updateMember: function() {
			this.model.set('frontView', $('#frontView').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('backyard', $('#backyard').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('kitchen', $('#kitchen').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('bathroom', $('#bathroom').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('bedroom', $('#bedroom').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('livingroom', $('#livingroom').is(':checked') ? 1 : 0,  {validate:true});

			this.model.set('familyroom', $('#familyroom').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('backview', $('#backview').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('topview', $('#topview').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('exterior', $('#exterior').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('stairs', $('#stairs').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('laundry', $('#laundry').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('dining', $('#dining').is(':checked') ? 1 : 0,  {validate:true});
			this.model.set('closet', $('#closet').is(':checked') ? 1 : 0,  {validate:true});
			
			console.log(this.model.toJSON());
			
			this.model.save(null, {
				success: function() {
					console.log('Photo updated');
					location.reload();
				},
				error: function() {
					console.log('Failed to update photo');				
				}
			});
		},
				
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		
		remove: function() {
			this.$el.remove();
		}
	});
	
	return MemberView;
});
