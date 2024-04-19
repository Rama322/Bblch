import allData from './Products.json' with { type: 'json' };
import 'dotenv/config';
import { Telegraf, Scenes, session } from 'telegraf';
import { mainKeyboard, parentCategoryKeyboard } from './src/mainKeyboard.js';
import {
  alkalineCommand,
  dIYCommand,
  fluidMainCommand,
  nonNicotineCommand,
  saltCommand,
} from './src/modules/fluid/fluid.js';
import { eCigarettsMainCommand } from './src/modules/eCigaretts/eCigaretts.js';
import { oECigarettsMainCommand } from './src/modules/oECigaretts/oECigaretts.js';
import { partsMainCommand } from './src/modules/parts/parts.js';
import { tobaccoMainCommand } from './src/modules/tobacco/tobacco.js';
import { searchScene } from './src/modules/search/search.js';

const bot = new Telegraf(process.env.API_KEY);

bot.use(session());
const stage = new Scenes.Stage([searchScene]);
bot.use(stage.middleware());

bot.command('start', (ctx) => {
  ctx.reply('Здравствуйте, выберите команду:', mainKeyboard);
});

bot.hears('Прайс лист', async (ctx) => {
  await ctx.reply('Категории:', parentCategoryKeyboard);
});

bot.hears('Поиск', (ctx) => ctx.scene.enter('searchWizard'));

//Root categories commands
bot.use(
  eCigarettsMainCommand,
  fluidMainCommand,
  oECigarettsMainCommand,
  partsMainCommand,
  tobaccoMainCommand,
);
//Parent categories commands
bot.use(alkalineCommand, saltCommand, nonNicotineCommand, dIYCommand);

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export { allData, bot };
