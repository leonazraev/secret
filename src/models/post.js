import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },

});
//what about adding index to owner?
//timestamps?
const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
