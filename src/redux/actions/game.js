import * as types from './action-types';
let timer = null;
const timerRate = 1000;

export const startTimer = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), timerRate);
  dispatch({ type: types.TIMER_START });
  dispatch(tick());
}

const tick = (pads) => {return { type: types.TIMER_TICK, pads }};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: types.TIMER_STOP };
}