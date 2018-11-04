
const INITIAL_STATE = {
  navDrawer: {
    open: false,
  },
};

function r(state = INITIAL_STATE, action) {

  switch(action.type) {
    case "NAVDRAWER_OPEN":
      return Object.assign({}, state, {
        navDrawer: Object.assign({}, state.navDrawer, {
          open: true,
        }),
      });

    case "NAVDRAWER_CLOSE":
      return Object.assign({}, state, {
        navDrawer: Object.assign({}, state.navDrawer, {
          open: false,
        }),
      });


    default:
      return state;
  }

}

export default r;
