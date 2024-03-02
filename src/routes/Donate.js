import React, { useState } from 'react';
import './Donate.css'; // You can create a CSS file for styling
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
function Donate() {
  const [formData, setFormData] = useState({
    fullName: '',
    localAddress: '',
    panCard: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openMetaMask = () => {
    // Add your code to open MetaMask wallet here
  };

  return (
    <>
    
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <Box sx={{ width: "50%" }} bgcolor="white">
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              mt: "20px",
            }}
          >
            Help For Our Cause
          </Typography>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              value={formData.fullName}
              name="fullName"
              onChange={handleChange}
              label="Full Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              value={formData.localAddress}
              onChange={handleChange}
              label="Local Address"          
              name="localAddress"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Pan Card"          
              name="panCard"
              value={formData.panCard}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          {/* <Box sx={{ mt: "10px", margin: "20px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={subjects}
              renderInput={(params) => (
                <TextField {...params} label="Select a Subject" />
              )}
            />
          </Box> */}
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Email"          
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Mobile"          
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <Button variant="contained" fullWidth sx={{ padding: "15px" }}>
              Donate
            </Button>
          </Box>
        </Box>
      </Box>
    </>

  );
}

export default Donate;