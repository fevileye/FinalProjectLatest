package com.employeeApp.Backend.employee;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.mail.Multipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class EmployeeController {
	SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-mm-dd");
	
	@Autowired 
	private EmployeeRepository EmpRepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping ("/employee")
	public Iterable<Employee> displayEmployee(){
		return EmpRepo.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping ("/employee/{id}")
	public Employee employeeBasedOnId(@PathVariable long id){
		
		return EmpRepo.findByEmpid(id);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("employee/{id}")
	public Long deleteEmployeeBasedOnId(@PathVariable long id){
		return EmpRepo.deleteByEmpid(id);
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/employee")
	public Employee addNewEmployee(@RequestParam(required=false) String empid,@RequestParam String firstName,@RequestParam String lastName,@RequestParam String nationality, 
			@RequestParam String martialStatus,@RequestParam String phone,@RequestParam String subDivision,@RequestParam String suspendDate,
			@RequestParam String gender,@RequestParam String dateOfBirth, @RequestParam String hiredDate,@RequestParam String grade,
			@RequestParam String division,@RequestParam String email,@RequestParam String location,@RequestParam String status,@RequestParam(required=false) MultipartFile photo) throws ParseException, IOException{
		
		Date dob=dateFormat.parse(dateOfBirth);
		Date hod=dateFormat.parse(hiredDate);
		Employee newEmployee;
		String UploadRoot="./../EmployeeApp/src/Sources";
		String fileName=null;
		
		try{
			if (photo!=null){
				fileName=photo.getOriginalFilename();
				Files.copy(photo.getInputStream(), Paths.get(UploadRoot,fileName));
			}else if(empid==null && photo==null){
				fileName="profilePicture.png";
			}
			
			
			
		}catch(IOException e){
			e.printStackTrace();
		}
			
			
		if (empid!=null)
		{
		 Employee tempEmployee=EmpRepo.findByEmpid(Long.parseLong(empid));
		 new File(UploadRoot+"/"+tempEmployee.getImage()).getAbsoluteFile().delete();
		 newEmployee= new Employee(Long.parseLong(empid),firstName,lastName,gender,dob,martialStatus,phone,subDivision,status,suspendDate,hod,grade,division,email,location,nationality,fileName);
		}else
		{
		 newEmployee= new Employee(firstName,lastName,gender,dob,martialStatus,phone,subDivision,status,suspendDate,hod,grade,division,email,location,nationality,fileName);	
		}
		
		
		return EmpRepo.save(newEmployee);
	}
	
}
