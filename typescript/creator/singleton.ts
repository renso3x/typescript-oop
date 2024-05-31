// Singleton Logger Class
// log method
// Have multiple methods

class Logger {
    private static instance: Logger

    private constructor() {

    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    public log(message: string) {
        const timestamp = new Date();
        console.log(`[${timestamp.toLocaleString()}] - ${message}`)
    }
}

const info = Logger.getInstance()
info.log('INfo logger')

const warning = Logger.getInstance()
warning.log('Warning logger')



