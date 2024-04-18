import { bot } from '../../..';

const searchCommand = async (ctx) => {
  await ctx.deleteMessage();
  await ctx.reply('<b>Введите текст:</b>', {
    parse_mode: 'HTML',
  });
  const textHandler = bot.hears(/.*/, (ctx) => {
    // Проверяем, что сообщение пришло от того же пользователя
    if (ctx.message.from.id === ctx.from.id) {
      // Обрабатываем сообщение
      textHandler.remove();
      ctx.reply(`Ты написал: ${ctx.message.text}`);
    }
  });
};

export { searchCommand };
