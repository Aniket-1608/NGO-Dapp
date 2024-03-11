import React, { useState, useEffect, createContext } from 'react';
import { ethers, id } from 'ethers';
import { FacebookProvider, useLogin } from 'react-facebook';
// import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
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
import { jwtDecode } from "jwt-decode";
import SignUp from './SignUp';

export const recoveryContext = createContext();

const Login = () => {
  const [user, setUser] = useState({});
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

      if(eventArgs[1] === true){
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

  const navigateToSignupPage = async() => {
    // SignUp();
    navigate('/signup');
  }

  const navigateToForgotPasswordPage = async() => {
    navigate('/forgotpassword');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  function handleCallbackResponse(response){
    console.log("JWT web token:" +response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("logInDiv").hidden = true;
  }
  function handleSignOut(event){
    setUser({});
    document.getElementById("logInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "801009680059-abg0ikgpj3lm9h4s6rl8gcoipfj0eqci.apps.googleusercontent.com",
      callback: handleCallbackResponse 
    })

    google.accounts.id.renderButton(
      document.getElementById("logInDiv"),
      {theme:"outline", size:"large"}
    )

    google.accounts.id.prompt();

    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '783701473655561',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v19.0'
      });
    };
 
    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }, []);
  const responseFacebook = (response) => {
    console.log(response);
  };
    return (
    <>
      <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "50px",
              width:"80%"
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
              <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'center' }}>
                <div id="logInDiv"> </div>
                {
                  Object.keys(user).length !== 0 &&
                  <Button onClick={(e) => handleSignOut(e)}>SIGN OUT</Button>
                } 
              </Box> 
              <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'center' }}>
                <div>
                <FacebookProvider
                  appId="783701473655561"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  scope="ads_read,ads_management"
                />
                </div>
              </Box>
            </Box>
          </Box>
    </>
    );
};
export default Login;