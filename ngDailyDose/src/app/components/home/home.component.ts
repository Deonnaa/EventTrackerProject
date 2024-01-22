import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habit';
import { HabitService } from './../../services/habit.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  habits: Habit[] = [];

  constructor(
    private habitService: HabitService
  ){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadHabits();
  }

  loadHabits(){
    this.habitService.index().subscribe({
      next: (habitList) => {
        this.habits = habitList;
      },
      error: (err) => {
        console.error('HabitComponent.loadHabits: error getting habits');
      }
    });
  }

}
