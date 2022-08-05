import React from 'react'

import {ButtonTracer} from '@bettercode/react-tracer'

const App = () => {
  const handleClick = () => {
    window.alert("click.");
  }

  return <>
    <ButtonTracer tracingId={1}>
      <button onClick={handleClick}>Test Button</button>
    </ButtonTracer>
  </>
}

export default App
