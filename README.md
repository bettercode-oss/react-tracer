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
  //...
  return <>
    <ButtonTracer tracingId={1} additionalInformation={{memberId: 1}}>
      <button onClick={handleClick}>Test Button</button>
    </ButtonTracer>
  </>
}

export default App
```

### HeroTracer
Use to wrap the tracing target hero banner
```jsx
import React from 'react'
import {HeroTracer} from '@bettercode/react-tracer'

const App = () => {
  // ...
  return <>
    <HeroTracer tracingId={1} targetElementAttribute='alt'>
      <Banner>
        <section>
          <ButtonBase onClick={handleClick}>
            <img
              src="http://example.com/testimg1.jpg"
              alt='Hero Banner 1'
            />
          </ButtonBase>
        </section>
        <section>
          <ButtonBase onClick={handleClick}>
            <img
              src="http://example.com/testimg2.jpg"
              alt='Hero Banner 2'
            />
          </ButtonBase>
        </section>
      </Banner>
    </HeroTracer>
  </>
}

export default App
```
