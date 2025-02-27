// src/components/Layout.jsx
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
 
  return (
    <div style={styles.container}>

      <Sidebar />
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',

  },
  content: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
};

export default Layout;
