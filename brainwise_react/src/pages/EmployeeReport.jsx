// src/pages/EmployeeReport.jsx
import { useEffect, useState } from 'react';
import api from '../utils/api';

const EmployeeReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await api.get('/employee-report/');
        setReport(response.data);
      } catch (error) {
        console.error('Error fetching employee report:', error);
      }
    };
    fetchReport();
  }, []);

  return (
    <div>
      <h1>Employee Report</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Position</th>
            <th>Hired On</th>
            <th>Days Employed</th>
            <th>Company</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {report.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile_number}</td>
              <td>{employee.designation}</td>
              <td>{employee.hired_on}</td>
              <td>{employee.days_employed}</td>
              <td>{employee.company_name}</td>
              <td>{employee.department_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeReport;
