import React from "react";
import { useDispatch } from "react-redux";
import { removeShortedLink } from "../LinkForm/LinkFormSlice";
import classes from "./ShortedLink.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

function ShortedLink({ data }) {
  const dispatch = useDispatch();
  const writeToClipboard = (data) => navigator.clipboard.writeText(data);
  return (
    <li className={classes.item}>
      <div className={classes.piece}>
        <button
          className={`${classes.button} ${classes.deleteButton}`}
          onClick={() => dispatch(removeShortedLink(data))}
        >
          <IoCloseCircleOutline style={{ fontSize: "20px" }} />
        </button>
        <div className={classes.originalLink}>{data.original_link}</div>
      </div>
      <div className={classes.piece}>
        <div className={classes.shortLink}>{data.short_link}</div>
        <button
          className={`${classes.button} ${classes.copyButton}`}
          onClick={() => writeToClipboard(data.short_link)}
        >
          Copy
        </button>
      </div>
    </li>
  );
}

export default ShortedLink;
