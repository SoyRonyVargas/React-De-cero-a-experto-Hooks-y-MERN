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

UserSchema.method('toJSON',function(){
    
    const { __v , _id , ...object } = this.toObject()

    object.id = _id

    return object

})

const UserModel = model<User>('User', UserSchema);

export default UserModel