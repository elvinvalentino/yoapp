import { useState } from "react"

export const useForm = initialState => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleOnSubmit = e => {
    let childrens = [...e.target.children];
    childrens = childrens.slice(0, -1);
    childrens.forEach(child => {
      const input = child.children[0];
      input.classList.contains('focus') && input.classList.remove('focus');
    });
    setFormData(initialState);
  }

  return { formData, handleOnChange, handleOnSubmit };
}