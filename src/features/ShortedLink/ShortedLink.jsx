import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeShortedLink } from "../LinkForm/LinkFormSlice";
import classes from "./ShortedLink.module.scss";
import { HiX } from "react-icons/hi";

function ShortedLink({ data }) {
  const dispatch = useDispatch();
  let [isCopied, setIsCopied] = useState(false);
  const writeToClipboard = (data) => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };
  const doLinkThumbnail = (original) => {
    if (original.length >= 22) {
      let thumbnail = [...original].slice(0, 22).join("") + "...";
      return thumbnail;
    } else {
      return original;
    }
  };

  return (
    <li className={classes.item}>
      <button
        className={`${classes.button} ${classes.deleteButton}`}
        onClick={() => dispatch(removeShortedLink(data))}
      >
        <HiX style={{ fontSize: "20px" }} />
      </button>
      <div className={classes.links}>
        <div title={data.original_link} className={classes.originalLink}>
          {doLinkThumbnail(data.original_link)}
        </div>
        <div className={classes.shortLink}>{data.short_link}</div>
      </div>
      <button
        className={`${classes.button} ${classes.copyButton}`}
        onClick={() => writeToClipboard(data.short_link)}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </li>
  );
}

export default ShortedLink;
