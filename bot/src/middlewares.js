const { isCommand, extractDataFromMessage } = require('./utils/index')

async function middlewares(bot){
    bot.ev.on('message.upsert', async (messages) => {

        const baileysMessage = messages[0]

        if(!baileysMessage?.message || isCommand(baileysMessage)){
            return;
        }


        const { command, remoteJid } = extractDataFromMessage(baileysMessage)

        // enviar mensage de texto
        const enviar = ((message) => {
            bot.sendMessage(remoteJid, {text: message})
        })
        
        switch (command.toLowerCase()) {
            case 'ping':
                enviar('pong')

                break;
        
            default:
                enviar('comando não existe!!')
                break;
        }
    })
}

module.exports =  middlewares;