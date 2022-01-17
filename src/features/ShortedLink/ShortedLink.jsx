import React from 'react';

function ShortedLink({data}) {
  return (
    <li>
      {data.short_link}
    </li>
  );
}

export default ShortedLink;
