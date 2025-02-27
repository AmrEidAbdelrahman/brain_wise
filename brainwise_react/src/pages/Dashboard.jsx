import { useEffect, useState } from "react";
import { Box, Grid, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import api from "../utils/api";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/dashboard/");
        setStats(response.data);
      } catch (err) {
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      {/* Top Statistics Cards */}
      <Grid container spacing={3}>
        <StatCard title="Employees" count={stats.employees} color="#4caf50" />
        <StatCard title="Departments" count={stats.departments} color="#ff9800" />
        <StatCard title="Companies" count={stats.companies} color="#2196f3" />
      </Grid>

      {/* Bottom Sections */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <RecentActivities activities={stats.recentActivities} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatisticsCharts data={stats} />
        </Grid>
      </Grid>
    </Box>
  );
};

/* Statistic Card Component */
const StatCard = ({ title, count, color }) => (
  <Grid item xs={12} sm={4}>
    <Card sx={{ boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" sx={{ color }}>{count}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

/* Placeholder for Recent Activities */
const RecentActivities = ({ activities }) => (
  <Card sx={{ boxShadow: 2 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>Recent Activities</Typography>
      {activities?.length === 0 ? (
        <Typography color="textSecondary">No recent activities</Typography>
      ) : (
        activities?.map((activity, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            {activity}
          </Typography>
        ))
      )}
    </CardContent>
  </Card>
);

/* Placeholder for Charts */
const StatisticsCharts = ({ data }) => (
  <Card sx={{ boxShadow: 2 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>Statistics Overview</Typography>
      <Typography color="textSecondary">Charts will be here</Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
