package com.employeeApp.Backend;

import java.util.Arrays;
import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.TestContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import com.employeeApp.Backend.employee.Employee;
import com.employeeApp.Backend.employee.EmployeeRepository;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@ComponentScan(basePackages = { "com.employeeApp.Backend" })
public class EmployeeControlerTest {
	
	MockMvc mockMvc;
	
	@Autowired
	private EmployeeRepository EmpRepo;
	
	@Test
	public void testCreateEmployee() throws Exception{
		//Employee first=new Employee("Nixon","Cahyadi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian","people1.jpg");
		//Employee second=new Employee("Steven","Cahyadi","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","Bandung","Indonesian","people1.jpg");
		
	//	when(EmpRepo.findAll()).thenReturn(Arrays.asList(first,second));
		
		mockMvc.perform(get("/employee"))
			.andExpect(status().isOk());
		
		
	}
}
