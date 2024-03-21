import { useState } from "react";
import {
    TextField,
    Box,
    Typography,
    Button,
  } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./UserEnroll.css";

const UserEnroll = () => {
    const [formData, setFormData] = useState({
        yourFirstName: null,
        yourLastName: null,
        fatherFirstName: null,
        fatherLastName: null,
        motherFirstName: null,
        motherLasttName: null,
        address: null,
        email: null,
        phoneNumber: null,
        donationMade: null,
        timeElapsed: null
    })
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
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
                    Join as Member
                  </Typography>
                  <Box sx={{ mt: "20px", mr: "70px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Your Name 
                    </Typography>
                  </Box>
                  <Box sx={{ margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="yourfirstname"
                      value={formData.yourFirstName}
                      onChange={handleInputChange}
                      name="yourfirstname"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="yourlastname"
                      value={formData.yourLastName}
                      onChange={handleInputChange}
                      name="yourlastname"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "40px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Father's Name
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="fatherfirstname"
                      value={formData.fatherFirstName}
                      onChange={handleInputChange}
                      name="fatherfirstname"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="fatherlastname"
                      value={formData.fatherLastName}
                      onChange={handleInputChange}
                      name="fatherlastname"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "35px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Mother's Name
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="motherfirstname"
                      value={formData.motherFirstName}
                      onChange={handleInputChange}
                      name="motherfirstname"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                    <TextField
                      id="motherlastname"
                      value={formData.motherLasttName}
                      onChange={handleInputChange}
                      name="motherlastname"
                      label="Mother's Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "100px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Address
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"64%"}}>
                  <TextField
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    label="Address"          
                    name="address"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "60px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Date of Birth
                    </Typography>
                  </Box>
                  <Box sx={{margin: "20px", display: "inline-flex", justifyContent: "left", width:"50%" }}>
                    <DatePicker
                        showIcon
                        toggleCalendarOnIconClick
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "125px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Email
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%"}}>
                  <TextField
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    label="Email"          
                    name="email"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "40px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Phone Number
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%" }}>
                  <TextField
                    id="phonenumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    label="Phone Number"          
                    name="phonenumber"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "40px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Donation Made
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%" }}>
                  <TextField
                    id="donationmade"
                    value={formData.donationMade}
                    onChange={handleInputChange}
                    label="Donation Made"          
                    name="donationmade"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "3px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Time Work Elapsed
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%"}}>
                  <TextField
                    id="timeelapsed"
                    value={formData.timeElapsed}
                    onChange={handleInputChange}
                    label="Time Work Elapsed"          
                    name="timeelapsed"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                    <Box sx={{ mt: "10px", margin: "20px" }}>
                        <Button variant="contained" fullWidth sx={{ padding: "15px" }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
              </Box>
        </>
    );
}

export default UserEnroll;