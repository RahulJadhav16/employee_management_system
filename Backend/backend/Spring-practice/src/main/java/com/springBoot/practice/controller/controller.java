package com.springBoot.practice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springBoot.practice.model.employees;
import com.springBoot.practice.repo.employeeRepository;

@RestController
public class controller {
	@Autowired
	employeeRepository employeerepository;
	
	@GetMapping("/emplist")
    public List<employees> getAllEmployees() {
        return (List<employees>) employeerepository.findAll();
    }
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        // Authenticate the user and redirect to the default success URL
        return "redirect:/emplist";
    }
    
    @GetMapping("/byname/{name}")
    public List<employees> getEmployeesByname(@PathVariable String name)
    {
		return (List<employees>) employeerepository.findByNameIgnoreCase(name);
    	
    }
    
    @GetMapping("/byDept/{name}")
    public List<employees> getEmployeesByDept(@PathVariable String name)
    {
		return (List<employees>) employeerepository.findByDepartmentIgnoreCase(name);
    	
    }
    
    @GetMapping("/salaryGtr/{salary}")
    public List<employees> getEmployeesBySalry(@PathVariable Double salary)
    {
		return (List<employees>) employeerepository.findBySalaryGreaterThanOrderBySalaryAsc(salary);
    	
    }
    
    @GetMapping("/salaryLtn/{salary}")
    public List<employees> getEmployeessalary(@PathVariable Double salary)
    {
		return (List<employees>) employeerepository.findBySalaryLessThanOrderBySalaryDesc(salary);
    	
    }
    
    @GetMapping("/salary/{salary}")
    public List<employees> getEmployeesExctsalary(@PathVariable Double salary)
    {
		return (List<employees>) employeerepository.findBySalary(salary);
    	
    }
    
    
    
    
    
    
	
	@GetMapping("/get/{id}")
	public employees getEmployees(@PathVariable int id)
	{
		employees empobj=employeerepository.findByid(id);
		if(empobj==null)
		{
			System.out.println("Wrong id");
		}
		
		
		
		return empobj;
		
	}
	
	@PutMapping("/update/{id}")
	public employees updatEmployees(@RequestBody employees empobj,@PathVariable int id)
	{
		employees empobj2=employeerepository.findByid(id);
		empobj2.setName(empobj.getName());
		empobj2.setAge(empobj.getAge());
		
		employeerepository.save(empobj2);
		
		return empobj2;
		
		
	}
	
	@PostMapping("/create")
	public employees creatEmployees(@RequestBody employees emp)
	{
		employeerepository.save(emp);
		return emp;
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable int id)
	{
		employees obj=employeerepository.findByid(id);
		employeerepository.delete(obj);
		return "Record has beeen deleted";
		
	}

}
