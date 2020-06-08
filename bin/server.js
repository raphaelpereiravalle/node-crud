'use strict';

// Importar pacotes
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

// Configurar porta
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('onListening', onListening);

console.log('API rodando na porta ' + port);

// Função para validar porta
function normalizePort(val) {
    const port = parseInt(val, 1);

    if (isNaN(port)) { return val }

    if (port >= 0 ) { return port }

    return false;
}

// Função de erro
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port: 'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind = 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind = 'isalready in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Pegar informações do servidor
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port' + addr.port;
    debug('Listening on' + bind);
} 