package com.pmhub.controller;

import java.util.Arrays;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Query;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pmhub.dao.Project;

@RestController
@RequestMapping("/api")
public class ProjectController {

	// Get all projects
	@RequestMapping(value = "/projects/", method = RequestMethod.GET)
	public List<Project> getAllProjects(@AuthenticationPrincipal final UserDetails userDetails) {

		String userName = userDetails.getUsername();
        System.out.println("User " + userName);
		
        Session session = getSessionFactory2().openSession();
        @SuppressWarnings("unchecked")
        List<Project> projects = session.createQuery("FROM Project").list();
        session.close();
        System.out.println("Found " + projects.size() + " Projects");
        return projects;
		
	}

	// Add single project
	@RequestMapping(value = "/projects/", method = RequestMethod.POST)
	public Project createProject(@RequestBody Project project) {

        System.out.println("IN createProject");
        System.out.println(project.toString());
		
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();
                
        session.save(project);
        
        tx.commit();        
        session.close();
        System.out.println("Project saved");		
        return project;
	}
	
	// Get a single project
	@RequestMapping(value = "/projects/{id}", method = RequestMethod.GET)
	public Project getProject(@PathVariable("id") int id) {

        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();
        Project project = session.get(Project.class,id);
        tx.commit();        
        session.close();
        System.out.println("Found Project: " + project.toString());
        return project;		
	}
	
	// Update a single project based on ID
	@RequestMapping(value = "/projects/{id}", method = RequestMethod.PUT)
	public Project updateProject(@PathVariable("id") int id, @RequestBody Project project) {

        System.out.println("IN updateProject");
        System.out.println(project.toString());
		
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Project proj = session.get(Project.class,id);
        proj.setName(project.getName());
        proj.setDescription(project.getDescription());
        session.save(proj);
        
        tx.commit();        
        session.close();
        
        System.out.println("Updated Project: " + proj.toString());
        return proj;		
	}

	// Delete a single project based on ID
	@RequestMapping(value = "/projects/{id}", method = RequestMethod.DELETE)
	public Project deleteProject(@PathVariable("id") int id) {

        System.out.println("IN deleteProject");
		
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Project proj = session.get(Project.class,id);
        session.delete(proj);
        
        tx.commit();        
        session.close();
        
        System.out.println("Project Deleted: " + proj.toString());
        return proj;
	}
	
	
    public static SessionFactory getSessionFactory() {
        Configuration configuration = new Configuration().configure("hibernate/hibernate.cfg.xml");
        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder()
                .applySettings(configuration.getProperties());
        SessionFactory sessionFactory = configuration
                .buildSessionFactory(builder.build());
        return sessionFactory;
    }
    
    public static SessionFactory getSessionFactory2() {
    	
        Configuration configuration = new Configuration().configure("hibernate/hibernate.cfg.xml");
        configuration.addAnnotatedClass(Project.class);
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        
        return sessionFactory;
    }
}