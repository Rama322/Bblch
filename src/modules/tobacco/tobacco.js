import { Composer } from 'telegraf';
import { allData } from '../../../index.js';
import { categoryFind } from '../../utils/categoryFind.js';

const tobaccoMainCommand = Composer.action('tobacco', (ctx) => {
  const tobacco = categoryFind(allData, 'tobacco');

  tobacco.forEach((el) => ctx.reply(el));
});

export { tobaccoMainCommand };
