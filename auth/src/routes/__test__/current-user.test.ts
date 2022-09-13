import request from "supertest";
import { app } from "../../app";

it("Responds with current user details", async () => {
  const cookie = await signin();
  const response = await request(app)
    .get("api/users/current-user")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});
