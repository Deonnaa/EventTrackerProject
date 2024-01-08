# EventTrackerProject

## About the Author
Hi, I'm Deonna, a passionate coding student and the creator of this Java program. I'm on an exciting journey to learn and explore the world of programming!

- **Location:** United States of America
- **Learning:** Java Programming, SQL, Spring Boot
- **GitHub:** [Deonna's GitHub Profile](https://github.com/Deonnaa)
- **LinkedIn:** [Deonna's LinkedIn Profile](https://www.linkedin.com/in/deonna-aponte-506a3318b/)

Habit Tracker - DailyDose is a Spring Boot-driven web application that helps users track and maintain their daily habits. This project demonstrates my proficiency in using Spring Boot, JPA (Java Persistence API), and RESTful services. The application is designed to be intuitive and user-friendly, encouraging users to stay committed to their personal goals. Feel free to dive into the code, explore, and connect with me for any insights or discussions!

## Key Features
- Track Habits: Users can add, view, update, and delete habits they want to track.

- Habit Analytics: The application provides insights into habit frequency, completion, and consistency.

- User-Friendly Interface: Designed with simplicity in mind, ensuring a seamless user experience.
Dynamic Updates: Real-time updates on habit tracking and progress.

## How to Use
1. Clone or download the Java files from the repository.
2. Run the application using a compatible IDE like Eclipse or IntelliJ IDEA.
3. Access the application through a web browser or REST client like Postman.
4. Navigate through the application to create and manage your daily habits.

## Technologies Used
- Spring Boot
- JPA and Hibernate
- MySQL Database
- Java 1.8
- JUnit 5
- RESTful Web Services
- Deployed on Amazon EC2

## Lessons Learned
- Spring Boot Application Development: Leveraging Spring Boot for rapid application development.
- RESTful Service Design: Creating and consuming RESTful services for data management.
- Data Persistence: Utilizing JPA and Hibernate for efficient data handling and persistence.
- User-Centric Design: Focusing on user experience and interface design.
- Unit Testing: Implementing JUnit tests to ensure application reliability and robustness.

## Usage Examples
`Add a New Habit`

Input: Habit details (e.g., 'Exercise', '30 mins daily')
Output: Habit successfully added and tracked.

`View Habit Progress`

Input: Select a habit to view
Output: Detailed view of habit progress, including completion and consistency metrics.

## API Endpoints
| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|--------------|
| GET       | /api/habits       | None         | List of habits| 200 OK       |
| GET       | /api/habits/{id}  | None         | Single habit  | 200 OK, 404 Not Found |
| POST      | /api/habits       | Habit data   | Created habit | 201 Created, 400 Bad Request |
| PUT       | /api/habits/{id}  | Updated data | Updated habit | 200 OK, 404 Not Found, 400 Bad Request |
| DELETE    | /api/habits/{id}  | None         | None          | 204 No Content, 404 Not Found |




