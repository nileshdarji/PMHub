package com.pmhub.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Entity
@Table(name = "tbl_members")
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name="organization_id")
	private int organizationId;

	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;

	@Column(name="password")
	private String password;

	@Column(name = "isdeleted", columnDefinition="SMALLINT")
	private int isDeleted;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="date_created")
	private Date dateCreated;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="date_modified")
	private Date dateModified;

	@Column(name = "created_by", columnDefinition="String")
	private int createdBy;

	@Column(name = "modified_by", columnDefinition="String")
	private int modifiedBy;
	
	public Member() {
		
	}

	public Member(int id, int organizationId, String name, String email, String password) {
		super();
		this.id = id;
		this.organizationId = organizationId;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(int isDeleted) {
		this.isDeleted = isDeleted;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Date getDateModified() {
		return dateModified;
	}

	public void setDateModified(Date dateModified) {
		this.dateModified = dateModified;
	}

	public int getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(int createdBy) {
		this.createdBy = createdBy;
	}

	public int getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(int modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	@Override
	public String toString() {
		return "Member [id=" + id + ", organizationId=" + organizationId + ", name=" + name + ", email=" + email
				+ ", password=" + password + ", isDeleted=" + isDeleted + ", dateCreated=" + dateCreated
				+ ", dateModified=" + dateModified + ", createdBy=" + createdBy + ", modifiedBy=" + modifiedBy + "]";
	}
	
}
