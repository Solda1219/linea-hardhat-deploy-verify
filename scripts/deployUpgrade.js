const hre = require("hardhat");
async function main() {
    const PoolM= await hre.ethers.getContractFactory("PoolManager");
    const PoolManager = await hre.upgrades.deployProxy(PoolM, ["0x2c1b868d6596a18e32e61b901e4060c872647b6c", "0x2c1b868d6596a18e32e61b901e4060c872647b6c"], { initializer: 'initialize'});
    console.log("PoolManager deployed to:", PoolManager.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });