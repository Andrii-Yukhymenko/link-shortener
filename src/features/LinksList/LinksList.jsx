import React from "react";
import { useSelector } from "react-redux";
import ShortedLink from "../ShortedLink/ShortedLink";
import classes from './LinksList.module.scss';

function LinksList() {
  const shortedLinks = useSelector((state) => state.linkForm.shortedLinksList);
  return (
    <section className={classes.wrapper}>
      <ul>
        {shortedLinks.map((item) => {
          return <ShortedLink key={Math.random()} data={item} />;
        })}
      </ul>
    </section>
  );
}

export default LinksList;
