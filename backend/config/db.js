import mongoose from 'mongoose';
import colors from 'colors';

const connectDb = async () => {
    try {
        console.log(`Trying to connect to ${process.env.MONGO_URI}`);

        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

        console.log(`MongoDB connected to ${conn.connection.host}`.blue.underline);

        return conn;

    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
}

export default connectDb;