import store from '../index';

export const TOGGLE_OPEN_ITEMS = 'TOGGLE_OPEN_ITEMS';
export const SHOW_REOPEN_UNDO = 'SHOW_REOPEN_UNDO';
export const HIDE_REOPEN_UNDO = 'HIDE_REOPEN_UNDO';

export function toggleOpenItems() {
  store.dispatch({
    type: TOGGLE_OPEN_ITEMS
  });
}

export function showReOpenUndo(key) {
  store.dispatch({
    type: SHOW_REOPEN_UNDO,
    payload: key
  });
}

export function hideReOpenUndo() {
  store.dispatch({
    type: HIDE_REOPEN_UNDO
  });
}
