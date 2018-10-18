//---------------------------------------------------------------------------------
define(['models/task', 'text!templates/taskList.html'], function (Task, TaskListTemplate) {
	
	var TaskView = Backbone.View.extend({
		
		tagName: 'tr',
//		template: _.template($('#taskTemplate').html()),
		template: _.template(TaskListTemplate),
		
		initialize: function() {
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		},
		
		events: {
			'click .edit-task': 'editTask',
			'click .delete-task': 'deleteTask',
			'click .update-task': 'updateTask',
			'click .cancel-task': 'cancel'
		},
		
		editTask: function() {
			this.$('.edit-task').hide();
			this.$('.delete-task').hide();
			this.$('.update-task').show();
			this.$('.cancel-task').show();		
	
			var name = this.$('.name').html();		
			this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
		},
	
		updateTask: function() {
			this.model.set('name', $('.name-update').val(),  {validate:true});
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
		
		cancel: function() {
			this.render();
		},
		
		deleteTask: function() {
	
			console.log("Delete Project Clicked");
			console.log(this.model.toJSON());
			
			var task = new Task({id: this.model.get('id')});
			
			var self = this;
//			task.destroy({
			self.model.destroy({
				success: function() {
					console.log('Task deleted');				
					//self.model.destroy();
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
	
	return TaskView;
});
