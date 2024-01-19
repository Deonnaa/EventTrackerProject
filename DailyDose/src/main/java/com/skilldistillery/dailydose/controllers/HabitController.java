package com.skilldistillery.dailydose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.dailydose.entities.Habit;
import com.skilldistillery.dailydose.services.HabitService;

import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin({ "*", "http://localhost/" })
@RestController
@RequestMapping("api")
public class HabitController {

	@Autowired
	private HabitService habitService;

	// List<Habit> GET api/habits
	@GetMapping("habits")
	public List<Habit> index() {
		// List<Habit> habits = habitService.getAllHabits();
		List<Habit> habits = habitService.getEnabledHabits();
		return habits;
	}

	// Post GET api/habits/{id}
	@GetMapping("habits/{id}")
	public Habit getHabitById(@PathVariable("id") int id, HttpServletResponse response) {
		Habit habit = habitService.getHabit(id);
		if (habit == null) {
			response.setStatus(404);
		}
		return habit;
	}

	// Post POST api/habits
	@PostMapping("habits")
	public Habit addHabit(@RequestBody Habit habit, HttpServletResponse response) {
		try {
			habit = habitService.create(habit);
			if (habit != null) {
				response.setStatus(201);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			habit = null;
		}
		return habit;
	}

	// Post PUT api/habits/{id}
	@PutMapping("habits/{id}")
	public Habit updateHabit(@PathVariable("id") int id, @RequestBody Habit habit, HttpServletResponse response) {
		try {
			habit = habitService.update(id, habit);
			if (habit == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return habit;
	}

	// void DELETE api/habits/{id}
	@DeleteMapping("habits/{id}")
	public void deleteHabit(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			if (habitService.deleteById(id)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}

}
