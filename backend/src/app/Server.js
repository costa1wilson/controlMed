const routes= require('./routes/app.routes');
const bodyParser= require('body-parser');
const app= require('./controllers/App');
const midleware = require('./midleware/Midleware');
const _port = 3000;
/**
 * criando e configurando servidor
 */
class Server{
    
    constructor(){
        this.server(app.app);
    }
    server(app){
        midleware.bodyParsers(app);
        routes(app);
        app().get('/',(req,res)=>{res.send('Seja Bem Vindo!');});
        app().listen(_port,()=>{ console.log('Server on Port: '+ _port)});
    }

}

module.exports = new Server();