import mongoose from "mongoose";

const {Schema, model} = mongoose;

const userSchema = new Schema(
    {
        fullName : {
            type : String,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            required : true,
            type : String,
        },

    },
    {
        timestamps: true,
    }
);

const User =  model('User', userSchema);
export default User;