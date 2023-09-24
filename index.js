require('dotenv').config();
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const { mainKeyboard, specialKeyboard, inlineKeyboard, cokeKeyboard } = require('./src/mainKeyboard');

const bot = new Telegraf(process.env.API_KEY)

bot.command("start", (ctx) => {
    ctx.reply('123', mainKeyboard)
})

bot.command("stop", (ctx) => {
    ctx.reply('123', specialKeyboard)
})

bot.command("pisya", (ctx) => {
    ctx.reply('123', inlineKeyboard)
})

bot.command("popa", (ctx) => {
    ctx.reply('123', cokeKeyboard)
})

bot.hears("Прайс лист", (ctx) => {
    console.log(ctx.chat.id)
    bot.telegram.sendMessage(547170490, '123')
})

bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))