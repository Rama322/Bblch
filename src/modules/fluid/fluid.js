import { Composer } from 'telegraf';
import { childFluidKeyboard } from './fluidKeyboard.js';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';

const fluidMainCommand = Composer.action('fluid', (ctx) => {
  ctx.reply('Выберите тип жидкости:', childFluidKeyboard);
});

const alkalineCommand = Composer.action('alkaline', (ctx) => {
  const alkaline = categoryFind(allData, 'alkaline');

  alkaline.forEach((el) => ctx.reply(el));
});

const saltCommand = Composer.action('salt', (ctx) => {
  const salt = categoryFind(allData, 'salt');

  salt.forEach((el) => ctx.reply(el));
});

const nonNicotineCommand = Composer.action('nonNicotine', (ctx) => {
  const nonNicotine = categoryFind(allData, 'nonNicotine');

  nonNicotine.forEach((el) => ctx.reply(el));
});

const dIYCommand = Composer.action('dIY', (ctx) => {
  const dIY = categoryFind(allData, 'dIY');

  dIY.forEach((el) => ctx.reply(el));
});
export {
  alkalineCommand,
  fluidMainCommand,
  saltCommand,
  nonNicotineCommand,
  dIYCommand,
};
