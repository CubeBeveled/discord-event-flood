const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();

const client = new Client();

const envVariables = [
  "GUILD_ID",
  "TOKEN",
  "EVENT_NAME",
  "EVENT_LOCATION",
  "EVENT_COUNT",
  "EVENT_START_TIME",
  "EVENT_END_TIME",
];

if (envVariables.some((variabel) => !process.env[variabel])) {
  throw new Error(
    `One of the variables is not defined in the .env file (variables: ${envVariables.join(
      ", "
    )})`
  );
}

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}`);
  const guild = await client.guilds.fetch(process.env.GUILD_ID);

  // Modify the line below to customize event names
  const name = process.env.EVENT_NAME;
  const location = process.env.EVENT_LOCATION;
  const count = process.env.EVENT_COUNT;
  const scheduledStartTime = new Date(process.env.EVENT_START_TIME * 1000);
  const scheduledEndTime = new Date(process.env.EVENT_END_TIME * 1000);

  const promises = [];
  for (let i = 0; i < count; i++)
    promises.push(
      guild.scheduledEvents.create({
        name,
        privacyLevel: 2,
        entityType: 3,
        scheduledStartTime,
        scheduledEndTime,
        entityMetadata: {
          location,
        },
      })
    );

  await Promise.all(promises);
  console.log(`Created ${count} events`);
  process.exit(0);
});

client.login(process.env.TOKEN);
