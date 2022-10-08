import mongoose from "mongoose";
import Tuit from "../../models/tuits/Tuit";

const TuitSchema = new mongoose.Schema({
    tuit: String,
    postedOn: {type: Date, default: Date.now},
    PostedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'tuits'})

export default TuitSchema