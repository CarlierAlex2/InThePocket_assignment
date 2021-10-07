import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;
  // Validate input

  // Return response
  try {
    const score = compute(game);
    return response.status(200).json({score: score});
  } 
  catch (error) {
    console.log(`Error: ${error}`);
    return response.status(400).json({message: 0});
  }

  return response.status(400).json({message: 0});
});
