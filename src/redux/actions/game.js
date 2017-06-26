import * as types from './action-types';
let timer = null;
const timerRate = 1000;
let gameTime = 0;

export const startTimer = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), timerRate);
  dispatch({ type: types.TIMER_START });
  dispatch(tick());
}

const tick = () => {gameTime++; return { type: types.TIMER_TICK, gameTime }};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: types.TIMER_STOP };
}