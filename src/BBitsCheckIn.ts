import { ponder } from '@/generated'

ponder.on('BBitsCheckIn:CheckIn', async ({ event, context }) => {
  const { Account, CheckIn } = context.db
  const { sender, timestamp } = event.args

  await CheckIn.create({
    id: event.log.id,
    data: {
      address: sender,
      timestamp,
    },
  })

  await Account.upsert({
    id: sender,
    create: {
      streak: 1,
      count: 1,
      latestCheckIn: timestamp,
    },
    update: ({ current }) => {
      const previousCheckIn = current.latestCheckIn
      const isWithin48Hours = timestamp - previousCheckIn < 48 * 60 * 60 * 1000

      return {
        streak: isWithin48Hours ? current.streak + 1 : 1,
        count: current.count + 1,
        latestCheckIn: timestamp,
      }
    },
  })
})
