import React, { useState } from 'react';
import { ethers } from 'ethers';
import {
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ContractABI from '../ABIs/LoginABI.json'
import validator from 'validator';
// import { providers } from 'web3';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const SignUp = () => {
  //to save username and password
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    country: '',
    city: '',
    address: '',
    email: '',
    userName: '',
    newPassword: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: "0xf537B7f5d1e043315A4f0fCbCC4Ac087b229B902"
  });

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

  const userSignUp = async () => {
    try {
      if(!formData.address || !formData.city || !formData.confirmPassword || !formData.country || !formData.email || 
        !formData.mobile || !formData.name || !formData.newPassword || !formData.userName) {
        throw new Error('Please fill in all the fields.');
      }

      if(formData.newPassword !== formData.confirmPassword){
        alert('Password does not match. Please fill the correct passwords.');
        throw new Error('Please fill the correct password.');
      }

      //to check the password validation
      validate(formData.newPassword);

      if((formData.newPassword).length < 8 ){
        alert('Password should contain atleast 8 characters.');
        throw new Error('Password should contain atleast 8 characters.');
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

      
      // if(state.provider == null){
        state.provider = new ethers.BrowserProvider(window.ethereum);
        state.signer = await (state.provider).getSigner();
      // }
      
      const contract = new ethers.Contract(state.contractAddress, abi, state.signer)
      
      console.log('Transaction is initiating...');
      const transaction = await contract.registerUser(
        formData.name,
        formData.mobile,
        formData.country,
        formData.city,
        formData.email,
        formData.address,
        formData.userName,
        formData.newPassword
      );

      console.log('Transaction submitted to the network. Waiting for finalization...');
      const transactionReceipt= await transaction.wait();
      const eventLog = transactionReceipt.logs;
      const eventArgs = eventLog[0].args;
      console.log(eventArgs[1]);
      
      if(eventArgs[1]=== true){
        console.log('Transaction is a success..');
        alert('Successfull sign up...');
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
                Sign Up
              </Typography>
              <Box sx={{ mt: "10px", margin: "20px" , display: "inline-flex", justifyContent: "left"}}>
                <TextField
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  label="Name"
                  variant="outlined"
                //   fullWidth
                />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "right"}}>
              <TextField
                id="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                label="Mobile Number"          
                name="mobile"
                variant="outlined"
                // fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "left" }}>
              <TextField
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                label="Country"          
                name="country"
                variant="outlined"
                // fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px", display: "inline-flex", justifyContent: "right" }}>
              <TextField
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                label="City"          
                name="city"
                variant="outlined"
                // fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                label="Email"          
                name="email"
                variant="outlined"
                fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                label="Address"          
                name="address"
                variant="outlined"
                fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="userName"
                value={formData.userName}
                onChange={handleInputChange}
                label="User Name"          
                name="userName"
                variant="outlined"
                fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                label="New Password"          
                name="newPassword"
                variant="outlined"
                fullWidth
              />
              </Box>
              <Box sx={{ mt: "10px", margin: "20px" }}>
              <TextField
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                label="Confirm Password"          
                name="confirmPassword"
                variant="outlined"
                fullWidth
              />
              </Box>
                <Box sx={{ mt: "10px", margin: "20px" }}>
                <Button onClick={userSignUp} variant="contained" fullWidth sx={{ padding: "15px" }}>
                  Sign up
                </Button>
                </Box>
            </Box>
          </Box>
    </>
    );
};
export default SignUp;