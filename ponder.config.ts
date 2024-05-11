import { createConfig } from "@ponder/core";
import { http } from "viem";

import { BBitsCheckInAbi } from "./abis/BBitsCheckInAbi";

export default createConfig({
  networks: {
    base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
  },
  contracts: {
    BBitsCheckIn: {
      abi: BBitsCheckInAbi,
      address: "0xe842537260634175891925f058498f9099c102eb",
      network: "base",
      startBlock: 14163892,
    },
  },
});
