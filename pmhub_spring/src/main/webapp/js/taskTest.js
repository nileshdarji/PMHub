
//---------------------------------------------------------------------------------
// Backbone Model
var Task = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/api/tasks/',
	
	validate: function(attrs) {
		console.log('Name: ' + attrs.name);
		if ( ! $.trim(attrs.name) ) {
			return 'A task requires a valid name';
		}
	}
});

//---------------------------------------------------------------------------------
// Backbone Collection
var TaskList = Backbone.Collection.extend({
	model: Task,
	url: 'http://localhost:8080/api/tasks/'

});


//---------------------------------------------------------------------------------
var TaskView = Backbone.View.extend({
	
	tagName: 'tr',
	template: _.template($('#taskTemplate').html()),
	
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	events: {
		'click .edit': 'editTask',
		'click .delete': 'deleteTask'
	},
	
	editTask: function() {
		var newTask = prompt ('Change task name to:', this.model.get('name'));
		
		//if ( ! newTask ) return;
		
		this.model.set('name', newTask, {validate:true});
		console.log(this.model.toJSON());
		
		this.model.save(null, {
			success: function() {
				console.log('Task updated');				
			},
			error: function() {
				console.log('Failed to update task');				
			}
		});

	
	},

	deleteTask: function() {

		console.log("Delete Project Clicked");
		console.log(this.model.toJSON());
		
		var task = new Task({id: this.model.get('id')});
		
		var self = this;
		task.destroy({
			success: function() {
				console.log('Task deleted');				
				self.model.destroy();
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

//---------------------------------------------------------------------------------
var TaskListView = Backbone.View.extend({
	
	tagName: 'table',
	className: 'table',
	
	initialize: function() {
		this.collection.on('add', this.addOneTask, this);
	},
	
	addOneTask: function(task) {
		var taskview = new TaskView({model: task});
		this.$el.append(taskview.render().el);
	},
	
	render: function() {
		this.collection.each(this.addOneTask, this);
		return this;
	}	
});

//---------------------------------------------------------------------------------
var AddTaskView = Backbone.View.extend({
	el: '#newTaskDiv',
	template: _.template($('#addTaskTemplate').html()),
	
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
		//var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
		var newTaskName = $("#newTask").val();
		console.log(newTaskName);
		
		var newTaskModel = new Task({name: newTaskName});
		
		var self = this;
		newTaskModel.save(null, {
	//		type: 'POST',			// Should not be necessary to specify POST her. It should happen automatically
			success: function() {
				console.log('Task added');				
				console.log(newTaskModel.toJSON());
				self.collection.add(newTaskModel);
				$("#newTask").val('');
			},
			error: function() {
				console.log('Failed to add task');				
			}
		});
		
	}
});

//---------------------------------------------------------------------------------

var task = new Task({
	title: 'Do something',
	priority: 4
});

var taskView = new TaskView({model: task});

console.log(taskView.render().el);

/*
var taskList = new TaskList([
	{
		title: 'Do something',
		priority: 4
	},
	{
		title: 'Meditate...',
		priority: 1
	},
	{
		title: 'Go to sleep',
		priority: 2
	}
]);
*/
		var taskList = new TaskList();
		
		taskList.fetch({
			success: function() {
				console.log('Got all tasks');				
				console.log(taskList.toJSON());
				
				var taskListView = new TaskListView({collection: taskList});
				$('.tasks').html(taskListView.render().el);

				var addTask = new AddTaskView({collection: taskList});				
				
				//console.log($('#projects-list-header'));
				//console.log(headerTemplate);
				//$("#container3").html(headerTemplate);				
				//var projectListView = new ProjectListView({collection: projectList});
				//$("#container2").html(projectListView.render().$el.html());		
			},
			error: function() {
				console.log('Failed to get tasks');				
			}
		});

//var taskListView = new TaskListView({collection: taskList});
//$('.tasks').html(taskListView.render().el);

//var addTask = new AddTaskView({collection: taskList});	// Pass collection to the new task model, if collection is not global

