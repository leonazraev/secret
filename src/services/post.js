import PostModel from "../models/post.js";

//optinal: Typed return?
// I don't like the way You use the functions names, but because it's service I can accept that because the destructing
//why not create(newPost) and when you import this js file you use postsService.create(post) I think it's much cleaner.
//same for the second service


export async function createPostService(createPost) {
   const post = new PostModel(createPost)
    await post.save()
   //I think it's better to return the post.
   //Maybe next someone will make some manipulation on the result?
   //It's not must but it's cleaner
}

export async function getPostsService({start, limit}) {
    return PostModel.find().sort([['_id', -1]] ).skip(start).limit(limit).exec()
}

export async function getPostsAmountService() {
    // totalPosts()
    return PostModel.countDocuments().exec();
}

