import { combineReducers } from "redux";
import { sortBySpeedPriceReducer } from "./sortBySpeedPrice/sortBySpeedPriceToggle-reducer";

import { ticketsReducer } from "./tickets/tickets.reducer";

export default combineReducers({
  tickets: ticketsReducer,
  toggle: sortBySpeedPriceReducer,
});
