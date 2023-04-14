const connect = require('./connection')
const middlewares = require('./middlewares')

async function startBot(){
    const bot = await connect()
    await middlewares(bot)

}

startBot();

