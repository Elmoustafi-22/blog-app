import mongoose from "mongoose";

const connectToDb = async () => {
    const connectionUrl = process.env.MONGODB_URL;

    mongoose
        .connect(connectionUrl)
        .then(() => console.log('blog database connection is successful'))
        .catch(error => console.log(error))
}

export default connectToDb;