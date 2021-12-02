import React, { useEffect, useState } from 'react';

function Header(props) {

  const [incomplete, setIncomplete] = useState([]);

  return (
    <header>
      <h1>To Do List: {incomplete} items pending</h1>
    </header>
  )
}


export default Header;