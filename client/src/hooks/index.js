import { useState } from "react"

export const useForm = initialState => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  return { formData, handleOnChange };
}