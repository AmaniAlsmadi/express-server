"use strict";

const supertest = require("supertest");
const server = require("../sever");
const request = supertest(server.app);

describe('API server', () => {
    it('Home page work', async() => {
        const res =await request.get('/'); //mintion the home page
        // now the testing
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    });
    it('person page work', async() => {
        const res =await request.post('/person?age=28');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('New Age : 33');
    });
});
