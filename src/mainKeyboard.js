import { Markup } from 'telegraf';

const mainKeyboard = Markup.keyboard([
  ['Прайс лист', 'Гарантийные условия', 'Поиск'],
]).resize();

const parentCategoryKeyboard = Markup.inlineKeyboard([
  [
    Markup.button.callback('Девайсы', 'eCigaretts'),
    Markup.button.callback('Одноразки', 'oECigaretts'),
  ],
  [
    Markup.button.callback('Жидкости', 'fluid'),
    Markup.button.callback('Табак', 'tobacco'),
  ],
  [Markup.button.callback('Комплектующие', 'parts')],
]);

export { mainKeyboard, parentCategoryKeyboard };
