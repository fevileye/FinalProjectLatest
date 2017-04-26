package com.employeeApp.Backend;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	
	/*@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/employee")
	public Employee addNewEmployee(@RequestBody Employee employee){
		Employee newEmployee=employee;
		EmpRepo.save(newEmployee);
		return newEmployee;
	}
	*/
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/employee")
	public Employee addNewEmployee(@RequestParam String firstName,@RequestParam String lastName,@RequestParam String nationality, 
			@RequestParam String martialStatus,@RequestParam String phone,@RequestParam String subDivision,@RequestParam String suspendDate,
			@RequestParam String gender,@RequestParam String dateOfBirth, @RequestParam String hiredDate,@RequestParam String grade,
			@RequestParam String division,@RequestParam String email,@RequestParam String location,@RequestParam String status) throws ParseException{
		
		Date dob=dateFormat.parse(dateOfBirth);
		Date hod=dateFormat.parse(hiredDate);
		
		Employee newEmployee= new Employee(firstName,lastName,gender,dob,martialStatus,phone,division,status,suspendDate,hod,grade,subDivision,email,location,nationality);
		
		return EmpRepo.save(newEmployee);
	}
	
}
