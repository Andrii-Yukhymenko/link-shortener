import React from "react";
import LinkForm from "./features/LinkForm/LinkForm";
import LinksList from "./features/LinksList/LinksList";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.container}>
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
