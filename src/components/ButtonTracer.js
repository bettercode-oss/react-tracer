import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TracingOptions } from '../tracing.options'
import TracingService from '../tracing.service'

export const ButtonTracer = ({
  tracingId,
  additionalInformation,
  children
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (TracingOptions.options.enable && ref && ref.current) {
      const element = ref.current

      const collectEvent = (e) => {
        const data = {
          id: tracingId,
          url: window.location.href,
          event: 'click'
        }

        if (additionalInformation) {
          data.additionalInformation = additionalInformation
        }
        TracingService.collect(data)
      }

      element.addEventListener('click', collectEvent)
      return () => {
        element.removeEventListener('click', collectEvent)
      }
    }
  }, [])

  return <span ref={ref}>{children}</span>
}

ButtonTracer.propTypes = {
  tracingId: PropTypes.number.isRequired,
  additionalInformation: PropTypes.any,
  children: PropTypes.element.isRequired
}
