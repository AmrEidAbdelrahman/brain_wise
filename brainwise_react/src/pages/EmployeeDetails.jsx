import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import api from "../utils/api";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    api.get(`/employees/${id}/`)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("Error fetching employee details:", error));
  }, [id]);

  if (!employee) {
    return <Typography variant="h6" sx={{ p: 3 }}>Loading employee details...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h4">{employee.name}</Typography>
          <Typography variant="body1" color="textSecondary">{employee.designation}</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Email:</strong> {employee.email}
          </Typography>
          <Typography variant="body2">
            <strong>Mobile:</strong> {employee.mobile_number}
          </Typography>
          <Typography variant="body2">
            <strong>Address:</strong> {employee.address}
          </Typography>
          <Typography variant="body2">
            <strong>Company:</strong> {employee.company.name}
          </Typography>
          <Typography variant="body2">
            <strong>Department:</strong> {employee.department.name}
          </Typography>
        </CardContent>
      </Card>

      {/* Back to Employee List Button */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/employees")}>
          Back to Employee List
        </Button>
      </Box>
    </Box>
  );
};

export default EmployeeDetails;
