
const { Telegraf } = require('telegraf')
//const dotenv = require('dotenv')

const { teleKey } = require('./config');

//dotenv.config();

const bot = new Telegraf(teleKey)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()