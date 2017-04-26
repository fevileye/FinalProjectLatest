package com.employeeApp.Backend;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Autowired
	private EmployeeRepository repository;
	
	@Bean
	public CommandLineRunner printAll(ApplicationContext ctx){
		List<Employee> tempEmployeeList=new ArrayList<Employee>();
		return args->{
			tempEmployeeList.add(new Employee("Nixon","Cahyadi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Budi","Steven","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Jakarta","Indonesian"));
			tempEmployeeList.add(new Employee("Santi","Dewi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Semarang","Indonesian"));
			tempEmployeeList.add(new Employee("Astri","Sari","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Pontianak","Indonesian"));
			tempEmployeeList.add(new Employee("Asun","Pranata","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Maya","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Kendari","Indonesian"));
			tempEmployeeList.add(new Employee("Bayu","Christin","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","NTT","Indonesian"));
			tempEmployeeList.add(new Employee("Bagus","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Papua","Indonesian"));
			tempEmployeeList.add(new Employee("John","Cahaya","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Papua","Indonesian"));
			tempEmployeeList.add(new Employee("Johnathan","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Palembang","Indonesian"));
			tempEmployeeList.add(new Employee("Stephen","Purnama","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Lampung","Indonesian"));
			tempEmployeeList.add(new Employee("Ardi","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Jakarta","Indonesian"));
			repository.save(tempEmployeeList);
		};
	}
}
