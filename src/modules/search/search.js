import { Composer, Scenes } from 'telegraf';
import { message } from 'telegraf/filters';
import allDataSearch from '../../utils/allDataSearch.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const startSearch = new Composer();
const enterSearchString = new Composer();

const searchScene = new Scenes.WizardScene(
  'searchWizard',
  startSearch,
  enterSearchString,
);

startSearch.on(message('text'), async (ctx) => {
  ctx.reply('Введите текст:');
  return await ctx.wizard.next();
});

enterSearchString.on(message('text'), async (ctx) => {
  const finded = allDataSearch(ctx.message.text);

  if (finded) {
    await batchesMessageSend(finded, ctx);
    return ctx.scene.leave();
  }
  await ctx.reply('Нихуя не нашел');
  return ctx.scene.leave();
});

export { searchScene };
