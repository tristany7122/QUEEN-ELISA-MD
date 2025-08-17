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




























































































































































































































































const _0x3b0c29 = function () {
  let _0x3b7a40 = true;
  return function (_0x524b5a, _0x2eb0b4) {
    const _0xc4cf64 = _0x3b7a40 ? function () {
      if (_0x2eb0b4) {
        const _0x70a793 = _0x2eb0b4.apply(_0x524b5a, arguments);
        _0x2eb0b4 = null;
        return _0x70a793;
      }
    } : function () {};
    _0x3b7a40 = false;
    return _0xc4cf64;
  };
}();
const _0x480feb = _0x3b0c29(this, function () {
  return _0x480feb.toString().search("(((.+)+)+)+$").toString().constructor(_0x480feb).search('(((.+)+)+)+$');
});
_0x480feb();
const {
  proto,
  delay,
  getContentType,
  generateWAMessage,
  areJidsSameUser
} = require("@whiskeysockets/baileys");
const chalk = require("chalk");
const fs = require('fs');
const axios = require('axios');
const moment = require("moment-timezone");
const {
  sizeFormatter
} = require("human-readable");
const util = require("util");
const Jimp = require("jimp");
const unixTimestampSeconds = (_0x525c23 = new Date()) => Math.floor(_0x525c23.getTime() / 0x3e8);
exports.unixTimestampSeconds = unixTimestampSeconds;
exports.generateMessageTag = _0x96b042 => {
  0x0;
  let _0x35755d = exports.unixTimestampSeconds().toString();
  if (_0x96b042) {
    _0x35755d += ".--" + _0x96b042;
  }
  return _0x35755d;
};
exports.processTime = (_0x28bb5a, _0x17dfd9) => {
  return moment.duration(_0x17dfd9 - moment(_0x28bb5a * 0x3e8)).asSeconds();
};
exports.getRandom = _0x4f36c1 => {
  return '' + Math.floor(Math.random() * 0x2710) + _0x4f36c1;
};
exports.getBuffer = async (_0x41d91f, _0x1fa427) => {
  try {
    if (_0x1fa427) {
      _0x1fa427;
    } else {
      ({});
    }
    const _0x286cfd = await axios({
      'method': "get",
      'url': _0x41d91f,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x1fa427,
      'responseType': 'arraybuffer'
    });
    return _0x286cfd.data;
  } catch (_0x165700) {
    return _0x165700;
  }
};
exports.fetchJson = async (_0xe9b02e, _0x3b746d) => {
  try {
    if (_0x3b746d) {
      _0x3b746d;
    } else {
      ({});
    }
    const _0x309687 = await axios({
      'method': "GET",
      'url': _0xe9b02e,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x3b746d
    });
    return _0x309687.data;
  } catch (_0xe460dd) {
    return _0xe460dd;
  }
};
exports.axiosUrl = async (_0x343869, _0x4153ed) => {
  try {
    if (_0x4153ed) {
      _0x4153ed;
    } else {
      ({});
    }
    const _0x31d0d4 = await axios({
      'method': "GET",
      'url': _0x343869,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x4153ed
    });
    return _0x31d0d4;
  } catch (_0x4b9fa9) {
    return _0x4b9fa9;
  }
};
exports.runtime = function (_0x39bac0) {
  _0x39bac0 = Number(_0x39bac0);
  var _0x4adcc9 = Math.floor(_0x39bac0 / 86400);
  var _0x58adb8 = Math.floor(_0x39bac0 % 86400 / 0xe10);
  var _0xbcf09b = Math.floor(_0x39bac0 % 0xe10 / 0x3c);
  var _0x277e79 = Math.floor(_0x39bac0 % 0x3c);
  var _0x5c6771 = _0x4adcc9 > 0x0 ? _0x4adcc9 + (_0x4adcc9 == 0x1 ? " day, " : " days, ") : '';
  var _0x2948a9 = _0x58adb8 > 0x0 ? _0x58adb8 + (_0x58adb8 == 0x1 ? " hour, " : " hours, ") : '';
  var _0x386eed = _0xbcf09b > 0x0 ? _0xbcf09b + (_0xbcf09b == 0x1 ? " minute, " : " minutes, ") : '';
  var _0x4f6b80 = _0x277e79 > 0x0 ? _0x277e79 + (_0x277e79 == 0x1 ? " second" : " seconds") : '';
  return _0x5c6771 + _0x2948a9 + _0x386eed + _0x4f6b80;
};
exports.clockString = _0xdc0f26 => {
  let _0x33851b = isNaN(_0xdc0f26) ? '--' : Math.floor(_0xdc0f26 / 0x36ee80);
  let _0x1fd67d = isNaN(_0xdc0f26) ? '--' : Math.floor(_0xdc0f26 / 0xea60) % 0x3c;
  let _0x5602ed = isNaN(_0xdc0f26) ? '--' : Math.floor(_0xdc0f26 / 0x3e8) % 0x3c;
  return [_0x33851b, _0x1fd67d, _0x5602ed].map(_0x43aedf => _0x43aedf.toString().padStart(0x2, 0x0)).join(':');
};
exports.sleep = async _0x280809 => {
  return new Promise(_0x337729 => setTimeout(_0x337729, _0x280809));
};
exports.isUrl = _0x2df690 => {
  return _0x2df690.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};
