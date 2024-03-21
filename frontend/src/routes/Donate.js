import React, { useState } from 'react';
import './Donate.css'; // You can create a CSS file for styling
import * as ethers from 'ethers';
import ContractABI from '../ABIs/DonateABI.json'
import { useNavigate } from 'react-router-dom';


import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";

const  Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    localAddress: '',
    panCard: '',
    email: '',
    mobile: '',
  });

  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: '0x3C45A122a2a9c6b57b1482bBc11b4dDcf78E19Fd'
  })
  const navigate = useNavigate();

  const [account, setAccount] = useState('Not Connected!')
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  // hardhat address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
  // sepolia testnet address: 0x8C529D98B9eF61056e1e8cBc8698a5D91154bAEe
  // const contractAddress = '0x8C529D98B9eF61056e1e8cBc8698a5D91154bAEe'; // Deployed contract address
  const  { abi } = ContractABI
  
  const handleDonateClick = async () => {
    try {
      if(!formData.fullName || !formData.localAddress || !formData.panCard || !formData.email || !formData.mobile) {
          throw new Error('Please fill in all the fields.');
      }

      // let signer = null;
      // let provider;
      let ethBalance=0;

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
      const account = accounts[0];
      setAccount(account);
      
      state.provider = new ethers.BrowserProvider(window.ethereum);
      state.signer = await (state.provider).getSigner();

      const Balance = await (state.provider).getBalance(account);
      ethBalance = ethers.formatEther(Balance);
      setBalance(ethBalance);
      console.log(ethBalance);
      
      const ethAmount = formData.amount;
      setAmount(ethAmount);
      
      console.log(ethAmount);
      
      const weiAmount = ethers.parseEther(ethAmount);
      console.log(weiAmount);
      
      if(Balance > weiAmount){
        const contract = new ethers.Contract(state.contractAddress, abi, state.signer);
        // setState(provider, signer, contractAddress);

        // to cover the gas fee while interacting with the faucet.
        // const gasFeeAddress = 

        console.log('Transfer is initiating...');
        const txTransferAmount = await (state.signer).sendTransaction({
          to: "0x4DfAa76ca8CAAFA071BE5E543f967429070FeCdE",
          value: weiAmount
        });

        let receipt = await txTransferAmount.wait();
        console.log(receipt);

        console.log('Transaction is initiating...');
        const transaction = await contract.storeValues(
          formData.fullName,
          weiAmount,
          formData.localAddress,
          formData.panCard,
          formData.email,
          formData.mobile
        );
        console.log('Transaction submitted to the network...');
        console.log('Waiting for finalization...');
        await transaction.wait();
        
        console.log('Transaction is a success..');
        alert('Thank you for your Donation');
      }
      else{
        console.log("Insufficient Account Balance!");
        console.log("Request tokens from Faucet.");
        navigate('/faucet');
        alert('Request tokens from Faucet.');
        // Faucet();
      }

    } catch (error) {
      console.error('Error:', error.message || error);
      alert('An error occured. Please try again.');
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
            Help For Our Cause
          </Typography>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              value={formData.fullName}
              name="fullName"
              onChange={handleInputChange}
              label="Full Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              value={formData.amount}
              name="amount"
              onChange={handleInputChange}
              label="Amount"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              value={formData.localAddress}
              onChange={handleInputChange}
              label="Local Address"          
              name="localAddress"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Pan Card"          
              name="panCard"
              value={formData.panCard}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Email"          
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Mobile"          
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <Button onClick={handleDonateClick} variant="contained" fullWidth sx={{ padding: "15px" }}>
              Donate
            </Button>
          </Box>
        </Box>
      </Box>
    </>

  );
};

export default Donate;