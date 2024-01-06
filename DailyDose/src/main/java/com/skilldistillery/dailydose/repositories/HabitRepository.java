package com.skilldistillery.dailydose.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dailydose.entities.Habit;

public interface HabitRepository extends JpaRepository<Habit, Integer> {

}
