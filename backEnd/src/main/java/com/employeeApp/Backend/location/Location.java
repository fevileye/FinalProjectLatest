package com.employeeApp.Backend.location;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_location")
public class Location {
	@Id
	@Column(name="loc_id",nullable=false)
	private long locId;
	@Column(name="loc_name",nullable=false)
	private String locName;
	
	public Location(){}
	
	public Location(long locId,String locName){
		this.locId=locId;
		this.locName=locName;
	}
	
	public long getLocId() {
		return locId;
	}
	public void setLocId(long locId) {
		this.locId = locId;
	}
	public String getLocName() {
		return locName;
	}
	public void setLocName(String locName) {
		this.locName = locName;
	}
}
