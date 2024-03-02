// MyComponent.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MyComponent = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  
  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        // Check if the user has MetaMask installed
        if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWeb3(web3Instance);

          // Set up the contract with its ABI and address
          const contractAddress = '0x38596e2fad3ee0cba69d2a1544c3bb023203f29d';
          const contractABI = [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "x",
                  "type": "uint256"
                }
              ],
              "name": "set",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "storedData",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ];
          const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
          setContract(contractInstance);

          // Get the user's account
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } else {
          alert('Please install MetaMask to use this application.');
        }
      } catch (error) {
        console.error('Error initializing Web3:', error);
      }
    };

    initializeWeb3();
  }, []);

  const handleButtonClick = async () => {
    try {
      // Send a transaction to the smart contract
      alert("i reached here")
      await contract.methods.set(inputValue).send({ from: account });
      console.log('Transaction successful!');
      alert('Contract Successful')
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  return (
    <div>
      <h1>React + Solidity Example</h1>
      <p>Connected Account: {account}</p>
      <input
        type="number"
        placeholder="Enter a value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Set Value</button>
    </div>
  );
};

export default MyComponent;
