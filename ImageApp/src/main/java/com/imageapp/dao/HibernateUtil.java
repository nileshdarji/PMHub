package com.imageapp.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.imageapp.dao.Member;
import com.imageapp.dao.ListingPhotoLink;

public class HibernateUtil {
    
    private static SessionFactory sessionFactory;
	    
    public static SessionFactory getSessionFactory() {
    	
    	if (sessionFactory == null) {
    		Configuration configuration = new Configuration().configure("hibernate/hibernate.cfg.xml");
    		configuration.addAnnotatedClass(Member.class)
    			.addAnnotatedClass(ListingPhotoLink.class);
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
