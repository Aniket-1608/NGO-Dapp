import React from 'react';
import { Link } from 'react-router-dom'; 

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import LegalStatusTable from "./LegelStatus";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const data = [{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFBIfClRGBGC9n5jXCUGrggUr2wxZsjCw0oI4h_3GNHbeuWjH_-xGh7KKI1iSiW-rBB4&usqp=CAU",
  name: "Miyawaki – A Modern Plantation Drive Method",
  theme : "Environment & Sustainability",
  partner_agency:"Bristlecone India Limited",
  location:"Pune",
  discription:  "OUR FOUNDATION'S TREE PLANTING INITIATIVES EMPLOY TRADITIONAL TREE PLANTING TECHNIQUES ALONG WITH THE..."
},
{
  img:require("../components/asset/GreenNyc.jpeg"),
  name: "GreenNYC",
  theme : "New York City",
  partner_agency:"Goldman Sachs",
  location:"Pune",
  discription:  "Goldman Sachs Environmental Initiative is dedicated to promoting sustainability in New York City. The project focuses on green urban development, clean energy, and sustainable transportation, with the goal of making the city more eco-friendly."
},
{
  img:require("../components/asset/workspace.jpg"),
  name: "Mumbai Waterscape",
  theme : " Water Conservation",
  partner_agency:"HBD Finance Services",
  location:"Mumbai, India",
  discription:  "\"Mumbai Waterscape\" is a collaborative effort between HBD Finance Services and local organizations to support water conservation projects in Mumbai. Their initiatives include rainwater harvesting, awareness campaigns, and promoting efficient water usage in the city."
},
{
  img:require("../components/asset/tech4green.jpeg"),
  name: "Tech4Green",
  theme : "Tech for Environmental Impact",
  partner_agency:"Oracle",
  location:"Silicon Valley, California",
  discription:  "\"Tech4Green\" is Oracle's program based in Silicon Valley, focusing on using technology to address environmental challenges. They work on innovative solutions for sustainable energy, waste reduction, and environmental data analytics."
},
{
  img:require("../components/asset/agri.jpg"),
  name: "Sustainable Agriculture",
  theme : "Sustainable Agriculture",
  partner_agency:"Accenture",
  location:"Rural Communities in Brazil",
  discription:  "\"Sustainable Harvests Brazil\" is a collaboration between Accenture and local farming communities in Brazil. It promotes sustainable agriculture by providing training on organic farming practices, soil conservation, and crop diversification to improve food security and reduce environmental impact."
},
{
  img:require("../components/asset/solar.jpeg"),
  name: "Solarize Silicon Valley",
  theme : "Renewable Energy",
  partner_agency:"Adobe",
  location:"San Jose, California",
  discription:  "\"Solarize Silicon Valley\" is Adobe's initiative that focuses on transitioning to clean energy sources. They invest in solar and wind energy projects, making their operations more environmentally friendly and reducing their carbon footprint."
},
{
  img:require("../components/asset/DC.jpg"),
  name: "DC Environmental Advocacy Alliance",
  theme : "Environmental Advocacy",
  partner_agency:"APCO Worldwide",
  location:"Washington, D.C.",
  discription:  "The \"DC Environmental Advocacy Alliance\" by APCO Worldwide is committed to environmental advocacy. They work with various stakeholders, including government, NGOs, and businesses, to develop and promote policies and campaigns that support sustainability and environmental protection."
},
]



function MediaCard({props}) {
  const {name,theme,location,discription,img,partner_agency} = props
  // <h2>Miyawaki – A Modern Plantation Drive Method</h2>
  // <p>Theme: Environment & Sustainability</p>
  // <p>Partner Agency: Bristlecone India Limited</p>
  // <p>Location: Pune</p>
  // <p>Description: Y4D FOUNDATION'S TREE PLANTING INITIATIVES EMPLOY TRADITIONAL TREE PLANTING TECHNIQUES ALONG WITH THE...</p>

  return (
    <Card sx={{ maxWidth: 500,margin:'10px' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Theme:</b>{theme}
          </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Partner Agency:</b>{partner_agency}

          </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Location:</b> {location}
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Description : </b>{discription}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" >
          <a href={"/"} style={{textDecoration:'none'}}>
          Read More
          </a>
          </Button>
        <Button size="small">
          <a href={"https://y4d.ngo/contact_us"} style={{textDecoration:'none'}}>
          Contact Us
          </a></Button>
      </CardActions>
    </Card>
  );
}



const Projects = () => {
  return (
    <div 
      style={{
        display:"flex",
        flexWrap:'wrap',
        justifyContent:"center",
    }}
      >
        {
          data.map(e=><MediaCard props={e}/>)
        }
      </div>
  );
};

export default Projects;




