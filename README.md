# Employee Management System

## Overview
This project is a Full Stack Employee Management System designed to manage companies, departments, and employees. It includes CRUD operations for these entities and implements token-based authentication.

## Features Implemented
### Backend
- **User Authentication**: Implemented token-based authentication using Django Rest Framework (DRF).
- **Models**:
  - User Accounts (User Name, Email, Role)
  - Company (Company Name, Number of Departments, Number of Employees)
  - Department (Company, Department Name, Number of Employees)
  - Employee (Company, Department, Employee Status, Name, Email, Mobile, Address, Designation, Hired On, Days Employed)
- **API Endpoints**:
  - Companies: CRUD operations
  - Departments: CRUD operations
  - Employees: CRUD operations
- **Validations & Business Logic**:
  - Validates required fields
  - Ensures email and mobile formats are correct
  - Automatically calculates the number of employees and departments in a company
  - Ensures departments belong to the selected company

### Frontend
- **React App**:
  - Basic UI setup
  - Dashboard (50% completed, displays count of companies, departments, and employees)
  - API integration (authentication issues exist, currently all endpoints are exposed)

## Features Not Completed
- **Role-based Access Control**: Not implemented
- **CSRF Protection in React Login**: Issues remain unresolved
- **Complete Dashboard**: Only basic counts implemented
- **Employee Workflow**: Not implemented in frontend
- **Error Handling and Frontend Validations**: Minimal implementation

## Setup Instructions
### Backend (Django)
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```
2. Create a virtual environment and install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Apply migrations:
   ```sh
   python manage.py migrate
   ```
4. Run the development server:
   ```sh
   python manage.py runserver
   ```

### Frontend (React)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Documentation
API endpoints follow RESTful conventions. Currently, there is no API documentation, but standard CRUD operations are implemented for:

Dashboard
```
GET /dashboard/ : Retrieve a dashboard statistics 
```

Company
```
GET /companies/: Retrieve a list of all companies.

GET /companies/{id}/: Retrieve details of a specific company.

POST /companies/: Create a new company.

PATCH /companies/{id}/: Update an existing company.

DELETE /companies/{id}/: Delete a company.
```

Departments
```
GET /departments/: Retrieve a list of all departments.

GET /departments/{id}/: Retrieve details of a specific department.

POST /departments/: Create a new department.

PATCH /departments/{id}/: Update an existing department.

DELETE /departments/{id}/: Delete a department.
```
Employees
```
GET /employees/: Retrieve a list of all employees.

GET /employees/{id}/: Retrieve details of a specific employee.

POST /employees/: Create a new employee.

PATCH /employees/{id}/: Update an existing employee.

DELETE /employees/{id}/: Delete an employee.
```

Authentication
```
POST /auth/login/: Login and obtain a JWT token.

POST /auth/logout/: Logout and invalidate the JWT token.
```


## Future Improvements
- Complete authentication and CSRF handling.
- Implement full role-based access control.
- Enhance frontend UI and validation.
- Improve API security and error handling.
- Add employee workflow feature.

## Submission Notes
While the main requirements have been implemented, certain features remain incomplete. The project demonstrates a working backend with authentication and CRUD operations, but frontend security and role-based access still need improvements.
