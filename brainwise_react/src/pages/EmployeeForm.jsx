import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import api from "../utils/api";

const EmployeeForm = ({ isEditMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile_number: "",
    address: "",
    designation: "",
    company: "",
    department: "",
  });

  useEffect(() => {
    if (isEditMode) {
      api.get(`/employees/${id}/`)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => console.error("Error fetching employee:", err));
    }
  }, [id, isEditMode]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });

    if (name === "company") {
      setEmployee({ ...employee, company: value, department: "" }); // Reset department when changing company
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...employee,

    };

    if (isEditMode) {
      api.put(`/employees/${id}/`, payload)
        .then(() => navigate("/employees"))
        .catch((err) => console.error("Error updating employee:", err));
    } else {
      api.post("/employees/", payload)
        .then(() => navigate("/employees"))
        .catch((err) => console.error("Error creating employee:", err));
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {isEditMode ? "Edit Employee" : "Create Employee"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" value={employee.name} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" name="email" type="email" value={employee.email} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Mobile Number" name="mobile_number" value={employee.mobile_number} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Address" name="address" value={employee.address} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Designation" name="designation" value={employee.designation} onChange={handleChange} required sx={{ mb: 2 }} />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isEditMode ? "Update Employee" : "Create Employee"}
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeForm;
