package com.employeeApp.Backend;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{

	public Employee findByEmpid(@Param("empid") long id);
	@Transactional
	public Long deleteByEmpid(long id); 
}
