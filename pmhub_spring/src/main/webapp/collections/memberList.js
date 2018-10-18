//---------------------------------------------------------------------------------
// Backbone Collection for Members
//---------------------------------------------------------------------------------

define(['backbone', 'models/member'], function (Backbone, Member) {
	
	var MemberList = Backbone.Collection.extend({
		model: Member,
		url: 'http://localhost:8082/api/members/'
	});

	return MemberList;
});
