import { useState } from "react";
import ContractABI from "../ABIs/LoginABI.json";
import { ethers } from "ethers";

const Checkbox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);
    
    const  { abi } = ContractABI

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
          
          const contractAddress = "0x27e7D78dae4A496b1f352747080D325260346FAc";
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          
          const contract = new ethers.Contract(contractAddress, abi, signer);
          console.log('Transaction is initiating...');
    
          const transaction = await contract.getUserRole();
          console.log('Transaction submitted to the network. Waiting for finalization...');
          
          const transactionReceipt= await transaction.wait();
          const eventLog = transactionReceipt.logs;
          // console.log(eventLog);
          
          const eventArgs = eventLog[0].args;
          // console.log(eventArgs);
          console.log(eventArgs[1]);

          const result = eventArgs[1].toString();
          console.log(result);

          if(result === "0"){
            console.log("Transaction is a success..");
            alert("Role is user.");
          }
          else if(result === "1"){
            console.log("Transaction is a success..");
            alert("Role is committee member.");
          }
          else if(result === "2"){
            console.log("Transaction is a success..");
            alert("Role is Admin.");
          }
          else {
            console.log("Transaction is a success..");
            alert("Role is government.");
          }
    
        } catch (error) {
          console.error('Error:', error.message || error);
          alert('An error occured. Please try again.');
        }
    }

    const handleOnChange = () => {
      setIsChecked((prev) => !prev);
      if (!isChecked) {
          getUserRole(); // Call getUserRole when checkbox is checked
      }
    }

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