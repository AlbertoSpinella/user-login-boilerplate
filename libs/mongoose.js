import mongoose from 'mongoose';

const mongodbEndpoint = "mongodb://mongodb:27017";

export const mongooseConnect = () => {
    mongoose.set("strictQuery", true);
    console.log(`Connecting to ${mongodbEndpoint}...`);
    mongoose.connect(mongodbEndpoint);
    console.log(`Connected to ${mongodbEndpoint}!`);
};