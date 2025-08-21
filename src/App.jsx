import React from "react";
import UserTable from "./Components/Table/UserTable";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4 text-center italic bg-sky-500/10">
        Client Management
      </h1>
      <UserTable />
    </div>
  );
};

export default App;
