import React from 'react'

import useForm from '../../hooks/use-form'
import validate from './validations/email-validation'

const Form = () => {
  const { errors, values, handleChange, handleSubmit } = useForm(
    submit,
    validate
  )

  function submit() {
    console.log(values)
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && 'is-danger'}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ''}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
