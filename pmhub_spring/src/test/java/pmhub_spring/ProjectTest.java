package pmhub_spring;

import java.util.List;

import org.hibernate.Transaction;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

import com.pmhub.dao.Project;

public class ProjectTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//addProject();
		// readProject(1);
		deleteProject(1);
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
    
    public static void readProjects() {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        @SuppressWarnings("unchecked")
        List<Project> projects = session.createQuery("FROM Project").list();
        tx.commit();
        session.close();
        System.out.println("Found " + projects.size() + " Projects");    	
    }

    public static void readProject(int id) {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Project proj = session.get(Project.class, id);
        proj.setDescription("Project to develope Embrace backend system");		
        tx.commit();
        session.close();
        
        System.out.println("Found " + proj.toString());    	
    } 
    
    public static void addProject() {
    	
    	Project proj = new Project(4, "Maps", "Maps Project");
    	
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        session.save(proj);
        
        tx.commit();
        session.close();
    }
    
    public static void deleteProject(int id) {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Project proj = session.get(Project.class, id);
        session.delete(proj);
        
        tx.commit();
        session.close();
        
        System.out.println("Project deteled");    	
    } 
    
    
}
