const fs = require('fs')

global.namabot = "𝙊𝙓𝘿"
global.namaowner = "𝙁𝙄𝙆𝙊𝙓𝘿"
global.footer_text = "© 𝙊𝙓𝘿" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6281952210424',"6283838887677"]
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay Kirim Bukti Transaksi
*_PAYMENT_*
*💶DANA: 083110933360*
*💵GOPAY: 083110933360*
*💴PULSA: 083110933360*
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`╭─❒ 「 *KHUSUS PEMILIK* 」 
│
│○ .owner
│○ .pay
│
╰❒

❒ 「  *OWNER MENU*  」
│
│○ .addsewa  
│○ .delsewa  
│○ .listsewa  
│○ .ceksewa  
│○ .bot
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ .list  
│○ .addlist  
│○ .updatelist  
│○ .dellist  
│○ .setproses  
│○ .changeproses  
│○  delsetproses  
│○ .setdone  
│○ .changedone  
│○ .delsetdone  
│○ .proses  
│○ .done  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ .antiwame  [on/off]
│○ .antiwame2  [on/off]
│○ .antilink  [on/off]
│○ .antilink2  [on/off]
│○ .welcome  [on/off]
│○ .goodbye  [on/off]
│○ .setwelcome  
│○ .changewelcome  
│○ .delsetwelcome  
│○ .setleft  
│○ .changeleft  
│○ .delsetleft  
│○ .open
│○ .close
│○ .jeda  
│○ .hidetag  
│○ .kick          
│○ .add
│○ .setppgc
│○ .setnamegc
│○ .setdesgc
│○ .linkgc
│○ .resetlinkgc
│○ .promote
│○ .demote
│
╰❒

╭─❒ 「 *STICKER MENU* 」 
│
│○ .stiker
│
╰❒

╭─❒ 「  *KALKULATOR MENU*  」
│
│○ .tambah  
│○ .kurang  
│○ .kali  
│○ .bagi  
│
╰❒
\`\`\`

🗿 YANG MAU SEWA JUGA SILAHKAN 
CHAT NOMOR INI 083838887677
`
}