import mongoose from "mongoose";
// DB connection
export  async function db () {   
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
        });
        console.log("DB connected on", conn.connection.host);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

