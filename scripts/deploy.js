const hre = require("hardhat")

async function main(){

  const tokenContract = await hre.ethers.deployContract('MyToken');

  await tokenContract.waitForDeployment();

  console.log("Your Contract Deployement Address:",tokenContract.target);

}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
})