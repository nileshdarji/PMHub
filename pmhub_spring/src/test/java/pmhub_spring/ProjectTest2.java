package pmhub_spring;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.pmhub.dao.Project;

public class ProjectTest2 {

	public static void main(String[] args) {

		SessionFactory sessionFactory = new Configuration()
										.configure("hibernate/hibernate.cfg.xml")
										.addAnnotatedClass(Project.class)
										.buildSessionFactory();
	}

}
