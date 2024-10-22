import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const UserProfile = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Card variant="outlined">
        <CardContent sx={{ textAlign: 'center' }}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 100, height: 100, margin: 'auto' }}>
            J
          </Avatar>
          <Typography variant="h4" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            johndoe@example.com
          </Typography>
          <Typography variant="body1">Phone: +1234567890</Typography>
          <Typography variant="body1">Address: 123 Main St, City, Country</Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
