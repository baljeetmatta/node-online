const { log } = require("console");
const Logger=require("./solutionLogger");
const logger=new Logger();
logger.on("logDone",()=>{
    console.log("Log event handled in solutionHandler.js");
});
logger.log();

