import { Box, Button, TextField, Typography } from "@mui/material";

const AttendMeetings = () => {
    
    return (
        <>
        <Box
            sx={{
            display: "flex",
            justifyContent: "center",
            mt: "50px",
            }}
            >
            <Box sx={{ width: "60%" }} bgcolor="white">
                <Typography
                    variant="h4"
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "bold",
                    mt: "20px",
                    }}
                >
                    Attend Meetings
                </Typography>
                <Box sx={{ margin:"20px", display: "inline-flex", justifyContent: "center", width:"90%"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        fontSize: "20px",
                        fontFamily:"Gill Sans", 
                        mr:"35px",
                        ml:"35px"
                        }}
                        >
                        Sr. No. 
                    </Typography>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        fontSize: "20px",
                        fontFamily:"Gill Sans", 
                        mr:"35px",
                        ml:"35px"
                        }}
                        >
                        Meeting Discussion
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans",
                            mr:"35px",
                            ml:"35px" 
                            }}
                        >
                        Heading
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans",
                            mr:"35px",
                            ml:"35px"
                            }}
                        >
                        Time of Meeting
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans", 
                            mr:"35px",
                            ml:"35px"
                            }}
                        >
                        Date
                    </Typography>
                </Box>
                <Box sx={{margin: "20px", display: "inline-flex", justifyContent: "center", width:"95%"}}>
                    <Button variant="contained" sx={{ padding: "15px", width:"40%" , mr:"30px"}}>
                        Attend Meetings
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    );

}
export default AttendMeetings;