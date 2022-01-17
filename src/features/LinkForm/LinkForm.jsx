import React from "react";
import { useDispatch } from "react-redux";
import { setTempInputValue } from "./LinkFormSlice";
import Service from "../../API/service";
import {addLink} from "../LinksList/LinksListSlice";

function LinkForm() {
  const dispatch = useDispatch();
  const pushLink = () => Service.pushLink().then((resp) => dispatch(addLink(resp.data.result)));
  return (
    <section>
      <label>
        <input
          onChange={(e) => {
            dispatch(setTempInputValue(e.target.value));
          }}
          type="url"
        />
        <button onClick={pushLink}>Short</button>
      </label>
    </section>
  );
}

export default LinkForm;
