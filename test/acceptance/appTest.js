const httpClient = require('supertest');
const app = require('../../src/app');
const assert = require("assert");


describe('Book inventory', function () {
    it('allows to stock up the items', async function () {
        const request =  httpClient(app);

        // CREATE
        const createResult = await request
            .post('/book')
            .send({
                title: "JavaScript in Action",
                authors: ["James Smith", "Kate Donovan"],
                isbn: "0123456789",
                description: "The ultimate JS book!"
            })
            .set('Content-Type', 'application/json')
            .expect(302);

        // READ
        const readResult = await request
            .get(createResult.header.location)
            .expect(200);

        assert.deepEqual(readResult.body, {
            title: "JavaScript in Action",
            authors: ["James Smith", "Kate Donovan"],
            isbn: "0123456789",
            description: "The ultimate JS book!"
        });
    }),

    it('delete book', async function () {
        const request =  httpClient(app);
        const isbn = 123;

        // CREATE
        await request
            .post('/book')
            .send({
                title: "JavaScript in Action",
                authors: ["James Smith", "Kate Donovan"],
                isbn: isbn,
                description: "The ultimate JS book!"
            })
            .set('Content-Type', 'application/json')
            .expect(302);

        await request
        .delete('/book/' + isbn)
        .expect(204);
    })
});