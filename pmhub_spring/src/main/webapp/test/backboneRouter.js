//---------------------------------------------------------------------------------
// Backbone Router
MyRouter = Backbone.Router.extend({
	routes:{
		"" : "projects",
		"projects" : "projects",
		"team" : "team"
	},
	
	projects: function(){
		// new ProjectsView();
		//alert("In Projects");
		//alert($("#container").text());
		$("#container").text("In Projects View");
	},

	team: function(){
		//new TeamView();
		//alert("In Team");
		//alert($("#container").text());
		$("#container").text("In Team View");
	}
});

var router = new MyRouter();
Backbone.history.start();
