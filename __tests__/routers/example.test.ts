import app from "../../src/app";
import request from "supertest";
// require("mysql2/node_modules/iconv-lite").encodingExists("foo");

// afterEach((done) => {
//   app.close();
//   done();
// });

describe("routers/example", () => {
  it("should success", async () => {
    const response = await request(app.callback()).get("/example");
    expect(response.status).toEqual(200);
    // expect(response.type).toEqual("application/json");
    // expect(response.body.data).toEqual("ping");
  });
});
