import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShortedLink from "../ShortedLink/ShortedLink";

function LinksList() {
  const shortedLinks = useSelector((state) => state.linkForm.list);
  const dispatch = useDispatch();
  console.log(shortedLinks);
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
