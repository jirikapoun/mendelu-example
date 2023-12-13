import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";
import { httpServer } from "./server.js";

describe("Tests", () => {
  it("should return Hello World", async () => {
    const response = await request(httpServer).get("/");

    expect(response.status).to.equal(200);
    expect(response.body.data).to.equal("Hello World!");
  });
});
