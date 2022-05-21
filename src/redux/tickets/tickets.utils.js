export const filterByStops = (tickets, arrayOfStops) => {
  if (arrayOfStops.includes(4)) {
    return tickets;
  } else {
    return tickets.filter((ticket) =>
      arrayOfStops.includes(ticket.segments[0].stops.length)
    );
  }
};

export const sortByPrice = (tickets) => {
  return tickets.sort((a, b) => a.price - b.price);
};

export const sortBySpeed = (tickets) => {
  console.log("TTT", tickets);
  return tickets.sort(
    (a, b) => a.segments[0].duration - b.segments[0].duration
  );
  // .sort((a, b) => a.price - b.price);
};

// const tickets = [
//   {
//     price: 23200,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: ["HTW", "DRS", "BGL"],
//         duration: 12.55,
//         departue: "11:15",
//         arrival: "14:00",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: ["MDR", "SER", "LNG"],
//         duration: 16.1,
//         departue: "16:25",
//         arrival: "19:00",
//       },
//     ],
//   },
//   {
//     price: 18200,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: ["HTW", "DRS"],
//         duration: 12.55,
//         departue: "08:00",
//         arrival: "20:55",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: ["MDR", "SER"],
//         duration: 14.15,
//         departue: "16:25",
//         arrival: "12:40",
//       },
//     ],
//   },
//   {
//     price: 18200,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: ["HTW", "DRS"],
//         duration: 12.55,
//         departue: "08:00",
//         arrival: "20:55",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: ["MDR", "SER"],
//         duration: 14.15,
//         departue: "16:25",
//         arrival: "12:40",
//       },
//     ],
//   },
//   {
//     price: 28900,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: [],
//         duration: 10.55,
//         departue: "00:15",
//         arrival: "11:10",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: [],
//         duration: 11.0,
//         departue: "16:25",
//         arrival: "03:25",
//       },
//     ],
//   },
//   {
//     price: 28900,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: [],
//         duration: 10.55,
//         departue: "00:15",
//         arrival: "11:10",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: [],
//         duration: 11.0,
//         departue: "16:25",
//         arrival: "03:25",
//       },
//     ],
//   },
//   {
//     price: 15900,
//     carrier: "S7",
//     segments: [
//       {
//         origin: "New-York",
//         destination: "Kyiv",
//         date: "14-05-2022",
//         stops: ["HLK"],
//         duration: 11.55,
//         departue: "01:15",
//         arrival: "13:10",
//       },
//       {
//         origin: "Kyiv",
//         destination: "New-York",
//         date: "26-05-2022",
//         stops: ["HLK"],
//         duration: 11.0,
//         departue: "16:25",
//         arrival: "03:25",
//       },
//     ],
//   },
// ];

// console.log(sortBySpeed(tickets));
// const filterByStops = (tickets, arrayOfStops) => {
//   return tickets.filter((ticket) =>
//     arrayOfStops.includes(ticket.segments[0].stops.length)
//   );
// };

// console.log("NEW", filterByStops(tickets, [2]));

// console.log(tickets.filter((ticket) => ticket.segments[0].stops.length !== 2));
