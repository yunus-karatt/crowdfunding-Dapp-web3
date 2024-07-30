const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:'./.env'})


task("accounts","Prints the list of accounts",async(taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners()
  for(const account of accounts){
    console.log(account.address)
  }
})

const privateKey=process.env.NEXT_PUBLIC_PRRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{},
    polygon:{
      url:process.env.NEXT_PUBLIC_RPC_URL,
      accounts:[privateKey]
    }
  }
};
