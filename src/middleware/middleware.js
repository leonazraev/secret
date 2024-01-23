import {performance} from 'perf_hooks'
import {updateStatical} from "../services/statistic.js";
import {CREATE_POST_NAME, GET_POSTS_NAME} from "../const.js";


export async function measureRequestDuration(req, res, next) {
    const start = Date.now();
    res.once('finish', () => {
        const diff = Date.now() - start;
        if (req.originalUrl == "/posts") {
            if (req.method === "GET") {
                updateStatical(GET_POSTS_NAME, diff / 1000);
            }
            if (req.method === 'POST') {
                updateStatical(CREATE_POST_NAME, diff/ 1000);
            }
        }
    });
    next()

}