import general from './general'

/**
 * Represents the error types available.
 */
export type ErrorType = 'general'

/**
 * Determine the error options.
 */
export interface ErrorOptions {
  color: string
  text: string
  size: [number, number]
  textColor: string
  type: ErrorType
  debug: boolean
}

/**
 * HTML Errors available.
 */
const errors = {
  general,
}

export const error = (options: ErrorOptions, error: Error) => `
    <div class="chartisan-help-block">
    <div class="chartisan-refresh-chart">
        ${errors[options.type](options)}
    </div>
    ${
      options.text != ''
        ? `
            <div class="chartisan-help-text" style="color: ${options.textColor};">
                ${options.text}
            </div>
            `
        : ''
    }
    ${
      options.debug
        ? `
            <div class="chartisan-help-text-error">
                ${error.message}
            </div>`
        : ''
    }
    </div>
`
