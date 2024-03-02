import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';
import batchesMessageSend from '../../utils/batchesMessageSend.js';

const oECigarettsMainCommand = Composer.action('oECigaretts', async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Одноразовые электронные сигареты:</b>', {
    parse_mode: 'HTML',
  });

  const oECigaretts = categoryFind(allData, 'oECigaretts');

  batchesMessageSend(oECigaretts, ctx);
});

export { oECigarettsMainCommand };
