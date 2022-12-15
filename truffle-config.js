require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    GnosisMainnet: {
      provider: () => {
        return new HDWalletProvider([process.env.PRIVATE_KEY], `${process.env.GNOSIS_RPC_URL}`);
      },
      network_id: 100,
    },
    ChiadoTestnet: {
      provider: () =>
        new HDWalletProvider([process.env.PRIVATE_KEY], `${process.env.CHIADO_RPC_URL}`),
      network_id: 10200,
    },
  },

  compilers: {
    solc: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 50,
        },
      },
    },
  },

  plugins: ['truffle-plugin-verify'],
  api_keys: {
    gnosisscan: `${process.env.API_KEY}`
  },
  
};