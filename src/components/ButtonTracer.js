import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TracingOptions } from '../tracing.options'

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
        const body = {
          id: tracingId,
          url: window.location.href,
          event: 'click'
        }

        if (additionalInformation) {
          body.additionalInformation = additionalInformation
        }
        // eslint-disable-next-line no-undef
        fetch(`${TracingOptions.options.dsn}/ui-traces/collect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).catch((error) => {
          console.error(error)
        })
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
