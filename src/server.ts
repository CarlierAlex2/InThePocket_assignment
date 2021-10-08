import http from "http";
import express from "express";
import { compute } from "./compute";
import { Game } from "./types";


export const app = express();


app.use(express.json());


// --- API -----------------------------------------------
app.post("/compute", (request, response) => {
  // validation
  const game = request.body.game;
  const result = validate_input(game);
  if (result[0] != 200)
    return response.status(result[0]).json({message: result[1]});

  // return response
  try {
    // response - SUCCES
    const score = compute(game);
    return response.status(200).json({score: score});
  } 
  catch (error) {
    // response - FAILED
    console.log(`Error: ${error}`);
    return response.status(400).json({message: 'Something went wrong during the score calculation.'});
  }

  // default return result
  return response.status(400).json({message: 0});
});


// --- FUNCTIONS -----------------------------------------------
const validate_input = function (game: Game): [number, string] {
  // validate input - Game length
  if (game.length < 10)
    return [400, 'This game does not have enough turns! There should be exactly 10 turns.'];
  else if (game.length > 10)
    return [400, 'This game has too many turns! There should be exactly 10 turns.'];

  // validate input - Game length
  else {
    for (let i = 0; i < game.length; i++)
    {
      const frame = game[i];

      // check amount of throws in a frame
      if((i == 9 && frame.length != 3) || (i < 9 && frame.length != 2))
        return [400, `The amount of throws within frame ${i+1} are incorrect.`];

      // check scores of all throws
      else{
        for (let turn of frame){
          if (turn > 10 || turn < 0)
            return [400, `The scores within frame ${i+1} are incorrect.`];
        }
      }

    }
  }

  // return ok results
  return [200, '']
}
