import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";
import { openDatabase, closeDatabase } from "./database.js";
import { httpServer } from "./server.js";

describe("Tests", () => {
  before(async () => {
    await openDatabase();
  });

  it("should return Hello World", async () => {
    const response = await request(httpServer).get("/");

    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Hello World!");
  });

  after(async () => {
    await closeDatabase();
  });
});
