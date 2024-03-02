const hre = require("hardhat");

async function main() {
  // Hardhat always runs scripts in the context of the current network
  const Contact = await ethers.getContractFactory("Contact");

  console.log("Deploying Contact...");
  const contact = await Contact.deploy();

  await contact.waitForDeployment();
  console.log(`Contact deployed to: ${contact.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
