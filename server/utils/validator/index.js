const yup = require('yup');

module.exports = {
  registerInputSchema: yup.object().shape({
    username: yup.string().required().min(3).max(20),
    email: yup.string().email().required(),
    password: yup.string().required().min(3).max(20),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password doesn't match")
  })
}