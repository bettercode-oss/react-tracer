class TracingOptions {
  constructor() {
    this._options = {}
  }

  set options(options) {
    this._options.dsn = options.dsn || null
    this._options.enable = options.enable !== false
  }

  get options() {
    return this._options
  }
}

const instance = new TracingOptions()
export { instance as TracingOptions }
