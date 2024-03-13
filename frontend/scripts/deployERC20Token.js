const hre = require("hardhat");

async function main() {
  // Hardhat always runs scripts in the context of the current network
  const ERC20Token = await ethers.getContractFactory("ERC20Token");

  console.log("Deploying ERC20Token...");
  const erc20token = await ERC20Token.deploy();

  await erc20token.waitForDeployment();
  console.log(`ERC20Token contract deployed to: ${erc20token.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
