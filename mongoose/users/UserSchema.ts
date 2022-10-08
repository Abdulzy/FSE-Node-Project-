import mongoose from "mongoose";
import AccountType from "../../models/users/AccountType";
import MaritalStatus from "../../models/users/MaritalStatus";
import LocationSchema from "./LocationSchema";
import User from "../../models/users/User";
const UserSchema = new mongoose.Schema({
   username: {type: String, required: true},
   password: {type: String, required: true},
   firstName: String,
   lastName: String,
   email: String,
   profilePhoto: String,
   headerImage: String,
   accountType: {type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
   maritalStatus: {type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
   biography: String,
   dateOfBirth: Date,
   joined: {type: Date, default: Date.now},
   location: LocationSchema
}, {collection: 'users'});
export default UserSchema;