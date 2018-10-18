//-----------------------------------------------------------------------------------

define(['models/member','views/memberView', "text!templates/addMember.html"], 
		function (Member, MemberView, AddMemberTemplate) {

	var AddMemberView = Backbone.View.extend({
		el: '#newTaskDiv',
		template: _.template(AddMemberTemplate),
		
		events: {
			'submit': 'submit'
		},
		
		initialize: function() {
			console.log(this.el);
			this.$el.html(this.template);		
		},
	
		submit: function(e) {
			e.preventDefault();
			console.log('Submitted');
			var newMemberName = $("#memberName").val();
			var newMemberEmail = $("#memberEmail").val();
			console.log(newMemberName);
			console.log(newMemberEmail);
			
			var newMemberModel = new Member({name: newMemberName, email:newMemberEmail });
			
			var self = this;
			newMemberModel.save(null, {
				success: function() {
					console.log('Member added');				
					console.log(newMemberModel.toJSON());
					self.collection.add(newMemberModel);
					$("#memberName").val('');
					$("#memberEmail").val('');
				},
				error: function() {
					console.log('Failed to add member');				
				}
			});
		}
	});
	
	return AddMemberView;
});
