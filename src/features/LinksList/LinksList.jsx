import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShortedLink from "../ShortedLink/ShortedLink";

function LinksList() {
  const shortedLinks = useSelector((state) => state.linksList.shortedLinks);
  const dispatch = useDispatch();
  console.log(shortedLinks);
  return (
    <section>
      <ul>
        {shortedLinks.map((item) => {
          return <ShortedLink key={Date.now()} data={item} />;
        })}
      </ul>
    </section>
  );
}

export default LinksList;
