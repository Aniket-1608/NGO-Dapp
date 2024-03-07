import { useEffect, useState } from "react";
import ContractABI from "../ABIs/FaucetABI.json"
import { ethers } from "ethers";
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
require('dotenv').config();

const private_key = "YOUR PRIVATE KEY";
const apiKey = "NETWORK API KEY";
// const apiKey = process.env.API_KEY
// const private_key = process.env.PRIVATE_KEY;
// console.log(private_key);

function Faucet() {

  const [contractAddress, setContractAddress] = useState('0x4acCdc9883C242d4fb83f9C29949A5Cb42276B3e');
  const [connectedWalletState, setConnectedWalletState] = useState('Not Connected');
  const [connectedWalletAddress, setconnectedWalletAddress] = useState('');
  
  const  { abi } = ContractABI

  const handleConnectWallet = async () => {
    try {
      if(!window.ethereum) {
        throw new Error('Metamask is not Installed');
      }
      console.log('Connecting wallet...');

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
      setconnectedWalletAddress(account);
      setConnectedWalletState('Connected');
      console.log('Wallet connected...');
    } catch (error) {
      console.error('Error:', error.message || error);
      alert('An error occured. Please try again.');
    } 
  };

  const handleGetTokensClick = async () => {
    try {
      if(connectedWalletState != 'Connected') {
          throw new Error('Please connect your wallet.');
      }
      const _apiKey = apiKey;
      const _privateKey = private_key;
      const provider = new ethers.JsonRpcProvider(_apiKey)
      console.log(_apiKey);
      console.log("Got the provider..");
      console.log(_privateKey);
      const wallet = new ethers.Wallet(_privateKey, provider)
      console.log("Got the wallet..");
      const contract = new ethers.Contract(contractAddress, abi, wallet);


      console.log("Getting the balance of the Faucet");
      const Balance = await contract.getBalance();
      // converting from wei to oct.
      const tokenBalance = ethers.formatEther(Balance);
      console.log(tokenBalance);

      if(tokenBalance > 50){
        console.log('Transaction is initiating...');
        const transaction = await contract.requestTokens(connectedWalletAddress);

        console.log('Transaction submitted to the network...');
        console.log('Waiting for finalization...');
        
        await transaction.wait();
        console.log('Transaction is a success..');
        alert('50 tokens send to your wallet');
      }
      else{
        console.log("Insufficient Token Balance in contract!");
        console.log("Contact owner of the contract");
      }

    } catch (error) {
      console.error('Error:', error.message || error);
      alert("ERROR: Insufficient Time Elapsed since last request. Please try again tomorrow..");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'connectedWalletAddress') {
      setconnectedWalletAddress(value);
    }
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
            TOKEN FAUCET
          </Typography>
          <Box sx={{ mt: "10px", margin: "20px", display: "flex",
              justifyContent: "right"}}>
          <Button onClick={handleConnectWallet} variant="contained" color="primary" sx={{ padding: "10px", width: "50%", margin: "auto" }}>
              CONNECT WALLET
            </Button>
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Enter your wallet Address"
              value={connectedWalletAddress}
              name="connectedWalletAddress"
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <Button onClick={handleGetTokensClick} variant="contained" fullWidth sx={{ padding: "15px" }}>
              GET TOKENS
            </Button>
          </Box>
      </Box>
    </Box>


    </>
  );
};

export default Faucet;