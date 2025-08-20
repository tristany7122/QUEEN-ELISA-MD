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


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function (_0x2ccc17, _0x5d79a9) {
  var _0x2fc30e = _0x2ccc17();
  while (true) {
    try {
      var _0x13d268 = parseInt(_0x3f43(671, 0x21c)) / 1 * (parseInt(_0x3f43(775, 0x3e9)) / 2) + parseInt(_0x3f43(619, 0x1dd)) / 3 + parseInt(_0x3f43(507, 0x2e4)) / 4 + -parseInt(_0x3f43(784, 0x195)) / 5 + -parseInt(_0x3f43(548, 0x61f)) / 6 * (-parseInt(_0x3f43(863, 0x305)) / 7) + parseInt(_0x3f43(690, 0x16c)) / 8 * (parseInt(_0x3f43(754, 0x2c7)) / 9) + parseInt(_0x3f43(695, 0x16a)) / 10 * (-parseInt(_0x3f43(500, 0x17b)) / 11);
      if (_0x13d268 === _0x5d79a9) {
        break;
      } else {
        _0x2fc30e.push(_0x2fc30e.shift());
      }
    } catch (_0x4f1bc7) {
      _0x2fc30e.push(_0x2fc30e.shift());
    }
  }
})(_0x268d, 228291);
function _0x3f43(_0x238ba8, _0x720d18) {
  var _0x189c2d = _0x268d();
  _0x3f43 = function (_0x35cf4d, _0x2f3936) {
    _0x35cf4d = _0x35cf4d - 451;
    var _0x1d102c = _0x189c2d[_0x35cf4d];
    return _0x1d102c;
  };
  return _0x3f43(_0x238ba8, _0x720d18);
}
var pat_h = process.cwd();
const chalk = require("chalk");
var {
  spawn
} = require("child_process");
const path = require("path");
const fs = require('fs');
function _0x6b67bf(_0x2ec1a0, _0x5150a2, _0x1da6d4, _0x2fac67, _0x409f79) {
  return _0x3f43(_0x1da6d4 - 0x102, _0x2ec1a0);
}
var config = require(pat_h + "/settings");
const mongoose = require("mongoose");
const mongodb = process.env.MONGODB_URL && process.env.MONGODB_URL !== process.env.MONGODB_URL !== "undefined" ? process.env.MONGODB_URL : config.MONGODB_URL ? config.MONGODB_URL : false;
global.dirname = __dirname;
const express = require("express");
const app = express();
const PORT = config.PORT || 3030 || 8000;
function _0x2a9252(_0x16d99e, _0x27c60f, _0x233b7c, _0x59e8e1, _0x22b934) {
  return _0x3f43(_0x16d99e - 0x163, _0x233b7c);
}
global.RP = "./node_modules/queen-elisa-md";
require("./lib/strs");
var pkg = require(pat_h + "/package.json");
console.log(chalk.keyword("pink")("👸 STARTING QUEEN ELISA [ " + pkg.version + " ] ..."));
var {
  cm
} = require("./lib/wf");
var isRunning = false;
function start(_0x5632a9) {
  if (isRunning) {
    return;
  }
  isRunning = true;
  var _0x3f8eda = [path.join(__dirname, _0x5632a9), ...process.argv.slice(2)];
  var _0x59c9f2 = spawn(process.argv[0], _0x3f8eda, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  });
  _0x59c9f2.on("message", _0x1a0e67 => {
    console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "[RECEIVED]", _0x1a0e67);
    switch (_0x1a0e67) {
      case "reset":
        _0x59c9f2.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        _0x59c9f2.send(process.uptime());
        break;
    }
  });
  _0x59c9f2.on("exit", _0x5694c2 => {
    isRunning = false;
    console.error(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Exited with code:", _0x5694c2);
    if (_0x5694c2 === 0) {
      return;
    }
    fs.watchFile(_0x3f8eda[0], () => {
      fs.unwatchFile(_0x3f8eda[0]);
      start(_0x5632a9);
    });
  });
}
async function startStep1() {
  var {
    MakeSession: _0x39647a
  } = require("./node_modules/queen-elisa-md/lib/pastebin.js");
  var _0x2153bc = pat_h + "/sessions/creds.json";
  var _0x3e8882 = process.env.SESSION_ID && process.env.SESSION_ID !== "undefined" ? process.env.SESSION_ID : config.SESSION_ID;
  if (!_0x3e8882) {
    console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "❌ Please Scan and Add session id in to settings.js or add variable SESSION_ID and Put it.");
    process.exit(0);
  } else {
    console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Installing Session File Using SESSION_ID ...");
    if (!fs.existsSync(_0x2153bc)) {
      var _0x2e2c17 = await _0x39647a(_0x3e8882, _0x2153bc);
      if (_0x2e2c17) {
        console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Successfully install Your Session File.");
      } else {
        if (_0x2e2c17 === "error") {
          console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "❌ Error Until install Your Session File.");
          process.exit(0);
        }
      }
    }
    global.DATABASE_ID = _0x3e8882.split("pwd=")[1].split('').reverse().join('') + "@s.whatsapp.net";
  }
}
async function startStep2() {
  var _0x31c0d6 = process.env.SESSION_ID && process.env.SESSION_ID !== "undefined" ? process.env.SESSION_ID : config.SESSION_ID;
  global.DATABASE_ID = _0x31c0d6.split("pwd=")[1].split('').reverse().join('') + "@s.whatsapp.net";
  var _0x194cb5 = global.RP + "/settings.json";
  var {
    Config: _0x24cf1b
  } = require("./node_modules/queen-elisa-md/lib/database/main/settings-json-db.js");
  console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Syncing Config Database ...");
  var _0x5a2b6c = {
    'id': DATABASE_ID
  };
  let _0x2b4cb3 = await _0x24cf1b.findOne(_0x5a2b6c);
  try {
    if (_0x2b4cb3 === null) {
      var _0x5ec483 = {
        id: DATABASE_ID,
        configs: config
      };
      await new _0x24cf1b(_0x5ec483).save();
      var _0x47351b = {
        'id': DATABASE_ID
      };
      var _0x562076 = {
        configs: config
      };
      await _0x24cf1b.updateOne(_0x47351b, _0x562076);
      const _0xab1e34 = JSON.stringify(config, null, 2);
      fs.writeFileSync(_0x194cb5, _0xab1e34);
      console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "✅ Successfully Created New Config Database.");
    } else {
      const _0x578de1 = JSON.stringify(_0x2b4cb3.configs[0], null, 2);
      fs.writeFileSync(_0x194cb5, _0x578de1);
    }
  } catch (_0x36ae66) {
    console.error("Error:", _0x36ae66);
  }
}
function _0x268d() {
  var _0xda116d = ['unwat', 'LLAgT', "O STA", 'ckybm', 'exit', 'tzGtZ', 'isMon', 'VllJP', "pm2 k", 'watch', 'urRrr', 'ync', 'wuZRQ', 'VCepE', 'Insta', 'ile.', 'qkaCv', 'kQMLx', 'true', 'OEPUH', "d Put", 'son', " Sess", 'dzwya', 'nAbxd', 'p.net', 'mlTzu', 'Error', 'YYDGr', 'ipc', 'e_mod', 'env', "nfig ", 'path', "❌ Ple", " to s", 'child', 'YUPIv', "s run", 'Exite', "pm2 s", '981fhegdL', "✅ Suc", "sion ", 'KbqQd', 'oNqAv', 'PoIjS', 'kJsyu', 'MNuzl', 'gify', "EN EL", 'mipXQ', 'red', "ully ", '/strs', 'ON_ID', 'sGvFK', 'Succe', "[ QUE", 'MeVTs', 'IVED]', "RT BO", '76HGEvGG', 'cShZG', "top e", "pm2 r", 'BrRtw', "pm2 l", 'ions/', 'info', 'TsQLk', '2095995NrIuvu', 'owKgC', 'queen', 'SESSI', " or a", 'wXRtQ', 'vLhSS', 'GPxkA', 'expre', 'sotp', 'CePSE', "t eli", 'nYoIC', 'DATAB', 'eMXMH', 'godb', 'zRYhl', 'FKgmz', 'dirna', 'bpULi', 'wSbrU', 'HtMSe', 'ist', 'EN-EL', 'JNbMi', 'findO', 'lling', 'aEDgu', '/sett', 'util', " it.", "ORT :", 'gs-js', 'WGTWP', '_proc', 'ain/s', 'EaYCI', "can a", 'LcoMJ', 'FdpkW', 'mUUiU', 'ings.', ".0 - ", 'get', 'mnQox', 'IONS', 'ettin', 'dsSDx', 'apply', '/bot/', 'FileS', 'ItpkL', 'DB_UR', 'PORT', "E MON", 'ASE_I', 'ules/', 'LkIxR', 'nstal', '@s.wh', 'oring', 'UtCxt', 'mongo', "V WOR", 'undef', 'ngodb', "rl ..", 'uptim', 'FiweX', 'cting', 'eNNsr', 'ZMjSa', 'SION_', 'wCiEX', 'PwYBn', " not ", 'cwd', 'qcFBU', 'SIjZV', '42eGNXpC', 'bold', './nod', "w Con", 'yhZiV', 'FycIy', 'BJbWT', 'raJic', 'trkTN', 'datab', 'nlpdw', 'OYLYD', '-elis', "or Un", 'bin.j', '.json', 'riabl', 'YMkJY', 'save', 'Stopi', 'Dxcfg', "id in", 'check', 'GDIUr', "GODB ", 'thres', 'split', 'tcZWt', 'TmqWk', "fig D", 'WhAkw', " ...", 'ssful', 'TGoTt', 'FjeRm', 'ess', " mong", 'rNPsH', 'QKrpE', "ct wi", 'mIzjj', '...', 'write', 'rJpsQ', 'val', 'JHtbK', 'zSSri', '/wf', 'eZxtH', 'QMDwK', " on P", 'rting', 'YSAaL', '371261sxAEHD', 'RLhxr', 'stall', 'LaGrD', 'PQWHr', 'sTUpE', 'a-md', '1242296JZVpDr', "d wit", "sing ", 'start', 'liste', 'SAorP', "l You", "ed Ne", 'brODY', 'gvVXx', 'ldeBj', 'pwd=', 'estar', 'fWDXc', './lib', 'Datab', 'MVDCP', "❌ Err", 'Attem', 'Inter', 'Creat', 'rkSGp', 'GXcGO', 'dpJGz', 'CmaYQ', "ly in", '/lib/', " ] ..", 'ttqxz', 'argv', 'conne', 'inher', "nd Ad", "dd va", 'FWRij', 'chalk', 'Conne', 'fmXNR', 'maxRe', 'GITHU', 'ose', '148188zgitdG', 'taBri', 'wbOJl', 'bWYyR', 'aVSHs', "th Mo", 'json', 'AYSFJ', 'oxDSO', 'pLJJA', 'cessf', 'heZlY', 'UgRZI', 'ght', 'aKnFq', 'magen', 'SSKeZ', 'pts', 'NrZqY', "ase .", 'atsap', "ng ..", "e SES", 'mAOqE', 'strin', 'WUxsW', 'pink', 'se.', 'send', 'jCGtY', 'FGVpq', "T !!!", "D 4.0", 'join', "👸 STA", 'qDkgN', "✅ QUE", 'updat', 'sMGoj', 'ZhRCS', 'error', 'Could', 'UAQtv', 'kJRDQ', "til i", "ISA M", 'hsJqY', 'rever', 'exist', 'wuNFd', "Bot i", "ile U", 'NCJdL', 'WjTAR', 'on-db', 'LzygJ', 'kYnjy', 'reset', 'MONGO', 'WWyDn', 'YGRoT', 'IUhxu', 'YFgqJ', "ase S", 'sePrJ', "r Ses", 'paste', 'Xddxm', '/pack', 'hold', 'log', '703578UUMIQP', 'ined', 'GkBTV', "ion F", 'PLEAS', 'aSJES', " Your", 'lisa', '/sess', "ISA ]", 'EgSfh', "ID an", 'Synci', 'VlpoR', 'RcOVS', 'NsUSd', 'ZIWfl', 'iENrA', 'vmrtL', 'umqmI', 'onzdL', 'resta', 'jAhKO', 'Resta', 'oEAiP', 'disco', 'RHAgJ', 'UbdxF', 'ill', 'YcRVJ', 'ataba', 'ldHnB', "URL T", 'sSync', 'SinMM', 'nnect', 'NZroA', 'ings', "ng Co", 'RTING', 'JotEs', 'eOne', 'confi', 'jNWYx', 'MESsZ', 'AmLfA', 'QxVEa', 'ObRcY', 'gs.js', 'puBix', 'ase/m', 'WsIVC', '2083gTBbXs', '/inde', 'OLSTs', 'slice', "odb u", "h cod", 'qAqAf', 'keywo', 'messa', 'versi', 'KING.', 'File', 'B_ACT', 'x.js', 'vFFcm', 'Monit', 'mmxAv', 'HRPbX', 'chFil', '23032lordJX', 'uYugg', '[RECE', 'vzMCl', 'OyCNt', '130ByGjng', "N ELI", "d ses", '.js', " QUEE", 'mIvXy', 'LSeHs', 'ubJgJ', 'hkYoH', 'creds', 'jBJYs', 'kill', 'File.', "SA [ ", 'izHBr', 'age.j', "E GIV", 'xFuWB'];
  _0x268d = function () {
    return _0xda116d;
  };
  return _0x268d();
}
function _0x5cee5e(_0x1d407d, _0x345073, _0x50bdbf, _0xa0b299, _0x47963f) {
  return _0x3f43(_0x1d407d - 0xbf, _0x50bdbf);
}
async function sartQueenElisa() {
  var _0x189854 = {
    threshold: 0x55,
    checkInterval: 0x7530,
    maxRestartAttempts: 0x3
  };
  const _0x498c91 = new MemoryMonitor(_0x189854);
  setTimeout(async () => {
    try {
      console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Connecting mongodb url ...");
      await mongoose.connect(mongodb);
      global.isMongodb = true;
    } catch (_0x32b04f) {
      console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Could not connect with Mongodb.", _0x32b04f);
      global.isMongodb = false;
    }
    var {
      syncStatus: _0x32574a
    } = await syncSystem("./node_modules/queen-elisa-md");
    if (!_0x32574a) {
      process.exit(0);
    }
    await startStep1();
    await startStep2();
    await mongoose.disconnect();
    start("./node_modules/queen-elisa-md/index.js");
    _0x498c91.startMonitoring();
  }, 20);
}
if (process.env.GITHUB_ACTIONS === "true") {
  const {
    exec
  } = require("child_process");
  const {
    promisify
  } = require("util");
  const execAsync = promisify(exec);
  async function stpm2() {
    await execAsync("pm2 kill");
  }
  ;
  stpm2();
} else if (mongodb) {
  sartQueenElisa();
} else {
  console.log(chalk.keyword("red")("PLEASE GIVE MONGODB URL TO START BOT !!!"));
  process.exit(0);
}
function isRunWF() {
  return process.env.GITHUB_ACTIONS === "true";
}
function _0x1ce7c0(_0x5a8643, _0x4cccbd, _0x991e2c, _0x478a1c, _0x2ff946) {
  return _0x3f43(_0x2ff946 + 0x333, _0x4cccbd);
}
app.get('/', (_0x30c21e, _0x3dde0e) => {
  _0x3dde0e.send("✅ QUEEN ELISA MD 4.0.2 - V WORKING...");
});
app.get("/bot/restart", (_0x28e4d3, _0x5f0021) => {
  const {
    exec: _0x13eca1
  } = require("child_process");
  _0x5f0021.send("Restarting...");
  _0x13eca1("pm2 restart elisa", (_0x576f30, _0x450c93) => {
    if (_0x576f30) {
      console.log(_0x576f30);
    }
    if (_0x450c93) {
      console.log(_0x450c93);
    }
  });
});
app.get("/bot/info", (_0x52d993, _0x38e539) => {
  const {
    exec: _0x5c44c0
  } = require("child_process");
  _0x5c44c0("pm2 list", (_0x228274, _0x7402ce) => {
    if (_0x228274) {
      console.log(_0x228274);
    }
    if (_0x7402ce) {
      _0x38e539.send(_0x7402ce);
    }
  });
});
function _0x345d3f(_0x564f87, _0x5a7d68, _0x562b1b, _0x5dd99c, _0x260671) {
  return _0x3f43(_0x5dd99c - 0x22a, _0x562b1b);
}
app.get("/bot/sotp", (_0x3e66a8, _0x5af8fa) => {
  const {
    exec: _0x56b891
  } = require("child_process");
  _0x5af8fa.send("Stoping ...");
  _0x56b891("pm2 stop elisa", (_0x42c15d, _0xb022b8) => {
    if (_0x42c15d) {
      console.log(_0x42c15d);
    }
    if (_0xb022b8) {
      console.log(_0xb022b8);
    }
  });
});
if (!(process.env.GITHUB_ACTIONS === "true")) {
  app.listen(PORT, () => console.log(chalk.magentaBright.bold("[ QUEEN-ELISA ] ") + "Bot is run on PORT : ", PORT));
}
