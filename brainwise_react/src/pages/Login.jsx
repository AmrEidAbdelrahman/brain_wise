import { useState } from "react";
import { TextField, Button, Typography, Container, Box, Card, CardContent, CircularProgress, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from '../utils/api';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login/", credentials);

      localStorage.setItem("token", response.data.access);

      navigate("/");

    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" minHeight="100vh" alignItems="center">
        <Card sx={{ width: "100%", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Welcome Back
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField fullWidth label="Email" variant="outlined" name="email" type="email" value={credentials.email} onChange={handleChange} margin="normal" required />
              <TextField fullWidth label="Password" variant="outlined" name="password" type="password" value={credentials.password} onChange={handleChange} margin="normal" required />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
