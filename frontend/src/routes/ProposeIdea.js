import { useState } from "react";
import {
    TextField,
    Box,
    Typography,
    Button,
  } from "@mui/material";

const ProposeIdea = () => {
    const[formData, setFormData] = useState({
        eventPurpose: null,
        eventDate: null,
        eventTime: null,
        eventTheme: null,
        eventLocation: null,
        eventBenefit: null
    })

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
                    Propose Idea for This Event
                  </Typography>
                  <Box sx={{ mt: "40px", mr: "20px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Purpose of Event
                    </Typography>
                  </Box>
                  <Box sx={{ margin: "20px" , display: "inline-flex", justifyContent: "left", width:"65%"}}>
                    <TextField
                      id="eventpurpose"
                      value={formData.eventPurpose}
                      onChange={handleInputChange}
                      name="eventpurpose"
                      label="Purpose of Event"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "75px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Event Date
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left", width:"65%"}}>
                    <TextField
                      id="eventdate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      name="eventdate"
                      label="Event Date"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "75px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Event Time
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left", width:"65%"}}>
                    <TextField
                      id="eventtime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      name="eventtime"
                      label="Event Time"
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
                        Theme of Event
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%"}}>
                  <TextField
                    id="eventtheme"
                    value={formData.eventTheme}
                    onChange={handleInputChange}
                    label="Theme of Event"          
                    name="eventtheme"
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
                        Location
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%"}}>
                    <TextField
                        id="eventlocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        label="Location"          
                        name="eventlocation"
                        variant="outlined"
                        fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "20px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        mt: "10px",
                        }}
                    >
                        Benefits of Event
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"65%"}}>
                  <TextField
                    id="eventbenefit"
                    value={formData.eventBenefit}
                    onChange={handleInputChange}
                    label="Benefits of Event"          
                    name="eventbenefit"
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

export default ProposeIdea;