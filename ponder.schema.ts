import { createSchema } from '@ponder/core'

export default createSchema((p) => ({
  Account: p.createTable({
    id: p.hex(),
    streak: p.int(),
    count: p.int(),
    latestCheckIn: p.bigint(),
    checkIns: p.many('CheckIn.address'),
  }),

  CheckIn: p.createTable({
    id: p.string(),
    address: p.hex().references('Account.id'),
    timestamp: p.bigint(),
  }),
}))
