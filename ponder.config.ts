import { createConfig, loadBalance } from '@ponder/core'
import { http } from 'viem'

import { BBitsCheckInAbi } from './abis/BBitsCheckInAbi'

export default createConfig({
  networks: {
    base: {
      chainId: 8453,
      transport: loadBalance([
        http('https://base.drpc.org'),
        http('https://mainnet.base.org'),
      ]),
    },
  },
  contracts: {
    BBitsCheckIn: {
      abi: BBitsCheckInAbi,
      address: '0xe842537260634175891925f058498f9099c102eb',
      network: 'base',
      startBlock: 14163892,
    },
  },
})
