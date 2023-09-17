# Employee Attendance Tracker App

## Overview
The Employee Attendance Tracker App is a web application built using [React](https://github.com/facebook/create-react-app) that allows you to manage and track the attendance of employees in a company or organization. This app provides a user-friendly interface to add employees, record their clock-in and clock-out times, manage the employee list, calculate total work hours, and export the attendance data to an Excel file. This app for [bounty project](https://app.stackup.dev/bounty/javascript-intermediate-campaign-bounty) demonstrates the use of classes, switch statements, and try-catch-finally statements for structured and error-handling code.

## Table of Contents

- [Employee Attendance Tracker App](#employee-attendance-tracker-app)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Implementation Details](#implementation-details)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Author](#author)

## Features

The Employee Attendance Tracker App provides the following features, highlighting the use of classes, switch statements, and try-catch-finally statements:

1. **Employee Management**
   - You can add new employees to the system by entering their names in the "Employee Name" input field and clicking the "Add" button.
   - The app provides validation for the employee name to ensure it meets certain criteria:
     - The name is required and must be entered.
     - The name must be at least 4 characters long.
     - The name must not contain any numbers.
     - The name must be unique; duplicate names are not allowed.
   - You can view their attendance history
   - You can delete employees. 
   - The app leverages classes to manage employee objects and attendance records. 
   
2. **Clock In and Clock Out**
   - For each employee, you can record their clock-in and clock-out times by clicking the "Clock In" and "Clock Out" buttons.
   - The app ensures that employees cannot clock in multiple times without clocking out first and vice versa.

3. **Calculate Total Work Hours**
   - The app calculates and displays the total work hours for each employee based on their clock-in and clock-out times.
   - The total work hours are shown in hours and minutes.

4. **Export to Excel**
   - You can export the attendance data to an Excel file by clicking the "Download Excel" button.
   - The exported Excel file includes columns for ID, Employee Name, Clock-In Time, Clock-Out Time, and Total Work Hours.
   - The file name includes the current date in the format "attendance_history_DD_MM_YYYY.xlsx."

5. **Real-time Clocking**: The app displays the current time on the user interface, updating it every second through an interval implemented using `setInterval`.

## Technologies Used
- **React.js**: The app is built using the React JavaScript library, allowing for a dynamic and responsive user interface.

- **JavaScript**: JavaScript is used for various functionalities, including time manipulation, input validation, and error handling.

- **CSS**: CSS styles are applied to create an appealing and organized user interface.

## Implementation Details
The app is implemented using React and includes the following key features:

- **Class-Based Components**: The app utilizes class-based components to manage state and handle user interactions.

- **Switch Statements**: Switch statements are used to handle different actions such as clocking in, clocking out, and marking attendance.

- **Try-Catch-Finally Statements**: Try-catch-finally blocks are used for error handling during employee addition and attendance marking. Errors are displayed as alerts and input fields are cleared in both success and error cases.

## Getting Started

To get started with the Employee Attendance Tracker App, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Run `npm install` to install the necessary dependencies.

4. Run `npm start` to start the development server.

5. Open your web browser and visit `http://localhost:3000` to use the app.

## Usage

1. Enter the employee's name in the input field and click "Add" to add a new employee or click enter on your keyboard. Ensure the name meets the validation criteria.

2. To record an employee's clock-in time, click the "Clock In" button next to their name. The button will be disabled once the employee has clocked in.

3. To record an employee's clock-out time, click the "Clock Out" button next to their name. The button will be disabled once the employee has clocked out.

4. To delete an employee from the list, click the "Delete" button  next to their name in the table. The employee will be removed from the list, and the IDs of the remaining employees will be updated automatically.

5. To download records from the database, click the "Download Excel" button. The button will be enabled once the table has data and disabled if the table is empty.

## Author

This Employee Attendance Tracker App was created by Lisa. You can find me on Twitter [@HLyza4](https://twitter.com/HLyza4) or on Discord `@husniyah.lisan`. Feel free to reach out with any questions or feedback.
