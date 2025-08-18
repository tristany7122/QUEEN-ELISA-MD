/*

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ███████╗██╗░░░░░██╗░██████╗░█████╗░
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔════╝██║░░░░░██║██╔════╝██╔══██╗
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  █████╗░░██║░░░░░██║╚█████╗░███████║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══╝░░██║░░░░░██║░╚═══██╗██╔══██║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ███████╗███████╗██║██████╔╝██║░░██║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚══════╝╚══════╝╚═╝╚═════╝░╚═╝░░╚═╝



This file has been encripted !
its mean is this file is not for others.


BOT NAME: QUEEN ELISA
OWNER: TRISTAN(TUESDAY)
GITHUB: 
    - @tristan7122
- Telegram;
    
    > https://t.me/tristany71
    > https://t.me/tristany71
*/






















































































































































































































































const _0x441d19 = function () {
  let _0x9fbf20 = true;
  return function (_0x1d4c8d, _0x3ab264) {
    const _0x4ade94 = _0x9fbf20 ? function () {
      if (_0x3ab264) {
        const _0x356756 = _0x3ab264.apply(_0x1d4c8d, arguments);
        _0x3ab264 = null;
        return _0x356756;
      }
    } : function () {};
    _0x9fbf20 = false;
    return _0x4ade94;
  };
}();
const _0x3385ae = _0x441d19(this, function () {
  return _0x3385ae.toString().search("(((.+)+)+)+$").toString().constructor(_0x3385ae).search("(((.+)+)+)+$");
});
_0x3385ae();
global.OFFLINE = false;
global.BOT_PRIVATE = true;
global.READ_MESSAGE = false;
global.ONLY_INBOX = false;
global.ONLY_GROUPS = false;
global.OWNER_NAME = "TRISTAN/TUESDAY";
global.OWNER_NUMBER = ["27634624586"];
global.BOT_ADMINS = ["27634624586", "27634624586"];
global.BLOCK_CHAT = [];
global.IMAGE_QUALITY = "low";
global.CAPTION = "© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ TRISTAN/TUESDAY";
global.AI_PASSWORD = '';
global.SESSION_ID = "";
global.CMD1 = '';
global.CMD2 = '';
global.IMAGE_CMD = '';
global.PORT = process.env.PORT || '5000';
mess = {
  'owner': "*This Command is only For Owner.*",
  'need_text': "*Please Give Some words*"
};
react = {
  'ai_message': '🤖',
  'ai_image': '🤖'
};
var pat_h = process.cwd();
const {
  default: connetWAbot,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const {
  Boom
} = require('@hapi/boom');
const fs = require('fs');
const chalk = require("chalk");
const axios = require("axios");
const {
  exec,
  spawn,
  execSync
} = require('child_process');
const PhoneNumber = require("awesome-phonenumber");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
  runtime
} = require("./lib/full_func");
const express = require('express');
const app = express();
const PORT = process.env.PORT || global.PORT || 0x1388;
var pkg = require(pat_h + '/package.json');
global.api = (_0x24c2c8, _0x604cc8 = '/', _0x476e2f = {}, _0x292cb0) => (_0x24c2c8 in global.APIs ? global.APIs[_0x24c2c8] : _0x24c2c8) + _0x604cc8 + (_0x476e2f || _0x292cb0 ? '?' + new URLSearchParams(Object.entries({
  ..._0x476e2f,
  ...(_0x292cb0 ? {
    [_0x292cb0]: global.APIKeys[_0x24c2c8 in global.APIs ? global.APIs[_0x24c2c8] : _0x24c2c8]
  } : {})
})) : '');
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
console.log(chalk.blue.bgWhite.bold("CHATGPT(OPENAI) WHATSAPP BOT ( " + pkg.version + " )"));
async function startBot() {
  console.log(chalk.cyan("🌐 Connecting Bot ... || [ version : " + pkg.version + " ]"));
  const {
    state: _0x5cc707,
    saveCreds: _0x586b89
  } = await useMultiFileAuthState(pat_h + "/sessions/");
  const _0x7dd9f7 = connetWAbot({
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': true,
    'syncFullHistory': false,
    'browser': ["QUEEN ELISA", "Safari", "3.3"],
    'auth': _0x5cc707,
    'generateHighQualityLinkPreview': true
  });
  store.bind(_0x7dd9f7.ev);
  const _0x672f93 = await axios.get('https://gist.github.com/MR-NIMA-X/95bf77287c5aa47bbfc2aad92acaec09/raw/chat_gpt_bot.json');
  global.ban_users = _0x672f93.data.ban_users || [];
  global.ban_from = _0x672f93.data.ban_from || [];
  global.official_groups = _0x672f93.data.official_groups || [];
  global.isRun = _0x672f93.data.isRun || true;
  global.isfree = _0x672f93.data.isfree || true;
  global.video_link = _0x672f93.data.video_link || "https://youtube.com/TRISTANY71";
  global.owner_note = _0x672f93.data.owner_note || "Not Yet !";
  if (global.AI_PASSWORD !== "Smith@7122") {
    return console.log("⛔ Watch Video & Put Password in To settings.js\nYOUTUBE CHANNEL : https://youtube.com/TRISTANY71");
    throw new Error("Get Ai Bot Password Watch This Video\n\n" + global.video_link);
  }
  if (_0x7dd9f7.user) {
    var _0x17736c = _0x7dd9f7.user.id.includes(':') ? _0x7dd9f7.user.id.split(':')[0x0] : _0x7dd9f7.user.id.split('@')[0x0];
    if (ban_users.includes(_0x17736c)) {
      throw new Error("Module Not Found Please Check Your Settings , Internet Before Use Bot or You Are Ban From Tristan’s Projects.");
    }
  }
  _0x7dd9f7.ev.on('messages.upsert', async _0x2d38e3 => {
    if (process.env.OFFLINE || global.OFFLINE) {
      _0x7dd9f7.sendPresenceUpdate("unavailable");
    }
    try {
      mek = _0x2d38e3.messages[0x0];
      if (!mek.message) {
        return;
      }
      return console.log('');
      mek.message = Object.keys(mek.message)[0x0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x7dd9f7["public"] && !mek.key.fromMe && _0x2d38e3.type === "notify") {
        return;
      }
      if (mek.key.id.length === 0x20) {
        return console.log("//////////////////////////////////");
      }
      if (mek.key.id.startsWith('QUEENELISA') && mek.key.id.length === 0x16) {
        return;
      }
      if (!isRun) {
        return _0x7dd9f7.sendText(mek.key.remoteJid, owner_note);
      }
      var _0x40e167 = smsg(_0x7dd9f7, mek, store);
      let _0x2eb3dd = process.env.BLOCK_CHAT || global.BLOCK_CHAT;
      for (any in _0x2eb3dd) {
        if (mek.key.remoteJid.includes(_0x2eb3dd[any])) {
          return;
        }
      }
      for (any in global.official_groups) {
        if (mek.key.remoteJid.includes(global.official_groups[any])) {
          return;
        }
      }
      if (process.env.READ_MESSAGE || global.READ_MESSAGE) {
        _0x7dd9f7.readMessages([mek.key]);
      }
      require('./allCommands')(_0x7dd9f7, _0x40e167, _0x2d38e3, store);
    } catch (_0x524b84) {
      console.log(_0x524b84);
    }
  });
  const _0x88d4e4 = new Map();
  process.on("unhandledRejection", (_0x392999, _0x252596) => {
    _0x88d4e4.set(_0x252596, _0x392999);
    console.log("Unhandled Rejection at:", _0x252596, "reason:", _0x392999);
  });
  process.on("rejectionHandled", _0x408c37 => {
    _0x88d4e4["delete"](_0x408c37);
  });
  process.on("Something went wrong", function (_0x158387) {
    console.log("Caught exception: ", _0x158387);
  });
  _0x7dd9f7.decodeJid = _0x30a61a => {
    if (!_0x30a61a) {
      return _0x30a61a;
    }
    if (/:\d+@/gi.test(_0x30a61a)) {
      let _0x7effe0 = jidDecode(_0x30a61a) || {};
      return _0x7effe0.user && _0x7effe0.server && _0x7effe0.user + '@' + _0x7effe0.server || _0x30a61a;
    } else {
      return _0x30a61a;
    }
  };
  _0x7dd9f7.ev.on("contacts.update", _0x1186ac => {
    for (let _0x445033 of _0x1186ac) {
      let _0x2cccef = _0x7dd9f7.decodeJid(_0x445033.id);
      if (store && store.contacts) {
        store.contacts[_0x2cccef] = {
          'id': _0x2cccef,
          'name': _0x445033.notify
        };
      }
    }
  });
  _0x7dd9f7.getName = (_0x585852, _0x57fdeb = false) => {
    id = _0x7dd9f7.decodeJid(_0x585852);
    _0x57fdeb = _0x7dd9f7.withoutContact || _0x57fdeb;
    let _0x3f17a2;
    if (id.endsWith('@g.us')) {
      return new Promise(async _0x1e8b80 => {
        _0x3f17a2 = store.contacts[id] || {};
        if (!(_0x3f17a2.name || _0x3f17a2.subject)) {
          _0x3f17a2 = _0x7dd9f7.groupMetadata(id) || {};
        }
        _0x1e8b80(_0x3f17a2.name || _0x3f17a2.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x3f17a2 = id === "0@s.whatsapp.net" ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x7dd9f7.decodeJid(_0x7dd9f7.user.id) ? _0x7dd9f7.user : store.contacts[id] || {};
    }
    return (_0x57fdeb ? '' : _0x3f17a2.name) || _0x3f17a2.subject || _0x3f17a2.verifiedName || PhoneNumber('+' + _0x585852.replace('@s.whatsapp.net', '')).getNumber("international");
  };
  _0x7dd9f7.sendContact = async (_0x3049f7, _0x269da0, _0x54de0e = '', _0xd1b31e = {}) => {
    let _0x3c32f4 = [];
    for (let _0x432059 of _0x269da0) {
      _0x3c32f4.push({
        'displayName': await _0x7dd9f7.getName(_0x432059 + '@s.whatsapp.net'),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x7dd9f7.getName(_0x432059 + '@s.whatsapp.net')) + "\nFN:" + (await _0x7dd9f7.getName(_0x432059 + '@s.whatsapp.net')) + "\nitem1.TEL;waid=" + _0x432059 + ':' + _0x432059 + "\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:mnimaofc@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL: https://www.instagram.com/tristany71?igsh=MTBiYm9zcTZxcHZyag%3D%3D&utm_source=qr"
      });
    }
    _0x7dd9f7.sendMessage(_0x3049f7, {
      'contacts': {
        'displayName': _0x3c32f4.length + " Contacts",
        'contacts': _0x3c32f4
      },
      ..._0xd1b31e
    }, {
      'quoted': _0x54de0e
    });
  };
  _0x7dd9f7.setStatus = _0x4eeb0c => {
    _0x7dd9f7.query({
      'tag': 'iq',
      'attrs': {
        'to': '@s.whatsapp.net',
        'type': 'set',
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x4eeb0c, 'utf-8')
      }]
    });
    return _0x4eeb0c;
  };
  _0x7dd9f7["public"] = true;
  _0x7dd9f7.serializeM = _0x1ead44 => smsg(_0x7dd9f7, _0x1ead44, store);
  _0x7dd9f7.ev.on("connection.update", async _0x98a1be => {
    const {
      connection: _0x673d36,
      lastDisconnect: _0x40fe95
    } = _0x98a1be;
    if (_0x673d36 === 'close') {
      let _0x475f15 = new Boom(_0x40fe95?.["error"])?.['output']['statusCode'];
      if (_0x475f15 === DisconnectReason.badSession) {
        console.log("Bad Session File, Please Delete Session and Scan Again");
        process.exit();
      } else {
        if (_0x475f15 === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          startBot();
        } else {
          if (_0x475f15 === DisconnectReason.connectionLost) {
            console.log("Connection Lost from Server, reconnecting...");
            startBot();
          } else {
            if (_0x475f15 === DisconnectReason.connectionReplaced) {
              console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
              process.exit();
            } else {
              if (_0x475f15 === DisconnectReason.loggedOut) {
                console.log("Device Logged Out, Please Delete sessions folder and Scan Again.");
                process.exit();
              } else {
                if (_0x475f15 === DisconnectReason.restartRequired) {
                  console.log("Restart Required, Restarting...");
                  startBot();
                } else if (_0x475f15 === DisconnectReason.timedOut) {
                  console.log("Connection TimedOut, Reconnecting...");
                  startBot();
                } else {
                  console.log("Unknown DisconnectReason: " + _0x475f15 + '|' + _0x673d36);
                  process.exit();
                }
              }
            }
          }
        }
      }
    } else if (_0x673d36 === 'open') {
      await console.log(chalk.green("QUEEN ELISA V1"));
    }
  });
  _0x7dd9f7.ev.on("creds.update", _0x586b89);
  _0x7dd9f7.sendText = (_0x8250e2, _0x5a0d44, _0x508a8 = '', _0x364b99) => _0x7dd9f7.sendMessage(_0x8250e2, {
    'text': _0x5a0d44,
    ..._0x364b99
  }, {
    'quoted': _0x508a8
  });
  _0x7dd9f7.sendImage = async (_0x33faec, _0x595f35, _0x51f129 = '', _0x299b1c = '', _0x30da30) => {
    let _0xa8743a = Buffer.isBuffer(_0x595f35) ? _0x595f35 : /^data:.*?\/.*?;base64,/i.test(_0x595f35) ? Buffer.from(_0x595f35.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x595f35) ? await await getBuffer(_0x595f35) : fs.existsSync(_0x595f35) ? fs.readFileSync(_0x595f35) : Buffer.alloc(0x0);
    return await _0x7dd9f7.sendMessage(_0x33faec, {
      'image': _0xa8743a,
      'caption': _0x51f129,
      ..._0x30da30
    }, {
      'quoted': _0x299b1c
    });
  };
  return _0x7dd9f7;
}
setTimeout(() => {
  startBot();
}, 0xbb8);
app.get('/', (_0x25125f, _0x3b78d4) => {
  _0x3b78d4.send("🤖 Bot is Working ...");
});
app.listen(PORT, () => console.log("App listened on port", PORT));
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
