# ether-cli-wallet

A Ethereum command-line wallet built with **ethers.js**. This wallet lets you check balances and send ETH using a terminal interface.

## Features

- Check the ETH balance of any address
- Send ETH from your wallet to another address
- Uses environment variables for secure key and RPC management

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/DappCoderr/ether-cli-wallet.git
cd ether-cli-wallet
```

2. **Install dependencies**

```bash
npm i
```

3. **Set up environment variables**

Create a `.env` file in the root of the project:

```env
RPC_PROVIDER=your_rpc_url_here
PRIVATE_KEY=your_private_key_here
```

> Use a service like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/) to get an RPC URL.

## Usage

Run the wallet from the terminal:

```bash
node src/index.js
```

Follow the prompts:

```
Welcome to the ether-cli-wallet
Your address is: 0x...

What do you want to do?
1. Check balance
2. Send ETH
>
```

### Check Balance

- Enter any Ethereum address to see its balance in ETH.

### Send ETH

- Provide the recipient address and the amount of ETH to send the transaction.
- You’ll get the transaction hash once it's confirmed.

## Built With

- [ethers.js](https://docs.ethers.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [readline-sync](https://www.npmjs.com/package/readline-sync)

Feel free to fork, contribute, or use it however you'd like.
