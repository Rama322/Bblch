import { Composer } from "telegraf";
import { childFluidKeyboard } from "./fluidKeyboard.js";

const fluidMainCommand = Composer.action("fluid", (ctx) => {
  ctx.reply("Выберите тип жидкости:", childFluidKeyboard);
});

const alkalineCommand = Composer.action("alkaline", (ctx) => {
  ctx.reply("СОСИ ХУЙ!:");
});

export { alkalineCommand, fluidMainCommand };
