import * as types from './action-types';
let timer = null;

export const startTimer = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: types.TIMER_START });
  dispatch(tick());
}

const tick = () => {return { type: types.TIMER_TICK }};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: types.TIMER_STOP };
}