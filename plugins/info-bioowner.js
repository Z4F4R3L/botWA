let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Asrori Amin
*✉️ Nama RL* : Amin
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 18 Oktober 2006
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Anime, Chatting, Mencintaimu
*💬 Sifat* : Baik, Ramah, Keren, Pintar, Suka Anak-Anak
*🗺️ Tinggal* : Indo, Jawa Tengah, Kudus, Mejobo
*❤️ Suka* : warnah kuning & biru, Anime, waifu, loli, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @saya_asroriamim
*🇫  Facebook* : Gak Ada
*🏮 Chanel Youtube* : Asrori Amin
*🐈 Github:* AminGanteng

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler