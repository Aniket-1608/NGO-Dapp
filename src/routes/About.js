import Overview from '../routes/Overview';
import Layout from '../components/Layout';
import { Routes, Route  , Link } from 'react-router-dom';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import LegalStatusTable from "./LegelStatus";

import Typography from '@mui/material/Typography';
import {
  Grid,
  Container,
  List,
  Divider,
  TextField,
} from "@mui/material";

function CardWithImage({head,body,img}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {head}
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {body}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt={head}
      />
    </Card>
  );
}


const About = () => {
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:'5px'}}>
      {/* <Link to="/overview">Overview</Link>
      <Routes>
        
        <Route path="overview" element={<Overview />} />
      </Routes> */}
      {/* <img src={require("../components/asset/visionimg.webp")} width={'90%'} height={250} /> */}

      <Card sx={{width:"90%",margin:5}}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Overview
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
          <Typography variant="subtitle1" color="text.secondary" component="div">
          We as a team at Rajiv Gandhi Institute of Technology are studying in our final year. Our team focused its interventions on issues concerning youth and children which brought about significant changes in their lives in terms of education, health, skill, career and sustainable livelihood. Our team also works on Environment conservation, women empowerment, Food safety and security, . Being an organisation who cares for society, our team gets engaged in projects as the situation demands under natural or manmade disasters, like COVID-19 Pandemic, Flood, Drought Relief etc social media
          </Typography>
        </CardContent>
      </Card>
      <div id='vision-and-mission'>

      <CardWithImage 
      head="Vision and Mission" 
      
      
      
      body={"Empowering youth, nurturing the environment, and fostering a resilient society through innovation and compassion. To transform lives by providing education, healthcare, and sustainable livelihoods; to protect and restore the environment; and to be a responsive force during disasters, all while leveraging social media for maximum impact."} 
      img={require("../components/asset/vision.jpg")} />
      </div>

      
      <div id='our-team'>

      <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'100%'  }}>
      <CardContent sx={{ flex: '1 0 auto',width:'100%' }}>
          <Typography component="div" variant="h5">
          Our Team
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
         {/* <LegalStatusTable/> */}
         <Box sx={{ display: 'flex' , width:'100%', justifyContent:"space-around"}}>

          <Box sx={{ margin: '2px' }}>
              <CardMedia
              component="img"
              // sx={{ width: 251 }}
              image={require("../components/asset/alexa.jpg")}
              alt={"legal-status-and-empanelments"}
            />
            <Typography component="div" variant="h5">
            Anushree Singh
            </Typography>
            Head - Human Resources
          </Box>
          <Box sx={{ margin: '2px' }}>
              <CardMedia
              component="img"
              // sx={{ width: 251 }}
              image={require("../components/asset/alexa.jpg")}
              alt={"legal-status-and-empanelments"}
            />
            <Typography component="div" variant="h5">
            Lisa Rodricks
            </Typography>
            Director - Strategy
          </Box>
          <Box sx={{ margin: '2px' }}>
              <CardMedia
              component="img"
              // sx={{ width: 251 }}
              image={require("../components/asset/alexa.jpg")}
              alt={"legal-status-and-empanelments"}
            />
            <Typography component="div" variant="h5">
            Vijaylakshmi Saxena
            </Typography>
            Chief Financial Officer (CFO)
          </Box>
         </Box>
         
        </CardContent>
      </Box>
      
    </Card>
    </div>
    <div id='legal-status-and-empanelments'>
    <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Legal Status And Empanelments
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
         <LegalStatusTable/>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        // sx={{ width: 151 }}
        image={require("../components/asset/legal.jpg")}
        alt={"legal-status-and-empanelments"}
      />
    </Card>
    </div>
    </div>
  );
  };
  
  export default About;