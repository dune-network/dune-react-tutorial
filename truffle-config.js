const { mnemonic, secret, password, email } = require("./faucet.json");
const { alice } = require("./scripts/sandbox/accounts");
module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  contracts_directory: "./contracts",
  networks: {
    development: {
      host: "http://localhost",
      port: 8733,
      network_id: "*",
      secretKey: alice.sk,
      type: "dune"
    },
    mainnet: {
      host: "https://mainnet-node.dunscan.io",
      network_id: "*",
      secret,
      mnemonic,
      password,
      email,
      type: "dune"
    },
    testnet: {
      host: "https://testnet-node.dunscan.io",
      network_id: "*",
      secret,
      mnemonic,
      password,
      email,
      type: "dune"
    }
  }
};
