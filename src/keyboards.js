import { Markup } from "telegraf";

const mainKeyboard = Markup.keyboard([
  ["Прайс лист", "Гарантийные условия"],
]).resize();

const categoryKeyboard = Markup.inlineKeyboard([
  [
    Markup.button.callback("Поды", "eCigaretts"),
    Markup.button.callback("Одноразки", "oECigaretts"),
  ],
  [
    Markup.button.callback("Жидкости", "fluid"),
    Markup.button.callback("Табак", "tobacco"),
  ],
]);

export { mainKeyboard, categoryKeyboard };