const INITIAL_STATE = {
  toggle: false,
};

export const sortBySpeedPriceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};
