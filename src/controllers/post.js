import {createPostService, getPostsAmountService, getPostsService} from "../services/post.js";

// Same here with names show,create,total in the file calling it postsController.create etc
export async function getPostController(req, res) {
    const {start = 0, limit = 10} = req.query;
    try {
        const posts = await getPostsService({start, limit});
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(error.message).send(error.status);
    }
}

export async function createPostController(req, res) {
    try {
        const {owner, title, body} = req.body
        const data = await createPostService({owner, title, body})
        res.status(200).send(data)
    } catch (error) {
        console.error(error);
        res.status(error.status).send(error.error)
    }
}

export async function getPostsAmountController(req, res) {
    try {
        const posts = await getPostsAmountService();
        res.json({amount: posts});
    } catch (error) {
        console.error(error);
        res.status(error.message).send(error.status);
    }
}
