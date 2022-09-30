const info = require("./information");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `hi, My name is ${info.name} from ${info.campus} campus`,
    e: "oO",
    T: "U ",
  })
);
