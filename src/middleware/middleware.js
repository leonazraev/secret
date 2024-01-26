import {updateStatistic} from "../services/statistic.js";
import {CREATE_POST_NAME, GET_POSTS_NAME} from "../const.js";
// why this file name is Middleware.js? why  ot statistics? then statistics Middleware.measureRequestDuration 

export async function measureRequestDuration(req, res, next) {
    const start = Date.now();
    res.once('finish', () => {
        const diff = Date.now() - start;
        if (req.originalUrl == "/posts") {
            if (req.method === "GET") {
                updateStatistic(GET_POSTS_NAME, diff / 1000);
            }
            if (req.method === 'POST') {
                updateStatistic(CREATE_POST_NAME, diff / 1000);
            }
        }
    });
    next()
}
