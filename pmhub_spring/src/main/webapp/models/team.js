
//---------------------------------------------------------------------------------
// Backbone Model
var Team = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		description: ''
	}
});

//---------------------------------------------------------------------------------
// Backbone Collection
var Teams = Backbone.Collection.extend({url: 'http://localhost:8082/teams'});

//var teams = new Teams([team1, team2]);
var teams = new Teams();

//---------------------------------------------------------------------------------
// Backbone View for one team
var TeamView = Backbone.View.extend({
	model: new Team(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.teams-list-template').html());
	},
	events: {
		'click .edit-team': 'edit',
		'click .update-team': 'update',
		'click .cancel': 'cancel',
		'click .delete-team': 'delete'
	},
	edit: function() {
		this.$('.edit-team').hide();
		this.$('.delete-team').hide();
		this.$('.update-team').show();
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
		
		teamsView.render();
	},	
	cancel: function() {
		teamsView.render();
	},		
	delete: function() {
		this.model.destroy();
	},		
	render: function(){
		// this.$el.html(this.template({model: this.model.toJSON()}));
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var TeamsView = Backbone.View.extend({
	model: teams,
	el: $('.team-list'),

	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('update', this.render, this);
		this.model.on('remove', this.render, this);
		
		this.model.fetch({
			success: function(response){
				_.each(response.toJSON(), function(item) {
					console.log('Successfully gor team with id');
				});
			}
		});		
	},
	render: function(){
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(team) {
			self.$el.append(new TeamView({model: team}).render().$el);
		});
		return this;
	}	
});

var teamsView = new TeamsView();

$(document).ready(function() {
	$('.add-team').on('click', function() {
		var team = new Team({
			id: $('.id-input').val(),
			name: $('.name-input').val(),
			description: $('.description-input').val()
		});
		
		$('.id-input').val('');
		$('.name-input').val('');
		$('.description-input').val('');
		
		console.log(team.toJSON());
		teams.add(team);
	});
});



