package com.imageapp.dao;

import java.sql.Timestamp;

import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;

@Entity
@Table(name = "tbllistingphotolink",  catalog="properties")
public class ListingPhotoLink {

	@Id
	@Column(name = "photoid", columnDefinition="char(38)")
	private String photoId;

	@Column(name="original_link", columnDefinition="String")
	private String originalLink;
	
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
	
	
	@Column(name="familyroom", columnDefinition="SMALLINT")
	private int familyroom;

	@Column(name="back_view", columnDefinition="SMALLINT")
	private int backview;
	  
	@Column(name="top_view", columnDefinition="SMALLINT")
	private int topview;
	  
	@Column(name="exterior", columnDefinition="SMALLINT")
	private int exterior;

	@Column(name="stairs", columnDefinition="SMALLINT")
	private int stairs;
	  
	@Column(name="laundry", columnDefinition="SMALLINT")
	private int laundry;
	  
	@Column(name="dining", columnDefinition="SMALLINT")
	private int dining;
	  
	@Column(name="closet", columnDefinition="SMALLINT")
	private int closet;
	  
	
	public ListingPhotoLink() {
		
	}

	public String getPhotoId() {
		return photoId;
	}

	public void setPhotoId(String photoId) {
		this.photoId = photoId;
	}

	public String getOriginalLink() {
		return "https://d88poozc391um.cloudfront.net/" + originalLink;
	}

	public void setOriginalLink(String originalLink) {
		this.originalLink = originalLink;
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

	public int getFamilyroom() {
		return familyroom;
	}

	public void setFamilyroom(int familyroom) {
		this.familyroom = familyroom;
	}

	public int getBackview() {
		return backview;
	}

	public void setBackview(int backview) {
		this.backview = backview;
	}

	public int getTopview() {
		return topview;
	}

	public void setTopview(int topview) {
		this.topview = topview;
	}

	public int getExterior() {
		return exterior;
	}

	public void setExterior(int exterior) {
		this.exterior = exterior;
	}

	public int getStairs() {
		return stairs;
	}

	public void setStairs(int stairs) {
		this.stairs = stairs;
	}

	public int getLaundry() {
		return laundry;
	}

	public void setLaundry(int laundry) {
		this.laundry = laundry;
	}

	public int getDining() {
		return dining;
	}

	public void setDining(int dining) {
		this.dining = dining;
	}

	public int getCloset() {
		return closet;
	}

	public void setCloset(int closet) {
		this.closet = closet;
	}

	public ListingPhotoLink(String photoId, String originalLink, String tagged, Timestamp dateTagged, int frontView,
			int backyard, int kitchen, int bathroom, int bedroom, int livingroom, int familyroom, int backview,
			int topview, int exterior, int stairs, int laundry, int dining, int closet) {
		super();
		this.photoId = photoId;
		this.originalLink = originalLink;
		this.tagged = tagged;
		this.dateTagged = dateTagged;
		this.frontView = frontView;
		this.backyard = backyard;
		this.kitchen = kitchen;
		this.bathroom = bathroom;
		this.bedroom = bedroom;
		this.livingroom = livingroom;
		this.familyroom = familyroom;
		this.backview = backview;
		this.topview = topview;
		this.exterior = exterior;
		this.stairs = stairs;
		this.laundry = laundry;
		this.dining = dining;
		this.closet = closet;
	}

	@Override
	public String toString() {
		return "ListingPhotoLink [photoId=" + photoId + ", originalLink=" + originalLink + ", tagged=" + tagged
				+ ", dateTagged=" + dateTagged + ", frontView=" + frontView + ", backyard=" + backyard + ", kitchen="
				+ kitchen + ", bathroom=" + bathroom + ", bedroom=" + bedroom + ", livingroom=" + livingroom
				+ ", familyroom=" + familyroom + ", backview=" + backview + ", topview=" + topview + ", exterior="
				+ exterior + ", stairs=" + stairs + ", laundry=" + laundry + ", dining=" + dining + ", closet=" + closet
				+ "]";
	}
}
