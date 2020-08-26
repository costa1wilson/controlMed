const app = require("../controllers/App");
class Settings {
  constructor() {}
  setting(app) {
    app().set("port", process.env.PORT || 3000);
  }
}

module.exports = new Settings();
