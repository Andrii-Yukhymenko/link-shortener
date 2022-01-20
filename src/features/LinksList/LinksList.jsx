import React from "react";
import { useSelector } from "react-redux";
import ShortedLink from "../ShortedLink/ShortedLink";

function LinksList() {
  const shortedLinks = useSelector((state) => state.linkForm.shortedLinksList);
  return (
    <section>
      <ul>
        {shortedLinks.map((item) => {
          return <ShortedLink key={Math.random()} data={item} />;
        })}
      </ul>
    </section>
  );
}

export default LinksList;
