package com.employeeApp.Backend;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.employeeApp.Backend.employee.EmployeeRepository;
import com.employeeApp.Backend.location.LocationRepository;
import com.employeeApp.Backend.employee.Employee;
import com.employeeApp.Backend.location.Location;



@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private LocationRepository locRepository;
	
	@Bean
	public CommandLineRunner printAll(ApplicationContext ctx){
		List<Employee> tempEmployeeList=new ArrayList<Employee>();
		List<Location> tempLocationList=new ArrayList<Location>();
		return args->{
			tempEmployeeList.add(new Employee("Nixon","Cahyadi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Budi","Steven","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Jakarta","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Santi","Dewi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Semarang","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Astri","Sari","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Pontianak","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Asun","Pranata","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Maya","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Kendari","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Bayu","Christin","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","NTT","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Bagus","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Papua","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("John","Cahaya","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Papua","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Johnathan","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Palembang","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Stephen","Purnama","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Lampung","Indonesian","profilePicture.png"));
			tempEmployeeList.add(new Employee("Ardi","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Jakarta","Indonesian","profilePicture.png"));
			repository.save(tempEmployeeList);
			tempLocationList.add(new Location(1,"Jakarta"));
			tempLocationList.add(new Location(2,"Bandung"));
			tempLocationList.add(new Location(3,"Bali"));
			tempLocationList.add(new Location(4,"Yogyakarta"));
			locRepository.save(tempLocationList);
		};
	}
}
