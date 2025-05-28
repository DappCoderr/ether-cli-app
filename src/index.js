import { formatEther, JsonRpcProvider, parseEther, Wallet } from "ethers";
import readline from "readline-sync";
import { rpc, api } from "./config";

const provider = new JsonRpcProvider(rpc);
const wallet = new Wallet(api, provider);
const address = wallet.address;

async function main() {
  console.log("Welcome to the ether-cli-wallet");
  console.log("Your address is:", address);
  const choice = readline.question(
    "\nWhat do you want to do?\n1. Check balance\n2. Send ETH\n> "
  );
  if (choice === "1") {
    const addr = readline.question("Enter the address: ");
    const balance = await provider.getBalance(addr);
    const balanceInWei = formatEther(balance);
    console.log("You Balance is:", balanceInWei);
  } else if (choice === "2") {
    const to = readline.question("Enter recipient address: ");
    const amount = readline.question("Amount in ETH: ");

    // const connectWallet = wallet.connect(provider);
    const tx = await wallet.sendTransaction({
      to,
      value: parseEther(amount),
    });
    console.log("⏳ Sending...");
    await tx.wait();
    console.log("✅ Sent! Tx Hash:", tx.hash);
  } else {
    console.log("Invalid Choice");
  }
}

main().catch((err) => {
  console.error(err);
  throw err;
});
