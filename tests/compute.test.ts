import { compute } from "../src/compute";
import { Game } from "../src/types";


// --- TEST - SUCCESS -----------------------------------------------------------------------------------------------
// perfect game
it("should return 300 on a perfect game", () => {
  const inputscore: Game = [
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
  ];

  const score = compute(inputscore);
  expect(score).toBe(300);
});

// 1 spare between strikes
it("should return 280", () => {
  const inputscore: Game = [
    [10, 0],
    [9, 1],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10],
  ];

  const score = compute(inputscore);
  expect(score).toBe(280);
});

// strikes till turn 8 + spare turn 9
it("should return 257", () => {
  const inputscore: Game = [
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [9, 1],
    [9, 0, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(257);
});

// strike between turn 1 - 9
it("should return 48", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [1, 1],
    [10, 0],
    [2, 2],
    [2, 2, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(48);
});

// strike at turn 9
it("should return 50", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [10, 2],
    [2, 2, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(50);
});

// 1 strikes at turn 10
it("should return 56", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [10, 7, 3],
  ];

  const score = compute(inputscore);
  expect(score).toBe(56);
});


// 2 strikes at turn 10
it("should return 63", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [10, 10, 7],
  ];

  const score = compute(inputscore);
  expect(score).toBe(63);
});

// 3 strikes at turn 10
it("should return 66", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [10, 10, 10],
  ];

  const score = compute(inputscore);
  expect(score).toBe(66);
});

// spare between turn 1 - 9
it("should return 17", () => {
  const inputscore: Game = [
    [9, 1],
    [2, 3],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(17);
});

// single spare on turn 9
it("should return 24", () => {
  const inputscore: Game = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [9, 1],
    [7, 0, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(24);
});

// single spare on turn 10
it("should return 16", () => {
  const inputscore: Game = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [9, 1, 6],
  ];

  const score = compute(inputscore);
  expect(score).toBe(16);
});


// no strikes or spares
it("should return 40", () => {
  const inputscore: Game = [
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2, 0],
  ];

  const score = compute(inputscore);
  expect(score).toBe(40);
});
