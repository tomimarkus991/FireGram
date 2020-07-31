import React from "react";
import Home from "./components/pages/Home";
import FiregramState from "./contexts/firegram/FiregramState";

const App = () => {
  return (
    <FiregramState>
      <div>
        <Home />
      </div>
    </FiregramState>
  );
};

export default App;
