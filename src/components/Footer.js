import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Container,
  List,
  Typography,
  Divider,
  TextField,
} from "@mui/material";

const menu = {
  QuickLinks: [
    {
      name: "Home",
      type: "internal",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "About Us",
      type: "internal",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Vision/Mission/Goal",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Leadership",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Board",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Partners",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
  ],
  OtherLinks: [
    {
      name: "Recognition",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Join Our Team",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "EG Blog",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Contact Us",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
    {
      name: "Partnership Opportunities",
      type: "external",
      path: "https://recruiterflow.com/navgurukul/jobs",
    },
  ],
};

function Footer() {
  return (
    <Box
      maxWidth="false"
      //   bgcolor="black"
      bgcolor="#212529"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <Container maxWidth="xl" sx={{ mt: "20px", mb: "20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                // width: "50%",
              }}
              bgcolor="white"
            > */}
            <img
              src={require("./asset/logo.jpg")}
              alt="social media"
              loading="lazy"
              width="50%"
            />
            {/* </Box> */}
          </Grid>
          <Grid item xs={6} md={3} sx={{ pl: "15px" }}>
            <Typography color="white" variant="h5" sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Divider
              variant="string"
              sx={{ mt: "8px", pt: "9px", width: "40%", borderRadius: "5px" }}
              color="#ff0000"
            />
            <List>
              {menu["QuickLinks"]?.map((item) => {
                return (
                  // <Link key={toLink} to={toLink} className={classes.link}>
                  <Link style={{ textDecoration: "none" }}>
                    <Typography variant="h6" sx={{ pb: "8px" }} color="#6C757D">
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={6} md={3} sx={{ pl: "15px" }}>
            <Typography color="white" variant="h5" sx={{ fontWeight: "bold" }}>
              Other Links
            </Typography>
            <Divider
              variant="string"
              sx={{ mt: "8px", pt: "9px", width: "40%", borderRadius: "5px" }}
              color="#ff0000"
            />
            <List>
              {menu["OtherLinks"]?.map((item) => {
                return (
                  // <Link key={toLink} to={toLink} className={classes.link}>
                  <Link style={{ textDecoration: "none" }}>
                    <Typography variant="h6" sx={{ pb: "8px" }} color="#6C757D">
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={6} md={3} sx={{ pl: "15px" }}>
            <Typography color="white" variant="h5" sx={{ fontWeight: "bold" }}>
              Keep helping. Stay Updated.
            </Typography>
            <Divider
              variant="string"
              sx={{ mt: "8px", pt: "9px", width: "40%", borderRadius: "5px" }}
              color="#ff0000"
            />
            <Box sx={{ mt: "20px" }} bgcolor="white">
              <TextField
                id="filled-basic"
                label="First Name"
                variant="filled"
                InputLabelProps={{
                  style: { color: "#6b6b6b" }, // Change the label color
                }}
              />
            </Box>
            <Box sx={{ mt: "10px" }} bgcolor="white">
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="filled"
                InputLabelProps={{
                  style: { color: "#6b6b6b" }, // Change the label color
                }}
              />
            </Box>
            <Box sx={{ mt: "10px" }} bgcolor="white">
              <TextField
                id="filled-basic"
                label="Enter your email here"
                variant="filled"
                InputLabelProps={{
                  style: { color: "#6b6b6b" }, // Change the label color
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <Typography
            color="white"
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              mr: "20px",
              fontWeight: "bold",
            }}
          >
            Follow Us
          </Typography>
          <a href="https://www.facebook.com/educategirls" target="_blank">
            <img
              src="https://www.educategirls.ngo/wp-content/themes/egindia/static/icons/icon-facebook.png"
              alt="social media"
              loading="lazy"
              width="50px"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a href="https://twitter.com/educate_girls" target="_blank">
            <img
              src="https://www.educategirls.ngo/wp-content/themes/egindia/static/icons/icon-twitter.png"
              alt="social media"
              loading="lazy"
              width="50px"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a href="https://www.youtube.com/user/educategirlsEG" target="_blank">
            <img
              src="https://www.educategirls.ngo/wp-content/themes/egindia/static/icons/icon-youtube.png"
              alt="social media"
              loading="lazy"
              width="50px"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/educategirlsngo/?theme=dark"
            target="_blank"
          >
            <img
              src="https://www.educategirls.ngo/wp-content/themes/egindia/static/icons/icon-instagram.png"
              alt="social media"
              loading="lazy"
              width="50px"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/educate-girls/"
            target="_blank"
          >
            <img
              src="https://www.educategirls.ngo/wp-content/themes/egindia/static/icons/icon-linkedin.png"
              alt="social media"
              loading="lazy"
              width="50px"
              style={{ marginRight: "10px" }}
            />
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
