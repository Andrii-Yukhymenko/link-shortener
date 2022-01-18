import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLink, setTempInputValue } from "./LinkFormSlice";

function LinkForm() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.linkForm.tempInputValue);
  const error = useSelector((state) => state.linkForm.error);
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
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchLink(input));
            }}
          >
            Short
          </button>
          {error ? (<p>Ошибка</p>) : (<p></p>)}
        </label>
      </form>
    </section>
  );
}

export default LinkForm;
