import "./App.css";
import SortSearch from "./components/sort-search/SortSearch";
import TicketList from "./components/ticket-list/TicketList";

function App() {
  return (
    <div className="App">
      <SortSearch />
      <TicketList />
    </div>
  );
}

export default App;
