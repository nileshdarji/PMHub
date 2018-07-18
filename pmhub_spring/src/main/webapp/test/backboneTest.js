//---------------------------------------------------------------------------------
// Backbone Model
var Project = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		description: ''
	},
	urlRoot : 'http://localhost:8080/api/projects/'
});

//---------------------------------------------------------------------------------
// Backbone Collection
var Projects = Backbone.Collection.extend({url: 'http://localhost:8080/api/projects/'});

//var projects = new Projects([project1, project2]);
var projects = new Projects();  



// Read all projects - Example of model.fetch
// Sends GET request to the URL: http://localhost:8080/api/projects/
$("#all").on("click", function(){
	console.log("Get All Projects Clicked");
	projects.fetch({
		success: function() {
			console.log('Got all projects');				
			console.log(projects.toJSON());
		},
		error: function() {
			console.log('Failed to get projects');				
		}
	});
});


// Add new projects - Example of model.save
// Sends POST request to the URL: http://localhost:8080/api/projects/
$("#add").on("click", function(){
	console.log("Add Project Clicked");
	var project = new Project({id: null, name: $('.name-input').val(), description: $('.description-input').val()});
	project.save(null, {
//		type: 'POST',			// Should not be necessary to specify POST her. It should happen automatically
		success: function() {
			console.log('Project added');				
			console.log(project.toJSON());
		},
		error: function() {
			console.log('Failed to add project');				
		}
	});
});

// Read one project - Example of model.fetch
// Sends GET request to the URL: http://localhost:8080/api/projects/{id}
$("#one").on("click", function(){
	console.log("Read One Project Clicked");
	var project = new Project({id: $('.id-input').val()});
	project.fetch({
		success: function() {
			console.log('Got the project');				
			console.log(project.toJSON());
			$('.name-input').val(project.get('name'));
			$('.description-input').val(project.get('description'));
		},
		error: function() {
			console.log('Failed to get the project');				
		}
	});
});

// Update an existing project - Example of model.save
// Sends POST request to the URL: http://localhost:8080/api/projects/{id}
$("#update").on("click", function(){
	console.log("Update Project Clicked");
	var project = new Project({id: $('.id-input').val(), name: $('.name-input').val(), description: $('.description-input').val()});
	project.save(null, {
//		type: 'PUT',			// Should not be necessary to specify PUT her. It should happen automatically
		success: function() {
			console.log('Project updated');				
			console.log(project.toJSON());
		},
		error: function() {
			console.log('Failed to update project');				
		}
	});
});

// Delete an existing project - Example of model.save
// Sends DELETE request to the URL: http://localhost:8080/api/projects/{id}
$("#delete").on("click", function(){
	console.log("Delete Project Clicked");
	var project = new Project({id: $('.id-input').val()});
	project.destroy({
		success: function() {
			console.log('Project deleted');				
		},
		error: function() {
			console.log('Failed to delete project');				
		}
	});
});