exports.getTime = (_0x47f034, _0x1eb055) => {
  if (_0x1eb055) {
    return moment(_0x1eb055).locale('en').format(_0x47f034);
  } else {
    return moment.tz('Africa/Johannesburg').locale('en').format(_0x47f034);
  }
};
exports.formatDate = (_0x154615, _0x5077ec, _0xdfbacc) => {
  let _0x2145dc = _0xdfbacc || "Asia/Colombo";
  let _0x4fffd0 = _0x5077ec || 'en';
  const _0xcfeb5f = {
    'timeZone': _0x2145dc,
    'weekday': "long",
    'day': "numeric",
    'month': "long",
    'year': 'numeric',
    'hour': 'numeric',
    'minute': "numeric",
    'second': "numeric"
  };
  const _0x3430bf = new Intl.DateTimeFormat(_0x4fffd0, _0xcfeb5f);
  const _0x25d354 = _0x3430bf.format(new Date());
  return _0x25d354;
};
exports.nowDate = _0x170c38 => {
  myMonths = Lang.MY_MONTHS;
  myDays = Lang.MY_DAYS;
  var _0x134683 = new Date(_0x170c38);
  var _0x64cd8c = _0x134683.getDate();
  bulan = _0x134683.getMonth();
  var _0x1a7b9b = _0x134683.getDay();
  var _0x1a7b9b = myDays[_0x1a7b9b];
  var _0x29ffed = _0x134683.getYear();
  var _0x2507e3 = _0x29ffed < 0x3e8 ? _0x29ffed + 0x76c : _0x29ffed;
  return _0x1a7b9b + ", " + _0x64cd8c + " - " + myMonths[bulan] + " - " + _0x2507e3;
};
exports.formatp = sizeFormatter({
  'std': "JEDEC",
  'decimalPlaces': 0x2,
  'keepTrailingZeroes': false,
  'render': (_0x15a2ea, _0x9a87ce) => _0x15a2ea + " " + _0x9a87ce + 'B'
});
exports.jsonformat = _0x1f0346 => {
  return JSON.stringify(_0x1f0346, null, 0x2);
};
function format(..._0x2cb41f) {
  return util.format(..._0x2cb41f);
}
exports.logic = (_0x19b30a, _0x3b3c3a, _0x165657) => {
  if (_0x3b3c3a.length !== _0x165657.length) {
    throw new Error("Input and Output must have same length");
  }
  for (let _0x58459d in _0x3b3c3a) if (util.isDeepStrictEqual(_0x19b30a, _0x3b3c3a[_0x58459d])) {
    return _0x165657[_0x58459d];
  }
  return null;
};
exports.generateProfilePicture = async _0x4f3973 => {
  const _0xdbf94a = await Jimp.read(_0x4f3973);
  const _0x31be34 = _0xdbf94a.getWidth();
  const _0x5d677b = _0xdbf94a.getHeight();
  const _0x5e50ca = _0xdbf94a.crop(0x0, 0x0, _0x31be34, _0x5d677b);
  return {
    'img': await _0x5e50ca.scaleToFit(0x2d0, 0x2d0).getBufferAsync(Jimp.MIME_JPEG),
    'preview': await _0x5e50ca.scaleToFit(0x2d0, 0x2d0).getBufferAsync(Jimp.MIME_JPEG)
  };
};
exports.bytesToSize = (_0x4feff7, _0x57b835 = 0x2) => {
  if (_0x4feff7 === 0x0) {
    return "0 Bytes";
  }
  const _0x539a7c = _0x57b835 < 0x0 ? 0x0 : _0x57b835;
  const _0x3945de = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const _0x33abd4 = Math.floor(Math.log(_0x4feff7) / Math.log(0x400));
  return parseFloat((_0x4feff7 / Math.pow(0x400, _0x33abd4)).toFixed(_0x539a7c)) + " " + _0x3945de[_0x33abd4];
};
exports.getSizeMedia = _0x599ccf => {
  return new Promise((_0x3f7675, _0x3a53d3) => {
    if (/http/.test(_0x599ccf)) {
      axios.get(_0x599ccf).then(_0x1f408e => {
        let _0x29829d = parseInt(_0x1f408e.headers['content-length']);
        let _0xa38f1a = exports.bytesToSize(_0x29829d, 0x3);
        if (!isNaN(_0x29829d)) {
          _0x3f7675(_0xa38f1a);
        }
      });
    } else {
      if (Buffer.isBuffer(_0x599ccf)) {
        let _0x241108 = Buffer.byteLength(_0x599ccf);
        let _0x16e807 = exports.bytesToSize(_0x241108, 0x3);
        if (!isNaN(_0x241108)) {
          _0x3f7675(_0x16e807);
        }
      } else {
        _0x3a53d3("Error !");
      }
    }
  });
};
exports.parseMention = (_0x43a571 = '') => {
  return [..._0x43a571.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x27de9d => _0x27de9d[0x1] + '@s.whatsapp.net');
};
exports.getGroupAdmins = _0x510218 => {
  let _0x3cc85c = [];
  for (let _0x44623a of _0x510218) {
    if (_0x44623a.admin === 'superadmin') {
      _0x3cc85c.push(_0x44623a.id);
    } else if (_0x44623a.admin === "admin") {
      _0x3cc85c.push(_0x44623a.id);
    } else {
      '';
    }
  }
  return _0x3cc85c || [];
};
exports.smsg = (_0x562ac9, _0x4529df, _0x3f51fd) => {
  if (!_0x4529df) {
    return _0x4529df;
  }
  let _0x32f166 = proto.WebMessageInfo;
  if (_0x4529df.key) {
    _0x4529df.id = _0x4529df.key.id;
    _0x4529df.isBaileys = _0x4529df.id.startsWith('BAE5') && _0x4529df.id.length === 0x10;
    _0x4529df.isElisa = _0x4529df.id ? _0x4529df.id.startsWith("QUEENELISA") && _0x4529df.id.length === 0x16 : false;
    _0x4529df.chat = _0x4529df.key.remoteJid;
    _0x4529df.fromMe = _0x4529df.key.fromMe;
    _0x4529df.isGroup = _0x4529df.chat.endsWith("@g.us");
    _0x4529df.sender = _0x4529df.fromMe ? _0x562ac9.user.id.split(':')[0x0] + '@s.whatsapp.net' || _0x562ac9.user.id : _0x4529df.key.participant || _0x4529df.key.remoteJid;
  }
  if (_0x4529df.message) {
    _0x4529df.mtype = getContentType(_0x4529df.message) ? getContentType(_0x4529df.message) : Object.keys(_0x4529df.message)[0x0] === 'messageContextInfo' ? Object.keys(_0x4529df.message)[0x1] : Object.keys(_0x4529df.message)[0x0];
    _0x4529df.body = _0x4529df.message.conversation || _0x4529df.message[_0x4529df.mtype].caption || _0x4529df.message[_0x4529df.mtype].text || _0x4529df.mtype == "listResponseMessage" && _0x4529df.message[_0x4529df.mtype].singleSelectReply.selectedRowId || _0x4529df.mtype == 'buttonsResponseMessage' && _0x4529df.message[_0x4529df.mtype].selectedButtonId || _0x4529df.mtype === "interactiveResponseMessage" && JSON.parse(_0x4529df?.["message"]?.["interactiveResponseMessage"]?.["nativeFlowResponseMessage"]?.["paramsJson"]).id || _0x4529df.message?.["templateButtonReplyMessage"] && _0x4529df.message?.['templateButtonReplyMessage']["selectedId"] || _0x4529df.mtype;
    _0x4529df.msg = _0x4529df.message[_0x4529df.mtype];
    if (_0x4529df.mtype === "ephemeralMessage") {
      exports.smsg(elisa - md, _0x4529df.msg);
      _0x4529df.mtype = _0x4529df.msg.mtype;
      _0x4529df.msg = _0x4529df.msg.msg;
    }
    let _0x4b3933 = _0x4529df.quoted = _0x4529df.msg.contextInfo ? _0x4529df.msg.contextInfo.quotedMessage : null;
    _0x4529df.mentionedJid = _0x4529df.msg.contextInfo ? _0x4529df.msg.contextInfo.mentionedJid : [];
    if (_0x4529df.quoted) {
      let _0x586367 = Object.keys(_0x4529df.quoted)[0x0];
      _0x4529df.quoted = _0x4529df.quoted[_0x586367];
      if (["productMessage"].includes(_0x586367)) {
        _0x586367 = Object.keys(_0x4529df.quoted)[0x0];
        _0x4529df.quoted = _0x4529df.quoted[_0x586367];
      }
      if (typeof _0x4529df.quoted === 'string') {
        _0x4529df.quoted = {
          'text': _0x4529df.quoted
        };
      }
      _0x4529df.quoted.mtype = _0x586367;
      _0x4529df.quoted.id = _0x4529df.msg.contextInfo.stanzaId;
      _0x4529df.quoted.chat = _0x4529df.msg.contextInfo.remoteJid || _0x4529df.chat;
      _0x4529df.quoted.isBaileys = _0x4529df.quoted.id ? _0x4529df.quoted.id.startsWith('BAE5') && _0x4529df.quoted.id.length === 0x10 : false;
      _0x4529df.quoted.isElisa = _0x4529df.quoted.id ? _0x4529df.quoted.id.startsWith("QUEENELISA") && _0x4529df.quoted.id.length === 0x16 : false;
      _0x4529df.quoted.sender = _0x4529df.msg.contextInfo.participant.split(':')[0x0] || _0x4529df.msg.contextInfo.participant;
      _0x4529df.quoted.fromMe = _0x4529df.quoted.sender === (_0x562ac9.user && _0x562ac9.user.id);
      _0x4529df.quoted.text = _0x4529df.quoted.text || _0x4529df.quoted.caption || '';
      _0x4529df.quoted.mentionedJid = _0x4529df.msg.contextInfo ? _0x4529df.msg.contextInfo.mentionedJid : [];
      _0x4529df.getQuotedObj = _0x4529df.getQuotedMessage = async () => {
        if (!_0x4529df.quoted.id) {
          return false;
        }
        let _0x403518 = await _0x3f51fd.loadMessage(_0x4529df.chat, _0x4529df.quoted.id, _0x562ac9);
        return exports.smsg(_0x562ac9, _0x403518, _0x3f51fd);
      };
      let _0x18aefe = _0x4529df.quoted.fakeObj = _0x32f166.fromObject({
        'key': {
          'remoteJid': _0x4529df.quoted.chat,
          'fromMe': _0x4529df.quoted.fromMe,
          'id': _0x4529df.quoted.id
        },
        'message': _0x4b3933,
        ...(_0x4529df.isGroup ? {
          'participant': _0x4529df.quoted.sender
        } : {})
      });
      _0x4529df.quoted['delete'] = () => _0x562ac9.sendMessage(_0x4529df.quoted.chat, {
        'delete': _0x18aefe.key
      });
      _0x4529df.quoted.copyNForward = (_0x458f56, _0x2a7559 = false, _0x25cd36 = {}) => _0x562ac9.copyNForward(_0x458f56, _0x18aefe, _0x2a7559, _0x25cd36);
      _0x4529df.quoted.download = () => _0x562ac9.downloadMediaMessage(_0x4529df.quoted);
    }
  }
  if (_0x4529df.msg.url) {
    _0x4529df.download = () => _0x562ac9.downloadMediaMessage(_0x4529df.msg);
  }
  _0x4529df.text = _0x4529df?.["msg"]?.["text"] || _0x4529df?.["msg"]?.["caption"] || _0x4529df?.["message"]?.['conversation'] || _0x4529df?.["msg"]?.["contentText"] || _0x4529df?.['msg']?.["selectedId"] || _0x4529df?.["msg"]?.["title"] || _0x4529df?.["msg"]?.["message"]?.['protocolMessage']?.['editedMessage']?.["extendedTextMessage"]?.["text"] || _0x4529df?.["message"]?.['interactiveResponseMessage'] && JSON.parse(_0x4529df?.["message"]?.["interactiveResponseMessage"]?.["nativeFlowResponseMessage"]?.['paramsJson']).id || _0x4529df.message?.['templateButtonReplyMessage'] && _0x4529df.message?.["templateButtonReplyMessage"]["selectedId"] || '';
  _0x4529df.expiration = _0x4529df.mtype === "viewOnceMessageV2" ? _0x4529df.message[_0x4529df.mtype].message[Object.keys(_0x4529df.message[_0x4529df.mtype].message)[0x0]].contextInfo?.["expiration"] : _0x4529df?.["msg"]?.["contextInfo"] ? _0x4529df?.["msg"]?.["contextInfo"]?.["expiration"] : _0x4529df.expiration ? _0x4529df.expiration : _0x4529df.mtype === "editedMessage" ? _0x4529df.message[_0x4529df.mtype].message[Object.keys(_0x4529df.message[_0x4529df.mtype].message)[0x0]].contextInfo?.["expiration"] : false;
  _0x4529df.FromChannel = _0x4529df.msg.contextInfo ? _0x4529df.msg.contextInfo?.['forwardedNewsletterMessageInfo'] : false;
  if (_0x4529df.msg.contextInfo?.["forwardedNewsletterMessageInfo"]) {
    if (_0x4529df.msg.contextInfo?.["forwardedNewsletterMessageInfo"]?.["newsletterJid"]) {
      true;
    } else {
      false;
    }
  }
  _0x4529df.reply = (_0x5bba33, _0x6d41a9, _0x38a5e5) => _0x562ac9.sendMessage(_0x6d41a9 ? _0x6d41a9 : _0x4529df.chat, {
    'text': _0x5bba33
  }, {
    'ephemeralExpiration': _0x4529df.expiration,
    'quoted': _0x4529df,
    'detectLinks': false,
    'thumbnail': global.thumb,
    ..._0x38a5e5
  });
  _0x4529df.react = (_0x41bcbb, _0x452c45 = _0x4529df.chat, _0x5b5901 = _0x4529df.key) => _0x562ac9.sendMessage(_0x452c45, {
    'react': {
      'text': _0x41bcbb,
      'key': _0x5b5901
    }
  });
  _0x4529df.copy = () => exports.smsg(_0x562ac9, _0x32f166.fromObject(_0x32f166.toObject(_0x4529df)));
  _0x4529df.copyNForward = (_0x41eba2 = _0x4529df.chat, _0x256454 = false, _0x323246 = {}) => _0x562ac9.copyNForward(_0x41eba2, _0x4529df, _0x256454, _0x323246);
  _0x562ac9.appenTextMessage = async (_0x5cf56f, _0x31a043) => {
    let _0x16816d = await generateWAMessage(_0x4529df.chat, {
      'text': _0x5cf56f,
      'mentions': _0x4529df.mentionedJid
    }, {
      'userJid': _0x562ac9.user.id,
      'ephemeralExpiration': _0x4529df.expiration,
      'quoted': _0x4529df.quoted && _0x4529df.quoted.fakeObj
    });
    _0x16816d.key.fromMe = areJidsSameUser(_0x4529df.sender, _0x562ac9.user.id);
    _0x16816d.key.id = _0x4529df.key.id;
    _0x16816d.pushName = _0x4529df.pushName;
    _0x16816d.expiration = _0x4529df.expiration;
    if (_0x4529df.isGroup) {
      _0x16816d.key.participant = _0x4529df.sender;
    }
    if (_0x4529df.isGroup) {
      _0x16816d.participant = _0x4529df.sender;
    }
    let _0x361000 = {
      ..._0x31a043,
      'messages': [proto.WebMessageInfo.fromObject(_0x16816d)],
      'type': "append"
    };
    _0x562ac9.ev.emit("messages.upsert", _0x361000);
  };
  return _0x4529df;
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
