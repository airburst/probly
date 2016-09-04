export const SET_FEEDBACK = 'SET_FEEDBACK';

export function setFeedback(feedback) {
  return {
    type: SET_FEEDBACK,
    payload: feedback
  };
}
