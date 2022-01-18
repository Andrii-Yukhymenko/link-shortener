import React from "react";
import LinkForm from "./features/LinkForm/LinkForm";
import LinksList from "./features/LinksList/LinksList";

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <LinkForm />
          <LinksList />
        </div>
      </main>
    </div>
  );
}

export default App;
