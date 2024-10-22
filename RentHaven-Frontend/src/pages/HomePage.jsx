import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../components/common/Header';
import HotelCard from '../components/common/HotelCard';

const hotels = [
    { title: 'Rameshwaram Home', location: 'Agra', price: 2500, image: 'https://th.bing.com/th/id/OIP.HW2h5SFrbGqaU-jyhyGhoAHaFg?w=250&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { title: 'Jhanvi Palace', location: 'Pryag', price: 6000, image: 'https://th.bing.com/th/id/OIP.tg5xKPOOv4fpR0oFu2mbBQHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { title: 'Surya Home', location: 'Delhi', price: 3800, image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg' },
    { title: 'Bankhim Palace', location: 'Agra', price: 2500, image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg' },
    { title: 'Raj Hotel', location: 'Pryag', price: 6000, image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg' },
    { title: 'Nirman Hotel', location: 'Delhi', price: 6500, image: 'https://th.bing.com/th/id/OIP.h89OTG1l-dSj5G9Qghq2rgHaEo?rs=1&pid=ImgDetMain' },
];

const HomePage = () => {
    return (
        <>
            <Header />
            <Container sx={{ marginTop: 10 }}>
                <Grid container spacing={3}>
                    {hotels.map((hotel, index) => (
                        <HotelCard
                            key={index}
                            title={hotel.title}
                            location={hotel.location}
                            price={hotel.price}
                            image={hotel.image}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default HomePage;
