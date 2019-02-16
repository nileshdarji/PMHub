package com.imageapp.controller;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.Transaction;
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
        
        Query q = session.createQuery("FROM ListingPhotoLink WHERE photo_folder_id IS NULL AND isdeleted = 0 AND tagged = \'N\' ORDER BY date_created DESC");
    	q.setFirstResult(1);
    	q.setMaxResults(1);
        List<ListingPhotoLink> photos = q.getResultList();
        
        session.close();
        System.out.println("Found " + photos.size() + " photos");
        return photos;		
	}

	// Get a single photo
	@RequestMapping(value = "/photos/{id}", method = RequestMethod.GET)
	public ListingPhotoLink getPhoto(@PathVariable("id") String id) {

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        ListingPhotoLink photo = session.get(ListingPhotoLink.class, id);
        tx.commit();        
        session.close();
        System.out.println("Found photo: " + photo.toString());
        return photo;		
	}

	// Update a single photo based on ID
	@RequestMapping(value = "/photos/{id}", method = RequestMethod.PUT)
	public ListingPhotoLink updatephoto(@PathVariable("id") String id, @RequestBody ListingPhotoLink photo) {

        System.out.println("IN updatePhoto");
        System.out.println(photo.toString());
		
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        ListingPhotoLink photo2 = session.get(ListingPhotoLink.class,id);
        photo2.setTagged("Y");
        photo2.setDateTagged(new Timestamp(System.currentTimeMillis()));
        photo2.setFrontView(photo.getFrontView());
        photo2.setBackyard(photo.getBackyard());
        photo2.setKitchen(photo.getKitchen());
        photo2.setBathroom(photo.getBathroom());
        photo2.setBedroom(photo.getBedroom());
        photo2.setLivingroom(photo.getLivingroom());

        photo2.setFamilyroom(photo.getFamilyroom());
        photo2.setBackview(photo.getBackview());
        photo2.setTopview(photo.getTopview());
        photo2.setExterior(photo.getExterior());
        photo2.setStairs(photo.getStairs());
        photo2.setLaundry(photo.getLaundry());
        photo2.setDining(photo.getDining());
        photo2.setCloset(photo.getCloset());
        
        session.save(photo2);
        
        tx.commit();        
        session.close();
        
        System.out.println("Updated Photo: " + photo2.toString());
        return photo2;		
	}
 }




/*      
query = ("select photoid, tblproperty_propertyid, large_link, original_link, date_created "
        "from properties.tbllistingphotolink where photo_folder_id is null and isdeleted = 0 "
        "and tagged = 'N' order by date_created desc limit 1")        
        
.createQuery("FROM Customer AS c WHERE c.dateAdded BETWEEN :stDate AND :edDate ")
.setParameter("stDate", frmDate)
.setParameter("edDate", enDate)
*/