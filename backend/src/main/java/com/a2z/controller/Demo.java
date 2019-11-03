package com.a2z.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Demo {

	@GetMapping("/auth/demo")
	public String getDemo() {
		return "YEs";
	}

	@GetMapping("/demo1")
	public String getDemo1() {
		return "no!!!";
	}

}
