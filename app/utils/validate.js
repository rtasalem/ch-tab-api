const validate = (value, regex, error) => {
  if (!regex.test(value)) {
    throw new Error(error)
  }
}

module.exports = {
  validate
}
