const request = require("supertest");
const app = require("../index");
const {dbClose, dbConnect} = require("../dbConnect");
const {getMoviesFromDb} = require("../api/api");

describe("Routes tests", () => {
    describe("Test creating and fetching data from DB", () => {

        beforeEach(async () => await dbConnect());

        afterEach(async () => await dbClose());

        it("Should store in DB", async (done) => {
            const res = await request(app).post("/");
            expect(res.status).toBe(200);
            expect(res.body).toEqual({success: true});
            done();
        });

        it("Should fetch data from DB", async (done) => {
            const res = await request(app).get('/');
            expect(res.status).toBe(200);
            expect(res.body.length).toEqual(10);
            done();
        });

        it('Should fetch data from DB with search term', async (done) => {
            const director = "Hirohisa Sasaki";
            const res = await getMoviesFromDb(director);
            expect(res.length).toBe(1);
            expect(res[0].director).toBe(director);
            done();
        });
    });
});