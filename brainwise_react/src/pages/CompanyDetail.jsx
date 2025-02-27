import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, CircularProgress, Card, CardContent, List, ListItem , Link} from "@mui/material";
import api from "../utils/api";

const CompanyDetail = () => {
  const { id } = useParams(); // Get company ID from URL
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await api.get(`/companies/${id}`);
        setCompany(response.data);
      } catch (err) {
        setError(err.response?.data?.detail || "Failed to load company details");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ mb: 3, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>{company.name}</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {company.description}
          </Typography>

          {/* Additional Details */}
          <Typography variant="body2">
            <strong>📍 Address:</strong> {company.address || "N/A"}
          </Typography>
          <Typography variant="body2">
            <strong>📧 Email:</strong> {company.email ? (
              <Link href={`mailto:${company.email}`} underline="hover">
                {company.email}
              </Link>
            ) : "N/A"}
          </Typography>
          <Typography variant="body2">
            <strong>📞 Contact:</strong> {company.contact || "N/A"}
          </Typography>
          <Typography variant="body2">
            <strong>🌐 Website:</strong> {company.website ? (
              <Link href={company.website} target="_blank" rel="noopener noreferrer" underline="hover">
                {company.website}
              </Link>
            ) : "N/A"}
          </Typography>
        </CardContent>
      </Card>

      {/* Departments Section */}
      <Card sx={{ mb: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Departments</Typography>
          <List>
            {company.departments.length === 0 && <Typography color="textSecondary">No departments yet</Typography>}
            {company.departments.map((department) => (
              <ListItem key={department.id}>
                <Box>
                  <Typography variant="h6">{department.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{department.description}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Employees Section */}
      <Card sx={{ boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Employees</Typography>
          <List>
            {company.employees.length === 0 && <Typography color="textSecondary">No employees yet</Typography>}
            {company.employees.map((employee) => (
              <ListItem key={employee.id}>
                <Box>
                  <Typography variant="h6">{employee.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{employee.role}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CompanyDetail;
