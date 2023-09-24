const { Markup } = require("telegraf");


const mainKeyboard = Markup.keyboard([
    ["Прайс лист", "Гарантийные условия"],
    ["pidr", ":)"]
]).resize()


const specialKeyboard = Markup.keyboard([
    Markup.button.contactRequest('Send contact'),
    Markup.button.locationRequest('Send location')
]).resize()


const inlineKeyboard = Markup.inlineKeyboard([
    Markup.button.callback('Coke', 'Coke'),
    Markup.button.callback('Pepsi', 'popka')
])


const cokeKeyboard = Markup.keyboard([
    Markup.button.callback('Coke', 'piska'),
    Markup.button.callback('Pepsi', 'popka')
])

module.exports = { mainKeyboard, specialKeyboard, inlineKeyboard, cokeKeyboard }