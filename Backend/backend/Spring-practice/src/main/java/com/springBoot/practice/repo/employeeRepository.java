package com.springBoot.practice.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springBoot.practice.model.employees;

@Repository
public interface employeeRepository extends CrudRepository<employees,Integer>
{
	employees findByid(int id);
	
	List<employees> findByNameIgnoreCase(String name);
	
	List<employees> findByDepartmentIgnoreCase(String department);
	
	List<employees> findBySalary(double salary);
	
	List<employees> findBySalaryGreaterThanOrderBySalaryAsc(double salary);
	
	List<employees> findBySalaryLessThanOrderBySalaryDesc(double salary);

}
