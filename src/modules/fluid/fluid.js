import { Composer } from 'telegraf';
import { childFluidKeyboard } from './fluidKeyboard.js';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const fluidMainCommand = Composer.action('fluid', async (ctx) => {
  await ctx.deleteMessage();
  ctx.reply('Выберите тип жидкости:', childFluidKeyboard);
});

const alkalineCommand = Composer.action('alkaline', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Щелочные жидкости:</b>', { parse_mode: 'HTML' });
  const alkaline = categoryFind(allData, 'alkaline');

  batchesMessageSend(alkaline, ctx);
});

const saltCommand = Composer.action('salt', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Солевые жидкости:</b>', { parse_mode: 'HTML' });
  const salt = categoryFind(allData, 'salt');

  batchesMessageSend(salt, ctx);
});

const nonNicotineCommand = Composer.action('nonNicotine', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Безникотиновые жидкости:</b>', { parse_mode: 'HTML' });
  const nonNicotine = categoryFind(allData, 'nonNicotine');

  batchesMessageSend(nonNicotine, ctx);
});

const dIYCommand = Composer.action('dIY', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Компоненты для жидкости:</b>', { parse_mode: 'HTML' });
  const dIY = categoryFind(allData, 'dIY');

  batchesMessageSend(dIY, ctx);
});

export {
  alkalineCommand,
  fluidMainCommand,
  saltCommand,
  nonNicotineCommand,
  dIYCommand,
};
