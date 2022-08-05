# @bettercode/react-tracer

> React Component Event Tracer

## Install

```bash
# Using npm
npm install --save @bettercode/react-tracer

# Using yarn
yarn add @bettercode/react-tracer
```

## Configure
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as BetterTracer from '@bettercode/react-tracer'
BetterTracer.init({
  dsn: 'http://localhost:8080'
})

ReactDOM.render(<App />, document.getElementById('root'))
```

### BetterTracer init Method Args
| Property | Description      | Default Value |
|----------|------------------|---------------|
| dsn      | Data Source Name |               |
| enable   | collect if true  | true          |

## Usage

### ButtonTracer
Use to wrap the tracing target button.
```jsx
import React from 'react'
import {ButtonTracer} from '@bettercode/react-tracer'

const App = () => {
  const handleClick = () => {
    window.alert("click.");
  }

  return <>
    <ButtonTracer tracingId={1} additionalInformation={{memberId: 1}}>
      <button onClick={handleClick}>Test Button</button>
    </ButtonTracer>
  </>
}

export default App
```
