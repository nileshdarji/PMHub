package com.pmhub.controller;


import java.util.Arrays;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Query;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pmhub.dao.Task;
import com.pmhub.dao.HibernateUtil;

@RestController
@RequestMapping("/api")
public class TaskController {

	// Get all tasks
	@RequestMapping(value = "/tasks/", method = RequestMethod.GET)
	public List<Task> getAllTasks() {

        Session session = HibernateUtil.getSessionFactory().openSession();
        @SuppressWarnings("unchecked")
        List<Task> tasks = session.createQuery("FROM Task").list();
        session.close();
        System.out.println("Found " + tasks.size() + " Tasks");
        return tasks;
		
	}

	// Add single task
	@RequestMapping(value = "/tasks/", method = RequestMethod.POST)
	public Task createTask(@RequestBody Task task) {

        System.out.println("IN createTask");
        System.out.println(task.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
                
        session.save(task);
        
        tx.commit();        
        session.close();
        System.out.println("Task saved");		
        return task;
	}
	
	// Get a single task
	@RequestMapping(value = "/tasks/{id}", method = RequestMethod.GET)
	public Task getTask(@PathVariable("id") int id) {

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        Task task = session.get(Task.class,id);
        tx.commit();        
        session.close();
        System.out.println("Found Task: " + task.toString());
        return task;		
	}
	
	// Update a single task based on ID
	@RequestMapping(value = "/tasks/{id}", method = RequestMethod.PUT)
	public Task updateTask(@PathVariable("id") int id, @RequestBody Task task) {

        System.out.println("IN updateTask");
        System.out.println(task.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Task task2 = session.get(Task.class,id);
        task2.setName(task.getName());
        session.save(task2);
        
        tx.commit();        
        session.close();
        
        System.out.println("Updated Task: " + task2.toString());
        return task2;		
	}

	// Delete a single task based on ID
	@RequestMapping(value = "/tasks/{id}", method = RequestMethod.DELETE)
	public Task deleteTask(@PathVariable("id") int id) {

        System.out.println("IN deleteTask");
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Task task = session.get(Task.class,id);
        session.delete(task);
        
        tx.commit();        
        session.close();
        
        System.out.println("Task Deleted: " + task.toString());
        return task;
	}
}

