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

    it("person Data", async () => {
        const personData = { name: "Amani", age: 28, gender: "Female" };
        const res = await request.post("/person").send(personData);
        expect(res.text).toEqual("New Age : 33");
});
});
