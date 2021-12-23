import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ganache";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Hardhat configurations
// Binance Smart Chain

const config: HardhatUserConfig = {
  solidity: { 
    version: "0.8.0",
    settings: {
      optimizer: true
    }
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: process.env.LOCALHOST_URL
    },
    hardhat: {
    },
    testnet: {
      url: process.env.BSC_TESTNET_URL,
      chainId: 97,
      gasPrice: 20000000000,
      accounts:
        process.env.METAMASK_TESTNET_KEY !== undefined ? [process.env.METAMASK_TESTNET_KEY] : [],
    },
    mainnet: {
      url: process.env.BSC_MAINNET_URL,
      chainId: 97,
      gasPrice: 20000000000,
      accounts:
        process.env.METAMASK_MAINNET_KEY !== undefined ? [process.env.METAMASK_MAINNET_KEY] : [],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};

export default config;
