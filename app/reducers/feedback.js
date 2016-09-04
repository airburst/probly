import { SET_FEEDBACK } from '../actions/feedback';

export default function counter(state = [], action) {
  switch (action.type) {

    case SET_FEEDBACK:
      return action.payload;

    default:
      return state;
  }
}
