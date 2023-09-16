# Employee Attendance Tracker App

The Employee Attendance Tracker App is a web application built using [React](https://github.com/facebook/create-react-app). It allows you to manage employee attendance, including adding employee, clocking in and out, delete employee, and viewing their attendance history. The app demonstrates the use of classes, switch statements, and try-catch-finally statements for structured and error-handling code.

## Table of Contents

- [Employee Attendance Tracker App](#employee-attendance-tracker-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Validation](#validation)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Author](#author)

## Features

The Employee Attendance Tracker App provides the following features, highlighting the use of classes, switch statements, and try-catch-finally statements:

1. **Employee Management**: You can add new employees, view their attendance history, and delete employees. The app leverages classes to manage employee objects and attendance records.
   
2. **Real-time Clocking**: The app displays the current time on the user interface, updating it every second through an interval implemented using `setInterval`.

## Validation

The Employee Attendance Tracker App implemented using try-catch-finally statements to ensure data integrity and a smooth user experience.

- **Employee Name Validation**: When adding a new employee, the app checks if the name is required, has a minimum length of 4 characters, does not contain numbers, and is not a duplicate.
    
- **Attendance Actions Validation**: Marking attendance (Clock In or Clock Out) is carefully validated to prevent errors, and relevant error messages are displayed. The app ensures that clock-in is disabled if an employee has already clocked in and vice versa. 

## Getting Started

To get started with the Employee Attendance Tracker App, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Run `npm install` to install the necessary dependencies.

4. Run `npm start` to start the development server.

5. Open your web browser and visit `http://localhost:3000` to use the app.

## Usage

1. Enter the employee's name in the input field and click "Add" to add a new employee or can by enter. Ensure the name meets the validation criteria.

2. To mark an employee's attendance, click the "Clock In" or "Clock Out" button in the table. The buttons are disabled as per the clock-in/clock-out status.

3. To delete an employee from the list, click the "Delete" button in the table.

## Author

This Employee Attendance Tracker App was created by Lisa ([@HLyza4](https://twitter.com/HLyza4)). Feel free to reach out with any questions or feedback.
