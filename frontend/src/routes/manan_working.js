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

class manan extends Component {
   componentWillMount(){
this.loadBlockchainData()
}


  
async loadBlockchainData()   {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getId()
    console.log("Hey network is:",network)
    const accounts = await web3.eth.getAccounts()
this.setState({account: accounts[0] })
 //   const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
 //   const contract = new web3.eth.Contract(contractAbi, contractAddress);
  //  console.log("account",accounts[0])
 //   contract.methods.getValue().call()
    //.then(value => console.log(`The value is ${value}`)).catch(error => console.error(error));
}

constructor(props)
{
    super(props)
    this.state = {account : ''}
}

render() {
return (
<div className="container">
<h1> Hello, World!</h1>
<p> Your account: {this.state.account}</p>
</div>
);
}
}

export default manan;
