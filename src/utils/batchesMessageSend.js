export default (messages, ctx) => {
  let symbolsCount = 0;
  let messageBatch = [];

  messages.forEach((message) => {
    symbolsCount += message.length;
    if (symbolsCount >= 3500) {
      ctx.reply(messageBatch.join('\n'));

      messageBatch = [];
      symbolsCount = 0;
    }
    messageBatch.push(message);
  });
  ctx.reply(messageBatch.join('\n'));
};
