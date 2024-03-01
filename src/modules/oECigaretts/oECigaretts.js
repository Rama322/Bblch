import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';

const oECigarettsMainCommand = Composer.action('oECigaretts', (ctx) => {
  const oECigaretts = categoryFind(allData, 'oECigaretts');

  oECigaretts.forEach((el) => ctx.reply(el));
});

export { oECigarettsMainCommand };
