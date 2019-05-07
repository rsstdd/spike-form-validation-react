import { useState, useEffect } from 'react'

const useForm = (submit, validate, validateAsyncServer) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  // let [validating, setValidating] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setErrors(validateAsyncServer(values))

      // submit()
    }
  }, [errors]) // Only re-run the effect if errors changes

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
