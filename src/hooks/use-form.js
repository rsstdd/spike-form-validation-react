import { useState, useEffect } from 'react'

const useForm = (cb, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  // let [pristine, setPristine] = useState(true)
  // let [validating, setValidating] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      cb()
    }
  }, [errors])

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
      setErrors(validate(values))
      setIsSubmitting(true)
    }
  }

  const handleChange = e => {
    e.persist()
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
