import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import contractAbi  from '../components/MyABI.json';
import { Component } from 'react'
import props from 'prop-types';
//import contractAbi  from '../components/MyABI.json';
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";

const loadBlockchainData = async () =>  {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getId()
    console.log("Hey network is:",network)
 //   const accounts = await web3.eth.getAccounts()
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
  //  console.log("account",accounts[0])
    contract.methods.getValue().call()
    //.then(value => console.log(`The value is ${value}`)).catch(error => console.error(error));
}
/*
constructor(props)
{
    super(props)
    this.state = {account : ''}
}
*/



const asyncFunc = async () => {
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("I am a done promise!"), 3000)
  });

  let result = await promise

  alert(result);
}

const ContactUs = () => {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:80');
  const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
  const contractInstance = new web3.eth.Contract(contractAbi, contractAddress );
const handleContactClick_1 = async () => {  
  try{
    //let promise = new Promise((resolve, reject) => {
      //setTimeout(() => resolve("I reached here in resolve"), 3000)
  //});

  //let result = await promise

  //alert(result);
    alert('I reached here');
    console.log('Hello');
    const result = await contractInstance.methods.ContactUs().send({ from : '0x7cE38a157E3FF7DD562E31D3a8D21B656d67cce8'}).on
    alert('Contact is saved successfully'+ result);
    console.log('my console log');
  } catch (error) {
    console.error(error);
  }
  
  //async function handleContactClick() {
  const handleContactClick = async () => {  
    try{
      alert('I reached here');
      console.log('Hello');
      const result = await contractInstance.methods.ContactUs().send({ from : '0x7cE38a157E3FF7DD562E31D3a8D21B656d67cce8'});
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }  
  }
  const subjects = [
    { label: "General Inquiry" },
    { label: "Technical Support" },
    { label: "Billing Issue" },
  ];
  return (
    <>
    <div>
      
    </div>
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
              id="outlined-basic"
              label="Name changed"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={subjects}
              renderInput={(params) => (
                <TextField {...params} label="Select a Subject" />
              )}
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Feedback"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
          <button onClick={loadBlockchainData} >Contact Us</button>
            
            
          </Box>
        </Box>
      </Box>
      
    </>
  );
  
};

export default ContactUs;
