import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLink, setError, setTempInputValue } from "./LinkFormSlice";
import classes from "./LinkForm.module.scss";
import Loader from "../Loader/Loader";
function LinkForm() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.linkForm.tempInputValue);
  const error = useSelector((state) => state.linkForm.error);
  const loading = useSelector((state) => state.linkForm.loading);

  const sendLink = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(fetchLink(input));
    } else {
      dispatch(setError("Enter link"));
    }
  };
  return (
    <section>
      <form className={classes.form}>
        <label className={classes.wrapper}>
          <input
            className={classes.input}
            onChange={(e) => {
              dispatch(setTempInputValue(e.target.value));
            }}
            //TODO: Записать пример двойного связывания
            value={input}
            type="url"
            placeholder="Shorten a link here..."
          />
          <button className={classes.button} onClick={(e) => sendLink(e)}>
            {loading ? <Loader /> : "Shorten it"}
          </button>
          {error ? <p className={classes.error}>{error}</p> : <p></p>}
        </label>
      </form>
    </section>
  );
}

export default LinkForm;
