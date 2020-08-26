const routes = require("./routes/app.routes");
const bodyParser = require("body-parser");
const app = require("./controllers/App");
const midleware = require("./midleware/Midleware");
const setting = require("./settings/Settings");
const _port = 3000;
/**
 * criando e configurando servidor
 */
class Server {
  constructor() {
    this.server(app.app);
  }
  server(app) {
    midleware.bodyParsers(app);
    setting.setting(app);
    routes(app);
    app().get("/", (req, res) => {
      res.send("Seja Bem Vindo!");
    });
    app().listen(app().get("port"), () => {
      console.log("Server on Port: " + app().get("port"));
    });
  }
}

module.exports = new Server();
