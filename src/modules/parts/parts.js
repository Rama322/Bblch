import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';

const partsMainCommand = Composer.action('parts', (ctx) => {
  const parts = categoryFind(allData, 'parts');

  //  parts.forEach((el) => ctx.reply(el));
  // ctx.reply(parts.join('\n'));
  console.log(parts);
});
export { partsMainCommand };
