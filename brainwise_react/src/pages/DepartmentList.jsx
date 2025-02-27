// src/pages/BranchList.jsx
import { useEffect, useState } from 'react';
import api from '../utils/api';

const BranchList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await api.get('/departments/');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Departments</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Number of Employees</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.name}</td>
              <td>{branch.company.name}</td>
              <td>{branch.number_of_employees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default BranchList;
