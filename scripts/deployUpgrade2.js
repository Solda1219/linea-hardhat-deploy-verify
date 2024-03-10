const hre = require("hardhat");
async function main() {
    const PoolF= await hre.ethers.getContractFactory("PoolFactory");
    const PoolFactory = await hre.upgrades.deployProxy(PoolF, ["0x9Ee7F3f78a694E6C0F791c6E05549960b5D85081", "0x9Ee7F3f78a694E6C0F791c6E05549960b5D85081", "here poolmanager contract address", "0x9Ee7F3f78a694E6C0F791c6E05549960b5D85081", 1, 100000000, 100000, 1000000, 10000, 100000, 10, true ], { initializer: 'initialize'});
    console.log("PoolFactory deployed to:", PoolFactory.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });