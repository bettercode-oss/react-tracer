import { TracingOptions } from './tracing.options'

export default class TracingService {
  static collect(data) {
    // eslint-disable-next-line no-undef
    fetch(`${TracingOptions.options.dsn}/ui-traces/collect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch((error) => {
      console.error(error)
    })
  }
}
