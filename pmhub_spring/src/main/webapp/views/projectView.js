// Backbone View for one project

define(['models/project', 'text!templates/projectList.html'], function (Project, ProjectListTemplate) {
	var ProjectView = Backbone.View.extend({
		tagName: 'tr',
		//el: 'tr',
		className: 'project',
		//template: _.template($('#projects-list-template').html()),
		template: _.template(ProjectListTemplate),
		
		
		initialize: function() {
			//console.log('In Initialize function of ProjectView');
		},
		
		events: {
			//'click': 'showAlert',
			'click .edit-project': 'edit',
			'click .update-project': 'update',
			'click .cancel': 'cancel',
			'click .delete-project': 'delete'
		},
		
		showAlert: function(){
			alert("Clicked somewhere");
		},
		
		edit: function() {
			alert("Edit Clicked");
			this.$('.edit-project').hide();
			this.$('.delete-project').hide();
			this.$('.update-project').show();
			this.$('.cancel').show();		
			
			var id = this.$('.id').html();
			var name = this.$('.name').html();
			var description = this.$('.description').html();
	
			this.$('.id').html('<input type="text" class="form-control id-update" value="' + id + '">');
			this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
			this.$('.description').html('<input type="text" class="form-control description-update" value="' + description + '">');
		},
		
		update: function() {
			this.model.set('id', $('.id-update').val());
			this.model.set('name', $('.name-update').val());
			this.model.set('description', $('.description-update').val());
			
			projectsView.render();
		},
		
		cancel: function() {
			projectsView.render();
		},
		
		delete: function() {
			console.log('Delete Project Clicked');
			this.model.destroy();
		},
		
		render: function() {
			//console.log('In render function of ProjectView');
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}		
	});
	
	return ProjectView;
});


/*

// Test code to define single project model and display in container2 element
var project = new Project({id: 1, name: 'Embrace', description: 'Embrace Project'});
var projectView = new ProjectView({model: project});
$("#container2").html(projectView.render().$el.html());


// Test code to define project list model and display in container2 element
var projectList = new ProjectList([
	{id: 1, name: 'Embrace', description: 'Embrace Project'},
	{id: 2, name: 'IDX', description: 'IDX Project'},
	{id: 3, name: 'IP', description: 'Investor Portal'}
]);

var projectListView = new ProjectListView({model: projectList});
$("#container2").html(projectListView.render().$el.html());

*/





/*
//---------------------------------------------------------------------------------
// Backbone View for one project
var ProjectView = Backbone.View.extend({
	model: new Project(),
	tagName: 'tr',

	initialize: function() {
		//this.template = _.template($('#projects-list-template').html());
		this.template = "<p><span class="name"><%= name %></span></p>";
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var projectView = new ProjectView();		


var ProjectsView = Backbone.View.extend({
	model: new Projects(),

	render: function(){
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(project) {
			self.$el.append(new ProjectView({model: project}).render().$el);
		});
		return this;
	}	
});

var projectsView = new ProjectsView();
*/

/*

var ProjectView = Backbone.View.extend({
	model: new Project(),
	tagName: 'tr',
	
	events: {
		'click .edit-project': 'edit',
		'click .update-project': 'update',
		'click .cancel': 'cancel',
		'click .delete-project': 'delete'
	},
	edit: function() {
		this.$('.edit-project').hide();
		this.$('.delete-project').hide();
		this.$('.update-project').show();
		this.$('.cancel').show();		
		
		var id = this.$('.id').html();
		var name = this.$('.name').html();
		var description = this.$('.description').html();

		this.$('.id').html('<input type="text" class="form-control id-update" value="' + id + '">');
		this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
		this.$('.description').html('<input type="text" class="form-control description-update" value="' + description + '">');
	},
	update: function() {
		this.model.set('id', $('.id-update').val());
		this.model.set('name', $('.name-update').val());
		this.model.set('description', $('.description-update').val());
		
		projectsView.render();
	},	
	cancel: function() {
		projectsView.render();
	},		
	delete: function() {
		this.model.destroy();
	},		
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var ProjectsView = Backbone.View.extend({
	model: projects,
	el: $('.project-list'),

	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('update', this.render, this);
		this.model.on('remove', this.render, this);
		
		this.model.fetch({
			success: function(response){
				_.each(response.toJSON(), function(item) {
					console.log('Successfully gor project with id');
				});
			}
		});
	},
	render: function(){
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(project) {
			self.$el.append(new ProjectView({model: project}).render().$el);
		});
		return this;
	}	
});



$(document).ready(function() {
	$('.add-project').on('click', function() {
		var project = new Project({
			id: $('.id-input').val(),
			name: $('.name-input').val(),
			description: $('.description-input').val()
		});
		
		$('.id-input').val('');
		$('.name-input').val('');
		$('.description-input').val('');
		
		console.log(project.toJSON());
		projects.add(project);
		
		project.save(null, {
			success: function() {
				console.log('Saved project with ID ' + response.toJSON()._id);
			},
			error: function() {
				console.log('Failed to saved project');				
			}
		});
	});
});

*/

