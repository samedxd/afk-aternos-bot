const mineflayer = require('mineflayer');
const fs = require('fs');
const readline = require('readline');

let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);

let host = data["ip"];
let username = data["name"];

const bot = mineflayer.createBot({
  host: host,
  username: username
});

bot.on('login', function() {
  console.log("Logged In");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    bot.chat(input);
  });
});
