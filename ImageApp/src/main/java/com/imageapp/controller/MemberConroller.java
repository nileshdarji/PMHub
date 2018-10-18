package com.imageapp.controller;

import java.util.Arrays;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.imageapp.dao.Member;
import com.imageapp.dao.HibernateUtil;

@RestController
@RequestMapping("/api")
public class MemberConroller {

	@RequestMapping(value = "/members/", method = RequestMethod.GET)
	public List<Member> getAllMembers() {
		
/*		return Arrays.asList(
				new Member(1, "Nilesh Darji", "nilesh.darji@gmail.com"),
				new Member(2, "Kris G", "kris@homeunion.com"),
				new Member(2, "Karthik", "karthik@homeunion.com")				
		); */
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        @SuppressWarnings("unchecked")
        List<Member> members = session.createQuery("FROM Member").getResultList();
        session.close();
        System.out.println("Found " + members.size() + " members");
        return members;		
	}


	// Add single member
	@RequestMapping(value = "/members/", method = RequestMethod.POST)
	public Member createMember(@RequestBody Member member) {

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
	@RequestMapping(value = "/members/{id}", method = RequestMethod.GET)
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
	@RequestMapping(value = "/members/{id}", method = RequestMethod.PUT)
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
	@RequestMapping(value = "/members/{id}", method = RequestMethod.DELETE)
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
 }