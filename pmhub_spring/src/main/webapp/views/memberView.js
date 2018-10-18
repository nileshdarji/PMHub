//---------------------------------------------------------------------------------
define(['models/member', 'text!templates/memberList.html'], function (Member, MemberListTemplate) {
	
	var MemberView = Backbone.View.extend({
		
		tagName: 'tr',
		template: _.template(MemberListTemplate),
		
		initialize: function() {
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		},
		
		events: {
			'click .edit-member': 'editMember',
			'click .delete-member': 'deleteMember',
			'click .update-member': 'updateMember',
			'click .cancel-member': 'cancel'
		},
		
		editMember: function() {
			this.$('.edit-member').hide();
			this.$('.delete-member').hide();
			this.$('.update-member').show();
			this.$('.cancel-member').show();		
	
			var name = this.$('.name').html();		
			var email = this.$('.email').html();		
			this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
			this.$('.email').html('<input type="text" class="form-control email-update" value="' + email + '">');
		},
	
		updateMember: function() {
			this.model.set('name', $('.name-update').val(),  {validate:true});
			console.log(this.model.toJSON());
			
			this.model.save(null, {
				success: function() {
					console.log('Member updated');				
				},
				error: function() {
					console.log('Failed to update member');				
				}
			});
		},
		
		cancel: function() {
			this.render();
		},
		
		deleteMember: function() {
	
			console.log("Delete Member Clicked");
			console.log(this.model.toJSON());
			
			var member = new Member({id: this.model.get('id')});
			
			var self = this;
			self.model.destroy({
				success: function() {
					console.log('Member deleted');				
				},
				error: function() {
					console.log('Failed to delete task');				
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
