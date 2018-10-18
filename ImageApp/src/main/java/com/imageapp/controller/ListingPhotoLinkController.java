package com.imageapp.controller;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.imageapp.dao.ListingPhotoLink;
import com.imageapp.dao.HibernateUtil;

@RestController
@RequestMapping("/api")
public class ListingPhotoLinkController {

	@RequestMapping(value = "/photos/", method = RequestMethod.GET)
	public List<ListingPhotoLink> getAllPhotos() {
				
        Session session = HibernateUtil.getSessionFactory().openSession();
        @SuppressWarnings("unchecked")
        
        Query q = session.createQuery("FROM ListingPhotoLink");
    	//q.setFirstResult(1);
    	q.setMaxResults(20);
        List<ListingPhotoLink> photos = q.getResultList();
        
        session.close();
        System.out.println("Found " + photos.size() + " photos");
        return photos;		
	}

	@RequestMapping(value = "/photos/getone", method = RequestMethod.GET)
	public List<ListingPhotoLink> getOnePhoto() {
				
        Session session = HibernateUtil.getSessionFactory().openSession();
        @SuppressWarnings("unchecked")
        
        Query q = session.createQuery("FROM ListingPhotoLink WHERE photo_folder_id is null and isdeleted = 0");
    	q.setFirstResult(1);
    	q.setMaxResults(1);
        List<ListingPhotoLink> photos = q.getResultList();
  /*      
        query = ("select photoid, tblproperty_propertyid, large_link, original_link, date_created "
                "from properties.tbllistingphotolink where photo_folder_id is null and isdeleted = 0 "
                "and tagged = 'N' order by date_created desc limit 1")        
                
  .createQuery("FROM Customer AS c WHERE c.dateAdded BETWEEN :stDate AND :edDate ")
.setParameter("stDate", frmDate)
.setParameter("edDate", enDate)
  
  */     
        session.close();
        System.out.println("Found " + photos.size() + " photos");
        return photos;		
	}
	
/*
	// Add single member
	@RequestMapping(value = "/photos/", method = RequestMethod.POST)
	public ListingPhotoLink createMember(@RequestBody ListingPhotoLink member) {

        System.out.println("IN createMember");
        System.out.println(member.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
                
        session.save(member);
        
        tx.commit();        
        session.close();
        System.out.println("Member saved");		
        return member;
	}
	
	// Get a single member
	@RequestMapping(value = "/photos/{id}", method = RequestMethod.GET)
	public Member getMember(@PathVariable("id") int id) {

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        Member member = session.get(Member.class,id);
        tx.commit();        
        session.close();
        System.out.println("Found Member: " + member.toString());
        return member;		
	}
	
	// Update a single member based on ID
	@RequestMapping(value = "/photos/{id}", method = RequestMethod.PUT)
	public Member updateMember(@PathVariable("id") int id, @RequestBody Member member) {

        System.out.println("IN updateMember");
        System.out.println(member.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Member member2 = session.get(Member.class,id);
        member2.setName(member.getName());
        session.save(member2);
        
        tx.commit();        
        session.close();
        
        System.out.println("Updated Member: " + member2.toString());
        return member2;		
	}

	// Delete a single member based on ID
	@RequestMapping(value = "/photos/{id}", method = RequestMethod.DELETE)
	public Member deleteMember(@PathVariable("id") int id) {

        System.out.println("IN deleteMember");
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Member member = session.get(Member.class,id);
        session.delete(member);
        
        tx.commit();        
        session.close();
        
        System.out.println("Member Deleted: " + member.toString());
        return member;
	}
	
*/
 }