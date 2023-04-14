const { default: makeWASocket, 
    DisconnectReason, 
    useMultiFileAuthState
 } = require('@adiwajshing/baileys')

async function connect(){
    const { state, saveCreds } = await useMultiFileAuthState('../assets/auth/connection')
    const bot = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        defaultQueryTimeoutMs: undefined
    })

    bot.ev.on('connection.update', (update) => {
        const { connetion, lastDisconnect } = update

        if(connetion === 'close'){
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggeOut
            
            if(shouldReconnect){
                connect();
            }
        }
    })

    bot.ev.on('creds.update', saveCreds)

    return bot;

}

module.exports = connect;