const express = require('express');
const app = express();
/*inica o servidor*/
class App{
constructor(){
this.app();
}
app(){
    return app;
}
}

module.exports = new App();