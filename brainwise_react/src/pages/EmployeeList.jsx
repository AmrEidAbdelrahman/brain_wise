import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box, Typography } from "@mui/material";
import api from "../utils/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/employees/")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h4">Employees</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/employees/new")}>
          + Create Employee
        </Button>
      </Box>

      {/* Employee Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>Name</strong></TableCell>
              <TableCell align="center"><strong>Department</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell align="center">{emp.name}</TableCell>
                <TableCell align="center">{emp.department.name}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => navigate(`/employees/${emp.id}`)} variant="contained" color="primary" size="small">View</Button>
                  <Button onClick={() => navigate(`/employees/edit/${emp.id}`)} variant="contained" color="warning" size="small" sx={{ mx: 1 }}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeList;
