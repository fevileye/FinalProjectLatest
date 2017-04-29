package com.employeeApp.Backend.employee;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.employeeApp.Backend.location.Location;

@Entity
@Table(name="t_employee")
public class Employee {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long empid;
	@Column(name="first_name",nullable=false)
	private String firstName;
	@Column (name="last_name", nullable=false)
	private String lastName;
	@Column (name="gender", nullable=false)
	private String gender;
	@Column (name="date_of_birth",nullable=false)
	private Date dateOfBirth;
	@Column (name="martial_status", nullable=false)
	private String martialStatus;
	@Column (name="phone", nullable=false)
	private String phone;
	@Column (name="sub_division", nullable=false)
	private String subDivision;
	@Column (name="status",nullable=false)
	private String status;
	@Column (name="suspend_date",nullable=false)
	private String suspendDate;
	@Column (name="hired_date",nullable=false)
	private Date hiredDate;
	@Column (name="grade",nullable=false)
	private String grade;
	@Column (name="division", nullable=false)
	private String division;
	@Column (name="email",nullable=false)
	private String email;
	@ManyToOne
	@JoinColumn(name="locId")
	private Location location;
	@Column (name="nationality",nullable=false)
	private String nationality;
	@Column (name="image",nullable=false)
	private String image;
	
	public Employee(){}
	
	public Employee (String firstName, String lastName, String gender, Date dateOfBirth,String martial_status, String phone, String subDivision,String status, String suspendDate, Date hiredDate, String grade, String division,String email,Location location,String nationality,String image){
		this.firstName=firstName;
		this.lastName=lastName;
		this.gender=gender;
		this.dateOfBirth=dateOfBirth;
		this.martialStatus=martial_status;
		this.phone=phone;
		this.subDivision=subDivision;
		this.status=status;
		this.suspendDate=suspendDate;
		this.hiredDate=hiredDate;
		this.grade=grade;
		this.division=division;
		this.email=email;
		this.location=location;
		this.nationality=nationality;
		this.image=image;
	}
	
	public Employee (long empid,String firstName, String lastName, String gender, Date dateOfBirth,String martial_status, String phone, String subDivision,String status, String suspendDate, Date hiredDate, String grade, String division,String email,Location location,String nationality,String image){
		this.empid=empid;
		this.firstName=firstName;
		this.lastName=lastName;
		this.gender=gender;
		this.dateOfBirth=dateOfBirth;
		this.martialStatus=martial_status;
		this.phone=phone;
		this.subDivision=subDivision;
		this.status=status;
		this.suspendDate=suspendDate;
		this.hiredDate=hiredDate;
		this.grade=grade;
		this.division=division;
		this.email=email;
		this.location=location;
		this.nationality=nationality;
		this.image=image;
	}
	
	public long getEmpid() {
		return empid;
	}
	public void setEmpid(long empid) {
		this.empid = empid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getMartialStatus() {
		return martialStatus;
	}
	public void setMartialStatus(String martial_status) {
		this.martialStatus = martial_status;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSubDivision() {
		return subDivision;
	}
	public void setSubDivision(String subDivision) {
		this.subDivision = subDivision;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSuspendDate() {
		return suspendDate;
	}
	public void setSuspendDate(String suspendDate) {
		this.suspendDate = suspendDate;
	}
	public Date getHiredDate() {
		return hiredDate;
	}
	public void setHiredDate(Date hiredDate) {
		this.hiredDate = hiredDate;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}

	
}

