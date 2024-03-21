import { Box, Button, TextField, Typography } from "@mui/material";

const MiningPool = () => {
    
    
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
                    Mining Pool
                </Typography>
                <Box sx={{ margin:"20px", display: "inline-flex", justifyContent: "left", width:"95%"}}>
                    <Typography
                        sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        fontSize: "20px",
                        fontFamily:"Gill Sans", 
                        mr:"20px",
                        ml:"20px"
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
                        mr:"20px",
                        ml:"20px"
                        }}
                        >
                        User
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans",
                            mr:"20px",
                            ml:"20px" 
                            }}
                        >
                        Donation Made
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans",
                            mr:"20px",
                            ml:"20px"
                            }}
                        >
                        Time Elapsed
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans", 
                            mr:"20px",
                            ml:"20px"
                            }}
                        >
                        Block Created
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            fontFamily:"Gill Sans",
                            mr:"20px",
                            ml:"20px"
                            }}
                        >
                        Work Contributed
                    </Typography>
                </Box>
                <Box sx={{margin: "20px", display: "inline-flex", justifyContent: "left", width:"95%"}}>
                    <Button variant="contained" sx={{ padding: "15px", width:"40%" , mr:"30px"}}>
                        Accept User as NGO
                    </Button>
                    <Button variant="contained" fullWidth sx={{ padding: "15px", width:"40%" , mr:"30px"}}>
                        Mining Activity Start
                    </Button>
                    <Button variant="contained" fullWidth sx={{ padding: "15px", width:"40%", mr:"30px"}}>
                        Reject User as NGO
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    );
}

export default MiningPool;