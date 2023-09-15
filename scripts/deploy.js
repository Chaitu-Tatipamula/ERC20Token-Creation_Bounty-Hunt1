const hre = require("hardhat")

async function main(){
  // Deploy the contract
  const tokenContract = await hre.ethers.deployContract('MyToken');
  // Wait for the contract to get deployed
  await tokenContract.waitForDeployment();
  // get address of the deployed comtract 
  console.log("Your Contract Deployement Address:",tokenContract.target);

}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
})