import React, { useState } from 'react';
import * as ethers from 'ethers';
import ContractABI from '../artifacts/contracts/contact.sol/ContactABI.json'

import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";

// console.log(Array.isArray(abi));
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: null,
    numericSubject: -1,
    feedback: '',
  });

  const [state, setState] = useState({
    provider:null,
    signer: null,
    contractAddress: null
  })

  const [account, setAccount] = useState('Not Connected!')
  //hardhat address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
  //sepolia testnet address: 0x71dfB14665cEC91a3bC6B5ED51F1aE1869Df92a5
  const contractAddress = '0x71dfB14665cEC91a3bC6B5ED51F1aE1869Df92a5'; // Deployed contract address
  const { abi } = ContractABI


  const handleContactClick = async () => {
    try {
        if (!formData.name || !formData.phoneNumber || !formData.email || !formData.subject || !formData.feedback) {
            throw new Error('Please fill in all fields.');
        }
        
        let signer = null;
        let provider;

        // for injected providers 
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
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
        const account = accounts[2];
        setAccount(account);

        provider = new ethers.BrowserProvider(window.ethereum) //read the blockchain
        signer = await provider.getSigner(); //write on the blockchain
        // console.log(signer);

        const contract = new ethers.Contract(contractAddress, abi, signer)
        setState(provider, signer, contractAddress);
        // console.log(contract);

        const _name = formData.name;
        const phone_number = formData.phoneNumber;
        const _email = formData.email;
        const _subject = formData.numericSubject;
        const _feedback = formData.feedback;

        console.log("Transaction is initiating....");
        const transaction = await contract.storeValues(
            _name,
            phone_number,
            _email,
            _subject,
            _feedback
        );
        console.log("Transaction submitted to the network but yet to be finalized..");
        await transaction.wait();

        console.log('Transaction is a success and added on the Blockchain');
        alert('Thank you for reaching out to us. We will get back to you ASAP!');
    } catch (error) {
        console.error('Error:', error.message || error);
        alert('An error occurred. Please try again.');
    }
};

  const subjects = ["General Inquiry", "Technical Support", "Billing Issue"];

  const handleSubjectChange = (event, newValue) => {
    let numericValue = -1; // Default value if conversion fails
  
    switch(newValue) {
      case "General Inquiry":
        numericValue = 0;
        break;
      case "Technical Support":
        numericValue = 1;
        break;
      case "Billing Issue":
        numericValue = 2;
        break;
      default:
        // Handle the case where the selected value is not recognized
        break;
    }
  
    // Update the form data with the selected value and its numerical representation
    setFormData(prevData => ({
      ...formData,
      subject: newValue,
      numericSubject: numericValue
    }));
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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
          Contact Us
        </Typography>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <Autocomplete
            disablePortal
            id="subject"
            options={subjects}
            value={formData.subject}
            onChange={handleSubjectChange}
            renderInput={(params) => (
              <TextField {...params} label="Select a Subject" />
            )}
          />
        </Box>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <TextField
            id="feedback"
            name="feedback"
            label="Feedback"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.feedback}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ mt: "10px", margin: "20px" }}>
          <Button onClick={handleContactClick} variant="contained" fullWidth sx={{ padding: "15px" }}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
