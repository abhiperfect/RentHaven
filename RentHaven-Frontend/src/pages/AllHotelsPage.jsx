import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { blue } from '@mui/material/colors';

const hotelsData = [
  { name: "Hotel One", description: "A lovely hotel in the city center." },
  { name: "Hotel Two", description: "A budget-friendly hotel with great amenities." },
  { name: "Hotel Three", description: "Luxury accommodation with a pool." },
];

const AllHotels = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        All Hotels
      </Typography>
      <Grid container spacing={4}>
        {hotelsData.map((hotel, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" sx={{ border: `2px solid ${blue[500]}` }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {hotel.description}
                </Typography>
                <Button variant="contained" color="primary">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllHotels;
