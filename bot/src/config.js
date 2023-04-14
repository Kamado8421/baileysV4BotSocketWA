const fs = require('fs')
const path = require('path')

const ADMIN = fs.readFile('../database/admin/dono.json')

const TEMP_FOLDER = path.resolve(__dirname, '..', 'assets', 'TEMP')

const prefixo = ADMIN.prefixo
const nomeDono = ADMIN.nomeDono
const nomeBot = ADMIN.nomeBot
const emoji = ADMIN.emoji
const contatoDono = ADMIN.numeroDono

module.exports = {
    prefixo,
    nomeBot,
    nomeDono,
    emoji,
    contatoDono,
    TEMP_FOLDER
}