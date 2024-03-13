
import { useState,useEffect } from "react";
import {ethers} from "ethers";
import erc20abi from "./ERC20abi.json";
import ErrorMessage from ErrorMessage;
import TxList from "./TxList";

export default function App() {
    const [txs,setTxs]=useState([]);
    const [contractListened,setContractListened]=useState();
    const [error,setError] = useState();
    const [contractInfo,setContractInfo]=useState({
        address: "-"
        tokenName: "-"
        tokenSymbol: "-"
        totalSupply: "-"

    });
    const [balanceInfo,setBalanceinfo]=useState({
        address: "-"
        balance: "-"    
    });
    
    useEffect(() => {
        if (contractInfo.address !== "-") {
            const provider=new ethers.providers.web3Provider(window.ethereum);
            const erc20=new ethers.contract(
                contractInfo.address,
                erc20abi,
                provider
            );
            erc20.on("Transgfer",(from,to,amount,event)=>{
                console.log({from,to,amount,event});

                // move information of transaction to a state
            setTxs((currentTxs)=>[
                ...currentTxs,
                {
                    txnHash:event.transactionHash,
                    from,
                    to,
                    amount:String(amount)

                }
            ]);

            });
            setContractListened(erc20);
            return () => {
                contractListened.removeAllListeners();
            };
        }
},[contractInfo.address]);


    const handleSubmit=async (e) => {
        e.preventDefault();
        const data=new FormData(e.target);
        const provider = new ethers.providers.web3Provider(window.ethereum);
        const erc20 = new ethers.contract(data.get("addr"),erc20abi,provider);

        const tokenName=await erc20.name();
        const tokenSymbol=await erc20.symbol();
        const totalSupply=await erc20.totalSupply();

        setContractInfo({
            address: data.get("addr"),
            tokenName,
            tokenSymbol,
            totalSupply
        });

    };

    const getMyBalance = async () => {
        const provider = new ethers.providers.web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const erc20 = new ethers.Contract(contractInfo.address, erc20abi, )
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        const balance  = await erc20.balanceOf(signerAddress);
       setBalanceinfo({
            address: signerAddress,
            balance: String(balance);
        });
         };

    const handleTransfer = async (e) => {;
    e.preventDefault();
    const data=new FormData(e.target);
    const provider = new ethers.providers.web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.contract(contractInfo.address,erc20abi,signer);
    await erc20.transfer(data.get("recipient"),data.get("amount"));
    };
    
    

    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
         <div>
            <form className="m-4" onSubmit={handleSubmit}>
               <div className="credit-card w-full lg:w-3/4 sm:w-auto shadow" onSubmit={handleSubmit}/>
               <main className="mt-4 p-4">
                <h1 className="text-xl font-semibo;d text-gray-700 text-centre"/>
               </main>


            </form>
            </div>
            </div>
    )

}

