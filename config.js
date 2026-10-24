export default {
  BOT_TOKEN: process.env.BOT_TOKEN || "ISI_TOKEN_BOTFATHER",
  OWNER_IDS: (process.env.OWNER_IDS || "ISI_ID_TELEGRAM_OWNER").split(","),
  WATERMARK_USERNAME: process.env.WATERMARK_USERNAME || "namabotku"
};
