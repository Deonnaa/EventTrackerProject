package com.skilldistillery.dailydose.services;

import java.util.List;
import java.util.Optional;

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
		Optional<Habit> habitOpt = habitRepo.findById(habitId);
		return habitOpt.orElse(null);
	}

	@Override
	public Habit create(Habit habit) {
		habit.setEnabled(true);
		return habitRepo.saveAndFlush(habit);
	}

	@Override
	public Habit update(int habitId, Habit habit) {
		if (habitRepo.existsById(habitId)) {
			habit.setId(habitId);
			return habitRepo.save(habit);
		}
		return null;
	}

	@Override
	public boolean deleteById(int habitId) {
		if (habitRepo.existsById(habitId)) {
			habitRepo.deleteById(habitId);
			return true;
		}
		return false;
	}

	@Override
	public List<Habit> getEnabledHabits() {
		return habitRepo.findByEnabledTrue();
	}

}
