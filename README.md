# Installation
## Environment
Make sure you have [nodejs](https://nodejs.org/) or a similar js runtime installed

## Download this repository
Click on the green "code" dropdown and click "Download ZIP". After the zip finished downloading extract it where you want

## Install dependencies
In the same folder where the `package.json` file is located (should be folder-you-extracted-the-project-to/main) run the `npm install` command and wait for it to finish

## Configure it
Rename the .env.example file to .env and edit its contents. Replace the placeholder values with what you need/want

# What are the variables
## TOKEN
The token the bot will authenticate with

## GUILD_ID
The ID of the guild the events will be created in

## EVENT_NAME
The name the events will have

## EVENT_START_TIME
The unix timestamp (seconds) of when the event will start

## EVENT_END_TIME
The unix timestamp (seconds) of when the event will end