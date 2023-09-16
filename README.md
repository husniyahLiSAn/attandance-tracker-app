# Employee Attendance Tracker App

The Employee Attendance Tracker App is a web application built using [React](https://github.com/facebook/create-react-app) that allows you to keep track of employee attendance. This app provides a user-friendly interface to add employees, record their clock-in and clock-out times, and manage the employee list. This app for [bounty project](https://app.stackup.dev/bounty/javascript-intermediate-campaign-bounty) demonstrates the use of classes, switch statements, and try-catch-finally statements for structured and error-handling code.

## Table of Contents

- [Employee Attendance Tracker App](#employee-attendance-tracker-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Validation](#validation)
  - [Technologies Used](#technologies-used)
  - [Code Structure](#code-structure)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Author](#author)

## Features

The Employee Attendance Tracker App provides the following features, highlighting the use of classes, switch statements, and try-catch-finally statements:

1. **Real-time Clocking**: The app displays the current time on the user interface, updating it every second through an interval implemented using `setInterval`.

2. **Employee Management**: You can add new employees, view their attendance history, and delete employees. The app leverages classes to manage employee objects and attendance records.

3. **Clock In/Clock Out**: Track the clock-in and clock-out times for each employee. You can mark an employee as "Clock In" or "Clock Out" with a single click.

4. **Error Handling**: Robust error handling is implemented using try-catch statements to ensure that invalid input or actions are properly managed. Errors are displayed to the user via alerts.

## Validation

The Employee Attendance Tracker App implemented using try-catch-finally statements to ensure data integrity and a smooth user experience.

- **Employee Name Validation**: When adding a new employee, the app checks if the name is required, has a minimum length of 4 characters, does not contain numbers, and is not a duplicate.
    
- **Attendance Actions Validation**: Marking attendance (Clock In or Clock Out) is carefully validated to prevent errors, and relevant error messages are displayed. The app ensures that clock-in is disabled if an employee has already clocked in and vice versa. 

## Technologies Used
- **React.js**: The app is built using the React JavaScript library, allowing for a dynamic and responsive user interface.

- **JavaScript**: JavaScript is used for various functionalities, including time manipulation, input validation, and error handling.

- **CSS**: CSS styles are applied to create an appealing and organized user interface.

## Code Structure
- **App.js**: The main component that contains the application logic and state management.

- **Employee**: A class representing an employee, encapsulating their data and related methods.

## Getting Started

To get started with the Employee Attendance Tracker App, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Run `npm install` to install the necessary dependencies.

4. Run `npm start` to start the development server.

5. Open your web browser and visit `http://localhost:3000` to use the app.

## Usage

1. Enter the employee's name in the input field and click "Add" to add a new employee or can by enter. Ensure the name meets the validation criteria.

2. To record an employee's clock-in time, click the "Clock In" button next to their name. The button will be disabled once the employee has clocked in.

3. To record an employee's clock-out time, click the "Clock Out" button next to their name. The button will be disabled once the employee has clocked out.

4. To delete an employee from the list, click the "Delete" button  next to their name in the table. The employee will be removed from the list, and the IDs of the remaining employees will be updated automatically.

## Author

This Employee Attendance Tracker App was created by Lisa. You can find me on Twitter [@HLyza4](https://twitter.com/HLyza4). Feel free to reach out with any questions or feedback.
