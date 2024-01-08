package com.skilldistillery.dailydose.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dailydose.entities.Habit;

public interface HabitRepository extends JpaRepository<Habit, Integer> {
	
	List<Habit> findByEnabledTrue();

}
