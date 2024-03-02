import React, { useState } from 'react';
import Web3 from 'web3';
import contractAbi from '../components/MyABI.json';
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";

const ContactUs = () => {
  // State to manage user input
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: null,
    feedback: '',
  });

  const web3 = new Web3(Web3.givenProvider || 'http://localhost:80');
  const contractAddress = '0xbc7e20790528941eb59410fd1e810bf02238c4b9';
  const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
  const [connectedAccount, setConnectedAccount] = useState('');
const [connected, setConnected] = useState(false);

  //contract address :-0x37B1f8173e3a78dE855619649039A87f6520aE08
  const handleContactClick = async () => {
    try {
      // Ensure all required fields are filled
      if (!formData.name || !formData.phoneNumber || !formData.email || !formData.subject || !formData.feedback) {
        alert('Please fill in all fields.');
        return;
      }
      var username = formData.name;
      var phone_number = formData.phoneNumber;
      var email = formData.email;
      var select_a_subject = document.getElementById('subject').value;
      var feedback = formData.feedback;
      console.log("name: ",username,"\nphone: ", phone_number,"\nemail: ", email,"\nselect_a_subject: ", select_a_subject,"\nfeedback: ", feedback);

      try {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("Wallet connected");
          const accounts = await web3.eth.requestAccounts().then(console.log);
          setConnectedAccount(accounts[0]);
          console.log(connectedAccount);
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Wallet connected");
      const accounts = await web3.eth.getAccounts();
      const senderAddress = connectedAccount;
      const result = await contractInstance.methods.storeValues(username, phone_number, email, select_a_subject, feedback).send({
        from: accounts[0],
        gas: 2000000, // Adjust gas limit as needed
        gasPrice: '30000000000', // Adjust gas price as needed
      });

      console.log('Transaction result:', result);
      alert('Contact is saved successfully');
    } catch (error) {
      console.error('Error:', error.message || error);
      alert('An error occurred. Please try again.');
    }
  }

  const subjects = ["General Inquiry", "Technical Support", "Billing Issue"];

  const handleSubjectChange = (event, value) => {
    // Update the subject in the form data
    setFormData(prevData => ({ ...prevData, subject: value }));
  };

  const handleInputChange = (event) => {
    // Update the form data based on user input
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
        <Button  onClick={handleContactClick} variant="contained" fullWidth sx={{ padding: "15px" }}>
              Contact Us
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
