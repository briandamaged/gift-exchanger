
const INITIAL_STATE = {
  open: false,
};

function reduce(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "NAVDRAWER_OPEN":
      return Object.assign({}, state, {
        open: true,
      });

    case "NAVDRAWER_CLOSE":
      return Object.assign({}, state, {
        open: false,
      });

    default:
      return state;
  }
}

export default reduce;
