// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const VoteManagerContract = await ethers.getContractFactory("VoteManager");
  const voteManagerContractDeployed = await VoteManagerContract.deploy();

  await voteManagerContractDeployed.deployed();

  // const chainId = await ethers.provider.getNetwork().then(network => network.chainId);
  // console.log("Chain ID:", chainId);

  console.log("VoteManager deployed to:", voteManagerContractDeployed.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
