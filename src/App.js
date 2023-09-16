import React, { Component } from 'react';
import './App.css';

// Employee class to encapsulate employee data
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name
      .split(' ')
      .map((word) => this.capitalizeFirstLetter(word))
      .join(' ');
    this.clockIn = '';
    this.clockOut = '';
    this.isClockInDisabled = false;
    this.isClockOutDisabled = true;
  }

  // Method to capitalize the first letter of a string
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      currentEmployee: '',
      currentTime: '',
      isClockInDisabled: false,
      isClockOutDisabled: true,
    };
  }

  componentDidMount() {
    // Set an interval to update the current time every second
    this.intervalID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalID);
  }

  // Function to update the current time
  updateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    this.setState({ currentTime });
  };

  // Function to handle input field changes
  handleInputChange = (event) => {
    this.setState({ currentEmployee: event.target.value });
  };

  // Function to add a new employee
  addEmployee = () => {
    const { currentEmployee, employees } = this.state;

    try {
      // Validation: Check if the employee name is empty
      if (currentEmployee.trim() === '') {
        throw new Error("The employee name is required. It must be entered.");
      }

      // Validation: Check if the employee name has at least 4 characters
      if (currentEmployee.trim().length < 4) {
        throw new Error("The employee name must be at least 4 characters.");
      }

      // Validation: Check if the employee name contains numbers
      if (/\d/.test(currentEmployee)) {
        throw new Error("The employee name must not contain a number.");
      }

      // Validation: Check if the employee name already exists
      if (employees.some((employee) => employee.name.toLowerCase() === currentEmployee.toLowerCase())) {
        throw new Error("The employee name already exists.");
      }

      const newEmployee = new Employee(employees.length + 1, currentEmployee);
      employees.push(newEmployee);

      this.setState({
        employees,
        currentEmployee: '',
      });
    } catch (error) {
      alert(error.message);
    }
    finally {
      // Clear the input field in both success and error cases
      this.setState({ currentEmployee: '' });
    }
  };

  // Function to mark attendance (Clock In or Clock Out)
  markAttendance = (index, status) => {
    const { employees, currentTime } = this.state;
    const employee = employees[index];

    try {
      switch (status) {
        case 'Clock In':
          if (employee.isClockInDisabled) {
            throw new Error("Employee has already clocked in.");
          }
          employee.clockIn = currentTime;
          employee.isClockInDisabled = true;
          employee.isClockOutDisabled = false;
          break;
        case 'Clock Out':
          if (employee.isClockOutDisabled) {
            throw new Error("Employee has already clocked out.");
          }
          employee.clockOut = currentTime;
          employee.isClockInDisabled = true;
          employee.isClockOutDisabled = true;
          break;
        default:
          throw new Error("Invalid status.");
      }

      this.setState({
        employees,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // Function to delete an employee
  deleteEmployee = (index) => {
    const { employees } = this.state;
    employees.splice(index, 1);

    // Update the IDs of the remaining employees
    employees.forEach((employee, i) => {
      employee.id = i + 1;
    });

    this.setState({
      employees,
    });
  };

  render() {
    const {
      currentEmployee,
      employees,
      currentTime,
    } = this.state;

    return (
      <div className="App">
        <h1>Employee Attendance Tracker App</h1>
        <div className="current-time">Current Time: {currentTime}</div>

        <div className="container">
          <div className="form">
            <h2>Add Employee</h2>
            <input
              type="text"
              placeholder="Employee Name"
              value={currentEmployee}
              onChange={this.handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.addEmployee();
                }
              }}
            />
            <button onClick={this.addEmployee}>Add</button>
          </div>
        </div>

        <div className="attendance-list">
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Clock In</th>
                <th>Clock Out</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.clockIn || 'Not Clocked In'}</td>
                  <td>{employee.clockOut || 'Not Clocked Out'}</td>
                  <td>
                    <button
                      onClick={() => this.markAttendance(index, 'Clock In')}
                      disabled={employee.isClockInDisabled}
                    >
                      Clock In
                    </button>
                    <button
                      onClick={() => this.markAttendance(index, 'Clock Out')}
                      disabled={employee.isClockOutDisabled}
                    >
                      Clock Out
                    </button>
                    <button onClick={() => this.deleteEmployee(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer>
          Created by Lisa - <a href="https://twitter.com/HLyza4" target="_blank" rel="noopener noreferrer">@HLyza4</a>
        </footer>
      </div>
    );
  }
}

export default App;
