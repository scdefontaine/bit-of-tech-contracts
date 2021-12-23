# Bit Of Tech Smart Contracts

This Typesscript-based Hardhat project deploys Binance Smart Chain contracts used in the Bit Of Tech admin dashboard.

# Hardhat Commands

1. Install the project dependencies at the root folder
```shell
npm install
```

2. Start a hardhat node, generating a local network and wallet keys. Leave this running in the seperate terminal.
```shell
npx hardhat node
```

3. Copy/paste one of the wallet credentials into the HARDHAT_LOCAL_ADDRESS and HARDHAT_LOCAL_KEY, respectively.

4. Open a new terminal and compile the project.
```shell
npx compile
```

5. Use the following command to run tests
```shell
npm run test
# or npx hardhat test
```

5. Deploy the contract to the localnet, testnet, or mainnet Binance Smart Chain

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Bscscan API key, your Binance node URL, and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
npx hardhat run --network localhost scripts/deploy.js
# npx hardhat run --network testnet scripts/deploy.js
# npx hardhat run --network mainnet scripts/deploy.js
```

6. Verify project deployment on BSCscan.

You can manually check the deployment status here:
https://bscscan.com/ or https://testnet.bscscan.com/

Copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:
```shell
npx hardhat verify --network testnet DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# General Hardhat Commands

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
