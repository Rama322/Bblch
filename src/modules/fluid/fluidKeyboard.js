import { Markup } from 'telegraf';

const childFluidKeyboard = Markup.inlineKeyboard([
  Markup.button.callback('Щелочные', 'alkaline'),
  Markup.button.callback('Солевые', 'salt'),
  Markup.button.callback('Без никотина', 'nonNicotine'),
]);

export { childFluidKeyboard };
