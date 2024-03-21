import { Box, Button, TextField, Typography } from "@mui/material";

const AcceptApproval = () => {
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
                    Accept Approval
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
                        Approvals
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
                        Operation
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
                        Status
                    </Typography>
                </Box>
                <Box sx={{margin: "20px", display: "inline-flex", justifyContent: "center", width:"95%"}}>
                    <Button variant="contained" sx={{ padding: "15px", width:"40%" , mr:"30px"}}>
                        Accept Approval
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    );
}

export default AcceptApproval;