import { useEffect, useState } from "react";
import ContractABI from "../ABIs/LoginABI.json";
import { ethers } from "ethers";

const Checkbox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [state, setState] = useState({
        provider:null,
        signer: null,
        contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3", //hardhat contract address
        contract: null
      });
    
    const  { abi } = ContractABI
    const handleOnChange = () => {
        setIsChecked((prev) => !prev);
        if (!isChecked) {
            getUserRole(); // Call getUserRole when checkbox is checked
        }
    }
    const getUserRole = async () => {
        try {
          if(!window.ethereum) {
            throw new Error('Metamask is not Installed');
          }
    
          await window.ethereum
          .request({ method: "eth_requestAccounts" })
            .catch((err) => {
                if (err.code === 4001) {
                    console.log("Please connect to MetaMask.");
                } else {
                    console.error(err);
                }
            });
          
          if(state.provider == null){
            state.provider = new ethers.BrowserProvider(window.ethereum);
            state.signer = await (state.provider).getSigner();
          }
    
          if(state.contract == null){
            state.contract = new ethers.Contract(state.contractAddress, abi, state.signer)
            console.log('Transaction is initiating...');
          }
    
          const transaction = await (state.contract).getUserRole();
    
          console.log('Transaction submitted to the network. Waiting for finalization...');
          const transactionReceipt= await transaction.wait();
          const eventLog = transactionReceipt.logs;
          console.log(eventLog);
          const eventArgs = eventLog[0].args;
          console.log(eventArgs);
          console.log(eventArgs[1]);
    
          if(eventArgs[1] != "0n"){
            console.log("Transaction is a failure..");
            alert("Role is not User. Please check your role.");
          } else {
            console.log("Transaction is a success..");
            alert("Role is correct.");
          }
    
        } catch (error) {
          console.error('Error:', error.message || error);
          alert('An error occured. Please try again.');
        }
    }
    useEffect(() => {
        console.log(isChecked ? "Selected" : "Not Selected");
    }, [isChecked]);
    return(
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked = {isChecked} onChange={handleOnChange}/>
                <span>{label}</span>
            </label>
        </div>
    );
};
export default Checkbox;