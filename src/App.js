import React, { Fragment } from "react";
import Home from "./components/pages/Home";
import FiregramState from "./contexts/firegram/FiregramState";

const App = () => {
  return (
    <Fragment>
      <FiregramState>
        <div className="App">
          <Home />
        </div>
      </FiregramState>
    </Fragment>
  );
};

export default App;
