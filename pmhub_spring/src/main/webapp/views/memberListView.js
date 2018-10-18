//---------------------------------------------------------------------------------
define(['collections/memberList','views/memberView'], function (MemberList, MemberView) {
	
	var MemberListView = Backbone.View.extend({
		
		tagName: 'table',
		className: 'table',
		
		initialize: function() {
			this.collection.on('add', this.addOneMember, this);
		},
		
		addOneMember: function(member) {
			var memberView = new MemberView({model: member});
			this.$el.append(memberView.render().el);
		},
		
		render: function() {
			this.collection.each(this.addOneMember, this);
			return this;
		}	
	});
	
	return MemberListView;
});
