
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

