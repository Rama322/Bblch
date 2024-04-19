export default async (messages, ctx) => {
  let symbolsCount = 0;
  let messageBatch = [];

  messages.forEach(async (message) => {
    //Прибавляем к счетчику длину одной строки
    symbolsCount += message.length;
    //Если строка больше 3к высираем ее в чат и обнуляем счетчик
    if (symbolsCount >= 3000) {
      //Код работает быстрее чем апи телеграма, поэтому такая хуйня
      setTimeout(async () => {
        await ctx.reply(messageBatch.join('\n'));
      }, 100);

      messageBatch = [];
      symbolsCount = 0;
    }
    //Если строка меньше 3к то пушим ее в пакет
    messageBatch.push(message);
  });
  //Высираем если что-то осталось в пакете
  setTimeout(async () => {
    await ctx.reply(messageBatch.join('\n'));
  }, 100);
};
