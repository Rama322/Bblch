import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const partsMainCommand = Composer.action('parts', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Комплектующие:</b>', { parse_mode: 'HTML' });

  const parts = categoryFind(allData, 'parts');

  batchesMessageSend(parts, ctx);
});
export { partsMainCommand };
