const mongoose = require("mongoose");
const dns =  require("dns")
dns.setServers([["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sairamgundu24:<db_password>@cluster0.6gru7la.mongodb.net/sairam");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
