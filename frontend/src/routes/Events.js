import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const data = [{
  img:"https://y4d.ngo/admin/uploads/events/1_12.jpeg",
  name: "Aayushamaan Aadhar Health Camps Phase 1",
  details : "https://y4d.ngo/event_details/1",
  time: "5:30 AM to 5:30 AM",
  date: "19 October - 31 December",
  location:"Maharashtra, Gujarat, Karnataka, Tamil Nadu, Kerala, Andhra Pradesh",
  discription:  "Under the roof of ‘Aayushmaan Bharat’ - The Health Initiative of the govt. of India, Aadhar Housing Finance Limited, and Y4D Foundation conducting Free Health Checkup Camps to conserve"
},
{
  img:"https://y4d.ngo/admin/uploads/events/DSC_0068.jpg",
  name: "5th Foundation Day",
  details : "https://y4d.ngo/event_details/2",
  time: " 6:00 PM to 8:00 PM",
  date: "23 September - 23 September",
  location:'Pune',
  discription:  "Y4D Celebrated its 5th foundation day with a summary of the last 5yr working Y4D Chalked out a mission for the next 5Yr. The team announced a vision of developing Indian society in which there will not be a single underprivileged citizen and developing a fair and transparent society in which everyone gets equal rights...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/img1.jpeg",
  name: "Launch of Nutrition Program \"सशक्त बालक, सशक्त भारत\" by Hon. Minister Shri Nitin Gadkari ji",
  details : "https://y4d.ngo/event_details/3",
  time: "12:00 AM to 11:59 PM",
  date: "10 February - 12 April",
  location:'Pune',
  discription:  "Y4D Foundation in partnership with Trzan Sports Nutrition school launched its affordable nutrition program by hands of Hon. Cabinet Minister Nitin Gadkari Ji in presence of various dignitaries."
},
{
  img:"https://y4d.ngo/admin/uploads/events/1_(3).jpeg",
  name: "Water Boat Ambulance",
  details : "https://y4d.ngo/event_details/4",
  time: "2:00 PM to 5:00 PM",
  date: " 26 July - 26 July",
  location:' Srinagar, Kashmir',
  discription:  "Y4D Foundation in collaboration with Aadhar Housing Finance Ltd...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/1_page1.jpg",
  name: "Empowerment Conclave 2021",
  details : "https://y4d.ngo/event_details/5",
  time: "4:00 PM to 9:00 PM",
  date: "24 September - 25 September",
  location:'New Delhi',
  discription:  "India's journey of 75 years since independence has been a saga of lifting millions of its citizens out of poverty, illiteracy, disease and ignorance. Having created a strong foundation for rapid growth, the next 25 years promise to be full of excitement and exhilaration...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/Collage.jpg",
  name: "Aayushamaan Aadhar Health Camps Phase 2",
  details : "https://y4d.ngo/event_details/7",
  time: "10:00 AM to 5:00 PM",
  date: "01 September - 31 December",
  location:'Maharashtra, Gujarat, Karnataka, Tamil Nadu, Kerala, Andhra Pradesh',
  discription:  "Y4D Foundation is proud to launch Phase 2 of the Aayushmaan Aadhar Program in partnership with Aadhar Housing Finance Ltd. by Organising a Free Health Check-up Camp in the slum area of Pune. Under the Program, Y4D will Organise 100 plus medical health camps and avail health facilities to underprivileged People...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/11.jpg",
  name: "Mobile Ambulance Phase 2 (AHFL)",
  details : "https://y4d.ngo/event_details/8",
  time: "11:00 AM to 1:00 PM",
  date: "29 October - 29 October",
  location:'Mumbai',
  discription:  "Y4D Foundation in collaboration with Aadhar Housing Finance Ltd. will inaugurate \"Mobile Ambulance Phase 2\" under the project Aayushmaan Aadhar. In phase 1 Aayushmaan Aadhar project donated 7 ambulances across 7 different states including Water Boat Ambulance at Dal Lake, Srinagar. In phase 2 of the project 8 ambulances will be donated which will extend the project reach to 12 states...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/IMG-20211007-WA0037.jpg",
  name: "Partnership with TATA Motors",
  details : "https://y4d.ngo/event_details/8",
  time: "11:00 AM to 12:00 AM",
  date: " 18 October - 18 October",
  location:'Pune, Maharashtra',
  discription:  "Tata Motors in partnership with Y4D Foundation has decided to provide training to underprivileged youth in marketable vocational training courses. This is a great initiative that comes under Tata Motor’s skill-building program ‘Kaushalya’ which aims at empowering the youth of India...."
},
{
  img:"https://y4d.ngo/admin/uploads/events/diwali.jpg",
  name: "Diwali Celebration with 100% Placed Girls Batch",
  details : "https://y4d.ngo/event_details/8",
  time: "10:30 AM to 11:30 AM",
  date: "01 November - 01 November",
  location:'Pune',
  discription:  "On the occasion of Deepawali, Y4D Foundation organized a get-together with the underprivileged girls’ beneficiaries of Y4D's Build Future Skilling program with the objective of brightening their lives and giving them a moment of joy in the festive season. It was a proud moment for Y4D as 100% students of Girl Skilling batch placed in reputed companies...."
}]



function MediaCard({props}) {
  const {name,time,date,location,discription,img,details} = props
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
          {time}
          </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
          </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Description : </b>{discription}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" >
          <a href={details} style={{textDecoration:'none'}}>
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

const Events = () => {
  const style = {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
  };

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

export default Events;