import { Composer } from "telegraf";

const partsMainCommand = Composer.action("parts", (ctx) => {
  ctx.reply("100rub");
});
export { partsMainCommand };
