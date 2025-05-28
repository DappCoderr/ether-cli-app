import { config } from "dotenv";

config();

export const rpc = process.env.RPC_PROVIDER;
export const api = process.env.PRIVATE_KEY;
