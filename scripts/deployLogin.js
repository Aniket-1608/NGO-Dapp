const hre = require("hardhat");

async function main() {
  // Hardhat always runs scripts in the context of the current network
  const Login = await ethers.getContractFactory("Login");

  console.log("Deploying Login...");
  const login = await Login.deploy();

  await login.waitForDeployment();
  console.log(`Login contract deployed to: ${login.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
