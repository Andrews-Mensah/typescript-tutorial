import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    transport:{
        target: 'pino-pretty',
        options: {
            colorize: true,
            destination: 2
        }
    },
    base: {
        pid: false //pid is process id
    },
    timestamp: ()=> `,"time":"${dayjs().format()}"`
})



export default log;