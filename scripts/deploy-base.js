const hre = require("hardhat");

async function main() {
  const Example = await hre.ethers.getContractFactory("Example");
  const example = await Example.deploy("Hello Base!");

  await example.waitForDeployment();

  console.log("Deployed to:", await example.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
