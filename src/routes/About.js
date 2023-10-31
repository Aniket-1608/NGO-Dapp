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
import { CardActionArea } from '@mui/material';

function ActionAreaCard({img,name}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

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
     <div id='overview' style={{width:'100%'}}>  
     <CardWithImage 
      head="Overview" 
      
      
      
      body={"We as a team at Rajiv Gandhi Institute of Technology are studying in our final year. Our team focused its interventions on issues concerning youth and children which brought about significant changes in their lives in terms of education, health, skill, career and sustainable livelihood. Our team also works on Environment conservation, women empowerment, Food safety and security, . Being an organisation who cares for society, our team gets engaged in projects as the situation demands under natural or manmade disasters, like COVID-19 Pandemic, Flood, Drought Relief etc social media"} 
      img={require("../components/asset/overview.png")} />

     </div>
      <div id='vision-and-mission'>
      
    
      <CardWithImage 
      head="Vision and Mission" 
      
      
      
      body={"Empowering youth, nurturing the environment, and fostering a resilient society through innovation and compassion. To transform lives by providing education, healthcare, and sustainable livelihoods; to protect and restore the environment; and to be a responsive force during disasters, all while leveraging social media for maximum impact."} 
      img={require("../components/asset/vision.jpg")} />
      </div>

      
      <div id='our-team' style={{width:'100%'}}>

    <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',padding:'20px',width:800 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Our Team

          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <ol>
            <li>
          "Alone we can do so little; together we can do so much." — Helen Keller
            </li>
            <li>
            "Teamwork makes the dream work." — John C. Maxwell
            </li>
            </ol>

          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex' , width:'100%', justifyContent:"space-around",flexWrap:'wrap'}}>


<ActionAreaCard img={require("../components/asset/Shraddha_Salve.jpeg")} name="Shraddha Salve" />
<ActionAreaCard img={require("../components/asset/Yashika_Kothari.jpg")} name="Yashika Kothari" />
<ActionAreaCard img={require("../components/asset/Adfar_Rashid.jpeg")} name="Adfar Rashid" />
<ActionAreaCard img={require("../components/asset/Alahuddin_Ali.png")} name="Alahuddin Ali" />

</Box>
    </Card>
    </div>
    <div id='legal-status-and-empanelments' style={{width:'100%'}}>
    <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'100%' }}>
      <CardContent sx={{ flex: '1 0 auto',width:'100%' }}>
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
      <Box>

      <CardMedia
        component="img"
        sx={{ maxWidth: 600,width:'60%' }}
        image={require("../components/asset/legal.jpg")}
        alt={"legal-status-and-empanelments"}
      />
      </Box>
    </Card>
    </div>
    </div>
  );
  };
  
  export default About;