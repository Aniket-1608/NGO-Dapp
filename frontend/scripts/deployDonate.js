const hre = require("hardhat");

async function main() {
  // Hardhat always runs scripts in the context of the current network
  const Donate = await ethers.getContractFactory("Donate");

  console.log("Deploying Contact...");
  const donate = await Donate.deploy();

  await donate.waitForDeployment();
  console.log(`Donate contract deployed to: ${donate.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
