export class Habit {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  frequency: string;
  completionCount: number;
  targetCount: number;
  failureCount: number;
  lastReset: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    startDate: string = '',
    endDate: string = '',
    frequency: string = '',
    completionCount: number = 0,
    targetCount: number = 0,
    failureCount: number = 0,
    lastReset: string = '',
    enabled: boolean = false,
    createdAt: string = '',
    updatedAt: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.frequency = frequency;
    this.completionCount = completionCount;
    this.targetCount = targetCount;
    this.failureCount = failureCount;
    this.lastReset = lastReset;
    this.enabled = enabled;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}
