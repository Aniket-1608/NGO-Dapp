import React, { useState } from "react";
import { ethers, formatEther } from "ethers";
import ContractABI from "../ABIs/DonateABI.json";
import { TextField, Box, Typography, Autocomplete, Button} from "@mui/material";

const ViewDonations = () => {
    
    const { abi } = ContractABI;
    const [transactionHash, setTransactionHash] = useState(null);
    const [userData, setUserData] = useState({
        name: null,
        amount: null,
        localAddress: null,
        panCard: null,
        email: null,
        phoneNumber: null,
        timeStamp: null,
        blockNumber: 1
    })

    const handleTransactionHashClick = async() => {
        try {
            const contractAddress= "0x3C45A122a2a9c6b57b1482bBc11b4dDcf78E19Fd";
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(contractAddress, abi, provider);
            console.log(transactionHash);

            console.log("Getting event logs.");
            const filter = contract.filters.EntryStored
            const events = await contract.queryFilter(filter);
            console.log(events.length);
            console.log(events);
            for (let i = 0; i < events.length; i++) {
                if (events[i].transactionHash === transactionHash) {
                    const userEvent = events[i];
                    const blockNumber = userEvent.blockNumber;
                    const timeStamp = (await provider.getBlock(blockNumber)).timestamp;
                    const userEventArgs = userEvent.args;
                    const arr1 = userEventArgs[1];

                    setUserData(prevState => ({
                        ...prevState,
                        name: arr1[0],
                        amount: formatEther(arr1[1]),
                        localAddress: arr1[2],
                        panCard: arr1[3],
                        email: arr1[4],
                        phoneNumber: arr1[5].toString(),
                        timeStamp: timeStamp,
                    }));
                    const eventArgs = events[0].args;
                    // console.log(eventArgs);
                    console.log(eventArgs[1]);
                    console.log("Details saved to react useState hook.")
                    break; // Exit loop early if condition is found
                }
            }
        } catch (error) {
            console.log(error || error.message);
            alert('Something went wrong');
        }

    };

    const handleInputChange = (event) => {
        setTransactionHash(event.target.value);
    };

    return (
        <>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}>
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
                Donation Details
                </Typography>
                <Box sx={{ mt: "10px", margin: "20px"}}>
                    <TextField
                        id="transactionhash"
                        value={transactionHash}
                        onChange={handleInputChange}
                        name="transactionhash"
                        label="Enter the Transaction Hash"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
                <Box sx={{ mt: '10px', margin: '20px', justifyContent: 'center' }}>
                    <Button onClick={handleTransactionHashClick} variant="contained" color="primary" sx={{ padding: '10px', width: '100%' }}>
                        Get Donation Details
                    </Button>
                </Box>
                <Box sx={{ mt: "10px", margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "20px",
                        }}
                    >
                    User Name: {userData.name}
                    </Typography>
                </Box>
                <Box sx={{ mt: "10px", margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "20px",
                        }}
                    >
                    Amount: {userData.amount} ETH
                    </Typography>
                </Box>
                <Box sx={{ mt: "10px", margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "20px",
                        }}
                    >
                    Local Address: {userData.localAddress}
                    </Typography>
                </Box>
                <Box sx={{  margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            onChange: userData.panCard,
                            mt: "20px",
                        }}
                    >
                    Pan Card: {userData.panCard}
                    </Typography>
                </Box>
                <Box sx={{  margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            onChange: userData.panCard,
                            mt: "20px",
                        }}
                    >
                    Email: {userData.email}
                    </Typography>
                </Box>
                <Box sx={{  margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            onChange: userData.panCard,
                            mt: "20px",
                        }}
                    >
                    Phone Number: {userData.phoneNumber}
                    </Typography>
                </Box>
                <Box sx={{  margin: "20px"}}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            onChange: userData.panCard,
                            mt: "20px",
                        }}
                    >
                    Transaction Timestamp: {userData.timeStamp}
                    </Typography>
                </Box>
                {/* <div>
                    {DonationDetails.map((element, index) => (
                        <div key={index}>
                        <h4>EntryId {index}</h4>
                        <p>Name: {element.name} </p>
                        <p>Amount: {element.amount} </p>
                        <p>Local Address: {element.localAddress} </p>
                        <p>Pan Card: {element.panCard} </p>
                        <p>Email: {element.email}</p>
                        <p>Phone Number: {element.phoneNumber}</p>
                        <p>Transaction Hash: {element.transactionHash}</p>
                        <p>Timestamp: {element.timeStamp}</p>
                        </div>
                    ))}
                </div> */}
            </Box>
        </Box>
        
        </>
        
    );

};
export default ViewDonations;