import allData from './Products.json' with { type: "json" };
import "dotenv/config";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { mainKeyboard, categoryKeyboard } from "./src/keyboards.js";
import categoryFind from './src/utils/categoryFind.js';
const bot = new Telegraf(process.env.API_KEY);

bot.command("start", (ctx) => {
  ctx.reply("Здравствуйте, выберите команду:", mainKeyboard);
});

bot.hears("Прайс лист", (ctx) => {
  ctx.reply("Категории:", categoryKeyboard);
});

//КАТЕГОРИИ
bot.action("eCigaretts", (ctx) => {  
    const eCigaretts = categoryFind(allData, 'eCigaretts')
    // const currentCategory = allData.STROKI.find((element)=>{
    //     if(element.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
    //         return true
    //     }
    // })
    // const devices = currentCategory.STROKI.find((el)=>{
    //     if (el.NOMENKLATURA === 'DEVAYSY'){
    //         return true
    //     }
    // })
    // const pods = devices.STROKI.find((el)=>{
    //     if (el.NOMENKLATURA === 'POD-MODY'){
    //         return true
    //     }
    // })
    // pods.STROKI.forEach(element => {
    //     ctx.reply(`${element.NOMENKLATURA}. В наличии: ${element.VNALICHIIOSTATOK} Шт.`)
    // });

    eCigaretts.forEach(el=>ctx.reply(el))

});

bot.action("oECigaretts", (ctx) => {
  ctx.reply("100rub");
});

bot.action("fluid", (ctx) => {
  ctx.reply("100rub");
});

bot.action("tobacco", (ctx) => {
  ctx.reply("100rub");
});

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
