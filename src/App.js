import React from "react";
import Roth from "./RothComponents/Roth";
import { RothContextProvider } from "./RothComponents/rothContext";

function App() {
  return (
    <RothContextProvider>
      <Roth />
    </RothContextProvider>
  );
}

export default App;
