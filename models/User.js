import { model, Schema } from 'mongoose';

const User = new Schema({
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true }
});

export default model('User', User);