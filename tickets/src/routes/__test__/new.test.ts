import request from "supertest";
import { app } from "../../app";

it("has a route handler listening for api/tickets for POST requests", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});

it("can only be accessed if user is signed in", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin()) // global signin fn.
    .send({});
});

it("returns an error if invalid title is provided", async () => {});

it("returns an error if invalid price is provided", async () => {});

it("creates a ticket with valid inputs", async () => {});
