import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Import Dayjs adapter
import dayjs from "dayjs";
import MasonryImageList from "../components/common/MasonryImageList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HotelDetailPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const pricePerNight = 1500;

  const totalNights =
    checkInDate && checkOutDate
      ? dayjs(checkOutDate).diff(dayjs(checkInDate), "day")
      : 1;

  // Update total price whenever guests or dates change
  React.useEffect(() => {
    setTotalPrice(totalNights * pricePerNight * numberOfGuests);
  }, [checkInDate, checkOutDate, numberOfGuests]);

  // Function to handle booking button click
  const handleBooking = () => {
    setDialogOpen(true); // Open the dialog
  };

  // Function to confirm booking
  const confirmBooking = () => {
    const bookingDetails = {
      guestName,
      phoneNumber,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalPrice: totalPrice.toFixed(0),
    };

    navigate("/booking-summary", { state: { bookingDetails } }); // Navigate to Booking Summary Page
    setDialogOpen(false); // Close the dialog
  };

  return (
    <>
      <MasonryImageList />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4}>
            {/* Hotel Details Section */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                XYZ Hotels
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Lovely Hotel
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Max number of guests: 10
              </Typography>

              {/* What We Offer Section */}
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  What We Offer
                </Typography>
                <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                  {/* Services offered with icons (as per the previous example) */}
                  <li>
                    <Typography variant="body2">Free high-speed Wi-Fi</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">24/7 Room Service</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Complimentary Breakfast</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Swimming Pool Access</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Fully Equipped Gym</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Conference Room Facilities</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Free Airport Shuttle</Typography>
                  </li>
                </ul>
              </Box>
            </Grid>

            {/* Booking Form Section */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Price: ₹{pricePerNight} / per night
                  </Typography>

                  {/* Check-in and Check-out Date Pickers */}
                  <Box mt={2}>
                    <Typography variant="body2" gutterBottom>
                      Check-in:
                    </Typography>
                    <DatePicker
                      label="Check-in"
                      value={checkInDate}
                      onChange={(newValue) => setCheckInDate(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </Box>

                  <Box mt={2}>
                    <Typography variant="body2" gutterBottom>
                      Check-out:
                    </Typography>
                    <DatePicker
                      label="Check-out"
                      value={checkOutDate}
                      onChange={(newValue) => setCheckOutDate(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </Box>

                  {/* Number of Guests */}
                  <Box mt={2}>
                    <TextField
                      label="Number of guests"
                      type="number"
                      value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(e.target.value)}
                      fullWidth
                    />
                  </Box>

                  {/* Guest name */}
                  <Box mt={2}>
                    <TextField
                      label="Your full name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      fullWidth
                    />
                  </Box>

                  {/* Phone number */}
                  <Box mt={2}>
                    <TextField
                      label="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      fullWidth
                    />
                  </Box>

                  {/* Booking Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, backgroundColor: "#3f75f4" }}
                    onClick={handleBooking} // Update the onClick handler
                  >
                    Book this place ₹{totalPrice.toFixed(0)}
                  </Button>

                  {/* Confirmation Dialog */}
                  <Dialog
                    open={dialogOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setDialogOpen(false)}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>{"Confirm Booking?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        You are about to book this hotel with the following details:
                        <ul>
                          <li>Guest Name: {guestName}</li>
                          <li>Phone Number: {phoneNumber}</li>
                          <li>Check-in Date: {checkInDate?.format("DD-MM-YYYY")}</li>
                          <li>Check-out Date: {checkOutDate?.format("DD-MM-YYYY")}</li>
                          <li>Number of Guests: {numberOfGuests}</li>
                          <li>Total Price: ₹{totalPrice.toFixed(0)}</li>
                        </ul>
                        Do you want to proceed with the booking?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                      <Button onClick={confirmBooking}>Confirm</Button>
                    </DialogActions>
                  </Dialog>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </>
  );
};

export default HotelDetailPage;
