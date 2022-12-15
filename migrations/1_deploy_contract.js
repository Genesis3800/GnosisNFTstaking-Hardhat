const Fuel = artifacts.require("Fuel");
const Rewards = artifacts.require("Rewards");

module.exports = async function (deployer) {

  await deployer.deploy(Fuel);
  await deployer.deploy(Rewards, Fuel.address);
};