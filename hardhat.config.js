require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */

const apiKey = process.env.API_KEY
const private_key = process.env.PRIVATE_KEY;
const etherscan_api_key = process.env.ETHERSCAN_API_KEY
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337
    },
    mumbai: {
        url: apiKey,
        accounts: [private_key]
    },
    sepolia: {
      url: apiKey,
      accounts: [private_key]
  }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscan_api_key
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
};

