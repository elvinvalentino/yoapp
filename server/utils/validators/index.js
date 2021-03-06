const yup = require('yup');

module.exports = {
  registerInputSchema: yup.object().shape({
    username: yup.string().required().min(3).max(15),
    email: yup.string().email().required(),
    password: yup.string().required().min(3).max(20),
    confirmPassword: yup.string().required('Confirm Password is a required field').oneOf([yup.ref('password')], "password doesn't match")
  }),
  loginInputSchema: yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
  })
}