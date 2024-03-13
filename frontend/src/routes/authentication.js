import ContractABI from '../ABIs/LoginABI.json';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers'; 

const Authentication = () =>{ 

  const  { abi } = ContractABI

  const navigate = useNavigate();

  useEffect( () => {
    const authenticateUser = async () => {
    try {
      if(!window.ethereum) {
        throw new Error('Metamask is not Installed');
      }
  
      await window.ethereum
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
      const contractAddress = "0xbc8F308484Ab30Ae2E243F41287cbE65115495C7";
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
  
      const contract = new ethers.Contract(contractAddress, abi, signer)
      console.log('Transaction is initiating...');
              
      const transaction = await contract.userExists();
      console.log('Transaction submitted to the network. Waiting for finalization...');
      const transactionReceipt= await transaction.wait();
      const eventLog = transactionReceipt.logs;
  
      const eventArgs = eventLog[0].args;
      console.log(eventArgs[1]);
  
      if(eventArgs[1] === true){
          console.log('Transaction is a success..');
          alert('Successfully logged in...');
          // User data exists on the blockchain, authenticate and redirect
          navigate('/home')
      }
      else{
          console.log('Transaction is a failure..');
          alert('User does not exists. please sign up first.');
          // User data does not exists on the blockchain. Redirecting the user to a registration page
          navigate('/signup')
      }
    } catch (error) {
        console.log(error);
      }
    };

  authenticateUser();
  })

  return (
    <div>
      <p>Executing script...</p>
    </div>
  );
};

export default Authentication;

