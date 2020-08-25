const bodyParser= require('body-parser');
const app= require('../controllers/App');
class Midleware{

constructor(){
this.bodyParsers(app.app);
}
bodyParsers(app){
        app().use(bodyParser.urlencoded({extended:true}));
    
}

}

module.exports = new Midleware();