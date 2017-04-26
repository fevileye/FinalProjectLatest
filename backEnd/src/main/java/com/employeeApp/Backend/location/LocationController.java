package com.employeeApp.Backend.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {

	@Autowired
	LocationRepository LocRep;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/location")
	public Iterable<Location> getLocation(){
		return LocRep.findAll();
	}
	
}
