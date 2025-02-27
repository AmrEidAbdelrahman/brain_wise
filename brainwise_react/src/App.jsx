// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CompanyList from './pages/CompanyList';
import EmployeeList from './pages/EmployeeList';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import DepartmentList from './pages/DepartmentList';
import CompanyDetail from './pages/CompanyDetail';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeForm from './pages/EmployeeForm';



function App() {



  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/new" element={<EmployeeForm isEditMode={false} />} />
          <Route path="/employees/edit/:id" element={<EmployeeForm isEditMode={true} />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
