import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchLink, setError, setTempInputValue} from "./LinkFormSlice";

function LinkForm() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.linkForm.tempInputValue);
  const error = useSelector((state) => state.linkForm.error);

  const sendLink = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(fetchLink(input));
    } else {
      console.log("Ошибка");
      dispatch(setError("Введите ссылку"))
    }
  };
  return (
    <section>
      <form>
        <label>
          <input
            onChange={(e) => {
              dispatch(setTempInputValue(e.target.value));
            }}
            //TODO: Записать пример двойного связывания
            value={input}
            type="url"
          />
          <button onClick={(e) => sendLink(e)}>Short</button>
          {error ? <p>{error}</p> : <p></p>}
        </label>
      </form>
    </section>
  );
}

export default LinkForm;
