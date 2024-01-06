package com.skilldistillery.dailydose.services;

import java.util.List;

import com.skilldistillery.dailydose.entities.Habit;

public interface HabitService {

	List<Habit> getAllHabits();
	Habit getHabit(int habitId);
	Habit create(Habit habit);
	Habit update(int habitId, Habit habit);
	boolean deleteById(int habitId);
	// Search Features

}
