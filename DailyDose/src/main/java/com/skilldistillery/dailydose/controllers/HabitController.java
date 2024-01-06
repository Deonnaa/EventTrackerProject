package com.skilldistillery.dailydose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.dailydose.entities.Habit;
import com.skilldistillery.dailydose.services.HabitService;

@RestController
@RequestMapping("api")
public class HabitController {

	@Autowired
	private HabitService habitService;

//	@GetMapping("ping")
//	public String ping() {
//		return "pong";
//	}

	@GetMapping("habits")
	public List<Habit> index() {
		List<Habit> habits = habitService.getAllHabits();
		return habits;
	}

}
