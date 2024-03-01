import { Composer } from "telegraf";

const tobaccoMainCommand = Composer.action("tobacco", (ctx) => {
  ctx.reply("100rub");
});

export { tobaccoMainCommand };
