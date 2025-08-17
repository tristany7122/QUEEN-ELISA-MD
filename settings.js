require('dotenv').config({ path: './elisaConfig.env' });
/*
PROJECT: QUEEN ELISA WHATSAPP BOT
VERSION: 4.0.2
OWNER: @darkmakerofc | @MR-NIMA-X
*/

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'QUEENELISA;;;==AOxpGRBVza2UXaRlEV6hmZBJHeRpVQElEazBFc1gVYiBDOfJDVmZlcCRjYjIlSBJVQ4EUMpwd=47678843772',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ‘,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: process.env.MONGODB_URL|| 'mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority',
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: process.env.PORT || 3000,
  BOT_NAME: 'queen elisa',
  OWNER_NAME: 'Tristan',
  OWNER_NUMBER: '27634624586',
  SUDO: '27734887674',
  WORK_TYPE: 'public', // ex: public/private
  WORK_MODE: 'all', // ex: all/only_groups/only_pm
  TIME_ZONE: 'Africa/johannesburg',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ\nmr-nima.vercell.app',
  STICKER_AUTHOR: 'TRISTAN🎀',
  STICKER_PACK: 'QUEEN ELISA',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 900, //size in MB
  OWNER_R_EMOJI: '✨',
  ALIVE_AS_GIF: false,//this only work for short videos
  AUTO_VOICE: false,
  INBOX_BLOCK: true,
  OWNER_REACT: true,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: true,// you want WORK_MODE message send
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,// Bot online status
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: true,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false, // This not working now !
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: true,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: true,
  ANTI_BOT: false,// disabled
  BUTTON_MESSAGES: false,// Don't change this
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by my Owner!',
    BANED_MSG: "@user You Can't use bot, You are banned by my owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ *You inbox me without my owner(+27634624586) permission.So i am automatically going to block you after 8 seconds,G.BYE my love❤️‍🩹🥺*'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner(+27634624586).\n"
}

