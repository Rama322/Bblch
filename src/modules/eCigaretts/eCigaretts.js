import { Composer } from 'telegraf';
import { categoryFind } from '../../utils/categoryFind.js';
import { allData } from '../../../index.js';

const eCigarettsMainCommand = Composer.action('eCigaretts', (ctx) => {
  const eCigaretts = categoryFind(allData, 'eCigaretts');

  eCigaretts.forEach((el) => ctx.reply(el));
});

export { eCigarettsMainCommand };
