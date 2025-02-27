// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';


const Sidebar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.heading}>BrainWarm</h2>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
            <Link
                to="/"
                style={{
                ...styles.link,
                ...(hoveredLink === 'dashboard' && styles.linkHover),
                }}
                onMouseEnter={() => setHoveredLink('dashboard')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Dashboard
            </Link>
        </li>
        <li style={styles.menuItem}>
          <Link
            to="/companies"
            style={{
              ...styles.link,
              ...(hoveredLink === 'companies' && styles.linkHover),
            }}
            onMouseEnter={() => setHoveredLink('companies')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Companies
          </Link>
        </li>
        <li style={styles.menuItem}>
            <Link
                to="/departments"
                style={{
                ...styles.link,
                ...(hoveredLink === 'departments' && styles.linkHover),
                }}
                onMouseEnter={() => setHoveredLink('branches')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Departments
            </Link>
        </li>
        <li style={styles.menuItem}>
            <Link
                to="/employees"
                style={{
                ...styles.link,
                ...(hoveredLink === 'employees' && styles.linkHover),
                }}
                onMouseEnter={() => setHoveredLink('employees')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Employees
            </Link>
        </li>
        <li
          style={styles.login}
        >
          <Button variant="outlined" href="/login"
            style={{
              ...styles.link
            }}
          >
            Login
          </Button>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  login: {
    marginTop: 'auto'
  },

  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#333',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    display: 'block',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#ddd',
  },
};

export default Sidebar;
