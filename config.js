import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62895419916010', 'Arifin Ofc', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '62895419916010'
global.packname = '© Sticker by'
global.author = 'Freya Ofc'
global.namebot = 'Freya Ofc'
global.wm = '© Arifin Ofc'
global.stickpack = '© Arifin Ofc'
global.stickauth = 'Itscukki'
global.fotonya = 'https://telegra.ph/file/893bb1c053e182782b085.jpg'
global.fotonya2 = `https://telegra.ph/file/893bb1c053e182782b085.jpg`
// Link Sosmed
global.sig = 'https://instagram.com/windahbasudara'
global.syt = 'https://youtube.com/@windahbasudara'
global.sgh = 'https://github.com/rizalfreall'
global.sgc = 'https://chat.whatsapp.com/CCxmIU4r86bHr8CuZ2DoYg'
// Donasi

global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '0895419916010'
// Info Wait
global.wait = 'Loading mohon di tunggu ya Cukg...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = '5dRkJDWvIG'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "5dRkJDWvIG",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
