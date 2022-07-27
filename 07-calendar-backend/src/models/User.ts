import { User } from './../auth/types/types';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema<User>({
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = model<User>('User', UserSchema);

export default UserModel