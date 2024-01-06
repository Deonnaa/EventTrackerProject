package com.skilldistillery.dailydose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.dailydose.entities.Habit;
import com.skilldistillery.dailydose.repositories.HabitRepository;

@Service
public class HabitServiceImpl implements HabitService {

	@Autowired
	private HabitRepository habitRepo;

	@Override
	public List<Habit> getAllHabits() {
		return habitRepo.findAll();
	}

	@Override
	public Habit getHabit(int habitId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Habit create(Habit habit) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Habit update(int habitId, Habit habit) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int habitId) {
		// TODO Auto-generated method stub
		return false;
	}

}
