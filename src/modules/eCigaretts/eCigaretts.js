import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const eCigarettsMainCommand = Composer.action('eCigaretts', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Девайсы:</b>', { parse_mode: 'HTML' });

  const eCigaretts = categoryFind(allData, 'eCigaretts');

  batchesMessageSend(eCigaretts, ctx);
});

export { eCigarettsMainCommand };
