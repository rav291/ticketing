import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("Invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "asnsadsd",
      password: "hELLO",
    })
    .expect(400);
});

it("Invalid password or no data", async () => {
  await request(app) // await or function behave as the same here, as well as below
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "h",
    })
    .expect(400);

  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("Disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("Sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined(); // Checks whether token is defined in header or not.
});
