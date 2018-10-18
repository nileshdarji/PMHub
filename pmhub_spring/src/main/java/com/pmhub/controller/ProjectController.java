package com.pmhub.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Query;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import java.security.Principal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pmhub.dao.Project;
import com.pmhub.dao.HibernateUtil;

@RestController
@RequestMapping("/api")
public class ProjectController {

    final Logger logger = LoggerFactory.getLogger(ProjectController.class);
    
    private static SessionFactory sessionFactory;
	
	// Get all projects
	@RequestMapping(value = "/projects/", method = RequestMethod.GET)
	public List<Project> getAllProjects(@AuthenticationPrincipal final UserDetails userDetails,
			HttpServletRequest request) {

		String userName = userDetails.getUsername();
        System.out.println("User " + userName);
        
        System.out.println("request.getServletPath(): " + request.getServletPath());
        System.out.println("request.getRequestURL(): " + request.getRequestURL());
        System.out.println("request.getRequestURI(): " + request.getRequestURI());
        System.out.println("request.getContextPath(): " + request.getContextPath());
        System.out.println("request.getPathInfo(): " + request.getPathInfo());
        
        logger.info("Logger: Context Path {}", request.getContextPath());
        
        Session session = HibernateUtil.getSessionFactory().openSession();
        @SuppressWarnings("unchecked")
        List<Project> projects = session.createQuery("FROM Project").list();
        session.close();
        
        

Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
String username;

if (principal instanceof UserDetails) {
  username = ((UserDetails)principal).getUsername();
} else {
  username = principal.toString();
}
logger.info("Logger: User: ", username);        

        logger.info("Logger: Found {} projects", projects.size());        
        return projects;
		
	}

	// Add single project
	@RequestMapping(value = "/projects/", method = RequestMethod.POST)
	public Project createProject(@RequestBody Project project) {

        System.out.println("IN createProject");
        System.out.println(project.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
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

        Session session = HibernateUtil.getSessionFactory().openSession();
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
		
        Session session = HibernateUtil.getSessionFactory().openSession();
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
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Project proj = session.get(Project.class,id);
        session.delete(proj);
        
        tx.commit();        
        session.close();
        
        System.out.println("Project Deleted: " + proj.toString());
        return proj;
	}
}
