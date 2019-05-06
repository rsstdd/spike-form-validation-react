import React from 'react'

const Form = props => {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...getFormValues(form),
      }),
    }).then(
      () => {
        navigate(form.getAttribute('action'))
      },
      error => {
        /* eslint no-alert:0 */
        window.alert('There was a problem. Check the developer console.')
        /* eslint no-console:0 */
        console.log(error)
        throw error
      }
    )
  }

  return (
    <form
      className="form"
      name="to-from"
      onSubmit={handleSubmit}
      method="post"
      action="/contact/success"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="form-input-container">
        <label className="pickup" htmlFor="pickup">
          Pickup Location
        </label>
        <input
          className="form-input border-left"
          placeholder="Pickup"
          id="pickup"
          name="pickup"
          type="text"
          required
        />

        <span className="line-outer">
          <span className="line-inner" />
        </span>

        <label className="destination" htmlFor="destination">
          Destination
        </label>
        <input
          className="form-input border-right"
          placeholder="Where are you going to?"
          name="destination"
          id="destination"
          type="text"
          name="email"
          required
        />
      </div>

      <div className="u-center-block ">
        <button
          className="
            btn--form u-margin-top-lg
            u-center-h-block
            u-text-uppercase
            u-margin-top-1
          "
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

function getFormValues(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    if (isNaN(parseInt(key, 10))) {
      obj[key] = formNode.elements[key].value
    }
    return obj
  }, {})
}

function encode(data) {
  return Object.keys(data)
    .map(
      key =>
        `${window.encodeURIComponent(key)}=${window.encodeURIComponent(
          data[key]
        )}`
    )
    .join('&')
}

export default Form
