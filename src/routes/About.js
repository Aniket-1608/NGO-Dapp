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
import Paper from '@mui/material/Paper';

const milestones = [
  require('../components/asset/partners/APCO-Worldwide.jpg'),
  require('../components/asset/partners/Adobe.jpg'),
  require('../components/asset/partners/Bank-of-America.png'),
  require('../components/asset/partners/Bohemian-Foundation.jpg'),
  require('../components/asset/partners/Goldman-Sachs.jpg'),
  require('../components/asset/partners/HDB.jpg'),
  require('../components/asset/partners/Oracle.png'),
  require('../components/asset/partners/accenture.jpg'),
]
const rewards = [
  require('../components/asset/awards/Global-Giving-Award_2020.jpg'),
  require('../components/asset/awards/Millenium-Alliance-2014.jpg'),
  require('../components/asset/awards/Stars-impact-award-winner_.jpg'),
  require('../components/asset/awards/The-british-asian-trust1.jpg'),
  require('../components/asset/awards/iVolunteer-Awards.jpg'),

]
function ActionAreaCard({img,name,division,batch,rollno,year}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Paper elevation={24} sx={{ backgroundColor:"#e5e5e5"}}>
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
          <Typography variant="body2" color="text.secondary">
            Division:- {division}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Batch:- {batch}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Roll No:-{rollno}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year:-{year}
          </Typography>

        </CardContent>
      </CardActionArea>
      </Paper>
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


      <div id='milestones-and-rewards' >


      <Typography component="div" variant="h4">
          Milestones and Rewards
      </Typography>
      <Divider
          variant="string"
          sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
          color="#ff0000"
        />

      <Typography component="div" variant="h5" align='center'>
          Partners
      </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent:"space-around",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 150,
          height: 150,
        },
      }}
    >
      {
      milestones.map(milestone=>{
        return <Paper elevation={13} >
            <img src={milestone} style={{width:150}}/>
            </Paper>
      })
      }
    </Box>

      <Typography component="div" variant="h5" align='center'
      sx={{marginTop:'50px'}}
      >
          Recognition
      </Typography>
      <Box
      sx={{
        display: 'flex',
        justifyContent:"space-around",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 200,
        },
      }}
    >
      {
      rewards.map(reward=>{
        return <Paper elevation={13} >
            <img src={reward} style={{width:200}}/>
            </Paper>
      })
      }
    </Box>
    <div id='our-team' style={{width:'100%',margin:'30px 0px'}}>
      <Typography component="div" variant="h5" align='center'>
        Our Team
      </Typography>
      <Box sx={{ display: 'flex' , width:'100%', justifyContent:"space-around",flexWrap:'wrap'}}>
      <ActionAreaCard 
        img={require("../components/asset/Shraddha_Salve.png")} 
        division="A"
        batch="A4"
        rollno="A762"
        year="2023-2024"
        name="Shraddha Salve" />
        <ActionAreaCard img={require("../components/asset/Yashika_Kothari.jpg")}
        division="A"
        batch="B1"
        rollno="B707"
        year="2023-2024"
         name="Yashika Kothari" />
        <ActionAreaCard img={require("../components/asset/Adfar_Rashid.jpeg")}
        division="A"
        batch="A1"
        rollno="A701"
        year="2023-2024"
         name="Adfar Rashid" />
        <ActionAreaCard img={require("../components/asset/Alahuddin_Ali.png")}
        division="A"
        batch="A1"
        rollno="A704"
        year="2023-2024"
         name="Alahuddin Ali" />
      </Box>
      </div>
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