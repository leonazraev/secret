import supertest from "supertest";
import {app, server} from "../src/index.js";
import {clearFakeDB, connectFakeDB, disconnectFakeDB} from "./initialzers/db.js";
import {CREATE_POST_NAME, GET_POSTS_NAME} from "../src/const.js";

const request = supertest(app);

describe('statical routes', () => {
    beforeAll(async () => {
        await connectFakeDB();
    });
    afterAll(async () => {
        await disconnectFakeDB();
        server.close()
    });
    beforeEach(async () => {
        await clearFakeDB()
    })

    describe('GET /topcreators', () => {
        beforeEach(async () => {
            await request.post('/posts').send({
                title: 'number 1',
                body: 'body 1',
                owner: 'dani'
            });
            await request.post('/posts').send({
                title: 'number 2',
                body: 'body 2',
                owner: 'dani'
            });
            await request.post('/posts').send({
                title: 'number 3',
                body: 'body 3',
                owner: 'shlomi'
            });
        })
        it('test', async () => {
            const res = await request.get('/statistics/topcreators')
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2)
            expect(res.body[0]).toEqual({owner: 'dani', count: 2})
            expect(res.body[1]).toEqual({owner: 'shlomi', count: 1})
        });
    })

    describe('GET /runtimes', () => {
        beforeEach(async () => {
            await request.post('/posts').send({
                title: 'number 1',
                body: 'body 1',
                owner: 'dani'
            });
            await request.post('/posts').send({
                title: 'number 2',
                body: 'body 2',
                owner: 'dani'
            });
            await request.get('/posts')

            await request.post('/posts').send({
                title: 'number 3',
                body: 'body 3',
                owner: 'shlomi'
            });

        })
        it('test', async () => {
            const res = await request.get('/statistics/runtimes')
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2)
            expect(res.body[0].name).toEqual(CREATE_POST_NAME)
            expect(res.body[1].name).toEqual(GET_POSTS_NAME)
        });
    })

});