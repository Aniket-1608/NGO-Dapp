const hre = require("hardhat");

async function main() {

    const ERC20ContractAddress = "0x68f58BD21774696baC7635C4e48FDd8Cc0d0A6a2";
    console.log("Deploying Faucet...");
    const Faucet = await hre.ethers.deployContract("Faucet", [ERC20ContractAddress]);
    // const Faucet = await ethers.getContractFactory("Faucet");

    // const faucet = await Faucet.deploy(ERC20ContractAddress);

    await Faucet.waitForDeployment();
    // console.log(faucet);
    console.log(`Faucet contract deployed to: ${Faucet.target}`);
    // faucet address: 0xCb3D2F69415D6dF8d500953881B2563d1f0714BF
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
