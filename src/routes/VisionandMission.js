import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="540"
          image="//www.educategirls.ngo/wp-content/themes/egindia/static/images/mobile-hero-3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
  return <ActionAreaCard />;
};

export default VisionandMission;
