package com.imageapp.dao;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbllistingphotolink",  catalog="properties")
public class ListingPhotoLink {

	@Id
	@Column(name = "photoid", columnDefinition="char(38)")
	private String photoId;

	@Column(name="tagged", columnDefinition="char(1)")
	private String tagged;
	
	@Column(name="date_tagged")
	private Timestamp dateTagged;

	@Column(name="front_view", columnDefinition="SMALLINT")
	private int frontView;

	@Column(name="backyard", columnDefinition="SMALLINT")
	private int backyard;

	@Column(name="kitchen", columnDefinition="SMALLINT")
	private int kitchen;

	@Column(name="bathroom", columnDefinition="SMALLINT")
	private int bathroom;

	@Column(name="bedroom", columnDefinition="SMALLINT")
	private int bedroom;
	
	@Column(name="livingroom", columnDefinition="SMALLINT")
	private int livingroom;	
	
	public ListingPhotoLink() {
		
	}

	public String getPhotoId() {
		return photoId;
	}

	public void setPhotoId(String photoId) {
		this.photoId = photoId;
	}

	public String getTagged() {
		return tagged;
	}

	public void setTagged(String tagged) {
		this.tagged = tagged;
	}

	public Timestamp getDateTagged() {
		return dateTagged;
	}

	public void setDateTagged(Timestamp dateTagged) {
		this.dateTagged = dateTagged;
	}

	public int getFrontView() {
		return frontView;
	}

	public void setFrontView(int frontView) {
		this.frontView = frontView;
	}

	public int getBackyard() {
		return backyard;
	}

	public void setBackyard(int backyard) {
		this.backyard = backyard;
	}

	public int getKitchen() {
		return kitchen;
	}

	public void setKitchen(int kitchen) {
		this.kitchen = kitchen;
	}

	public int getBathroom() {
		return bathroom;
	}

	public void setBathroom(int bathroom) {
		this.bathroom = bathroom;
	}

	public int getBedroom() {
		return bedroom;
	}

	public void setBedroom(int bedroom) {
		this.bedroom = bedroom;
	}

	public int getLivingroom() {
		return livingroom;
	}

	public void setLivingroom(int livingroom) {
		this.livingroom = livingroom;
	}

	public ListingPhotoLink(String photoId, String tagged, Timestamp dateTagged, int frontView, int backyard, int kitchen,
			int bathroom, int bedroom, int livingroom) {
		super();
		this.photoId = photoId;
		this.tagged = tagged;
		this.dateTagged = dateTagged;
		this.frontView = frontView;
		this.backyard = backyard;
		this.kitchen = kitchen;
		this.bathroom = bathroom;
		this.bedroom = bedroom;
		this.livingroom = livingroom;
	}

}
