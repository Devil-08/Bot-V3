import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let caption = `

*「 Ayat Kursi 」*

"जय श्रीं राम 🚩, राम ही सर्वस्व हैं 😌"

“JAI SHREE RAM 🚩,RAM IS EVERTHING 😌"

Artinya:

RAM RAM RAM RAM 😌

(QS. Al siya ram : 255)

`.trim()

  m.reply(caption)

}

handler.help = ['ram']

handler.tags = ['jai', 'limitmenu']

handler.command = /^(sanatan)$/i

handler.limit = true

export default handler
