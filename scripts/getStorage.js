// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

const hre = require("hardhat");
const provider = ethers.getDefaultProvider(
  "https://json-rpc.testnet.swisstronik.com/"
);

let contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";

async function main() {
    const result = await ethers.provider.getStorage(contractAddress, 1);
    console.log("Slot 0: ", result);

  const contract = new ethers.Contract(
    contractAddress,
    ["function getMessage() public view returns(string memory)"],
    provider
  );

  let readMsg = await contract.getMessage();
  console.log("read msg", readMsg);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
