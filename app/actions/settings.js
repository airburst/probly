export const TOGGLE_OPEN_ITEMS = 'TOGGLE_OPEN_ITEMS';
export const SHOW_REOPEN_UNDO = 'SHOW_REOPEN_UNDO';
export const HIDE_REOPEN_UNDO = 'HIDE_REOPEN_UNDO';

export function toggleOpenItems() {
  return {
    type: TOGGLE_OPEN_ITEMS
  };
}

export function showReOpenUndo(key) {
  return {
    type: SHOW_REOPEN_UNDO,
    payload: key
  };
}

export function hideReOpenUndo() {
  return {
    type: HIDE_REOPEN_UNDO
  };
}
