 // --- IMPORTS -----------------------------------------------
import { Game } from "./types";


 // --- FUNCTIONS -----------------------------------------------
export function compute(game: Game): number {
  try {
    const score = calculate_score(game)
    return score
  }
  catch (error) {
    throw new Error(`Error: ${error}`); // TODO
  }
}

const calculate_score = function (game: Game): number {
  let total_score = 0;


  try {
    for (let i = 0; i < game.length; i++) {
      let frame = game[i];
      let frame_score =  frame[0] + frame[1]

      // strikes
      if(frame[0] == 10){
        total_score += get_score_strike(game, i);
      }
      // spares
      else if(frame_score == 10){
        total_score += get_score_spare(game, i);
      }
      // default
      else {
        total_score += frame_score
      }
      console.log(`frame ${i} - total_score: ${total_score}`)
    }    
  } 
  catch (error) {
    throw new Error(`Error: ${error}`); // TODO
  }
 
  return total_score;
};


// --- FUNCTIONS - SCORE CALCULATION -----------------------------------------------------------------------------------------------
const get_score_strike = function(game: Game, i: number): number{
  let frame = game[i];
  let throw0 = frame[0]
  let throw1 = frame[1]
  let frame_score = throw0 + throw1
  let score = 0;

  // frame 1 - 8
  if (i < 8){
    let next_throw_score = game[i+1][0];
    // double strike
    if (next_throw_score == 10){
      score = frame_score + next_throw_score + game[i+2][0];
      }
    // single strike
    else{
      score = frame_score + next_throw_score + game[i+1][1];
    }
  }
  
  // frame 9
  else if (i == 8){
      let next_throw_score = game[i+1][0];
      // double strike
      if (next_throw_score == 10){
        score = frame_score + next_throw_score + game[i+1][1];
    }
    // single strike
    else{
      score = frame_score + next_throw_score;
    }
  }
  
  // frame 10
  else{
    score = frame_score + game[i][2];
  }

  // return score
  return score
}

const get_score_spare = function(game: Game, i: number): number{
  let frame = game[i];
  let throw0 = frame[0]
  let throw1 = frame[1]
  let frame_score = throw0 + throw1
  let score = 0;

  // return score
  if (i >= 9) 
    return frame_score + frame[2]; // frame 10
  return frame_score + game[i+1][0]; // frame 1 - 9
}

