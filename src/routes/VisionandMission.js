import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),  
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          {/* <Item>1</Item> */}
          <h2>About Us</h2>
          {/* kjsdfksjd */}
        </Grid>
        <Grid item xs={6} >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>    
              <p>
                Established in 2007, Educate Girls is a non-profit that focusses on mobilising communities for girls’ education in India’s rural and educationally backward areas.
              </p>    
            </Grid>
            <Grid item xs={12}>   
              <p>
              Strongly aligned with the ‘Right to Education Act’ or the ‘Samagra Shiksha’, Educate Girls is committed to the Government’s vision to improve access to primary education for children, especially young girls.
              </p>
            </Grid>
          </Grid>

        </Grid>
          <Grid item xs={6}>
            <p>
            Educate Girls currently operates successfully in over 21,000+ villages in Rajasthan, Madhya Pradesh and Uttar Pradesh. By leveraging the Government’s existing investment in schools and by engaging with a huge base of community volunteers, Educate Girls helps to identify, enrol and retain out-of-school girls and to improve foundational skills in literacy and numeracy for all children (both girls and boys). This helps deliver measurable results to a large number of children and avoids parallel delivery of services.
            </p>
          </Grid>
      </Grid>
    </Box>
  );
}


function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="540"
          // image="//www.educategirls.ngo/wp-content/themes/egindia/static/images/bg-2.jpg"
          image="//www.educategirls.ngo/wp-content/themes/egindia/static/images/bg-6.jpg"
          // url()
          
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          Who We Are
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Educate Girls works with the government, community and village-based
            volunteers called Team Balika to ensure every girl in the remotest
            parts of India is enrolled in school and learns well.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const VisionandMission = () => {
    return <div >
      <div width={'100%'} style={{position:'relative'}}>
        <div style={{position:'absolute',top:100,left:20,width:500}}>
        <Typography gutterBottom variant="h3" component="div">
          Who We Are
          </Typography>
          <Typography variant="body1" component="div">
          Educate Girls works with the government, community and village-based volunteers called Team Balika to ensure every girl in the remotest parts of India is enrolled in school and learns well.
          </Typography>
        </div>
      <img width={'100%'} src='//www.educategirls.ngo/wp-content/themes/egindia/static/images/bg-6.jpg'></img>
      </div>
      {/* <ActionAreaCard/> */}
      <RowAndColumnSpacing/>

    </div>
  };

export default VisionandMission;
