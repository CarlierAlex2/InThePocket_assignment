import request from "supertest";
import { app } from "../src/server";


// --- TEST - SUCCESS -----------------------------------------------------------------------------------------------
it("has a compute endpoint that returns the score with status code 200", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],

        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });
  
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ score: 300 });
});


// --- TEST - FAILED -----------------------------------------------------------------------------------------------
// too many rows
it("too many rows and returns the score with status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],

        [10, 0],

        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});


// not enough rows
it("not enough rows and returns the score with status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});


// too high values
it("too high values and returns the score with status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [11, 0],
        [10, 0],
        [10, 0],
        [10, 0],

        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });
  
  expect(response.status).toBe(400);
});


// too low values
it("too low values and returns the score with status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [-1, 0],
        [10, 0],
        [10, 0],
        [10, 0],

        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });
  
  expect(response.status).toBe(400);
});

