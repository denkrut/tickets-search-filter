import { TicketsActionTypes } from "./tickets.types";
import { sortBySpeed, sortByPrice, filterByStops } from "./tickets.utils";

const INITIAL_STATE = {
  tickets: [
    {
      price: 23200,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: ["HTW", "DRS", "BGL"],
          duration: 12.55,
          departue: "11:15",
          arrival: "14:00",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: ["MDR", "SER", "LNG"],
          duration: 16.1,
          departue: "16:25",
          arrival: "19:00",
        },
      ],
    },
    {
      price: 18200,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: ["HTW", "DRS"],
          duration: 12.55,
          departue: "08:00",
          arrival: "20:55",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: ["MDR", "SER"],
          duration: 14.15,
          departue: "16:25",
          arrival: "12:40",
        },
      ],
    },
    {
      price: 18200,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: ["HTW", "DRS"],
          duration: 12.55,
          departue: "08:00",
          arrival: "20:55",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: ["MDR", "SER"],
          duration: 14.15,
          departue: "16:25",
          arrival: "12:40",
        },
      ],
    },
    {
      price: 28900,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: [],
          duration: 10.55,
          departue: "00:15",
          arrival: "11:10",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: [],
          duration: 11.0,
          departue: "16:25",
          arrival: "03:25",
        },
      ],
    },
    {
      price: 28900,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: [],
          duration: 10.55,
          departue: "00:15",
          arrival: "11:10",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: [],
          duration: 11.0,
          departue: "16:25",
          arrival: "03:25",
        },
      ],
    },
    {
      price: 15900,
      carrier: "S7",
      segments: [
        {
          origin: "New-York",
          destination: "Kyiv",
          date: "14-05-2022",
          stops: ["HLK"],
          duration: 11.55,
          departue: "01:15",
          arrival: "13:10",
        },
        {
          origin: "Kyiv",
          destination: "New-York",
          date: "26-05-2022",
          stops: ["HLK"],
          duration: 11.0,
          departue: "16:25",
          arrival: "03:25",
        },
      ],
    },
  ],
  sortedTickets: [],
};

export const ticketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TicketsActionTypes.GET_ALL_TICKETS:
      return {
        ...state,
        tickets: state.tickets,
      };
    case TicketsActionTypes.SORT_BY_STOPS:
      return {
        ...state,
        sortedTickets: [...filterByStops(state.tickets, action.payload)],
      };

    case TicketsActionTypes.SORT_BY_SPEED:
      return {
        ...state,
        sortedTickets: [...sortBySpeed(state.tickets)],
        // sortedTickets: [...sortBySpeed(state.tickets)],
        // tickets: [...sortBySpeed(state.tickets)],
      };

    case TicketsActionTypes.SORT_BY_PRICE:
      return {
        ...state,
        tickets: [...sortByPrice(state.tickets)],
        sortedTickets: [...sortByPrice(state.sortedTickets)],
      };
    default:
      return state;
  }
};
