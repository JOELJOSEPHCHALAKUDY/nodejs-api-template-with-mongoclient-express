const mongodbutil = require(__base + "app/util/mongodbutil");
const db = mongodbutil.getDb();
const stripeService = require("../services/stripe");

module.exports = {

    doSomething: async (req, res, next) => {

        // do something here 

        res.status(200).json({ message : "hellow world"});
    }



}