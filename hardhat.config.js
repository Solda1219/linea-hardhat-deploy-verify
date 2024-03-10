require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");  
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: { version: "0.8.4", settings: { optimizer: { enabled: true, runs: 200 } }},
  networks: {
    // 'lineaTest':{
    //   url: "https://linea-goerli.blockpi.network/v1/rpc/public",
    //   chainId: 59140,
    //   accounts: [""]
    // },
    linea_mainnet:{
      url: "https://linea.blockpi.network/v1/rpc/public",  
      chainId: 59144,
      accounts: [""]
    },
    
    
  },
  etherscan: {
    apiKey: {
      linea_mainnet: "",
    },
    customChains: [
      // {
      //   network: "sepolia",
      //   chainId: 11155111,
      //   urls: {
      //     apiURL: "https://api-sepolia.etherscan.io/api",
      //     browserURL: "​https://api-sepolia.etherscan.io"
      //   }
      // },
      {
        network: "linea_mainnet", 
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://api.lineascan.build/"
        }
      }
    ]
  },
  // sourcify: {
  //     enabled: true
  //   }
};


// verify cmd
// npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS