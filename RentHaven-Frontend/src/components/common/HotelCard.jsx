import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import {Link} from 'react-router-dom'
const HotelCard = ({ id = '1' ,title, location, price, image }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image=''
                    src = {image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location}
                    </Typography>
                    <Typography variant="h6" color="primary">
                        ₹{price} per night
                    </Typography>
                    <Link to={`/hotel/${id}`}>View Details</Link> 
                </CardContent>
            </Card>
        </Grid>
    );
};

export default HotelCard;
