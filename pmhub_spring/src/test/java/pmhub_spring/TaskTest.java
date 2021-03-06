package pmhub_spring;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.pmhub.dao.Task;

public class TaskTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//add();
		//readAll();
		//readUpdateOne(2);
		delete(2);
	}

    public static SessionFactory getSessionFactory2() {
    	
        Configuration configuration = new Configuration().configure("hibernate/hibernate.cfg.xml");
        configuration.addAnnotatedClass(Task.class);
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        
        return sessionFactory;
    }	
    
    public static void readAll() {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        @SuppressWarnings("unchecked")
        List<Task> tasks = session.createQuery("FROM Task").list();
        tx.commit();
        session.close();
        System.out.println("Found " + tasks.size() + " tasks");    	
    }

    public static void readUpdateOne(int id) {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Task task = session.get(Task.class, id);
        task.setName("Task to develope Embrace backend system");		
        tx.commit();
        session.close();
        
        System.out.println("Found " + task.toString());    	
    } 
    
    public static void add() {
    	
    	Task task = new Task(4, "Maps Project task", 1);
    	
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        session.save(task);
        
        tx.commit();
        session.close();
    }
    
    public static void delete(int id) {
        Session session = getSessionFactory2().openSession();
        Transaction tx = session.beginTransaction();

        Task task = session.get(Task.class, id);
        session.delete(task);
        
        tx.commit();
        session.close();
        
        System.out.println("Task deteled");    	
    } 
    	
}
