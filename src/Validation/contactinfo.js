import * as yup from 'yup'
import { setLocale } from 'yup'

setLocale({
    // use constant translation keys for messages without values
    mixed: {
      default: 'field_invalid',
    },
    // use functions to generate an error object that includes the value from the schema
    number: {
      min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
      max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
    },
});

export const schema = yup.object().shape({
    fullname: yup.string().required()
})

