
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
