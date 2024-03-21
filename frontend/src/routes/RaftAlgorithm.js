import { Box, Button, TextField, Typography } from "@mui/material";

const RaftAlgorithm = () => {

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
                    RAFT
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
                        Member Names
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
                        Contribution
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
                        Vote Among Members
                    </Typography>
                </Box>
                <Box sx={{margin: "20px", display: "inline-flex", justifyContent: "center", width:"95%"}}>
                    <Button variant="contained" sx={{ padding: "15px", width:"40%" , mr:"30px"}}>
                        Choose Admin from Voting
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    );
}

export default RaftAlgorithm;