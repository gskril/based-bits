import { ponder } from "@/generated";

ponder.on("BBitsCheckIn:CheckIn", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("BBitsCheckIn:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("BBitsCheckIn:Paused", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("BBitsCheckIn:Unpaused", async ({ event, context }) => {
  console.log(event.args);
});
