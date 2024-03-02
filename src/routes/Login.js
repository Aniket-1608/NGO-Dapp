import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Login = () => {
    return (
        <>

  
  <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <Box sx={{ width: "50%" }} bgcolor="white">
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              mt: "20px",
            }}
          >
            Login
          </Typography>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <Button variant="contained" fullWidth sx={{ padding: "15px" }}>
              Login
            </Button>
          </Box>
      <Typography align="center">

      <a href="#">Forgot Password?</a>
      </Typography>
      {/* <p>
        Don't have an account? <a href="#">Sign up here</a>
      </p>
           */}
      <Typography align="center">
        <p>OR Sign In with:</p>
      </Typography>
      
          <Box sx={{ width: '100%',
          // display: "flex",
          // justifyContent: "center",
          p: "20px", }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <GoogleLoginButton onClick={() => alert("Hello")} />
              </Grid>
              <Grid item xs={6}>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Box>
</>

    );
};
export default Login;