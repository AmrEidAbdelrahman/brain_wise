// src/pages/CompanyList.jsx
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import { CiTextAlignCenter } from 'react-icons/ci';
import { alignProperty } from '@mui/material/styles/cssUtils';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  console.log("CompanyList");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get('/companies/');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies </h1>
      <table style={styles.table }>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Departments</th>
            <th>Number of Employees</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>
                <Link to={`/companies/${company.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {company.name}
                </Link>
              </td>
              <td>{company.number_of_departments}</td>
              <td>{company.number_of_employees}</td>
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
    textAlign: 'center',

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

export default CompanyList;
