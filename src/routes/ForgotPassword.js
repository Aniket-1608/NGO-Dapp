import React, { useState } from 'react';
import { ethers } from 'ethers';
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
import ContractABI from '../ABIs/LoginABI.json';
import { useNavigate } from 'react-router-dom';



const ForgotPassword = () => {
  //to save username and password
  const [formData, setFormData] = useState({
    newPassword: ''
  });

  const navigate = useNavigate();
  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: "0xf537B7f5d1e043315A4f0fCbCC4Ac087b229B902", 
    contract: null
  });

  const  { abi } = ContractABI

  const handleForgotPassword = async() => {
      try {
        if(!formData.newPassword) {
            throw new Error('Please fill in the username.');
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

//   const navigateTologinPage = async() => {
//     navigate('/login');
//   }

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
                Forgot Password
              </Typography>
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
                <Button onClick={handleForgotPassword} variant="contained" fullWidth sx={{ padding: "15px" }}>
                  Change Password
                </Button>
              </Box>
            </Box>
          </Box>
    </>
    );
};
export default ForgotPassword;