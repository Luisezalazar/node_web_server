const {envs} = require('./config/env')
const {startServer} = require ('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnóstica autoconvocada
(async () => {
    main()
})()