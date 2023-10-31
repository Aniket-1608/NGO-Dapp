
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import LegalStatusTable from "./LegelStatus";

import Typography from '@mui/material/Typography';
import {Divider} from "@mui/material";
import Report from "./Reports";


const WhatWeDo = () => {
    const style = {
      fontSize: "40px",
      fontWeight: "bold",
      textAlign: "center",
    };
  
    return (
      <div>
      <Card sx={{width:"90%",margin:5}}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          What We Do
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
          <Typography variant="subtitle1" color="text.secondary" component="div">
                We are the proud students of Rajiv Gandhi Institute Of Technology.
                Here our motto is to build  a Blockchain based NGO management Application in which we 
                will collect donations from various organizations , individuals , 
                the society. Our  Through it's various initiatives and
                partnerships working on helping patients who are suffering from very chronic illness.
                Our NGO want to help the poor students who are unable to join higher schools and organization by organizing scholarship events and paying their admission fees.
                Our NGO will provide women empowerment by organizing various events and seminars and giving privelegs to women in getting jobs , or to become poltician .
                Our NGO will provide medical facilities in rural area .
                Our NGO will encourage environment conservation by saving trees , planting samplings
                Our NGO will visit old age homes  and understand their feelings , will gain experience of them. 
                Our NGO will visit orphanage and provide snacks  and books for children .And our motto is to combine Old age homes with orphanage so that children will get experience from elderly people and elderly people will get affection from children.
                Thus we are  building a society better place for living of
                future generation.
          </Typography>
        </CardContent>
      </Card>
    
      
    <Card sx={{ display: 'flex' ,margin:5,width:"90%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Reports
          </Typography>
          <Divider
              variant="string"
              sx={{ mt: "5px", pt: "5px", width: "90px", borderRadius: "5px" }}
              color="#ff0000"
            />
            <Report/>
        </CardContent>
      </Box>

       <CardMedia
        component="img"
        // sx={{ width: 151 }}
        image={require("../components/asset/status-report.png")}
        alt={"legal-status-and-empanelments"}
      />
    </Card>
      </div>
    );
  };
  
  export default WhatWeDo;
  