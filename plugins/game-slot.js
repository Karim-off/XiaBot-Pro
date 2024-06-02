/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘤𝘢𝘴𝘪𝘯𝘰 <𝘢𝘱𝘶𝘦𝘴𝘵𝘢>`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*`;
  if (apuesta < 100) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n

*[❗] 𝙴𝙻 𝙼𝙸𝙽𝙸𝙼𝙾 𝙿𝙰𝚁𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝙴𝚂 𝙳𝙴 𝟷00 𝚇𝙿*';
  if (users.exp < apuesta) {
    throw `*[❗] 𝚃𝚄 𝚇𝙿 𝙽𝙾 𝙴𝚂 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝙴𝚂𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳, 𝙹𝚄𝙴𝙶𝙰 𝙾𝚃𝚁𝙾𝚂 𝙹𝚄𝙴𝙶𝙾𝚂 𝙾 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰 𝙲𝙾𝙽 𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙶𝙰𝙽𝙰𝚁 𝙼𝙰𝚂 𝚇𝙿*`;
  }
  const emojis = ['🐋', '🦀', '🪼'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `🔮 𝙂𝙖𝙣𝙖𝙨𝙩𝙚! +${apuesta + apuesta} 𝚇𝙿*`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `🔮 𝘾𝙖𝙨𝙞 𝙡𝙤 𝙡𝙤𝙜𝙧𝙖𝙨! 𝙨𝙞𝙜𝙪𝙚 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙣𝙙𝙤\n𝙩𝙤𝙢𝙖 +20 XP`;
    users.exp += 20;
  } else {
    end = `🔮 𝙋𝙚𝙧𝙙𝙞𝙨𝙩𝙚 -${apuesta} 𝚇𝙿`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
🎰 *CASINO* 
──────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
──────────
🎰 ${end}`);
};
handler.help = ['casino <apuesta>'];
handler.tags = ['game'];
handler.command = ['casino'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}

