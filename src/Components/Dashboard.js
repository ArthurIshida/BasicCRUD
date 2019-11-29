import React, { useState } from 'react';
import Containers from './Containers';
import Drawers from './Drawers';
import Bar from './Bar';

export default function Dashboard(){
  const [drawer, setDrawer] = useState(false);

  const handleChange = e => setDrawer(!drawer);

  return(
    <div>
      {/*handleChange passes drawer state to Bar and Drawers(open, closed)*/}
      <Bar onClick={handleChange} open={drawer} />
      <Drawers onClick={handleChange} open={drawer} />
      <Containers />
    </div>
  )
}
