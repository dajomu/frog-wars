import * as types from './action-types';
let timer = null;
const timerRate = 1000;

export const startTimer = () => (dispatch, getState) => {
  const { pads } = getState();
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick(pads)), timerRate);
  dispatch({ type: types.TIMER_START });
  dispatch(tick(pads));
}

const tick = (pads) => {return { type: types.TIMER_TICK, pads }};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: types.TIMER_STOP };
}