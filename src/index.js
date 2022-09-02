import { TracingOptions } from './tracing.options'

export function init(options) {
  TracingOptions.options = options
}

export { ButtonTracer } from './components/ButtonTracer'
export { HeroTracer } from './components/HeroTracer'
