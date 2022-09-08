import React from "react";
import Entry from "./page/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/dashboard/Dashboard.page";
import AddTicket from "./page/new-ticket/AddTicket.page";

import "./App.css";
import TicketLists from "./page/ticket-list/TicketLists.page";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
