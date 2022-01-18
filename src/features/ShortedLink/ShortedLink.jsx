import React from "react";
import { useDispatch } from "react-redux";
import { removeShortedLink } from "../LinkForm/LinkFormSlice";

function ShortedLink({ data }) {
  const dispatch = useDispatch();
  const writeToClipboard = (data) => navigator.clipboard.writeText(data);
  return (
    <li>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>{data.short_link}</div>
        <button onClick={() => dispatch(removeShortedLink(data))}>X</button>
        <button onClick={() => writeToClipboard(data.short_link)}>Copy</button>
      </div>
    </li>
  );
}

export default ShortedLink;
