import React, { useEffect } from "react"; // Import useEffect for demonstration
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LeftDrawer from "./LeftDrawer";

const Header = ({ user, onLoginClick, onRegisterClick }) => {
  // Determine if the user is authenticated
  const isAuthenticated = true; // This will be true if user is not null

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          RentHaven
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Where do you want to go?"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{ width: { xs: "100%", sm: "400px" } }}
        />
        {/* Conditional Rendering */}
        {isAuthenticated ? (
          <IconButton color="inherit">
            <LeftDrawer />
          </IconButton>
        ) : (
          <div>
            <Button color="inherit" onClick={onLoginClick}>
              Login
            </Button>
            <Button color="inherit" onClick={onRegisterClick}>
              Register
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
