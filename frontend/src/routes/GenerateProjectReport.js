import { useState } from "react";
import {
    TextField,
    Box,
    Typography,
    Button,
  } from "@mui/material";

const GenerateProjectReport = () => {
    const[formData, setFormData] = useState({
        NgoName: null,
        NgoEventCreated: null,
        NgoDonation: null,
        NgoWebinar: null,
        NgoReach: null,
        NgoReportDate: null,
        NgoPurpose: null,
        NgoSummary: null
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
                <Box sx={{ width: "70%" }} bgcolor="white">
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      mt: "20px",
                    }}
                  >
                   Generate Project Report
                  </Typography>
                  <Box sx={{ mt: "40px", mr: "185px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        Name of NGOs
                    </Typography>
                  </Box>
                  <Box sx={{ margin: "20px" , display: "inline-flex", justifyContent: "left", width:"60%"}}>
                    <TextField
                      id="ngoname"
                      value={formData.NgoName}
                      onChange={handleInputChange}
                      name="ngoname"
                      label="Name of NGOs"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "50px", ml:"20px", mb:"20px", display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        No. of Events Created by NGOs
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left", width:"60%"}}>
                    <TextField
                      id="ngoeventcreated"
                      value={formData.NgoEventCreated}
                      onChange={handleInputChange}
                      name="ngoeventcreated"
                      label="No. of Events Created by NGOs"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "80px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        Donation Recieved by Users
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left", width:"60%"}}>
                    <TextField
                      id="ngodonation"
                      value={formData.NgoDonation}
                      onChange={handleInputChange}
                      name="ngodonation"
                      label="Donation Recieved by Users"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "0px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        No. of Webinars Created for Awareness
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "20px", mr: "0px", ml:"10px", mb:"20px", display: "inline-flex", justifyContent: "left", width:"60%"}}>
                  <TextField
                    id="ngowebinar"
                    value={formData.NgoWebinar}
                    onChange={handleInputChange}
                    label="Webinars Created for Awareness"          
                    name="ngowebinar"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "50px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        Reach of People through NGOs
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"60%"}}>
                    <TextField
                        id="ngoreach"
                        value={formData.NgoReach}
                        onChange={handleInputChange}
                        label="Reach of People through NGOs"          
                        name="ngoreach"
                        variant="outlined"
                        fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "185px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        Date of Report
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"60%"}}>
                  <TextField
                    id="ngoreportdate"
                    value={formData.NgoReportDate}
                    onChange={handleInputChange}
                    label="Date of Report"          
                    name="ngoreportdate"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "170px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        Purpose of NGO
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"60%"}}>
                  <TextField
                    id="ngopurpose"
                    value={formData.NgoPurpose}
                    onChange={handleInputChange}
                    label="Purpose of NGO"          
                    name="ngopurpose"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                  <Box sx={{ mt: "20px", mr: "180px", ml:"20px", mb:"20px" , display: "inline-flex", justifyContent: "left"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "left",
                        fontSize: "20px",
                        fontFamily:"Gill Sans",
                        mt: "10px",
                        }}
                    >
                        NGO Summary
                    </Typography>
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left", width:"60%"}}>
                  <TextField
                    id="ngosummary"
                    value={formData.NgoSummary}
                    onChange={handleInputChange}
                    label="NGO Summary"          
                    name="ngosummary"
                    variant="outlined"
                    fullWidth
                  />
                  </Box>
                    <Box sx={{ mt: "10px", margin: "20px" }}>
                        <Button variant="contained" sx={{ padding: "15px", width:"30%" , mr:"30px"}}>
                            Create Bar Graphs
                        </Button>
                        <Button variant="contained" fullWidth sx={{ padding: "15px", width:"30%" , mr:"30px"}}>
                            Generate Report
                        </Button>
                        <Button variant="contained" fullWidth sx={{ padding: "15px", width:"30%", mr:"30px"}}>
                            Create Pie Charts
                        </Button>
                    </Box>
                </Box>
              </Box>
        </>
    );
}

export default GenerateProjectReport;