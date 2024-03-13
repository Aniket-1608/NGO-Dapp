import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
import ContractABI from '../ABIs/LoginABI.json';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  //get the email of the user
  const [email, setEmail] = useState('');

  //generate the otp
  const [otp, setOTP] = useState('');

  //save the otp entered by the user
  const [userOTP, setUserOTP] = useState('');

  //set the status of the otp sent or not
  const [status, setStatus] = useState('');

  //save the new password
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  //to set the state to initialize the contract interaction
  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: "0xf537B7f5d1e043315A4f0fCbCC4Ac087b229B902", 
    contract: null
  });

  const navigate = useNavigate();
  const  { abi } = ContractABI

  const validate = (value) => { 
    if (validator.isStrongPassword(value, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
        alert('Strong Password');
    } else { 
        alert('Password should contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.');
        throw new Error('Password is not strong.');
    } 
  }

  const handleChangePassword = async() => {
      try {
        if(!formData.newPassword || !formData.confirmPassword) {
            throw new Error('Please fill all the fields');
        }

        if(formData.newPassword !== formData.confirmPassword){
          alert('Password does not match. Please fill the correct passwords.');
          throw new Error('Please fill the correct password.');
        }

        //to check the password validation
        validate(formData.newPassword);

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
            state.contract = new ethers.Contract(state.contractAddress, abi, state.signer);
        }
        
        console.log('transaction is initiating..');
        const transaction = await (state.contract).updatePassword(
            formData.newPassword
        );

        console.log('Transaction submitted to the network. Waiting for finalization...');
        const transactionReceipt= await transaction.wait();
        const eventLog = transactionReceipt.logs;
        const eventArgs = eventLog[0].args;
        console.log(eventArgs[1]);
        
        if(eventArgs[1]== true){
            console.log('Transaction is a success..');
            alert('Successfully changed the password...');
            navigate('/login');
        }
        else{
            console.log('Transaction is a failure..');
            console.log('Please fill correct credentials.');
            alert('An error occured. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error:', error.message || error);
        alert(`An error occured.`);
      }
  }

  const handleSendOTP = async() => {
    if(email) {
      const OTP = Math.floor(Math.random()*9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
      setEmail(email);

      axios.post("http://localhost:5000/mail/sendemail", {
        OTP: OTP,
        recipient_email: email,
      })
      .then(setStatus('OTP_SENT'))
      .catch((error) => {console.log(error);});
    } 
    else{
      alert("Please enter your email.");
    }
  };

  const handleVerifyOTP = () => {
    if (userOTP == otp) {
      console.log('OTP verified successfully.');
      alert('OTP verified successfully.');
      setStatus('OTP_VERIFIED');
      // Perform any action after successful OTP verification
    } else {
      console.log('OTP verification failed. Please enter the correct OTP.');
      alert('OTP verification failed. Please enter the correct OTP.');
      // Perform any action on OTP verification failure
    }
  };
//   const navigateTologinPage = async() => {
//     navigate('/login');
//   }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'userotp') {
      setUserOTP(value);
    } else if (name === 'newPassword') {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    } else if (name === 'confirmPassword') {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

    return (
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
            Forgot Password
          </Typography>
          {status !== 'OTP_VERIFIED' ? (
            <>
              <Box sx={{ mt: "10px", margin: "20px" }}>
                <TextField
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  label="Enter Your Email"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              {status === 'OTP_SENT' ? (
                <>
                  <Box sx={{ mt: "10px", margin: "20px" }}>
                    <TextField
                      id="userotp"
                      value={userOTP}
                      onChange={handleInputChange}
                      name="userotp"
                      label="Enter the OTP"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mt: "10px", margin: "20px" }}>
                    <Button onClick={handleVerifyOTP} variant="contained" fullWidth sx={{ padding: "15px" }}>
                      Verify OTP
                    </Button>
                  </Box>
                </>
              ) : (
                <Box sx={{ mt: "10px", margin: "20px" }}>
                  <Button onClick={handleSendOTP} variant="contained" fullWidth sx={{ padding: "15px" }}>
                    Send OTP
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <>
              <Box sx={{ mt: "10px", margin: "20px" }}>
                <TextField
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  name="newPassword"
                  label="New Password"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
                <TextField
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
                <Button onClick={handleChangePassword} variant="contained" fullWidth sx={{ padding: "15px" }}>
                  Change Password
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    );
};

export default ForgotPassword;