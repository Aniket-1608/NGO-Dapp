import React, { useState } from 'react';
import { ethers } from 'ethers';
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
import ContractABI from '../ABIs/LoginABI.json';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Login = () => {
  //to save username and password
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const navigate = useNavigate();
  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: "0xf537B7f5d1e043315A4f0fCbCC4Ac087b229B902", 
    contract: null
  });

  const  { abi } = ContractABI

  const userLogin = async () => {
    try {
      if(!formData.userName || !formData.password) {
        throw new Error('Please fill in all the fields.');
      }

      if(!window.ethereum) {
        throw new Error('Metamask is not Installed');
      }

      const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log("Please connect to MetaMask.");
            } else {
                console.error(err);
            }
        });
      // const account = accounts[0];
      
      if(state.provider == null){
        state.provider = new ethers.BrowserProvider(window.ethereum);
        state.signer = await (state.provider).getSigner();
      }

      // console.log("Data is bytes32encoded...")
      if(state.contract == null){
        state.contract = new ethers.Contract(state.contractAddress, abi, state.signer)
        console.log('Transaction is initiating...');
      }
           
      const transaction = await (state.contract).authenticateUser(
        formData.userName,
        formData.password,
      );

      console.log('Transaction submitted to the network. Waiting for finalization...');
      const transactionReceipt= await transaction.wait();
      const eventLog = transactionReceipt.logs;

      const eventArgs = eventLog[0].args;
      console.log(eventArgs[1]);

      if(eventArgs[1]== true){
        console.log('Transaction is a success..');
        alert('Successfully logged in...');
      }
      else{
        console.log('Transaction is a failure..');
        console.log('Please fill correct login credentials.');
        alert('Invalid Login Credentials. Please fill correct login credentials.');
      }
      
    } catch (error) {
      console.error('Error:', error.message || error);
      alert('An error occured. Please try again.');
    }
  }

  // const userSignUp = async () => {
  //   try {
  //     if(!formData.userName || !formData.password) {
  //       throw new Error('Please fill in all the fields.');
  //     }

  //     if(!window.ethereum) {
  //       throw new Error('Metamask is not Installed');
  //     }
      
  //     const accounts = await window.ethereum
  //     .request({ method: "eth_requestAccounts" })
  //       .catch((err) => {
  //           if (err.code === 4001) {
  //               // EIP-1193 userRejectedRequest error
  //               // If this happens, the user rejected the connection request.
  //               console.log("Please connect to MetaMask.");
  //           } else {
  //               console.error(err);
  //           }
  //       });
  //     // const account = accounts[0];

      
  //     if(state.provider == null){
  //       state.provider = new ethers.BrowserProvider(window.ethereum);
  //       state.signer = await (state.provider).getSigner();
  //     }
      
  //     const contract = new ethers.Contract(state.contractAddress, abi, state.signer)
      
  //     console.log('Transaction is initiating...');
  //     const transaction = await contract.registerUser(
  //       formData.userName,
  //       formData.password,
  //     );

  //     console.log('Transaction submitted to the network. Waiting for finalization...');
  //     const transactionReceipt= await transaction.wait();
  //     const eventLog = transactionReceipt.logs;
  //     const eventArgs = eventLog[0].args;
  //     console.log(eventArgs[1]);
      
  //     // Subscribe to events
  //     // contract.on("UserRegistered", (from, to, value, event)=>{
  //     //   let UserRegisteredEvent ={
  //     //       from: from,
  //     //       to: to,
  //     //       value: value,
  //     //       eventData: event,
  //     //   }
  //     //   console.log(JSON.stringify(UserRegisteredEvent, null, 4))
  //     // })
  //     if(eventArgs[1]== true){
  //       console.log('Transaction is a success..');
  //       alert('Successfully logged in...');
  //     }
  //     else{
  //       console.log('Transaction is a failure..');
  //       console.log('Please fill correct login credentials.');
  //       alert('Invalid Login Credentials. Please fill correct login credentials.');
  //     }

  //     console.log('Transaction is a success..');
  //     console.log('Successfull sign up...');
  //     alert('Successfull sign up...');
  //   } catch (error) {
  //     console.error('Error:', error.message || error);
  //     alert(`An error occured. User already exists for this account.`);
  //   }
  // }

  // const handleForgotPassword = async() => {

  // }

  const navigateToSignupPage = async() => {
    navigate('/signup');
  }

  const navigateToForgotPasswordPage = async() => {
    navigate('/forgotpassword');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
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
                  id="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  name="userName"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                label="Password"          
                name="password"
                variant="outlined"
                fullWidth
              />
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'inside', justifyContent: 'space-between', width: '80%' }}>
                  <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'center' }}>
                    <Button onClick={userLogin} variant="contained" color="primary" sx={{ padding: '10px', width: '100%' }}>
                      Login
                    </Button>
                  </Box>

                  <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'right' }}>
                    <Button onClick={navigateToForgotPasswordPage} variant="text" color="primary" sx={{ padding: '10px', width: '100%' }}>
                      Forgot Password
                    </Button>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                  <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'center' }}>
                    <Typography align='center' variant='h6' color='primary'>
                      Don't have an account?
                    </Typography>
                  </Box>

                  <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'right' }}>
                    <Button onClick={navigateToSignupPage} variant="contained" color="primary" sx={{ padding: '10px', pl:"30px", pr: "30px",width: '100%' }}>
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Typography align="center">
                <p>or Sign in with:</p>
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