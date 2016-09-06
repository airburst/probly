import {
  TOGGLE_OPEN_ITEMS,
  SHOW_REOPEN_UNDO,
  HIDE_REOPEN_UNDO
} from '../actions/settings';

const initialSettings = {
  filterOpenRecords: true,
  showReopenUndo: false,
  lastKey: undefined
};

export default function settings(state = initialSettings, action) {
  switch (action.type) {

    case TOGGLE_OPEN_ITEMS:
      return Object.assign({}, state, { filterOpenRecords: !state.filterOpenRecords });

    case SHOW_REOPEN_UNDO:
      return Object.assign({}, state, { showReopenUndo: true, lastKey: action.payload });

    case HIDE_REOPEN_UNDO:
      return Object.assign({}, state, { showReopenUndo: false, lastKey: undefined });

    default:
      return state;
  }
}
