import { Composer } from 'telegraf';
import { allData } from '../../../index.js';
import { categoryFind } from '../../utils/categoryFind.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const tobaccoMainCommand = Composer.action('tobacco', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Табак:</b>', { parse_mode: 'HTML' });

  const tobacco = categoryFind(allData, 'tobacco');

  batchesMessageSend(tobacco, ctx);
});

export { tobaccoMainCommand };
