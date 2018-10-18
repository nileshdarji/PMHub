package com.pmhub.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.pmhub.dao.Project;

public class HibernateUtil {
    
    private static SessionFactory sessionFactory;
	    
    public static SessionFactory getSessionFactory() {
    	
    	if (sessionFactory == null) {
    		Configuration configuration = new Configuration().configure("hibernate/hibernate.cfg.xml");
    		configuration.addAnnotatedClass(Project.class)
    			.addAnnotatedClass(Member.class)
    			.addAnnotatedClass(Task.class);
    		sessionFactory = configuration.buildSessionFactory();
    	}
        return sessionFactory;
    }    
}

/* TRY NEXT TO AVOID specify all class names
SessionFactory sessionFactory = new LocalSessionFactoryBuilder(hikariDataSource())
        .scanPackages("com.animals.entities")
        .addProperties(properties)
        .buildSessionFactory(); 
 */
