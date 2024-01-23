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

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;